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

  const title = titles[locale] || titles.it
  const description = descriptions[locale] || descriptions.it
  const url = `https://www.aegida-systems.com/${locale}/framework/`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'it': '/it/framework/',
        'en': '/en/framework/',
        'de': '/de/framework/',
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: 'AEGIDA',
      images: [{
        url: 'https://www.aegida-systems.com/logo-aegida.jpg',
        width: 1200,
        height: 630,
        alt: 'AEGIDA Framework — Post-Quantum Security',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.aegida-systems.com/logo-aegida.jpg'],
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AEGIDA Framework',
  brand: { '@type': 'Brand', name: 'AEGIDA' },
  manufacturer: { '@type': 'Organization', name: 'H4RESEARCH SRL' },
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
