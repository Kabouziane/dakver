/**
 * Injects hreflang alternate links for multilingual SEO.
 * Pass the slug WITHOUT language prefix (e.g. '' for home, '/services', '/techniques').
 * Tells Google that the FR/NL/EN versions are the same page in different languages
 * → prevents duplicate-content penalties across the 3 language variants.
 */
export function useSeoAlternates(slug: string) {
  const base = 'https://www.toitureverte.be'
  // FR is the root, NL under /nl/, EN under /en/
  const frHref = slug ? `${base}${slug}` : `${base}/`
  const nlHref = `${base}/nl${slug || ''}`
  const enHref = `${base}/en${slug || ''}`

  useHead({
    link: [
      { rel: 'alternate', hreflang: 'fr-BE', href: frHref },
      { rel: 'alternate', hreflang: 'nl-BE', href: nlHref },
      { rel: 'alternate', hreflang: 'en',    href: enHref },
      // x-default = fallback for unlisted languages → points to FR (default)
      { rel: 'alternate', hreflang: 'x-default', href: frHref },
    ],
  })
}
