import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n'
import PrivacyPhoneContent from '@/components/PrivacyPhoneContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles: Record<string, string> = {
    it: 'AEGIDA Privacy Phone — Smartphone Zero-Trust con Aegida OS e Comunicazioni P2P Cifrate',
    en: 'AEGIDA Privacy Phone — Zero-Trust Smartphone with Aegida OS and Encrypted P2P Communications',
    de: 'AEGIDA Privacy Phone — Zero-Trust-Smartphone mit Aegida OS und verschlüsselter P2P-Kommunikation',
  }

  const descriptions: Record<string, string> = {
    it: 'Smartphone privacy-first basato su Google Pixel 10a con Aegida OS (GrapheneOS), Titan M2, e Aegida Connect per comunicazioni cifrate peer-to-peer via Tor, Wi-Fi e Bluetooth. Nessun server, nessun intermediario.',
    en: 'Privacy-first smartphone based on Google Pixel 10a with Aegida OS (GrapheneOS), Titan M2, and Aegida Connect for encrypted peer-to-peer communications via Tor, Wi-Fi and Bluetooth. No servers, no intermediaries.',
    de: 'Privacy-First-Smartphone basierend auf Google Pixel 10a mit Aegida OS (GrapheneOS), Titan M2, und Aegida Connect für verschlüsselte Peer-to-Peer-Kommunikation über Tor, WLAN und Bluetooth. Keine Server, keine Vermittler.',
  }

  const title = titles[locale] || titles.it
  const description = descriptions[locale] || descriptions.it
  const url = `https://www.aegida-systems.com/${locale}/privacy-phone/`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'it': '/it/privacy-phone/',
        'en': '/en/privacy-phone/',
        'de': '/de/privacy-phone/',
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
        alt: 'AEGIDA Privacy Phone',
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
  name: 'AEGIDA Privacy Phone',
  brand: { '@type': 'Brand', name: 'AEGIDA' },
  manufacturer: { '@type': 'Organization', name: 'H4RESEARCH SRL' },
  category: 'Smartphone',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'EUR',
    url: 'https://www.aegida-systems.com/privacy-phone',
  },
}

export default function PrivacyPhonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPhoneContent />
    </>
  )
}
