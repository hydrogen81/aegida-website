'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/i18n/context'
import SectionLabel from '@/components/SectionLabel'
import BlogCard from '@/components/blog/BlogCard'
import { getAllArticles } from '@/lib/blog/registry'
import { BLOG_CATEGORIES } from '@/lib/blog/types'
import type { BlogCategory } from '@/lib/blog/types'
import { CATEGORY_LABELS, BLOG_UI } from '@/lib/blog/utils'

export default function BlogListContent() {
  const { locale } = useLocale()
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all')

  const allArticles = getAllArticles()
  const filtered = activeCategory === 'all'
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel className="justify-center">{BLOG_UI.heroLabel[locale]}</SectionLabel>
          <h1 className="mt-4 text-center text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100">
            {BLOG_UI.heroTitle[locale]}
          </h1>
          <p className="mt-4 text-center text-base text-ink-300 leading-[1.55] max-w-2xl mx-auto">
            {BLOG_UI.heroDescription[locale]}
          </p>
        </div>
      </section>

      {/* Filters + Articles */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-sm border transition-colors duration-200 ${
                activeCategory === 'all'
                  ? 'border-ink-300 text-ink-100 bg-navy-card'
                  : 'border-navy-line text-ink-400 hover:border-ink-400 hover:text-ink-200'
              }`}
            >
              {BLOG_UI.allCategories[locale]}
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-sm border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-ink-300 text-ink-100 bg-navy-card'
                    : 'border-navy-line text-ink-400 hover:border-ink-400 hover:text-ink-200'
                }`}
              >
                {CATEGORY_LABELS[cat][locale]}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <BlogCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
