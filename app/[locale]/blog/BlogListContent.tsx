'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/i18n/context'
import ScrollReveal from '@/components/ScrollReveal'
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
      <section
        className="relative pt-28 pb-12 md:pt-36 md:pb-16"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,37,64,0.7) 0%, transparent 60%), #0a0e1a',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="justify-center">{BLOG_UI.heroLabel[locale]}</SectionLabel>
            <h1 className="mt-4 text-center font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {BLOG_UI.heroTitle[locale]}
            </h1>
            <p className="mt-4 text-center font-body text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {BLOG_UI.heroDescription[locale]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Articles */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`font-mono text-xs uppercase tracking-wider-mono px-4 py-2 rounded border transition-colors duration-200 ${
                activeCategory === 'all'
                  ? 'border-gold-500 text-gold-400 bg-gold-500/10'
                  : 'border-navy-700 text-slate-400 hover:border-slate-500'
              }`}
            >
              {BLOG_UI.allCategories[locale]}
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider-mono px-4 py-2 rounded border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-gold-500 text-gold-400 bg-gold-500/10'
                    : 'border-navy-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {CATEGORY_LABELS[cat][locale]}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.08}>
                <BlogCard article={article} locale={locale} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
