'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
}

/**
 * Extracts numeric portion from a stat value and animates it.
 * Non-numeric values (like "FIPS 203", "E2E") render without animation.
 */
export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Extract numeric part: e.g. "350 Mbps" -> 350, "0 Server" -> 0, "24/7" -> null
    const match = value.match(/^(\d+)(.*)$/)
    if (!match || hasAnimated.current) return

    const target = parseInt(match[1], 10)
    const suffix = match[2]

    if (target === 0) return // No animation for "0 Server"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.disconnect()

          const duration = 1200
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * target)
            setDisplayed(`${current}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          setDisplayed(`0${suffix}`)
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  )
}
