'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import { LOCALES, getLocaleName, getLocaleFlag } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()
  const { locale } = useLocale()

  const navLinks = [
    { label: t.nav.privacyPhone, href: `/${locale}/privacy-phone/` },
    { label: t.nav.framework, href: `/${locale}/framework/` },
    { label: t.nav.blog, href: `/${locale}/blog/` },
    { label: t.nav.chiSiamo, href: `/${locale}/chi-siamo/` },
    { label: t.nav.contatti, href: `/${locale}/contatti/` },
  ] as const

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close lang dropdown on click outside
  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.includes('/#')) {
        const id = href.split('/#')[1]
        const basePath = `/${locale}`
        if (pathname === basePath || pathname === `${basePath}/`) {
          e.preventDefault()
          const el = document.getElementById(id)
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }
      }
      setMobileOpen(false)
    },
    [pathname, locale],
  )

  const isActive = (href: string) => {
    if (href.includes('/#')) return pathname === `/${locale}` || pathname === `/${locale}/`
    return pathname === href || pathname === href.replace(/\/$/, '')
  }

  // Build locale switch URL: replace current locale in path
  const getLocaleSwitchUrl = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(it|en|de)/, '')
    return `/${newLocale}${pathWithoutLocale || '/'}`
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-navy-ink border-b border-navy-line">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}/`}
            className="font-mono font-semibold text-[16px] tracking-[0.12em] text-ink-100"
            onClick={() => setMobileOpen(false)}
          >
            AEGIDA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm text-ink-200 hover:text-ink-100 transition-colors ${isActive(link.href) ? 'text-ink-100' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop: Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLangOpen((prev) => !prev)
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-ink-200 hover:text-ink-100 transition-colors"
              >
                <span>{getLocaleFlag(locale)}</span>
                <span>{locale.toUpperCase()}</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 rounded border border-navy-line bg-navy-card shadow-none overflow-hidden min-w-[140px]">
                  {LOCALES.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocaleSwitchUrl(loc)}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                        loc === locale
                          ? 'bg-navy-line text-ink-100'
                          : 'text-ink-200 hover:bg-navy-line hover:text-ink-100'
                      }`}
                    >
                      <span>{getLocaleFlag(loc)}</span>
                      <span>{getLocaleName(loc)}</span>
                    </Link>
                  ))}
                  {t.nav.langWarning && (
                    <p className="px-3 py-2 border-t border-navy-line text-xs text-ink-400">
                      {t.nav.langWarning}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contatti/`}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-ink-100 border border-ink-300 rounded-sm px-4 py-2 hover:border-ink-100 hover:bg-navy-line transition-colors"
            >
              {t.nav.richiedi}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 text-ink-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <span className="sr-only">
              {mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            </span>
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 right-0 z-40 h-full w-4/5 max-w-sm bg-navy-ink border-l border-navy-line flex flex-col">
            <div className="h-16 shrink-0 flex items-center px-6 border-b border-navy-line">
              <span className="font-mono font-semibold text-[16px] tracking-[0.12em] text-ink-100">AEGIDA</span>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center px-3 py-3 text-base rounded transition-colors ${
                      isActive(link.href)
                        ? 'text-ink-100 bg-navy-card'
                        : 'text-ink-200 hover:text-ink-100 hover:bg-navy-card'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Language Switcher */}
              <div className="mt-6 pt-4 border-t border-navy-line">
                <p className="px-3 mb-2 font-mono text-xs uppercase tracking-wider text-ink-400">
                  Language
                </p>
                <div className="flex gap-2 px-3">
                  {LOCALES.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocaleSwitchUrl(loc)}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm transition-colors border ${
                        loc === locale
                          ? 'bg-navy-card text-ink-100 border-navy-line'
                          : 'text-ink-200 hover:bg-navy-card border-transparent'
                      }`}
                    >
                      <span>{getLocaleFlag(loc)}</span>
                      <span>{loc.toUpperCase()}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 p-6 border-t border-navy-line">
              <Link
                href={`/${locale}/contatti/`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-sm text-ink-100 border border-ink-300 rounded-sm hover:border-ink-100 hover:bg-navy-line transition-colors"
              >
                {t.nav.richiedi}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
