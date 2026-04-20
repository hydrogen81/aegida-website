'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'aegida_cookie_consent'

/* ------------------------------------------------------------------ */
/*  localStorage helpers (safe for iOS private browsing)               */
/* ------------------------------------------------------------------ */

function getStoredConsent(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookiePreferences
  } catch {
    return null
  }
}

function setStoredConsent(prefs: CookiePreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // Private browsing or quota exceeded — silently ignore
  }
}

/* ------------------------------------------------------------------ */
/*  Toggle switch                                                      */
/* ------------------------------------------------------------------ */

function Toggle({
  checked,
  disabled,
  onChange,
  id,
}: {
  checked: boolean
  disabled?: boolean
  onChange: (v: boolean) => void
  id: string
}) {
  return (
    <button
      id={id}
      role="switch"
      type="button"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer
        items-center rounded-full border-2 border-transparent
        transition-colors duration-200 ease-in-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300
        ${disabled ? 'cursor-not-allowed opacity-60' : ''}
        ${checked ? 'bg-ink-100' : 'bg-navy-line'}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-4 w-4 rounded-full bg-navy-ink
          shadow-sm transition-transform duration-200 ease-in-out
          ${checked ? 'translate-x-5' : 'translate-x-0.5'}
        `}
      />
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function CookieBanner() {
  const t = useTranslations()

  const [visible, setVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  /* Check on mount whether consent was already given */
  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      setVisible(true)
    }
  }, [])

  /* ---- actions --------------------------------------------------- */

  const accept = useCallback((prefs: CookiePreferences) => {
    setStoredConsent(prefs)
    setVisible(false)
  }, [])

  const handleAcceptAll = useCallback(() => {
    accept({ necessary: true, analytics: true, marketing: true })
  }, [accept])

  const handleNecessaryOnly = useCallback(() => {
    accept({ necessary: true, analytics: false, marketing: false })
  }, [accept])

  const handleSave = useCallback(() => {
    accept({ necessary: true, analytics, marketing })
  }, [accept, analytics, marketing])

  /* ---- render ---------------------------------------------------- */

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy-line bg-navy-card"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {/* ---- main row ------------------------------------ */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* text */}
          <div className="max-w-2xl text-sm leading-relaxed text-ink-200">
            <p>{t.cookie.message}</p>
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="
                rounded-sm bg-ink-100 px-5 py-2.5 text-sm font-semibold text-navy-ink
                transition-colors hover:bg-ink-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300
              "
            >
              {t.cookie.acceptAll}
            </button>

            <button
              type="button"
              onClick={handleNecessaryOnly}
              className="
                rounded-sm border border-navy-line bg-transparent px-5 py-2.5
                text-sm font-semibold text-ink-200
                transition-colors hover:border-ink-300 hover:text-ink-100
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300
              "
            >
              {t.cookie.necessaryOnly}
            </button>

            <button
              type="button"
              onClick={() => setShowCustomize((v) => !v)}
              className="
                px-3 py-2.5 text-sm text-ink-300
                underline underline-offset-2
                transition-colors hover:text-ink-100
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300
              "
            >
              {t.cookie.customize}
            </button>
          </div>
        </div>

        {/* ---- customization panel ------------------------- */}
        {showCustomize && (
          <div className="mt-5 border-t border-navy-line pt-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Necessary — always on */}
              <div className="rounded border border-navy-line bg-navy-deep p-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="toggle-necessary"
                    className="text-sm font-semibold text-ink-100"
                  >
                    {t.cookie.necessary}
                  </label>
                  <Toggle
                    id="toggle-necessary"
                    checked={true}
                    disabled
                    onChange={() => {}}
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">
                  {t.cookie.necessaryDesc}
                </p>
              </div>

              {/* Analytics */}
              <div className="rounded border border-navy-line bg-navy-deep p-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="toggle-analytics"
                    className="text-sm font-semibold text-ink-100"
                  >
                    {t.cookie.analytics}
                  </label>
                  <Toggle
                    id="toggle-analytics"
                    checked={analytics}
                    onChange={setAnalytics}
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">
                  {t.cookie.analyticsDesc}
                </p>
              </div>

              {/* Marketing */}
              <div className="rounded border border-navy-line bg-navy-deep p-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="toggle-marketing"
                    className="text-sm font-semibold text-ink-100"
                  >
                    {t.cookie.marketing}
                  </label>
                  <Toggle
                    id="toggle-marketing"
                    checked={marketing}
                    onChange={setMarketing}
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">
                  {t.cookie.marketingDesc}
                </p>
              </div>
            </div>

            {/* Save button */}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                className="
                  rounded-sm bg-ink-100 px-5 py-2.5 text-sm font-semibold text-navy-ink
                  transition-colors hover:bg-ink-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300
                "
              >
                {t.cookie.save}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
