import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale
  const t = await getTranslations(locale)

  return {
    title: t.privacyPolicy.meta.title,
    description: t.privacyPolicy.meta.description,
    alternates: {
      languages: {
        it: '/it/privacy-policy/',
        en: '/en/privacy-policy/',
        de: '/de/privacy-policy/',
      },
    },
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
