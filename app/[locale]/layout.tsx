import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { LOCALES, getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import LocaleLayoutClient from './LocaleLayoutClient'

const barlow = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    template: '%s | AEGIDA',
    default: 'AEGIDA',
  },
  verification: {
    google: 'PpW_au1Ag54vVDSPk7tkUgxEkSOgpU-AGa7sQmj5QxE',
  },
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = (params.locale as Locale) || 'it'
  const translations = await getTranslations(locale)

  return (
    <html lang={locale}>
      <body
        className={`${barlow.variable} ${sourceSans.variable} ${jetbrains.variable}`}
      >
        <LocaleLayoutClient locale={locale} translations={translations}>
          {children}
        </LocaleLayoutClient>
      </body>
    </html>
  )
}
