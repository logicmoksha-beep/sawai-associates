# Sawai Associates — Frontend

React + Vite corporate website for Real Estate, Insurance and IT Services.

## Run

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Styles structure

The global stylesheet is split into ordered partials under `src/styles/`,
imported by `src/index.css`. **Import order matters** (later files override
earlier ones), so keep them in this sequence:

| File | Purpose |
|------|---------|
| `base.css` | Reset, variables, typography, core components & page styles |
| `widgets.css` | Insurance cards, WhatsApp widget, premium branding |
| `theme.css` | Design refresh, brand consistency, imagery, footer polish |
| `dropdowns.css` | Desktop dropdown + mobile submenu behaviours |
| `responsive.css` | All media queries, mobile stability & final mobile nav |

## Contact / Enquiry Forms

All five enquiry forms (Contact, Life / Health / Motor / Business Insurance)
post JSON to the backend endpoint configured by `VITE_API_ENDPOINT`
(defaults to same-origin `/api/enquiries`).

- Endpoint contract: see [`docs/FORMS-API-CONTRACT.md`](docs/FORMS-API-CONTRACT.md)
- Shared submission code: `src/utils/api.js` and `src/hooks/useEnquiry.js`

### Configuration

Copy `.env.example` to `.env` and set values as needed:

| Variable | Purpose | Default |
|----------|---------|---------|
| `VITE_API_ENDPOINT` | Full URL the forms POST to | `/api/enquiries` |
| `VITE_API_PROXY_TARGET` | Backend the dev proxy forwards `/api/*` to | `http://localhost:8000` |

> In development the Vite dev server proxies `/api/*` to the backend
> (`vite.config.js`), so the frontend always uses the same-origin route.
> In production, point `VITE_API_ENDPOINT` at the API or host the app behind
> a reverse proxy that serves `/api/*`.

## Easy content updates

Phone, email and address live in `src/data/contact.js` and are used across
the Navbar, Footer, Contact page and WhatsApp widget.
Team names/photos can be updated in `src/pages/About.jsx`.

