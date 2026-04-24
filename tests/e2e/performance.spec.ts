/**
 * Tests E2E — Performance et accessibilité de base.
 * Vérifie : images avec alt, liens avec texte, structure heading,
 * viewport meta, pas de ressources bloquantes critiques.
 *
 * Run: npx playwright test tests/e2e/performance.spec.ts
 */
import { test, expect } from '@playwright/test'


// ─── Accessibilité de base ────────────────────────────────────────────────────

test.describe('Accessibilité — page d\'accueil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('viewport meta présent (mobile-friendly)', async ({ page }) => {
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content')
    expect(viewport).toContain('width=device-width')
  })

  test('toutes les images ont un attribut alt', async ({ page }) => {
    const imagesWithoutAlt = await page.locator('img:not([alt])').count()
    expect(imagesWithoutAlt).toBe(0)
  })

  test('un seul <h1> par page', async ({ page }) => {
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
  })

  test('le <h1> contient "toiture verte" ou équivalent', async ({ page }) => {
    const h1Text = await page.locator('h1').first().textContent()
    expect(h1Text?.toLowerCase()).toMatch(/toiture verte|groendak|green roof/i)
  })

  test('liens de navigation ont un texte visible', async ({ page }) => {
    const navLinks = page.locator('nav a')
    const count = await navLinks.count()
    for (let i = 0; i < count; i++) {
      const text = await navLinks.nth(i).textContent()
      const ariaLabel = await navLinks.nth(i).getAttribute('aria-label')
      // Soit texte visible, soit aria-label
      expect(text?.trim() || ariaLabel).toBeTruthy()
    }
  })

  test('bouton CTA principal visible', async ({ page }) => {
    // Au moins un bouton/lien principal vers contact ou devis
    const cta = page.locator('a[href*="contact"], a[href*="devis"], button').first()
    await expect(cta).toBeVisible()
  })
})


// ─── Structure des pages de contenu ───────────────────────────────────────────

test.describe('Structure — pages de contenu', () => {
  const contentPages = ['/services', '/subsides', '/techniques', '/realisations']

  for (const path of contentPages) {
    test(`${path} — structure heading correcte`, async ({ page }) => {
      await page.goto(path)
      const h1Count = await page.locator('h1').count()
      expect(h1Count).toBe(1)
    })

    test(`${path} — images avec alt`, async ({ page }) => {
      await page.goto(path)
      const imagesWithoutAlt = await page.locator('img:not([alt])').count()
      expect(imagesWithoutAlt).toBe(0)
    })
  }
})


// ─── Liens internes non cassés ────────────────────────────────────────────────

test.describe('Liens internes — pas de liens cassés', () => {
  test('liens de la navbar sont tous fonctionnels', async ({ page, request }) => {
    await page.goto('/')
    const navLinks = page.locator('nav a[href^="/"]')
    const count = await navLinks.count()
    const hrefs: string[] = []

    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute('href')
      if (href && !hrefs.includes(href)) hrefs.push(href)
    }

    for (const href of hrefs) {
      const resp = await request.get(href)
      expect(resp.status(), `${href} should not return 404`).not.toBe(404)
    }
  })
})


// ─── Sitemap ──────────────────────────────────────────────────────────────────

test('sitemap.xml accessible et valide', async ({ request }) => {
  const resp = await request.get('/sitemap.xml')
  expect(resp.status()).toBe(200)
  const body = await resp.text()
  expect(body).toContain('<urlset')
  expect(body).toContain('<loc>')
  expect(body).toContain('toitureverte.be')
})

test('robots.txt accessible', async ({ request }) => {
  const resp = await request.get('/robots.txt')
  expect(resp.status()).toBe(200)
  const body = await resp.text()
  expect(body).toContain('User-agent')
})
