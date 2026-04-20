import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { LOCALES } from '@/lib/i18n'
import { getAllArticles, getArticleBySlug } from '@/lib/blog/registry'
import { CATEGORY_LABELS, calculateReadingTime } from '@/lib/blog/utils'
import type { BlogCategory } from '@/lib/blog/types'
import ArticleContent from './ArticleContent'

const SITE = 'https://www.aegida-systems.com'

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

  if (!article) {
    return {
      title: 'Article Not Found — AEGIDA Blog',
      description: 'The requested article could not be found.',
    }
  }

  const data = article.locales[locale]
  const title = `${data.title} — AEGIDA Blog`
  const description = data.excerpt
  const url = `${SITE}/${locale}/blog/${article.slug}/`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `/${l}/blog/${article.slug}/`]),
      ),
    },
    openGraph: {
      type: 'article',
      title: data.title,
      description,
      url,
      siteName: 'AEGIDA',
      publishedTime: article.date,
      authors: [article.author],
      locale: locale === 'it' ? 'it_IT' : locale === 'de' ? 'de_DE' : 'en_US',
      images: [{
        url: `${SITE}/logo-aegida.jpg`,
        width: 1200,
        height: 630,
        alt: data.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description,
      images: [`${SITE}/logo-aegida.jpg`],
    },
  }
}

export default function ArticlePage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const locale = params.locale as Locale
  const article = getArticleBySlug(params.slug)

  if (!article) return <ArticleContent slug={params.slug} />

  const data = article.locales[locale]
  const categoryLabel = CATEGORY_LABELS[article.category as BlogCategory]?.[locale] || article.category
  const readingTime = calculateReadingTime(data.body)

  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.excerpt,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'H4RESEARCH SRL',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/logo-aegida.jpg`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/${locale}/blog/${article.slug}/`,
    },
    image: `${SITE}/logo-aegida.jpg`,
    articleSection: categoryLabel,
    inLanguage: locale,
    wordCount: data.body.reduce((acc, block) => {
      if ('text' in block) return acc + (block.text?.split(/\s+/).length || 0)
      if ('items' in block) return acc + block.items.join(' ').split(/\s+/).length
      return acc
    }, 0),
    timeRequired: `PT${readingTime}M`,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE}/${locale}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE}/${locale}/blog/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.title,
        item: `${SITE}/${locale}/blog/${article.slug}/`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ArticleContent slug={params.slug} />
    </>
  )
}
