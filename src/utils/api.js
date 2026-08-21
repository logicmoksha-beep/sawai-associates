// src/utils/api.js
//
// Shared helpers for talking to the Sawai Associates backend.
// All five frontend contact forms post their payload here.

const DEFAULT_ENDPOINT = "/api/enquiries";

/**
 * Resolve the backend endpoint for enquiries.
 *
 * The default is the same-origin `/api/enquiries` route, which is convenient
 * in production (reverse proxy / same host) and in development (see the
 * dev server proxy in `vite.config.js`).
 *
 * To point at a different backend, set the `VITE_API_ENDPOINT` env var, e.g.:
 *   VITE_API_ENDPOINT=https://api.example.com/api/enquiries
 */
export function getEnquiryEndpoint() {
  return (
    import.meta.env.VITE_API_ENDPOINT || DEFAULT_ENDPOINT
  );
}

/**
 * POST an enquiry payload to the backend.
 *
 * @param {object} payload JSON body. Must include `form_type` plus the
 *   field names documented in `docs/FORMS-API-CONTRACT.md`.
 * @returns {Promise<object>} The parsed JSON response on success.
 * @throws {Error} A human-readable error message on failure.
 */
export async function submitEnquiry(payload) {
  let response;

  try {
    response = await fetch(getEnquiryEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (_networkError) {
    throw new Error(
      "Unable to reach the server. Please check your connection and try again."
    );
  }

  let data = null;
  try {
    data = await response.json();
  } catch (_parseError) {
    // Non-JSON body (e.g. a proxy error page) — fall back to status handling.
  }

  if (!response.ok) {
    throw new Error(extractErrorMessage(data, response.status));
  }

  return data || { success: true };
}

/**
 * Derive a user-friendly error string from a response body/status.
 */
function extractErrorMessage(data, status) {
  if (data && typeof data === "object") {
    // Contract: { success:false, errors: { field: "msg", ... } }
    if (data.errors && typeof data.errors === "object") {
      const first = Object.values(data.errors).find(Boolean);
      if (first) return String(first);
    }
    // Contract: { success:false, message: "..." }
    if (data.message) return String(data.message);
  }

  if (status === 422) {
    return "Some of the information you entered is not valid. Please review the form and try again.";
  }
  if (status >= 500) {
    return "Our server is having trouble right now. Please try again shortly.";
  }
  return "Something went wrong while submitting. Please try again.";
}
