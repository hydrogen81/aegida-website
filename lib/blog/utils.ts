import type { Locale } from '@/lib/i18n'
import type { ContentBlock, BlogCategory } from './types'

export function calculateReadingTime(body: ContentBlock[]): number {
  const text = body
    .filter((b): b is { type: 'paragraph'; text: string } | { type: 'quote'; text: string } =>
      b.type === 'paragraph' || b.type === 'quote'
    )
    .map((b) => b.text)
    .join(' ')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function formatDate(dateStr: string, locale: Locale): string {
  return new Intl.DateTimeFormat(
    locale === 'de' ? 'de-DE' : locale === 'en' ? 'en-GB' : 'it-IT',
    { year: 'numeric', month: 'long', day: 'numeric' },
  ).format(new Date(dateStr))
}

export const CATEGORY_LABELS: Record<BlogCategory, Record<Locale, string>> = {
  'threat-intelligence': { it: 'Threat Intelligence', en: 'Threat Intelligence', de: 'Threat Intelligence' },
  'compliance': { it: 'Conformita', en: 'Compliance', de: 'Compliance' },
  'technology': { it: 'Tecnologia', en: 'Technology', de: 'Technologie' },
  'case-studies': { it: 'Case Study', en: 'Case Studies', de: 'Fallstudien' },
  'deep-analysis': { it: 'Analisi Approfondita', en: 'Deep Analysis', de: 'Tiefenanalyse' },
}

export const BLOG_UI: Record<string, Record<Locale, string>> = {
  readMore: { it: 'Leggi articolo', en: 'Read article', de: 'Artikel lesen' },
  backToBlog: { it: 'Torna al blog', en: 'Back to blog', de: 'Zurueck zum Blog' },
  minRead: { it: 'min di lettura', en: 'min read', de: 'Min. Lesezeit' },
  allCategories: { it: 'Tutti', en: 'All', de: 'Alle' },
  heroTitle: { it: 'Insights & Ricerca', en: 'Insights & Research', de: 'Insights & Forschung' },
  heroLabel: { it: 'BLOG', en: 'BLOG', de: 'BLOG' },
  heroDescription: {
    it: 'Analisi, approfondimenti e aggiornamenti sulla sicurezza post-quantum, conformita NIS2 e protezione delle infrastrutture critiche.',
    en: 'Analysis, insights and updates on post-quantum security, NIS2 compliance and critical infrastructure protection.',
    de: 'Analysen, Einblicke und Updates zur Post-Quantum-Sicherheit, NIS2-Compliance und zum Schutz kritischer Infrastrukturen.',
  },
  shareTitle: { it: 'Condividi', en: 'Share', de: 'Teilen' },
}
