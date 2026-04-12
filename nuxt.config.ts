export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-BE', name: 'Français',   file: 'fr.json' },
      { code: 'nl', iso: 'nl-BE', name: 'Nederlands',  file: 'nl.json' },
      { code: 'en', iso: 'en-GB', name: 'English',     file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch',     file: 'de.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },

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

  site: {
    url: 'https://www.toitureverte.be',
    name: 'ToitureVerte',
  },

  sitemap: {
    sitemaps: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/techniques': { prerender: true },
    '/subsides': { prerender: true },
    '/realisations': { prerender: true },
    '/contact': { prerender: true },
  },

  compatibilityDate: '2025-01-01',
})
