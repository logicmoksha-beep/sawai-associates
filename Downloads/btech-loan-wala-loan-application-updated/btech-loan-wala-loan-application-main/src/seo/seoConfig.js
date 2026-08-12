// ------------------------------------------------------------------
// Centralised SEO configuration - single source of truth for all
// page titles, meta descriptions, canonical URLs and structured data.
// ------------------------------------------------------------------
import { getLoanBySlug } from '../data/loanData.js'
import { faqData } from '../data/faqData.js'

// --- Site-wide constants -------------------------------------------------
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://btechloanwala.com').replace(/\/+$/, '')
export const SITE_NAME = 'BTech loan_wala LLP'
export const DEFAULT_IMAGE = `${SITE_URL}/og.jpg`
export const PHONE = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
export const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@btechloanwala.com'
export const ADDRESS = 'Vikas Chowk, Karve Nagar, Pune – 411052, Maharashtra, India'
export const GEO = { lat: 18.488, lng: 73.8105 }

export const SITE_DESC =
  'Trusted loan assistance in Pune for Personal Loan, Home Loan, Business Loan, Car Loan, Loan Against Property and more. Get expert guidance and competitive loan options from multiple banks and NBFCs.'

export const SITE_KEYWORDS =
  'BTech loan_wala, Loan Assistance, Personal Loan, Home Loan, Business Loan, Car Loan, Loan Against Property, Home Loan Balance Transfer, Used Car Loan, Project Funding, EMI Calculator, Pune Loan, Loan Expert Pune'

// --- Per-route defaults ---------------------------------------------------
const staticSeo = {
  '/': {
    title: `${SITE_NAME} - Trusted Loan Assistance in Pune`,
    description: SITE_DESC,
    keywords: SITE_KEYWORDS,
    type: 'website'
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description: 'Learn about BTech loan_wala LLP - we make financing simple, transparent and accessible by connecting you with trusted banks and NBFCs in India.',
    keywords: 'about BTech loan_wala, loan assistance company, finance experts Pune',
    type: 'website'
  },
  '/loans': {
    title: `Loan Products & Services | ${SITE_NAME}`,
    description: 'Explore Personal Loan, Home Loan, Business Loan, Loan Against Property, New Car Loan, Used Car Loan, Home Loan Balance Transfer and Project Funding in India.',
    keywords: 'loan products, personal loan, home loan, business loan, car loan, loan against property',
    type: 'website'
  },
  '/emi-calculator': {
    title: `EMI Calculator - Calculate Loan EMI Online | ${SITE_NAME}`,
    description: 'Free online EMI calculator to instantly compute monthly installments for Personal, Home, Business and Car loans with easy tenure and rate inputs.',
    keywords: 'EMI calculator, loan EMI calculator, monthly installment calculator, home loan EMI, personal loan EMI',
    type: 'website'
  },
  '/eligibility': {
    title: `Check Loan Eligibility | ${SITE_NAME}`,
    description: 'Check your loan eligibility for Personal, Home, Business, Car and Loan Against Property with our simple eligibility form and get expert guidance.',
    keywords: 'loan eligibility, check loan eligibility, eligible for loan, loan eligibility criteria',
    type: 'website'
  },
  '/how-it-works': {
    title: `How It Works - Simple 4 Step Loan Process | ${SITE_NAME}`,
    description: 'Our simple 4-step loan assistance process: apply online, share your details, get expert review and proceed with a suitable loan option.',
    keywords: 'how it works, loan process, apply for loan online, loan assistance steps',
    type: 'website'
  },
  '/resources': {
    title: `Loan Resources & Guides | ${SITE_NAME}`,
    description: 'Comprehensive loan guides, EMI guides, eligibility and documentation guides to help you understand and choose the right loan.',
    keywords: 'loan guides, loan resources, loan documentation, eligibility guide',
    type: 'website'
  },
  '/faq': {
    title: `Frequently Asked Questions (FAQ) | ${SITE_NAME}`,
    description: 'Answers to the most common questions about loans, eligibility, EMI, interest rates, documentation and the loan application process.',
    keywords: 'loan faq, loan questions, frequently asked questions, loan answers',
    type: 'website'
  },
  '/contact-us': {
    title: `Contact Us | ${SITE_NAME}`,
    description: `Contact BTech loan_wala LLP at Vikas Chowk, Karve Nagar, Pune. Call ${PHONE}, email ${EMAIL} or WhatsApp us for trusted loan assistance.`,
    keywords: 'contact loan expert, loan assistance Pune, BTech loan_wala contact, loan enquiry',
    type: 'website'
  },
  '/apply-now': {
    title: `Apply for a Loan Online | ${SITE_NAME}`,
    description: 'Apply for Personal, Home, Business, Car or Loan Against Property online. Quick, simple application with expert guidance and competitive options.',
    keywords: 'apply loan online, loan application, apply for personal loan, apply for home loan',
    type: 'website'
  }
}

