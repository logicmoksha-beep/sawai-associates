/**
 * ============================================================
 *  Google Sheets Submission Service
 *  Sends form data to a Google Apps Script Web App which
 *  appends rows to Google Sheets. No backend required.
 *
 *  ENV VAR:
 *    VITE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/.../exec
 *    VITE_SHEETS_SHARED_SECRET=your-random-secret
 *
 *  If VITE_SHEETS_WEB_APP_URL is not set, the service falls
 *  back to a simulated success so the UI still works in dev.
 * ============================================================
 */

const WEB_APP_URL = import.meta.env.VITE_SHEETS_WEB_APP_URL || ''
const SHARED_SECRET = import.meta.env.VITE_SHEETS_SHARED_SECRET || ''

// ------------------------------------------------------------------
// Robust fetch + JSON extraction helpers
// ------------------------------------------------------------------

// Google Apps Script web apps can cold-start slowly on the first call
// after a deployment. Give the request enough time, but never let the
// UI hang forever waiting for a response.
const REQUEST_TIMEOUT_MS = 45000

/** Fetch with an AbortController timeout so the UI can't hang forever. */
async function fetchWithTimeout(url, options, ms) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), ms)
  try {
    return await fetch(url, { ...options, signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Parses JSON out of a response body. Apps Script redirects the POST to
 * script.googleusercontent.com, and that final body can arrive as HTML or
 * with a non-JSON content-type, so `res.json()` alone is unreliable.
 * This tries a direct parse, then falls back to extracting the first {...}
 * JSON object from the text.
 */
function extractJson(text) {
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch { /* fall through */ }
  try {
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')
    if (start !== -1 && end > start) {
      return JSON.parse(text.slice(start, end + 1))
    }
  } catch { /* not JSON */ }
  return null
}

// ------------------------------------------------------------------
// Duplicate submission prevention (localStorage)
// ------------------------------------------------------------------

const DUP_KEY = 'btlw_submitted_requests'

/** Loads the set of recently-submitted request fingerprints. */
function getSubmittedFingerprints() {
  try {
    return JSON.parse(localStorage.getItem(DUP_KEY)) || {}
  } catch {
    return {}
  }
}

/** Stores a request fingerprint with a timestamp. */
function rememberSubmission(fingerprint) {
  const map = getSubmittedFingerprints()
  map[fingerprint] = Date.now()

  // Keep only the last 24h of fingerprints to avoid unbounded growth
  const cutoff = Date.now() - 24 * 60 * 60 * 1000
  for (const key of Object.keys(map)) {
    if (map[key] < cutoff) delete map[key]
  }

  localStorage.setItem(DUP_KEY, JSON.stringify(map))
}

/** Returns true if this exact request was made in the last 60 seconds. */
function isDuplicate(fingerprint) {
  const map = getSubmittedFingerprints()
  return Boolean(map[fingerprint]) && (Date.now() - map[fingerprint]) < 60_000
}

/** Builds a stable fingerprint from submission type + key fields. */
function buildFingerprint(type, data) {
  const core = [type, data.fullName || '', data.mobile || '', data.email || ''].join('|').toLowerCase()
  return core
}

// ------------------------------------------------------------------
// Main submit function
// ------------------------------------------------------------------

/**
 * Submits form data to the Google Sheets Web App.
 * @param {string} type  - 'loan-application' | 'eligibility' | 'contact'
 * @param {object} data  - form fields
 * @returns {Promise<{ok: boolean, message: string, duplicate?: boolean}>}
 */
export async function submitToSheet(type, data) {
  // --- 1. Guard: config missing? (dev mode fallback) ---
  if (!WEB_APP_URL) {
    console.warn('[sheetsService] VITE_SHEETS_WEB_APP_URL is not set. Simulating success.')
    await new Promise(r => setTimeout(r, 800))
    return { ok: true, message: 'Simulated success (set VITE_SHEETS_WEB_APP_URL to go live).' }
  }

  // --- 2. Guard: duplicate submission (same name + mobile within 60s) ---
  const fingerprint = buildFingerprint(type, data)
  if (isDuplicate(fingerprint)) {
    return {
      ok: false,
      duplicate: true,
      message: 'It looks like you already submitted this. Please wait a moment and try again.'
    }
  }

  // --- 3. Send the request ---
  try {
    const res = await fetchWithTimeout(WEB_APP_URL, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // avoids preflight for Apps Script
      body: JSON.stringify({
        secret: SHARED_SECRET,
        type,
        data
      })
    }, REQUEST_TIMEOUT_MS)

    // Apps Script redirects POSTs, so read the body as text and parse
    // robustly instead of relying on res.json() (which fails on the
    // redirected HTML response and made a successful save look like an error).
    const text = await res.text()
    const json = extractJson(text)

    // --- 4a. We got a real JSON response — trust it ---
    if (json && typeof json.ok === 'boolean') {
      if (json.ok) {
        rememberSubmission(fingerprint)
        return { ok: true, message: json.message || 'Submission recorded successfully.' }
      }
      return {
        ok: false,
        message: json.message || 'Submission failed. Please try again.'
      }
    }

    // --- 4b. No parseable JSON, but the HTTP request succeeded (2xx) ---
    // This is the classic Apps Script redirect case: doPost already ran and
    // appended the row, but the redirected body isn't JSON. Treat a successful
    // round-trip as recorded so we don't show a false error.
    if (res.ok) {
      rememberSubmission(fingerprint)
      console.warn('[sheetsService] Response was OK but not parseable JSON — assuming recorded.')
      return { ok: true, message: 'Your enquiry has been received. Our team will contact you shortly.' }
    }

    return { ok: false, message: 'Submission failed. Please try again.' }

  } catch (err) {
    console.error('[sheetsService] Request failed:', err)
    if (err && err.name === 'AbortError') {
      return {
        ok: false,
        timeout: true,
        message: 'The submission is taking longer than usual. If your enquiry was sent, it is safe to wait — please avoid resubmitting to prevent duplicates.'
      }
    }
    return {
      ok: false,
      message: 'Network error — please check your connection and try again.'
    }
  }
}