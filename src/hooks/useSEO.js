import { useEffect } from 'react'

const SITE_NAME = 'AISurgent.Dev'
const SITE_URL = 'https://aisurgent.dev'
const DEFAULT_TITLE = `${SITE_NAME} | AI Development Tutorials, Claude & Agentic Workflow Guides`
const DEFAULT_DESC =
  'Master AI-assisted development with Saikiran Bali (balisaikiran). Weekly tutorials on Claude, Claude Code, ADK, MCP, agentic workflows, and real-world AI integrations for developers.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

function setOrCreate(attr, value, content) {
  let el = document.querySelector(`meta[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', SITE_URL + path)
}

function injectSchemas(schemas) {
  if (!schemas || schemas.length === 0) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-page-schema', 'true')
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas,
  })
  document.head.appendChild(script)
}

function removePageSchemas() {
  document.querySelectorAll('script[data-page-schema="true"]').forEach((el) => el.remove())
}

export function useSEO({ title, description, path, image, schemas } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC
    const img = image || DEFAULT_IMAGE
    const url = SITE_URL + (path || '/')

    document.title = fullTitle

    // Standard
    setOrCreate('name', 'description', desc)
    setOrCreate('name', 'title', fullTitle)

    // Open Graph
    setOrCreate('property', 'og:title', fullTitle)
    setOrCreate('property', 'og:description', desc)
    setOrCreate('property', 'og:url', url)
    setOrCreate('property', 'og:image', img)

    // Twitter
    setOrCreate('name', 'twitter:title', fullTitle)
    setOrCreate('name', 'twitter:description', desc)
    setOrCreate('name', 'twitter:url', url)
    setOrCreate('name', 'twitter:image', img)

    // Canonical
    if (path) setCanonical(path)

    // Page-level JSON-LD schemas
    removePageSchemas()
    if (schemas && schemas.length > 0) injectSchemas(schemas)

    return () => {
      document.title = DEFAULT_TITLE
      setOrCreate('name', 'description', DEFAULT_DESC)
      setOrCreate('property', 'og:title', DEFAULT_TITLE)
      setOrCreate('property', 'og:description', DEFAULT_DESC)
      setOrCreate('property', 'og:url', SITE_URL + '/')
      setOrCreate('name', 'twitter:title', DEFAULT_TITLE)
      setOrCreate('name', 'twitter:description', DEFAULT_DESC)
      removePageSchemas()
    }
  }, [title, description, path, image, schemas])
}
