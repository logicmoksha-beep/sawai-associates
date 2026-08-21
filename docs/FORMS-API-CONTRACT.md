# Sawai Associates — Frontend Forms & Data Contract

**Project:** `sawai-associates` (React + Vite)
**Audience:** Backend Developers
**Purpose:** Complete inventory of every form in the frontend, what data each one sends, and the recommended JSON payload the backend API should expect.

---

## Summary

There are **5 forms** on the site. Each form **POSTs a JSON payload to the backend** (see the config section below). The submission flow is:

1. The user fills the form and clicks submit.
2. The shared hook `src/hooks/useEnquiry.js` calls `submitEnquiry()` in `src/utils/api.js`.
3. That helper `fetch`es the endpoint with `Content-Type: application/json`, attaching `form_type` plus the field values below.
4. On success the form shows a success message; on failure it shows the server error (field-level errors from `data.errors` are surfaced too).

Below is the exact field inventory and the payload contract the backend should be built against.

| # | Form | Page / Route | Component | Payload Identifier |
|---|------|--------------|-----------|--------------------|
| 1 | Contact / General Enquiry | `/contact` | `src/pages/Contact.jsx` | `enquiry` |
| 2 | Life Insurance Quote | `/insurance/life-insurance` | `src/pages/LifeInsurance.jsx` | `life_insurance` |
| 3 | Health Insurance Quote | `/insurance/health-insurance` | `src/pages/HealthInsurance.jsx` | `health_insurance` |
| 4 | Motor Insurance Quote | `/insurance/motor-insurance` | `src/pages/MotorInsurance.jsx` | `motor_insurance` |
| 5 | Business Insurance Quote | `/insurance/business-insurance` | `src/pages/BusinessInsurance.jsx` | `business_insurance` |

> Note: The Real Estate and IT Services detail pages do **not** have their own forms — their CTA buttons link to the Contact page (`/contact`).

---

## Proposed API Endpoint

A single endpoint is recommended since all forms carry the same core contact fields plus a few form-specific fields.

```
POST /api/enquiries
Content-Type: application/json
```

The `form_type` field tells the backend which form submitted the data.
---

## Form 1 — Contact / General Enquiry

**File:** `src/pages/Contact.jsx`
**Route:** `/contact`
**Submit button label:** `Send Enquiry`

### Fields

| Field (UI Label) | HTML type | `name` attribute | Required | Format / Notes |
|------------------|-----------|------------------|----------|----------------|
| Your Name | `text` | `full_name` | ✅ Yes | string, max 100 chars |
| Mobile Number | `tel` | `mobile_number` | ✅ Yes | string, 10–15 digits, allow `+` prefix |
| Email Address | `email` | `email` | ❌ No | valid email format |
| Service Required | `select` | `service` | ❌ No | one of: `Real Estate`, `Insurance`, `IT Services` |
| Property Type | `select` (conditional) | `property_type` | ❌ No | only sent when `service` = `Real Estate`; e.g. `Residential Property`, `Commercial Property`, `Villas`, `Plots` |
| Requirement | `select` (conditional) | `requirement` | ❌ No | only sent when a Real Estate property type is chosen; e.g. `2 BHK`, `Office`, `3 BHK Villa`, `Residential Plot` |
| Message | `textarea` | `message` | ❌ No | free text, max 2000 chars |


### Expected JSON Payload

```json
{
  "form_type": "enquiry",
  "full_name": "Rahul Sharma",
  "mobile_number": "+919000000000",
  "email": "rahul@example.com",
  "service": "Real Estate",
  "property_type": "Residential Property",
  "requirement": "2 BHK",
  "message": "Looking for a 2 BHK in Baner."
}
```

> When `service` is not `Real Estate`, `property_type` and `requirement`
> are omitted from the payload (they are only rendered/collected for the
> Real Estate flow).


---

## Form 2 — Life Insurance Quote

**File:** `src/pages/LifeInsurance.jsx`
**Route:** `/insurance/life-insurance`
**Submit button label:** `Request Quote`

### Fields

| Field (UI Label) | HTML type | `name` attribute | Required | Format / Notes |
|------------------|-----------|---------------------------|----------|----------------|
| Full Name | `text` | `full_name` | ✅ Yes | string, max 100 chars |
| Mobile Number | `tel` | `mobile_number` | ✅ Yes | string, 10–15 digits, allow `+` prefix |
| Email Address | `email` | `email` | ❌ No | valid email format |
| City | `text` | `city` | ❌ No | string, max 100 chars |
| Message | `textarea` | `message` | ❌ No | free text, max 2000 chars |

### Expected JSON Payload

```json
{
  "form_type": "life_insurance",
  "full_name": "Rahul Sharma",
  "mobile_number": "+919000000000",
  "email": "rahul@example.com",
  "city": "Pune",
  "message": "Need term insurance for 20 years."
}
```
---

## Form 3 — Health Insurance Quote

**File:** `src/pages/HealthInsurance.jsx`
**Route:** `/insurance/health-insurance`
**Submit button label:** `Request Quote`

### Fields

| Field (UI Label) | HTML type | `name` attribute | Required | Format / Notes |
|------------------|-----------|---------------------------|----------|----------------|
| Full Name | `text` | `full_name` | ✅ Yes | string, max 100 chars |
| Mobile Number | `tel` | `mobile_number` | ✅ Yes | string, 10–15 digits, allow `+` prefix |
| Email Address | `email` | `email` | ❌ No | valid email format |
| City | `text` | `city` | ❌ No | string, max 100 chars |
| Message | `textarea` | `message` | ❌ No | free text, max 2000 chars |

