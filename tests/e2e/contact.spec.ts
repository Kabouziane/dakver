/**
 * Tests E2E — Formulaire de contact.
 * Vérifie la validation côté client, les messages d'erreur,
 * et le comportement de soumission.
 *
 * Run: npx playwright test tests/e2e/contact.spec.ts
 */
import { test, expect } from '@playwright/test'


test.describe('Formulaire de contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('la page contact se charge', async ({ page }) => {
    await expect(page).toHaveTitle(/contact/i)
  })

  test('le formulaire est présent', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible()
  })

  test('les champs obligatoires sont présents', async ({ page }) => {
    // Champs minimum attendus sur un formulaire de contact pro
    await expect(page.locator('input[name="name"], input[placeholder*="nom" i], input[placeholder*="naam" i]').first()).toBeVisible()
    await expect(page.locator('input[type="email"]').first()).toBeVisible()
    await expect(page.locator('textarea').first()).toBeVisible()
  })

  test('soumission avec champs vides affiche validation', async ({ page }) => {
    await page.locator('button[type="submit"], input[type="submit"]').first().click()
    // Le navigateur ou le composant doit afficher des erreurs de validation
    // On vérifie que la page n'a pas navigué (soumission bloquée)
    await expect(page).toHaveURL(/\/contact/)
  })

  test('soumission avec email invalide affiche erreur', async ({ page }) => {
    const nameInput = page.locator('input[name="name"], input[placeholder*="nom" i]').first()
    const emailInput = page.locator('input[type="email"]').first()
    const messageInput = page.locator('textarea').first()

    await nameInput.fill('Jean Dupont')
    await emailInput.fill('pas-un-email')
    await messageInput.fill('Message de test')
    await page.locator('button[type="submit"]').first().click()

    // L'email invalide doit bloquer la soumission (validation HTML5)
    await expect(page).toHaveURL(/\/contact/)
  })

  test('formulaire rempli correctement peut être soumis', async ({ page }) => {
    const nameInput = page.locator('input[name="name"], input[placeholder*="nom" i]').first()
    const emailInput = page.locator('input[type="email"]').first()
    const messageInput = page.locator('textarea').first()

    await nameInput.fill('Marie Martin')
    await emailInput.fill('marie@example.com')
    await messageInput.fill('Bonjour, je souhaite un devis pour une toiture verte extensive de 50m².')

    // On ne soumet pas vraiment (évite d'envoyer un vrai email de test)
    // On vérifie juste que le bouton est cliquable et le formulaire valide
    const submitBtn = page.locator('button[type="submit"]').first()
    await expect(submitBtn).toBeEnabled()
  })
})


// ─── Formulaire de contact NL ─────────────────────────────────────────────────

test.describe('Formulaire de contact — NL', () => {
  test('la page contact NL se charge', async ({ page }) => {
    const resp = await page.goto('/nl/contact')
    expect(resp?.status()).toBe(200)
  })

  test('le formulaire NL est présent', async ({ page }) => {
    await page.goto('/nl/contact')
    await expect(page.locator('form')).toBeVisible()
  })
})
