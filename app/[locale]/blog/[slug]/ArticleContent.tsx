'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n/context'
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
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href={`/${locale}/blog/`}
              className="font-mono text-[11px] text-ink-400 hover:text-ink-100 transition-colors duration-200 uppercase tracking-[0.15em]"
            >
              &larr; {BLOG_UI.backToBlog[locale]}
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge category={article.category} locale={locale} />
            <span className="font-mono text-[10px] text-ink-400">
              {readTime} {BLOG_UI.minRead[locale]}
            </span>
          </div>

          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100">
            {data.title}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <span className="font-mono text-[11px] text-ink-400">
              {formatDate(article.date, locale)}
            </span>
            <span className="text-navy-line">|</span>
            <span className="font-mono text-[11px] text-ink-400">
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          <div className="text-ink-200 leading-[1.65]">
            <ContentRenderer blocks={data.body} />
          </div>

          {/* Share + Back */}
          <div className="mt-16 pt-8 border-t border-navy-line flex items-center justify-between">
            <Link
              href={`/${locale}/blog/`}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-300 hover:text-ink-100 transition-colors duration-200"
            >
              &larr; {BLOG_UI.backToBlog[locale]}
            </Link>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-ink-400 uppercase tracking-[0.15em]">
                {BLOG_UI.shareTitle[locale]}
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.aegida-systems.com/${locale}/blog/${article.slug}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-ink-100 transition-colors duration-200"
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
                className="text-ink-400 hover:text-ink-100 transition-colors duration-200"
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
