'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import { LOCALES, getLocaleName, getLocaleFlag } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import ShieldSVG from './ShieldSVG'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()
  const { locale } = useLocale()

  const navLinks = [
    { label: t.nav.privacyPhone, href: `/${locale}/privacy-phone/` },
    { label: t.nav.framework, href: `/${locale}/framework/` },
    { label: t.nav.blog, href: `/${locale}/blog/`, highlight: true },
    { label: t.nav.chiSiamo, href: `/${locale}/chi-siamo/` },
    { label: t.nav.contatti, href: `/${locale}/contatti/` },
  ] as const

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gold-500/20'
            : 'border-b border-transparent'
        }`}
        style={
          scrolled
            ? {
                backgroundColor: 'rgba(10, 14, 26, 0.8)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }
            : { backgroundColor: 'transparent' }
        }
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}/`}
              className="flex items-center gap-2 shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <ShieldSVG size={36} />
              <span className="font-display text-xl font-bold uppercase tracking-wide-display text-white">
                AEGIDA
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-display uppercase tracking-wide-display transition-colors duration-200 ${
                    'highlight' in link && link.highlight
                      ? 'border border-danger-red/60 rounded text-danger-red hover:bg-danger-red hover:text-white'
                      : 'free' in link && link.free
                        ? 'border border-success-green/60 rounded text-success-green hover:bg-success-green hover:text-white'
                        : isActive(link.href)
                          ? 'text-gold-400'
                          : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop: Language Switcher + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLangOpen((prev) => !prev)
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-display uppercase tracking-wide-display text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span>{getLocaleFlag(locale)}</span>
                  <span>{locale.toUpperCase()}</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 rounded-lg border border-navy-700 bg-navy-900 shadow-xl overflow-hidden min-w-[140px]"
                    >
                      {LOCALES.map((loc) => (
                        <Link
                          key={loc}
                          href={getLocaleSwitchUrl(loc)}
                          onClick={() => setLangOpen(false)}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-body transition-colors ${
                            loc === locale
                              ? 'bg-navy-800 text-gold-400'
                              : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                          }`}
                        >
                          <span>{getLocaleFlag(loc)}</span>
                          <span>{getLocaleName(loc)}</span>
                        </Link>
                      ))}
                      {t.nav.langWarning && (
                        <p className="px-3 py-2 border-t border-navy-700 text-xs text-slate-500">
                          {t.nav.langWarning}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link
                href={`/${locale}/contatti/`}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-5 py-2 bg-gold-500 text-navy-950 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
              >
                {t.nav.richiedi}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 text-white"
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-40 h-full w-4/5 max-w-sm bg-navy-900 shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="h-16 shrink-0" />

              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center px-4 py-3 text-lg font-display uppercase tracking-wide-display rounded transition-colors duration-200 ${
                        'highlight' in link && link.highlight
                          ? 'border border-danger-red/60 text-danger-red hover:bg-danger-red hover:text-white'
                          : 'free' in link && link.free
                            ? 'border border-success-green/60 text-success-green hover:bg-success-green hover:text-white'
                            : isActive(link.href)
                              ? 'text-gold-400 bg-navy-800'
                              : 'text-gray-300 hover:text-white hover:bg-navy-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Language Switcher */}
                <div className="mt-6 pt-4 border-t border-navy-700">
                  <p className="px-4 mb-2 font-mono text-xs uppercase tracking-wider-mono text-slate-500">
                    Language
                  </p>
                  <div className="flex gap-2 px-4">
                    {LOCALES.map((loc) => (
                      <Link
                        key={loc}
                        href={getLocaleSwitchUrl(loc)}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded text-sm font-display uppercase tracking-wide-display transition-colors ${
                          loc === locale
                            ? 'bg-navy-800 text-gold-400 border border-gold-500/30'
                            : 'text-slate-300 hover:bg-navy-800 border border-transparent'
                        }`}
                      >
                        <span>{getLocaleFlag(loc)}</span>
                        <span>{loc.toUpperCase()}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="shrink-0 p-6 border-t border-navy-700">
                <Link
                  href={`/${locale}/contatti/`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 bg-gold-500 text-navy-950 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
                >
                  {t.nav.richiedi}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
