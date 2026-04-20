import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { LOCALES, getTranslations } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import LocaleLayoutClient from './LocaleLayoutClient'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-navy-ink text-ink-100`}
      >
        <LocaleLayoutClient locale={locale} translations={translations}>
          {children}
        </LocaleLayoutClient>
      </body>
    </html>
  )
}
