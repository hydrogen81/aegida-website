import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import BlogListContent from './BlogListContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles: Record<string, string> = {
    it: 'Blog — Insights & Ricerca sulla Sicurezza Post-Quantum | AEGIDA',
    en: 'Blog — Post-Quantum Security Insights & Research | AEGIDA',
    de: 'Blog — Post-Quantum-Sicherheit Insights & Forschung | AEGIDA',
  }

  const descriptions: Record<string, string> = {
    it: 'Articoli, analisi e approfondimenti sulla sicurezza post-quantum, conformita NIS2, threat intelligence e protezione delle infrastrutture critiche.',
    en: 'Articles, analysis and insights on post-quantum security, NIS2 compliance, threat intelligence and critical infrastructure protection.',
    de: 'Artikel, Analysen und Einblicke zur Post-Quantum-Sicherheit, NIS2-Compliance, Threat Intelligence und Schutz kritischer Infrastrukturen.',
  }

  const title = titles[locale] || titles.it
  const description = descriptions[locale] || descriptions.it
  const url = `https://www.aegida-systems.com/${locale}/blog/`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        it: '/it/blog/',
        en: '/en/blog/',
        de: '/de/blog/',
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
        alt: 'AEGIDA Blog — Threat Intelligence & Research',
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

export default function BlogPage() {
  return <BlogListContent />
}
