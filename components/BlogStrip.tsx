'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getAllArticles } from '@/lib/blog/registry'
import type { Locale } from '@/lib/i18n'

interface StripArticle {
  slug: string
  date: string
  title: string
}

function formatDate(iso: string, locale: string): string {
  const d = new Date(iso)
  const months: Record<string, string[]> = {
    it: ['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC'],
    en: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    de: ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'],
  }
  const m = months[locale] || months.en
  return `${d.getDate()} ${m[d.getMonth()]}`
}

function getLatestArticles(locale: string, n: number = 3): StripArticle[] {
  const all = getAllArticles()
  return all.slice(0, n).map((a) => ({
    slug: a.slug,
    date: a.date,
    title: a.locales[locale as Locale]?.title || a.slug,
  }))
}

export default function BlogStrip() {
  const { locale } = useParams() as { locale: string }
  const items = getLatestArticles(locale)

  return (
    <div className="bg-navy-deep border-t border-navy-line py-7">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-ink-300">DAL BLOG</span>
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/blog/${a.slug}/`}
            className="text-sm text-ink-200 hover:text-ink-100 transition-colors"
          >
            <span className="font-mono text-[12px] text-ink-400 mr-2">{formatDate(a.date, locale)}</span>
            {a.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
