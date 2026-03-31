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

  return {
    title: titles[locale] || titles.it,
    description: descriptions[locale] || descriptions.it,
    alternates: {
      languages: {
        it: '/it/blog/',
        en: '/en/blog/',
        de: '/de/blog/',
      },
    },
  }
}

export default function BlogPage() {
  return <BlogListContent />
}