### Expected JSON Payload

```json
{
  "form_type": "health_insurance",
  "full_name": "Rahul Sharma",
  "mobile_number": "+919000000000",
  "email": "rahul@example.com",
  "city": "Pune",
  "message": "Family floater for 4 members."
}
```

---

## Form 4 — Motor Insurance Quote

**File:** `src/pages/MotorInsurance.jsx`
**Route:** `/insurance/motor-insurance`
**Submit button label:** `Request Quote`

### Fields

| Field (UI Label) | HTML type | `name` attribute | Required | Format / Notes |
|------------------|-----------|---------------------------|----------|----------------|
| Full Name | `text` | `full_name` | ✅ Yes | string, max 100 chars |
| Mobile Number | `tel` | `mobile_number` | ✅ Yes | string, 10–15 digits, allow `+` prefix |
| Email Address | `email` | `email` | ❌ No | valid email format |
| Vehicle Type | `text` | `vehicle_type` | ❌ No | e.g. `Car`, `Bike`, `Commercial Vehicle` |
| Message | `textarea` | `message` | ❌ No | free text, max 2000 chars |

### Expected JSON Payload

```json
{
  "form_type": "motor_insurance",
  "full_name": "Rahul Sharma",
  "mobile_number": "+919000000000",
  "email": "rahul@example.com",
  "vehicle_type": "Car",
  "message": "Comprehensive cover for a Honda City 2020."
}
```
---

## Form 5 — Business Insurance Quote

**File:** `src/pages/BusinessInsurance.jsx`
**Route:** `/insurance/business-insurance`
**Submit button label:** `Request Quote`

### Fields

| Field (UI Label) | HTML type | `name` attribute | Required | Format / Notes |
|------------------|-----------|---------------------------|----------|----------------|
| Business Name | `text` | `business_name` | ✅ Yes | string, max 200 chars |
| Contact Person | `text` | `contact_person` | ✅ Yes | string, max 100 chars |
| Mobile Number | `tel` | `mobile_number` | ✅ Yes | string, 10–15 digits, allow `+` prefix |
| Email Address | `email` | `email` | ❌ No | valid email format |
| Message | `textarea` | `message` | ❌ No | free text, max 2000 chars |

### Expected JSON Payload

```json
{
  "form_type": "business_insurance",
  "business_name": "Sharma Textiles Pvt Ltd",
  "contact_person": "Rahul Sharma",
  "mobile_number": "+919000000000",
  "email": "rahul@example.com",
  "message": "Need general liability and property cover for our factory."
}
```

---

## Backend Notes & Recommendations

1. **Do not rely on client-side validation alone** — re-validate `mobile_number`, `email`, and required fields on the server.
2. **All payloads are JSON.** No file uploads exist today.
3. **Every request should include `form_type`** so one endpoint can route to the correct business flow.
4. **Suggested response (success):**
   ```json
   {
     "success": true,
     "message": "Enquiry received. Our team will contact you within 24 hours.",
     "id": "enq_202607180001"
   }
   ```
5. **Suggested response (validation error):** HTTP `422`
   ```json
   {
     "success": false,
     "errors": {
       "mobile_number": "Please enter a valid mobile number."
     }
   }
   ```
6. **Common meta fields the frontend can attach** (optional): `submitted_at` (ISO 8601 UTC), `page_url`, `user_agent`.

---

## How Forms Are Wired (Status: CONNECTED)

Each form uses the shared `useEnquiry` hook and `submitEnquiry()` helper:

```jsx
// src/pages/Contact.jsx (simplified)
import { useEnquiry, FORM_STATUS } from "../hooks/useEnquiry";

const { status, error, submit } = useEnquiry("enquiry");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (status === FORM_STATUS.SUBMITTING) return;

  const fd = new FormData(e.currentTarget);
  const ok = await submit({
    full_name: fd.get("full_name") || "",
    mobile_number: fd.get("mobile_number") || "",
    // ...all other fields per the tables above
  });

  if (ok) e.currentTarget.reset(); // clear the form only on success
};
```

All inputs now carry the `name` attributes listed in the tables above, so `FormData` collects the correct keys and `submitEnquiry()` posts them as JSON.

### Endpoint configuration

- The endpoint is resolved by `getEnquiryEndpoint()` in `src/utils/api.js`.
- Default: same-origin `/api/enquiries`.
- Override with the `VITE_API_ENDPOINT` env var (see `.env.example`).
- In development, `vite.config.js` proxies `/api/*` to the backend
  (`VITE_API_PROXY_TARGET`, default `http://localhost:8000`), so the frontend
  always calls the same-origin route.

### Error handling

`submitEnquiry()` throws on any non-2xx response. The message is derived from:

- `data.errors` (object) → the first error message, or
- `data.message`, or
- a fallback based on the HTTP status (`422` → "invalid fields", `5xx` → "server trouble").

The error is shown in the red `form-success--error` feedback box and the button
re-enables so the user can retry.


## Frontend Files That Contain the Forms

- `src/pages/Contact.jsx` — Contact / General Enquiry form
- `src/pages/LifeInsurance.jsx` — Life Insurance quote form
- `src/pages/HealthInsurance.jsx` — Health Insurance quote form
- `src/pages/MotorInsurance.jsx` — Motor Insurance quote form
- `src/pages/BusinessInsurance.jsx` — Business Insurance quote form
