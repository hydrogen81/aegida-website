'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import ShieldSVG from './ShieldSVG'

export default function Footer() {
  const t = useTranslations()
  const { locale } = useLocale()
  const year = new Date().getFullYear()

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
        {/* Top row: logo + istituzionale */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <ShieldSVG size={40} />
              <span className="font-display text-2xl font-bold uppercase tracking-wide-display text-white">
                AEGIDA
              </span>
            </div>
            <p className="text-sm text-gray-400 font-body max-w-xs">
              {t.footer.istituzionale}
            </p>
          </div>

          {/* Nav + Legale columns */}
          <div className="flex gap-12">
            {/* Nav column */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/privacy-phone/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.nav.privacyPhone}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/framework/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.nav.framework}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/chi-siamo/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.nav.chiSiamo}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/blog/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contatti/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.nav.contatti}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legale column */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/privacy-policy/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.legale.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/cookie-policy/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.legale.cookiePolicy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/conformita/`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {t.footer.legale.conformita}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payoff */}
        <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-mono text-sm tracking-widest-mono text-gold-500 uppercase">
            {t.footer.payoff}
          </p>
          <p className="text-xs text-gray-500 font-body">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
        </div>
      </div>

      <div
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      />
    </footer>
  )
}
