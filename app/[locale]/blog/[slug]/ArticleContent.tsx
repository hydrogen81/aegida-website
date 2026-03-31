'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n/context'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import CategoryBadge from '@/components/blog/CategoryBadge'
import ContentRenderer from '@/components/blog/ContentRenderer'
import { getArticleBySlug } from '@/lib/blog/registry'
import { formatDate, calculateReadingTime, BLOG_UI } from '@/lib/blog/utils'

export default function ArticleContent({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const article = getArticleBySlug(slug)

  if (!article) return null

  const data = article.locales[locale]
  const readTime = calculateReadingTime(data.body)

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-12 md:pt-36 md:pb-16"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,37,64,0.7) 0%, transparent 60%), #0a0e1a',
        }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-6">
              <Link
                href={`/${locale}/blog/`}
                className="font-mono text-xs text-slate-500 hover:text-gold-400 transition-colors duration-200 uppercase tracking-wider-mono"
              >
                &larr; {BLOG_UI.backToBlog[locale]}
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <CategoryBadge category={article.category} locale={locale} />
              <span className="font-mono text-[10px] text-slate-500">
                {readTime} {BLOG_UI.minRead[locale]}
              </span>
            </div>

            <h1 className="font-display text-2xl md:text-4xl font-bold text-slate-100 tracking-wide-display leading-tight">
              {data.title}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-mono text-xs text-slate-500">
                {formatDate(article.date, locale)}
              </span>
              <span className="text-navy-600">|</span>
              <span className="font-mono text-xs text-slate-500">
                {article.author}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ContentRenderer blocks={data.body} />

          {/* Share + Back */}
          <div className="mt-16 pt-8 border-t border-navy-700 flex items-center justify-between">
            <Link
              href={`/${locale}/blog/`}
              className="font-display text-sm uppercase tracking-wide-display text-gold-400 hover:text-gold-300 transition-colors duration-200"
            >
              &larr; {BLOG_UI.backToBlog[locale]}
            </Link>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider-mono">
                {BLOG_UI.shareTitle[locale]}
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.aegida-systems.com/${locale}/blog/${article.slug}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.aegida-systems.com/${locale}/blog/${article.slug}/`)}&text=${encodeURIComponent(data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Share on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
