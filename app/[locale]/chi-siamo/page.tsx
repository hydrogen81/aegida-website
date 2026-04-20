import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import AboutContent from '@/components/AboutContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const title = 'Chi siamo — AEGIDA'
  const description =
    'AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.'
  const url = `https://www.aegida-systems.com/${locale}/chi-siamo/`

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/chi-siamo/`,
      languages: {
        it: '/it/chi-siamo/',
        en: '/en/chi-siamo/',
        de: '/de/chi-siamo/',
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
          alt: 'AEGIDA — Chi siamo',
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

export default function ChiSiamoPage() {
  return <AboutContent />
}