// --- Structured data builders ---------------------------------------------
function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE_NAME,
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    telephone: `+91${PHONE}`,
    email: EMAIL,
    priceRange: 'Get in touch',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vikas Chowk, Karve Nagar',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411052',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    areaServed: 'IN',
    openingHours: 'Mo-Su 09:00-21:00',
    sameAs: [
      'https://www.instagram.com/btechloanwala',
      'https://www.linkedin.com/company/btechloanwala'
    ]
  }
}

function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/loans?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }
}

function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  }
}

function loanJsonLd(loan) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${loan.name} in India`,
    description: loan.description,
    image: DEFAULT_IMAGE,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      offerCount: 1,
      lowPrice: 100000,
      highPrice: 20000000,
      url: `${SITE_URL}/loans/${loan.slug}`
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Tenure', value: loan.tenure },
      { '@type': 'PropertyValue', name: 'Key Benefit', value: loan.keyBenefit }
    ]
  }
}

function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    telephone: `+91${PHONE}`,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vikas Chowk, Karve Nagar',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411052',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    openingHours: 'Mo-Su 09:00-21:00',
    priceRange: 'Get in touch',
    description: SITE_DESC
  }
}

// Builds a page-specific set of JSON-LD <script> objects.
function jsonLdFor({ path, isHome, isLoan, loan }) {
  const scripts = [webSiteJsonLd(), orgJsonLd()]
  if (isHome) scripts.push(localBusinessJsonLd())
  if (isLoan && loan) {
    scripts.push(loanJsonLd(loan))
    scripts.push(breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Loans', path: '/loans' },
      { name: loan.name, path: `/loans/${loan.slug}` }
    ]))
  }
  if (path === '/faq') scripts.push(faqJsonLd())
  return scripts
}

// --- Route resolver --------------------------------------------------------
export function getSeoForPath(pathname) {
  const raw = (pathname || '/').replace(/\/+$/, '') || '/'
  // Old /contact URL now resolves to the /contact-us page metadata
  const path = raw === '/contact' ? '/contact-us' : raw

  // Dynamic loan pages: /loans/:slug
  if (path.startsWith('/loans/')) {
    const slug = path.slice('/loans/'.length)
    const loan = getLoanBySlug(slug)
    if (loan) {
      return {
        title: `${loan.name} - Competitive Rates & Easy Approval | ${SITE_NAME}`,
        description: `${loan.description} ${loan.keyBenefit}. Apply for ${loan.name.toLowerCase()} in India with expert guidance and multiple bank options.`,
        keywords: `${loan.name.toLowerCase()} India, ${loan.name.toLowerCase()} rates, apply ${loan.name.toLowerCase()}`,
        type: 'product',
        canonical: `${SITE_URL}/loans/${loan.slug}`,
        jsonLd: jsonLdFor({ path, isHome: false, isLoan: true, loan })
      }
    }
  }

  const seo = staticSeo[path] || staticSeo['/']
  return {
    ...seo,
    canonical: `${SITE_URL}${path === '/' ? '/' : path}`,
    jsonLd: jsonLdFor({
      path,
      isHome: path === '/',
      isLoan: false,
      loan: null
    })
  }
}

