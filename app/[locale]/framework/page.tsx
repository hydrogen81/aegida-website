import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n'
import FrameworkContent from '@/components/FrameworkContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles: Record<string, string> = {
    it: 'AEGIDA Framework — Post-Quantum Security per Infrastrutture Critiche | NIST FIPS 203',
    en: 'AEGIDA Framework — Post-Quantum Security for Critical Infrastructure | NIST FIPS 203',
    de: 'AEGIDA Framework — Post-Quantum-Sicherheit für Kritische Infrastrukturen | NIST FIPS 203',
  }

  const descriptions: Record<string, string> = {
    it: 'Piattaforma di protezione comunicazioni con crittografia post-quantum ML-KEM (FIPS 203), stealth layer anti-DPI e zero-trust access control. 350 Mbps, conforme NIS2. Per energia, sanità, trasporti, PA.',
    en: 'Communication protection platform with post-quantum cryptography ML-KEM (FIPS 203), anti-DPI stealth layer and zero-trust access control. 350 Mbps, NIS2 compliant. For energy, healthcare, transport, government.',
    de: 'Kommunikationsschutzplattform mit Post-Quantum-Kryptographie ML-KEM (FIPS 203), Anti-DPI Stealth Layer und Zero-Trust Access Control. 350 Mbps, NIS2-konform. Für Energie, Gesundheit, Verkehr, öffentliche Verwaltung.',
  }

  return {
    title: titles[locale] || titles.it,
    description: descriptions[locale] || descriptions.it,
    alternates: {
      languages: {
        'it': '/it/framework/',
        'en': '/en/framework/',
        'de': '/de/framework/',
      },
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AEGIDA Framework',
  brand: { '@type': 'Brand', name: 'AEGIDA' },
  manufacturer: { '@type': 'Organization', name: 'H4R Human for Research Srl' },
  category: 'Cybersecurity Software',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
    url: 'https://www.aegida-systems.com/framework',
  },
}

export default function FrameworkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FrameworkContent />
    </>
  )
}
