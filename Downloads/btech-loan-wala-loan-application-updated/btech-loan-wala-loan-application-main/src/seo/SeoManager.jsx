import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath, SITE_NAME, DEFAULT_IMAGE, SITE_URL } from './seoConfig.js'

// Small DOM helpers for safe head manipulation
function setTitle(title) {
  document.title = title || SITE_NAME
}

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Replaces all managed JSON-LD blocks (tagged with data-seo="true")
function setJsonLd(scripts) {
  document.querySelectorAll('script[data-seo="true"]').forEach(s => s.remove())
  ;(scripts || []).forEach(spec => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', 'true')
    script.textContent = JSON.stringify(spec)
    document.head.appendChild(script)
  })
}

function applySeo(seo) {
  if (!seo) return
  const url = seo.canonical || SITE_URL

  setTitle(seo.title)
  upsertMeta('name', 'description', seo.description)
  upsertMeta('name', 'keywords', seo.keywords)
  upsertMeta('name', 'robots', 'index, follow')
  upsertMeta('property', 'og:locale', 'en_IN')
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:type', seo.type || 'website')
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', seo.image || DEFAULT_IMAGE)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertMeta('name', 'twitter:image', seo.image || DEFAULT_IMAGE)

  upsertLink('canonical', url)
  setJsonLd(seo.jsonLd)
}

/**
 * Head manager - reads the current route and applies the correct
 * title, meta tags, canonical URL, social tags and structured data.
 * Renders nothing; mount once inside the router.
 */
export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    applySeo(getSeoForPath(pathname))
  }, [pathname])

  return null
}
