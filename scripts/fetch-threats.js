/**
 * Pre-build script: fetches the latest threats from CISA KEV catalog
 * and saves them as a static JSON file for the ThreatTicker component.
 *
 * Run before `next build`: node scripts/fetch-threats.js
 */

const fs = require('fs')
const path = require('path')

const CISA_KEV_URL =
  'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'

const OUTPUT_PATH = path.join(__dirname, '..', 'lib', 'threats-live.json')

async function main() {
  console.log('[fetch-threats] Fetching CISA KEV catalog...')

  try {
    const res = await fetch(CISA_KEV_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    const vulns = data.vulnerabilities || []

    // Sort by dateAdded descending, take 25 most recent
    const sorted = vulns
      .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
      .slice(0, 25)

    const threats = sorted.map((v) => ({
      date: v.dateAdded,
      cve: v.cveID,
      vendor: v.vendorProject,
      product: v.product,
      name: v.vulnerabilityName,
      ransomware: v.knownRansomwareCampaignUse === 'Known',
    }))

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(threats, null, 2), 'utf-8')
    console.log(
      `[fetch-threats] Saved ${threats.length} threats to lib/threats-live.json`
    )
    console.log(`[fetch-threats] Most recent: ${threats[0].date} — ${threats[0].name}`)
  } catch (err) {
    console.error('[fetch-threats] Failed to fetch CISA data:', err.message)
    console.log('[fetch-threats] The ticker will use fallback static data.')

    // Write empty array so the import doesn't break
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.writeFileSync(OUTPUT_PATH, '[]', 'utf-8')
    }
  }
}

main()
