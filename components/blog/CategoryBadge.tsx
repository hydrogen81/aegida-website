'use client'

import type { BlogCategory } from '@/lib/blog/types'
import type { Locale } from '@/lib/i18n'
import { CATEGORY_LABELS } from '@/lib/blog/utils'

const categoryStyles: Record<string, string> = {
  'threat-intelligence': 'border-steel text-steel-hi',
  'threat': 'border-steel text-steel-hi',
  'deep-analysis': 'border-ink-400 text-ink-200',
  'deep': 'border-ink-400 text-ink-200',
  'compliance': 'border-ink-400 text-ink-200',
  'technology': 'border-ink-400 text-ink-200',
  'case-studies': 'border-ink-400 text-ink-200',
  'case': 'border-ink-400 text-ink-200',
  'geo': 'border-ink-400 text-ink-200',
}

export default function CategoryBadge({
  category,
  locale,
}: {
  category: BlogCategory
  locale: Locale
}) {
  const style = categoryStyles[category] ?? 'border-ink-400 text-ink-200'
  const label = CATEGORY_LABELS[category]?.[locale] ?? category

  return (
    <span
      className={`inline-block font-mono text-[10px] tracking-[0.15em] uppercase border px-2 py-1 rounded-sm ${style} bg-transparent`}
    >
      {label}
    </span>
  )
}
