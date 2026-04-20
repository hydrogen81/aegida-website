import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import ContattiContent from '@/components/ContattiContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const title = 'Richiedi un colloquio — AEGIDA'
  const description =
    'Scrivici per un colloquio con il team AEGIDA. Raccontaci brevemente il tuo caso e ti ricontattiamo entro due giorni lavorativi.'
  const url = `https://www.aegida-systems.com/${locale}/contatti/`

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contatti/`,
      languages: {
        it: '/it/contatti/',
        en: '/en/contatti/',
        de: '/de/contatti/',
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: 'AEGIDA',
      images: [
        {
          url: 'https://www.aegida-systems.com/logo-aegida.jpg',
          width: 1200,
          height: 630,
          alt: 'AEGIDA — Richiedi un colloquio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.aegida-systems.com/logo-aegida.jpg'],
    },
  }
}

export default function ContattiPage() {
  return <ContattiContent />
}
