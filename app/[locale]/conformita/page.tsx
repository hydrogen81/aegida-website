import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import ConformitaContent from './ConformitaContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles: Record<string, string> = {
    it: 'Self-Assessment Conformità NIS2 e Sicurezza Comunicazioni — AEGIDA | H4R',
    en: 'NIS2 Compliance Self-Assessment and Communication Security — AEGIDA | H4R',
    de: 'NIS2-Konformitäts-Self-Assessment und Kommunikationssicherheit — AEGIDA | H4R',
  }

  const descriptions: Record<string, string> = {
    it: 'Verifica in 5 minuti la conformità della tua organizzazione ai requisiti NIS2, GDPR e NIST per la sicurezza delle comunicazioni. Self-assessment gratuito con raccomandazioni personalizzate.',
    en: 'Check in 5 minutes if your organization meets NIS2, GDPR and NIST requirements for communication security. Free self-assessment with personalized recommendations.',
    de: 'Überprüfen Sie in 5 Minuten, ob Ihre Organisation die NIS2-, DSGVO- und NIST-Anforderungen für Kommunikationssicherheit erfüllt. Kostenloses Self-Assessment mit personalisierten Empfehlungen.',
  }

  return {
    title: titles[locale] || titles.it,
    description: descriptions[locale] || descriptions.it,
    alternates: {
      languages: {
        'it': '/it/conformita/',
        'en': '/en/conformita/',
        'de': '/de/conformita/',
      },
    },
  }
}

export default function ConformitaPage() {
  return <ConformitaContent />
}
