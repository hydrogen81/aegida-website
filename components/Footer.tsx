'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import ShieldSVG from './ShieldSVG'

export default function Footer() {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <footer className="relative bg-navy-900">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, #243055, transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldSVG size={40} />
            <span className="font-display text-2xl font-bold uppercase tracking-wide-display text-white">
              AEGIDA
            </span>
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm text-gray-400 font-body">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-gray-500 font-body">
              {t.footer.location}
            </p>
            <p className="text-xs text-gray-500 font-body">
              <a
                href="https://www.aegida-systems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-500 transition-colors duration-200"
              >
                www.aegida-systems.com
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-6">
            <Link
              href={`/${locale}/privacy-policy/`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/cookie-policy/`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
            >
              {t.footer.cookie}
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-sm tracking-widest-mono text-gold-500 uppercase">
            {t.footer.payoff}
          </p>
        </div>
      </div>

      <div
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      />
    </footer>
  )
}
