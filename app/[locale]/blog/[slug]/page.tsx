import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { LOCALES } from '@/lib/i18n'
import { getAllArticles, getArticleBySlug } from '@/lib/blog/registry'
import ArticleContent from './ArticleContent'

export function generateStaticParams() {
  const articles = getAllArticles()
  return articles.flatMap((article) =>
    LOCALES.map((locale) => ({
      locale,
      slug: article.slug,
    })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale
  const article = getArticleBySlug(params.slug)

  if (!article) return {}

  const data = article.locales[locale]

  return {
    title: `${data.title} — AEGIDA Blog`,
    description: data.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `/${l}/blog/${article.slug}/`]),
      ),
    },
  }
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  return <ArticleContent slug={params.slug} />
}
