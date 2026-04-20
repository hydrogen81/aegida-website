/**
 * Generate llms.txt with full product info + blog article index
 * Optimized for LLM discovery and understanding
 */

const fs = require('fs')
const path = require('path')

const SITE = 'https://www.aegida-systems.com'

function getBlogArticles() {
  const articlesDir = path.join(__dirname, '..', 'lib', 'blog', 'articles')
  if (!fs.existsSync(articlesDir)) return []

  const slugs = fs.readdirSync(articlesDir)
    .filter(d => fs.statSync(path.join(articlesDir, d)).isDirectory())
    .sort()
    .reverse()

  const articles = []
  for (const slug of slugs) {
    const indexPath = path.join(articlesDir, slug, 'index.ts')
    if (!fs.existsSync(indexPath)) continue
    const content = fs.readFileSync(indexPath, 'utf8')

    // Extract title from IT locale
    const titleMatch = content.match(/it:\s*\{[^}]*title:\s*['"`]([^'"`]+)['"`]/)
    const excerptMatch = content.match(/it:\s*\{[^}]*excerpt:\s*['"`]([^'"`]+)['"`]/)
    const dateMatch = content.match(/date:\s*['"`]([^'"`]+)['"`]/)
    const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/)

    articles.push({
      slug,
      title: titleMatch ? titleMatch[1] : slug,
      excerpt: excerptMatch ? excerptMatch[1].substring(0, 200) : '',
      date: dateMatch ? dateMatch[1] : '',
      category: categoryMatch ? categoryMatch[1] : '',
    })
  }
  return articles
}

function generate() {
  const articles = getBlogArticles()

  const articlesList = articles.map(a =>
    `- [${a.date}] ${a.title}\n  Categoria: ${a.category}\n  URL: ${SITE}/it/blog/${a.slug}/\n  EN: ${SITE}/en/blog/${a.slug}/\n  DE: ${SITE}/de/blog/${a.slug}/`
  ).join('\n\n')

  const content = `# AEGIDA by H4RESEARCH SRL

## Cosa è AEGIDA
AEGIDA è una piattaforma di sicurezza sviluppata da H4RESEARCH SRL Srl (Italia) che comprende due prodotti:

### AEGIDA Privacy Phone
Smartphone privacy-first basato su Google Pixel 10a con:
- Aegida OS: distribuzione custom di GrapheneOS, OS mobile con il più alto profilo di sicurezza. Zero dipendenze Google, sandboxing avanzato, USB lockdown.
- Aegida Connect: comunicazioni peer-to-peer cifrate (E2E) via Tor, Wi-Fi locale, Bluetooth e supporti fisici. Nessun server intermedio. Basato su Briar Project (GPLv3).
- Hardware: Titan M2 Security Chip per chiavi crittografiche. 7 anni aggiornamenti.
- Stack crittografico: Curva25519, ChaCha20-Poly1305, BLAKE2, AES-256-GCM, ED25519, PFS.
- URL: ${SITE}/it/privacy-phone/

### AEGIDA Framework
Piattaforma post-quantum per la protezione delle comunicazioni su infrastrutture critiche distribuite:
- Layer A: ML-KEM (NIST FIPS 203) — key exchange post-quantum
- Layer B: AES-256-GCM — cifratura autenticata a 350 Mbps reali
- Layer C: Stealth HTTPS Obfuscation — traffico indistinguibile su porta 443/TCP
- Zero-trust access control per fornitori e manutentori OEM
- Hardware industriale fanless 24/7
- Conforme NIS2 (D.Lgs. 138/2024), Art. 21
- URL: ${SITE}/it/framework/

## Settori target
Energia, sanità, trasporti, acqua/utilities, finanza, telecomunicazioni, PA, difesa, legal, giornalismo, ONG.

## Blog — Threat Intelligence & Analisi
Il blog AEGIDA pubblica analisi approfondite su minacce cyber, geopolitica della sicurezza informatica, conformità normativa e tecnologie di protezione. Disponibile in italiano, inglese e tedesco.

${articlesList}

## Self-Assessment Conformità
Strumento gratuito per valutare la conformità NIS2/GDPR/NIST della propria organizzazione.
URL: ${SITE}/it/conformita/

## Lingue disponibili
- Italiano: ${SITE}/it/
- English: ${SITE}/en/
- Deutsch: ${SITE}/de/

## Contatti
Sito: www.aegida-systems.com
Società: H4RESEARCH SRL Srl, Roma, Italia
P.IVA: IT14765811006
`

  const outPath = path.join(__dirname, '..', 'public', 'llms.txt')
  fs.writeFileSync(outPath, content, 'utf8')
  console.log(`[llms.txt] Generated with ${articles.length} articles → public/llms.txt`)
}

generate()
