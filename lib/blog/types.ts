import type { Locale } from '@/lib/i18n'

export const BLOG_CATEGORIES = [
  'threat-intelligence',
  'compliance',
  'technology',
  'case-studies',
  'deep-analysis',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip'; text: string }

export interface ArticleLocaleData {
  title: string
  excerpt: string
  body: ContentBlock[]
}

export interface ArticleMeta {
  slug: string
  date: string
  author: string
  category: BlogCategory
  locales: Record<Locale, ArticleLocaleData>
}
