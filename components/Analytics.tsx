'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const STORAGE_KEY = 'aegida_cookie_consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

function readConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const prefs = JSON.parse(raw) as CookiePreferences
    return Boolean(prefs.analytics)
  } catch {
    return false
  }
}

function DebugWidget({ enabled }: { enabled: boolean }) {
  const [debug, setDebug] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const show = new URLSearchParams(window.location.search).has('ga-debug')
    setDebug(show)
    if (!show) return
    const i = window.setInterval(() => setTick((t) => t + 1), 1000)
    return () => window.clearInterval(i)
  }, [])

  if (!debug) return null

  const consent = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  const gtagReady = typeof window !== 'undefined' && typeof (window as unknown as { gtag?: unknown }).gtag === 'function'
  const dlLen = typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)
    ? ((window as unknown as { dataLayer?: unknown[] }).dataLayer as unknown[]).length
    : 0

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 12,
        right: 12,
        zIndex: 9999,
        background: '#0a0e1a',
        color: '#fff',
        border: '1px solid #b8960c',
        borderRadius: 8,
        padding: '10px 14px',
        fontFamily: 'monospace',
        fontSize: 12,
        lineHeight: 1.5,
        maxWidth: 320,
      }}
    >
      <div style={{ color: '#b8960c', marginBottom: 6 }}>GA DEBUG (tick {tick})</div>
      <div>GA_ID: {GA_ID || '(missing)'}</div>
      <div>consent (localStorage): {consent || '(empty)'}</div>
      <div>enabled (analytics on): {String(enabled)}</div>
      <div>window.gtag: {gtagReady ? 'YES' : 'no'}</div>
      <div>dataLayer length: {dlLen}</div>
    </div>
  )
}

export default function Analytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(readConsent())
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setEnabled(readConsent())
    }
    window.addEventListener('storage', onStorage)
    const interval = window.setInterval(() => setEnabled(readConsent()), 2000)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.clearInterval(interval)
    }
  }, [])

  return (
    <>
      {GA_ID && enabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      <DebugWidget enabled={enabled} />
    </>
  )
}
