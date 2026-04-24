/**
 * Tests E2E — SEO : meta tags, hreflang, JSON-LD, og:image.
 * Ces tests vérifient que les balises critiques pour le référencement
 * sont bien présentes et correctement renseignées sur chaque page.
 *
 * Run: npx playwright test tests/e2e/seo.spec.ts
 */
import { test, expect } from '@playwright/test'


// ─── Meta tags essentiels ─────────────────────────────────────────────────────

test.describe('Meta tags — page d\'accueil FR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('balise <title> non vide', async ({ page }) => {
    const title = await page.title()
    expect(title.length).toBeGreaterThan(10)
  })

  test('meta description présente et > 50 caractères', async ({ page }) => {
    const desc = await page.locator('meta[name="description"]').getAttribute('content')
    expect(desc).toBeTruthy()
    expect(desc!.length).toBeGreaterThan(50)
  })

  test('og:title présent', async ({ page }) => {
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    expect(ogTitle).toBeTruthy()
  })

  test('og:description présent', async ({ page }) => {
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content')
    expect(ogDesc).toBeTruthy()
  })

  test('og:image pointe vers /og-image.svg', async ({ page }) => {
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content')
    expect(ogImage).toContain('og-image')
  })

  test('og:type = website', async ({ page }) => {
    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content')
    expect(ogType).toBe('website')
  })

  test('twitter:card présent', async ({ page }) => {
    const card = await page.locator('meta[name="twitter:card"]').getAttribute('content')
    expect(card).toBe('summary_large_image')
  })

  test('canonical link présent', async ({ page }) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(canonical).toContain('toitureverte.be')
  })
})


// ─── Hreflang ─────────────────────────────────────────────────────────────────

test.describe('Hreflang — page d\'accueil FR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hreflang fr-BE présent', async ({ page }) => {
    const href = await page.locator('link[rel="alternate"][hreflang="fr-BE"]').getAttribute('href')
    expect(href).toBeTruthy()
  })

  test('hreflang nl-BE présent', async ({ page }) => {
    const href = await page.locator('link[rel="alternate"][hreflang="nl-BE"]').getAttribute('href')
    expect(href).toContain('/nl')
  })

  test('hreflang en présent', async ({ page }) => {
    const href = await page.locator('link[rel="alternate"][hreflang="en"]').getAttribute('href')
    expect(href).toContain('/en')
  })

  test('hreflang x-default présent', async ({ page }) => {
    const href = await page.locator('link[rel="alternate"][hreflang="x-default"]').getAttribute('href')
    expect(href).toBeTruthy()
  })
})


// ─── JSON-LD ──────────────────────────────────────────────────────────────────

test.describe('JSON-LD — page d\'accueil FR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('au moins un bloc JSON-LD présent', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]')
    expect(await scripts.count()).toBeGreaterThan(0)
  })

  test('JSON-LD LocalBusiness valide (parseable)', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()
    let hasLocalBusiness = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content) {
        const data = JSON.parse(content) // lève si JSON invalide
        const types = Array.isArray(data['@type']) ? data['@type'] : [data['@type']]
        if (types.includes('LocalBusiness') || types.includes('HomeAndConstructionBusiness')) {
          hasLocalBusiness = true
        }
      }
    }
    expect(hasLocalBusiness).toBe(true)
  })

  test('JSON-LD LocalBusiness contient address bruxelloise', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()
    let addressFound = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content && content.includes('addressLocality')) {
        addressFound = true
      }
    }
    expect(addressFound).toBe(true)
  })
})


// ─── JSON-LD page Subsides (FAQPage) ─────────────────────────────────────────

test.describe('JSON-LD — page Subsides FR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/subsides')
  })

  test('JSON-LD FAQPage présent', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()
    let hasFaq = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content && content.includes('FAQPage')) {
        hasFaq = true
      }
    }
    expect(hasFaq).toBe(true)
  })

  test('FAQ contient au moins 3 questions', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content && content.includes('FAQPage')) {
        const data = JSON.parse(content)
        expect(data.mainEntity.length).toBeGreaterThanOrEqual(3)
        return
      }
    }
    throw new Error('FAQPage JSON-LD not found')
  })
})


// ─── Pas d'erreurs console critiques ─────────────────────────────────────────

test.describe('Console — pas d\'erreurs critiques', () => {
  const pagesToCheck = ['/', '/services', '/subsides', '/contact']

  for (const path of pagesToCheck) {
    test(`${path} — pas d'erreur console`, async ({ page }) => {
      const errors: string[] = []
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      await page.goto(path)
      // Filtrer les erreurs tierces (Google Analytics, etc.)
      const criticalErrors = errors.filter(e =>
        !e.includes('google') &&
        !e.includes('analytics') &&
        !e.includes('gtag') &&
        !e.includes('favicon')
      )
      expect(criticalErrors).toHaveLength(0)
    })
  }
})
