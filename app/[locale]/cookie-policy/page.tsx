import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n'
import CookiePolicyContent from './CookiePolicyContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale
  const t = await getTranslations(locale)

  return {
    title: t.cookiePolicy.meta.title,
    description: t.cookiePolicy.meta.description,
    alternates: {
      languages: {
        it: '/it/cookie-policy/',
        en: '/en/cookie-policy/',
        de: '/de/cookie-policy/',
      },
    },
  }
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}
