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
      className="group block rounded-lg border border-navy-700 bg-navy-900 overflow-hidden transition-colors duration-300 hover:border-gold-500 h-full"
    >
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge category={article.category} locale={locale} />
          <span className="font-mono text-[10px] text-slate-500">
            {readTime} {BLOG_UI.minRead[locale]}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-slate-100 tracking-wide-display leading-snug mb-3 group-hover:text-gold-400 transition-colors duration-200">
          {data.title}
        </h3>

        <p className="font-body text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {data.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-slate-500">
              {formatDate(article.date, locale)}
            </span>
          </div>
          <span className="font-display text-xs uppercase tracking-wide-display text-gold-400 group-hover:text-gold-300 transition-colors duration-200">
            {BLOG_UI.readMore[locale]} &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
