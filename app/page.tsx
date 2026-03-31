'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const langs = navigator.languages || [navigator.language]
  for (const lang of langs) {
    const code = lang.toLowerCase().slice(0, 2)
    if (LOCALES.includes(code as Locale)) {
      return code as Locale
    }
  }

  return DEFAULT_LOCALE
}

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const locale = detectLocale()
    router.replace(`/${locale}/`)
  }, [router])

  return null
}
