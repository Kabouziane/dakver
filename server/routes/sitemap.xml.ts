export default defineEventHandler((event) => {
  const baseUrl = 'https://www.toitureverte.be'
  const today = new Date().toISOString().split('T')[0]

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/techniques', priority: '0.9', changefreq: 'monthly' },
    { loc: '/subsides', priority: '0.9', changefreq: 'monthly' },
    { loc: '/realisations', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.7', changefreq: 'yearly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=UTF-8')
  return xml
})
