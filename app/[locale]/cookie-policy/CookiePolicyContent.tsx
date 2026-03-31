'use client'

import { useTranslations } from '@/lib/i18n/context'
import PolicyContent from '@/components/PolicyContent'

export default function CookiePolicyContent() {
  const t = useTranslations()

  return (
    <PolicyContent
      label={t.cookiePolicy.hero.label}
      title={t.cookiePolicy.hero.title}
      lastUpdated={t.cookiePolicy.lastUpdated}
      sections={t.cookiePolicy.sections}
    />
  )
}
