// Centralized API service layer (backend-ready)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function post(endpoint, data) {
  // NOTE: This is a placeholder. When the backend is ready,
  // replace the mock return with the real fetch call below.
  if (!API_BASE_URL) {
    // Simulate a small network delay for realistic UI feedback
    await new Promise(r => setTimeout(r, 800))
    return { ok: true, message: 'Your enquiry has been recorded on the frontend. Backend integration pending.' }
  }
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
    return await res.json()
  } catch (err) {
    return { ok: false, message: err.message || 'Something went wrong. Please try again.' }
  }
}

export const submitLoanEnquiry = (data) => post('/apply-now', data)
export const checkEligibility  = (data) => post('/eligibility', data)
export const requestCallback   = (data) => post('/callback', data)
export const submitContactForm = (data) => post('/contact', data)
