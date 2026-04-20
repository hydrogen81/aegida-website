/**
 * Submit all URLs to IndexNow (Bing, Yandex, Seznam, Naver)
 * Run after deploy to notify search engines of new/updated content
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const SITE = 'https://www.aegida-systems.com'
const KEY = '4cc9925fae289927afb4b109ddeb7400'
const KEY_LOCATION = `${SITE}/${KEY}.txt`

// Parse sitemap to extract all URLs
function getUrlsFromSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
  const xml = fs.readFileSync(sitemapPath, 'utf8')
  const urls = []
  const regex = /<loc>(.*?)<\/loc>/g
  let match
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1])
  }
  return urls
}

function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: 'www.aegida-systems.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  })

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data })
      })
    })
    req.on('error', reject)
    req.write(payload)
    req.end()
  })
}

async function main() {
  const urls = getUrlsFromSitemap()
  console.log(`[IndexNow] Submitting ${urls.length} URLs...`)

  try {
    const result = await submitToIndexNow(urls)
    if (result.status === 200 || result.status === 202) {
      console.log(`[IndexNow] Success! ${urls.length} URLs submitted (HTTP ${result.status})`)
    } else {
      console.log(`[IndexNow] Response: HTTP ${result.status} — ${result.body}`)
    }
  } catch (err) {
    console.error(`[IndexNow] Error: ${err.message}`)
  }
}

main()
