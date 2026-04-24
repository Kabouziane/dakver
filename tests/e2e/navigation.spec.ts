/**
 * Tests E2E — Navigation et structure des pages.
 * Vérifie que toutes les routes répondent, que les titres sont corrects,
 * et que la navigation entre pages fonctionne.
 *
 * Run: npx playwright test tests/e2e/navigation.spec.ts
 */
import { test, expect } from '@playwright/test'


// ─── Pages FR ─────────────────────────────────────────────────────────────────

test.describe('Pages FR — réponses HTTP et titres', () => {
  const frPages = [
    { path: '/',            titleContains: 'Toiture Verte' },
    { path: '/services',    titleContains: 'Services' },
    { path: '/subsides',    titleContains: 'Primes' },
    { path: '/techniques',  titleContains: 'Techniques' },
    { path: '/realisations',titleContains: 'Réalisations' },
    { path: '/contact',     titleContains: 'Contact' },
  ]

  for (const { path, titleContains } of frPages) {
    test(`${path} — répond 200 et titre contient "${titleContains}"`, async ({ page }) => {
      const resp = await page.goto(path)
      expect(resp?.status()).toBe(200)
      await expect(page).toHaveTitle(new RegExp(titleContains, 'i'))
    })
  }
})


// ─── Pages NL ─────────────────────────────────────────────────────────────────

test.describe('Pages NL — réponses HTTP', () => {
  const nlPages = ['/nl/', '/nl/diensten', '/nl/subsidies', '/nl/technieken', '/nl/realisaties', '/nl/contact']

  for (const path of nlPages) {
    test(`${path} — répond 200`, async ({ page }) => {
      const resp = await page.goto(path)
      expect(resp?.status()).toBe(200)
    })
  }
})


// ─── Pages EN ─────────────────────────────────────────────────────────────────

test.describe('Pages EN — réponses HTTP', () => {
  const enPages = ['/en/', '/en/services', '/en/subsidies', '/en/techniques', '/en/realisations', '/en/contact']

  for (const path of enPages) {
    test(`${path} — répond 200`, async ({ page }) => {
      const resp = await page.goto(path)
      expect(resp?.status()).toBe(200)
    })
  }
})


// ─── Navigation interne ───────────────────────────────────────────────────────

test.describe('Navigation interne', () => {
  test('clic sur "Services" depuis la page d\'accueil navigue vers /services', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /services/i }).first().click()
    await expect(page).toHaveURL(/\/services/)
  })

  test('clic sur "Contact" navigue vers /contact', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /contact/i }).first().click()
    await expect(page).toHaveURL(/\/contact/)
  })

  test('clic sur le logo navigue vers /', async ({ page }) => {
    await page.goto('/services')
    // Le logo est généralement un lien vers la page d'accueil
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL(/\/$/)
  })
})


// ─── 404 ──────────────────────────────────────────────────────────────────────

test('une page inexistante retourne 404', async ({ page }) => {
  const resp = await page.goto('/cette-page-nexiste-pas')
  expect(resp?.status()).toBe(404)
})
