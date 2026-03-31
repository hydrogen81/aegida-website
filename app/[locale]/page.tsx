import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import HomeContent from '@/components/HomeContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale
  const t = await getTranslations(locale)

  const titles: Record<string, string> = {
    it: 'AEGIDA — Sicurezza Post-Quantum per Comunicazioni e Infrastrutture Critiche | H4R',
    en: 'AEGIDA — Post-Quantum Security for Communications and Critical Infrastructure | H4R',
    de: 'AEGIDA — Post-Quantum-Sicherheit für Kommunikation und Kritische Infrastrukturen | H4R',
  }

  const descriptions: Record<string, string> = {
    it: 'AEGIDA è la piattaforma di sicurezza post-quantum di H4R: smartphone privacy zero-trust e protezione comunicazioni per infrastrutture critiche. Crittografia NIST FIPS 203, architettura peer-to-peer, conformità NIS2.',
    en: 'AEGIDA is H4R\'s post-quantum security platform: zero-trust privacy smartphone and communication protection for critical infrastructure. NIST FIPS 203 cryptography, peer-to-peer architecture, NIS2 compliance.',
    de: 'AEGIDA ist die Post-Quantum-Sicherheitsplattform von H4R: Zero-Trust Privacy-Smartphone und Kommunikationsschutz für kritische Infrastrukturen. NIST FIPS 203 Kryptographie, Peer-to-Peer-Architektur, NIS2-Konformität.',
  }

  return {
    title: titles[locale] || titles.it,
    description: descriptions[locale] || descriptions.it,
    alternates: {
      languages: {
        'it': '/it/',
        'en': '/en/',
        'de': '/de/',
      },
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'H4R Human for Research Srl',
  url: 'https://www.aegida-systems.com',
  logo: 'https://www.aegida-systems.com/logo.png',
  description:
    'AEGIDA è la piattaforma di sicurezza post-quantum di H4R per comunicazioni e infrastrutture critiche.',
  brand: {
    '@type': 'Brand',
    name: 'AEGIDA',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  )
}
