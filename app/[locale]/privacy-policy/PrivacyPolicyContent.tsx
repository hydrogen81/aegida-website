'use client'

import { useTranslations } from '@/lib/i18n/context'
import PolicyContent from '@/components/PolicyContent'

export default function PrivacyPolicyContent() {
  const t = useTranslations()

  return (
    <PolicyContent
      label={t.privacyPolicy.hero.label}
      title={t.privacyPolicy.hero.title}
      lastUpdated={t.privacyPolicy.lastUpdated}
      sections={t.privacyPolicy.sections}
    />
  )
}
