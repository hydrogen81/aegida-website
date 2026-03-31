'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import type { Translations } from '@/lib/i18n/types'
import { LocaleProvider } from '@/lib/i18n/context'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import BackToTop from '@/components/BackToTop'

export default function LocaleLayoutClient({
  locale,
  translations,
  children,
}: {
  locale: Locale
  translations: Translations
  children: ReactNode
}) {
  return (
    <LocaleProvider locale={locale} translations={translations}>
      <a href="#main-content" className="skip-to-content">
        {translations.nav.openMenu === 'Open menu' ? 'Skip to content' :
         translations.nav.openMenu === 'Menü öffnen' ? 'Zum Inhalt springen' :
         'Salta al contenuto'}
      </a>
      <div className="grid-overlay" aria-hidden="true" />
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </LocaleProvider>
  )
}
