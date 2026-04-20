'use client'

import Link from 'next/link'
import type { ArticleMeta } from '@/lib/blog/types'
import type { Locale } from '@/lib/i18n'
import { formatDate, calculateReadingTime, BLOG_UI } from '@/lib/blog/utils'
import CategoryBadge from './CategoryBadge'

export default function BlogCard({
  article,
  locale,
}: {
  article: ArticleMeta
  locale: Locale
}) {
  const data = article.locales[locale]
  const readTime = calculateReadingTime(data.body)

  return (
    <Link
      href={`/${locale}/blog/${article.slug}/`}
      className="group block bg-navy-card border border-navy-line rounded p-6 hover:border-ink-400 transition-colors h-full"
    >
      <div className="flex items-center gap-3 font-mono text-[11px] text-ink-400 tracking-wide mb-3">
        <CategoryBadge category={article.category} locale={locale} />
        <span>
          {readTime} {BLOG_UI.minRead[locale]}
        </span>
      </div>

      <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2 leading-snug">
        {data.title}
      </h3>

      <p className="text-sm text-ink-300 leading-[1.55] line-clamp-3 mb-4">
        {data.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink-400">
          {formatDate(article.date, locale)}
        </span>
        <span className="font-mono text-[11px] text-ink-300 tracking-wide">
          {BLOG_UI.readMore[locale]} &rarr;
        </span>
      </div>
    </Link>
  )
}
