export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  routeRules: {
    // French (default)
    '/': { prerender: true },
    '/services': { prerender: true },
    '/techniques': { prerender: true },
    '/subsides': { prerender: true },
    '/realisations': { prerender: true },
    '/contact': { prerender: true },
    // Dutch
    '/nl/': { prerender: true },
    '/nl/services': { prerender: true },
    '/nl/techniques': { prerender: true },
    '/nl/subsides': { prerender: true },
    '/nl/realisations': { prerender: true },
    '/nl/contact': { prerender: true },
    // English
    '/en/': { prerender: true },
    '/en/services': { prerender: true },
    '/en/techniques': { prerender: true },
    '/en/subsides': { prerender: true },
    '/en/realisations': { prerender: true },
    '/en/contact': { prerender: true },
  },

  compatibilityDate: '2025-01-01',
})
