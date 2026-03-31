'use client'

import type { BlogCategory } from '@/lib/blog/types'
import type { Locale } from '@/lib/i18n'
import { CATEGORY_LABELS } from '@/lib/blog/utils'

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  'threat-intelligence': 'border-red-500/40 text-red-400',
  'compliance': 'border-amber-500/40 text-amber-400',
  'technology': 'border-accent-blue/40 text-accent-blue',
  'case-studies': 'border-gold-500/40 text-gold-400',
  'deep-analysis': 'border-purple-500/40 text-purple-400',
}

export default function CategoryBadge({
  category,
  locale,
}: {
  category: BlogCategory
  locale: Locale
}) {
  return (
    <span
      className={`inline-block font-mono text-[10px] uppercase tracking-wider-mono px-2 py-0.5 rounded border ${CATEGORY_COLORS[category]}`}
    >
      {CATEGORY_LABELS[category][locale]}
    </span>
  )
}
