export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
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

  site: {
    url: 'https://www.toitureverte.be',
    name: 'ToitureVerte',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    sitemaps: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/techniques': { prerender: true },
    '/realisations': { prerender: true },
    '/contact': { prerender: true },
  },

  compatibilityDate: '2025-01-01',
})
