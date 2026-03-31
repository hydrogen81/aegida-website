'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import type { Locale } from './index'
import type { Translations } from './types'
import { DEFAULT_LOCALE } from './index'

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  translations: Translations | null
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

interface LocaleProviderProps {
  locale: Locale
  translations: Translations
  children: ReactNode
}

export function LocaleProvider({
  locale: initialLocale,
  translations: initialTranslations,
  children,
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [translations, setTranslations] = useState<Translations>(initialTranslations)

  const setLocale = async (newLocale: Locale) => {
    setLocaleState(newLocale)
    // Dynamically load the new translations
    const { getTranslations } = await import('./index')
    const t = await getTranslations(newLocale)
    setTranslations(t)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LocaleContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */

/**
 * Returns the current locale and a setter to change it.
 */
export function useLocale(): { locale: Locale; setLocale: (l: Locale) => void } {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within a <LocaleProvider>')
  }
  return { locale: ctx.locale, setLocale: ctx.setLocale }
}

/**
 * Returns the translations object for the current locale.
 */
export function useTranslations(): Translations {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useTranslations must be used within a <LocaleProvider>')
  }
  if (!ctx.translations) {
    throw new Error('Translations not yet loaded')
  }
  return ctx.translations
}
