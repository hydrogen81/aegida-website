import type { Translations } from './types'

/* ------------------------------------------------------------------ */
/*  Locale constants                                                   */
/* ------------------------------------------------------------------ */

export type Locale = 'it' | 'en' | 'de'

export const LOCALES: Locale[] = ['it', 'en', 'de']

export const DEFAULT_LOCALE: Locale = 'it'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const LOCALE_NAMES: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
}

const LOCALE_FLAGS: Record<Locale, string> = {
  it: '\u{1F1EE}\u{1F1F9}',
  en: '\u{1F1EC}\u{1F1E7}',
  de: '\u{1F1E9}\u{1F1EA}',
}

export function getLocaleName(locale: Locale): string {
  return LOCALE_NAMES[locale]
}

export function getLocaleFlag(locale: Locale): string {
  return LOCALE_FLAGS[locale]
}

/* ------------------------------------------------------------------ */
/*  Translation loader                                                 */
/* ------------------------------------------------------------------ */

/**
 * Returns the translations object for the given locale.
 *
 * Translation files are expected at `lib/i18n/locales/<locale>.ts`,
 * each exporting a default `Translations` object.
 * They will be created in a later step.
 */
export async function getTranslations(locale: Locale): Promise<Translations> {
  switch (locale) {
    case 'it': {
      const mod = await import('./locales/it')
      return mod.default
    }
    case 'en': {
      const mod = await import('./locales/en')
      return mod.default
    }
    case 'de': {
      const mod = await import('./locales/de')
      return mod.default
    }
    default: {
      const mod = await import('./locales/it')
      return mod.default
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Re-exports                                                         */
/* ------------------------------------------------------------------ */

export type { Translations } from './types'
export type { ContactFormTranslations } from './types'
