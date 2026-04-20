/**
 * Generate sitemap.xml dynamically from all pages + blog articles
 * Run at build time via npm script
 */

const fs = require('fs')
const path = require('path')

const SITE = 'https://www.aegida-systems.com'
const LOCALES = ['it', 'en', 'de']
const TODAY = new Date().toISOString().split('T')[0]

// Static pages: [path, priority, changefreq]
const STATIC_PAGES = [
  ['/', '1.0', 'weekly'],
  ['/privacy-phone/', '0.9', 'monthly'],
  ['/framework/', '0.9', 'monthly'],
  ['/conformita/', '0.8', 'monthly'],
  ['/blog/', '0.8', 'weekly'],
  ['/privacy-policy/', '0.5', 'yearly'],
  ['/cookie-policy/', '0.5', 'yearly'],
]

// Discover blog articles from registry
function getBlogArticles() {
  const registryPath = path.join(__dirname, '..', 'lib', 'blog', 'articles')
  if (!fs.existsSync(registryPath)) return []
  return fs.readdirSync(registryPath)
    .filter(d => fs.statSync(path.join(registryPath, d)).isDirectory())
    .map(slug => ({ slug, priority: '0.7', changefreq: 'monthly' }))
}

function makeUrl(loc, lastmod, priority, changefreq, hreflangs) {
  const links = hreflangs
    .map(h => `    <xhtml:link rel="alternate" hreflang="${h.lang}" href="${h.href}" />`)
    .join('\n')
  return `  <url>
    <loc>${loc}</loc>
${links}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

function generate() {
  const urls = []

  // Static pages
  for (const [pagePath, priority, changefreq] of STATIC_PAGES) {
    for (const locale of LOCALES) {
      const loc = `${SITE}/${locale}${pagePath}`
      const hreflangs = LOCALES.map(l => ({
        lang: l,
        href: `${SITE}/${l}${pagePath}`,
      }))
      urls.push(makeUrl(loc, TODAY, priority, changefreq, hreflangs))
    }
  }

  // Blog articles
  const articles = getBlogArticles()
  for (const article of articles) {
    for (const locale of LOCALES) {
      const loc = `${SITE}/${locale}/blog/${article.slug}/`
      const hreflangs = LOCALES.map(l => ({
        lang: l,
        href: `${SITE}/${l}/blog/${article.slug}/`,
      }))
      urls.push(makeUrl(loc, TODAY, article.priority, article.changefreq, hreflangs))
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`

  // Write to public/ (for next build) and out/ (for current deploy)
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log(`[sitemap] Generated ${urls.length} URLs → public/sitemap.xml`)
}

generate()
