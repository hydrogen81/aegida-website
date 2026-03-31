import type { Metadata } from 'next'

const BASE_URL = 'https://www.aegida-systems.com'

export function createMetadata(overrides: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${overrides.path || ''}`
  return {
    title: overrides.title,
    description: overrides.description,
    openGraph: {
      title: overrides.title,
      description: overrides.description,
      url,
      siteName: 'AEGIDA by H4R',
      type: 'website',
      locale: 'it_IT',
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides.title,
      description: overrides.description,
    },
    alternates: { canonical: url },
  }
}
