/**
 * GET /vat-check?number=BE0123456789
 *
 * Proxy vers l'API VIES (Commission Européenne) — officielle, gratuite, sans clé.
 * Appelée côté serveur Nuxt pour éviter les problèmes CORS du navigateur.
 *
 * Réponses :
 *   200 { valid: true,  name, address }           → TVA valide + données entreprise
 *   200 { valid: false, error: "..." }             → TVA invalide / inconnue
 *   400 { error: "Format invalide..." }            → format non reconnu
 *   503 { error: "Service VIES indisponible" }     → timeout ou panne VIES
 */
export default defineEventHandler(async (event) => {
  const query  = getQuery(event)
  const raw    = ((query.number as string) ?? '').trim().toUpperCase()

  // Normalisation : retire espaces, points, tirets → "BE 0123.456.789" → "BE0123456789"
  const normalized = raw.replace(/[\s.\-]/g, '')

  if (!normalized) {
    throw createError({ statusCode: 400, statusMessage: 'Numéro TVA requis.' })
  }

  // Extraction du code pays et du numéro
  const match = normalized.match(/^([A-Z]{2})(\d{5,12})$/)
  if (!match) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Format invalide. Exemple : BE0123456789 ou BE 0123.456.789',
    })
  }

  const [, countryCode, vatNumber] = match

  try {
    const viesUrl = `https://ec.europa.eu/taxation_customs/vies/rest-api/ms/${countryCode}/vat/${vatNumber}`

    const data = await $fetch<{
      valid: boolean
      name?: string
      address?: string
      userError?: string
    }>(viesUrl, {
      timeout: 6000,
      headers: { Accept: 'application/json' },
    })

    if (!data.valid) {
      return {
        valid: false,
        error: 'Numéro TVA non reconnu ou inactif.',
      }
    }

    // VIES retourne "---" quand la société n'a pas autorisé la diffusion de ses données
    const name    = data.name    === '---' ? null : data.name    ?? null
    const address = data.address === '---' ? null : data.address ?? null

    return { valid: true, name, address }
  } catch (err: any) {
    // VIES retourne 400 pour un format de TVA invalide selon ses propres règles
    if (err?.response?.status === 400 || err?.data?.userError) {
      return { valid: false, error: 'Numéro TVA invalide selon VIES.' }
    }

    // Timeout ou panne VIES — on informe sans bloquer
    throw createError({
      statusCode: 503,
      statusMessage: 'Service VIES temporairement indisponible. Réessayez dans quelques instants.',
    })
  }
})
