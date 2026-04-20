// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  Types & constants                                                  */
/* ------------------------------------------------------------------ */

type LayerKey = 'A' | 'B' | 'C'

const LAYER_COLORS: Record<LayerKey, string> = {
  A: '#22d3ee',
  B: '#b8960c',
  C: '#3b82f6',
}

const RING_RADII: Record<LayerKey, { inner: number; outer: number }> = {
  A: { inner: 145, outer: 175 },
  B: { inner: 100, outer: 130 },
  C: { inner: 55, outer: 85 },
}

const LAYERS: LayerKey[] = ['A', 'B', 'C']

/* ------------------------------------------------------------------ */
/*  Particle dots (CSS-animated, no JS overhead)                       */
/* ------------------------------------------------------------------ */

function OrbitParticles({ color, radius, count, duration, active }: {
  color: string
  radius: number
  count: number
  duration: number
  active: boolean
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const delay = (duration / count) * i
        const startAngle = (360 / count) * i
        return (
          <motion.circle
            key={i}
            r={active ? 3 : 2}
            fill={color}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: active ? [0.4, 1, 0.4] : [0.15, 0.4, 0.15],
            }}
            transition={{
              opacity: { duration: duration, repeat: Infinity, delay },
            }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${startAngle} 200 200`}
              to={`${startAngle + 360} 200 200`}
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
            <animateMotion
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
              path={`M ${200 + radius},200 A ${radius},${radius} 0 1,1 ${200 + radius - 0.01},200`}
            />
          </motion.circle>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Hexagonal ring shape                                               */
/* ------------------------------------------------------------------ */

function hexPath(cx: number, cy: number, r: number): string {
  const pts: string[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`)
  }
  return `M${pts.join('L')}Z`
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function LayerDiagram() {
  const t = useTranslations()
  const [active, setActive] = useState<LayerKey>('A')

  const layerData: Record<LayerKey, {
    label: string
    name: string
    subtitle: string
    details: string[]
  }> = {
    A: t.framework.layers.layerA,
    B: t.framework.layers.layerB,
    C: t.framework.layers.layerC,
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start" style={{ gap: '2.5rem' }}>
      {/* ============================================================ */}
      {/*  SVG Diagram                                                  */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-[420px] shrink-0">
        {/* Background glow for active layer */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${LAYER_COLORS[active]}15 0%, transparent 70%)`,
            transition: 'background 0.6s ease',
          }}
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 400 400"
          className="w-full h-auto"
          role="img"
          aria-label="Three-layer security architecture diagram"
        >
          <defs>
            {/* Glow filters for each layer */}
            {LAYERS.map((key) => (
              <filter key={key} id={`glow-${key}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur
                  stdDeviation={active === key ? 8 : 3}
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}

            {/* Radial gradient for background */}
            <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>

          {/* Background */}
          <circle cx="200" cy="200" r="198" fill="url(#bg-grad)" stroke="#1e293b" strokeWidth="1" />

          {/* Grid lines (subtle tactical feel) */}
          <g opacity="0.08" stroke="#94a3b8" strokeWidth="0.5">
            <line x1="200" y1="10" x2="200" y2="390" />
            <line x1="10" y1="200" x2="390" y2="200" />
            <circle cx="200" cy="200" r="60" fill="none" />
            <circle cx="200" cy="200" r="120" fill="none" />
            <circle cx="200" cy="200" r="180" fill="none" />
          </g>

          {/* === Hexagonal rings === */}
          {LAYERS.map((key) => {
            const { inner, outer } = RING_RADII[key]
            const isActive = active === key
            const color = LAYER_COLORS[key]
            const midR = (inner + outer) / 2

            return (
              <g key={key} style={{ cursor: 'pointer' }} onClick={() => setActive(key)}>
                {/* Outer hex border */}
                <motion.path
                  d={hexPath(200, 200, outer)}
                  fill="none"
                  stroke={color}
                  strokeWidth={isActive ? 2 : 1}
                  opacity={isActive ? 0.9 : 0.35}
                  filter={`url(#glow-${key})`}
                  animate={{
                    opacity: isActive ? [0.7, 1, 0.7] : 0.35,
                    strokeWidth: isActive ? [1.5, 2.5, 1.5] : 1,
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Inner hex border */}
                <motion.path
                  d={hexPath(200, 200, inner)}
                  fill="none"
                  stroke={color}
                  strokeWidth={isActive ? 1.5 : 0.5}
                  opacity={isActive ? 0.7 : 0.2}
                  animate={{
                    opacity: isActive ? [0.5, 0.8, 0.5] : 0.2,
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Fill area between hexes (semi-transparent) */}
                <motion.path
                  d={`${hexPath(200, 200, outer)} ${hexPath(200, 200, inner)}`}
                  fillRule="evenodd"
                  fill={color}
                  animate={{
                    opacity: isActive ? 0.12 : 0.04,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Clickable hit area */}
                <path
                  d={`${hexPath(200, 200, outer)} ${hexPath(200, 200, inner)}`}
                  fillRule="evenodd"
                  fill="transparent"
                  stroke="none"
                />

                {/* Layer label on the ring */}
                <text
                  x={200 + midR * Math.cos(-Math.PI / 6)}
                  y={200 + midR * Math.sin(-Math.PI / 6)}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="font-mono"
                  fontSize={isActive ? 14 : 12}
                  fontWeight="700"
                  fill={color}
                  style={{ userSelect: 'none', pointerEvents: 'none' }}
                >
                  <motion.tspan
                    animate={{ opacity: isActive ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {key}
                  </motion.tspan>
                </text>
              </g>
            )
          })}

          {/* === Orbiting particles === */}
          <OrbitParticles color={LAYER_COLORS.A} radius={160} count={6} duration={18} active={active === 'A'} />
          <OrbitParticles color={LAYER_COLORS.B} radius={115} count={5} duration={14} active={active === 'B'} />
          <OrbitParticles color={LAYER_COLORS.C} radius={70} count={4} duration={10} active={active === 'C'} />

          {/* === Data flow arrows (downward through center) === */}
          <g opacity="0.25">
            <motion.line
              x1="200" y1="25" x2="200" y2="375"
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="6 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Arrow heads at ring boundaries */}
            {[45, 115, 175].map((y, i) => (
              <motion.polygon
                key={i}
                points={`196,${y} 204,${y} 200,${y + 8}`}
                fill="#94a3b8"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </g>

          {/* === Center shield icon === */}
          <g>
            <motion.path
              d="M200 170 L200 170 C200 170 200 170 200 170 L218 178 L218 198 C218 208 210 218 200 222 C190 218 182 208 182 198 L182 178 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
              opacity="0.8"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M193 196 L198 201 L208 191"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        </svg>
      </div>

      {/* ============================================================ */}
      {/*  Detail panel                                                 */}
      {/* ============================================================ */}
      <div className="flex-1 w-full min-w-0">
        {/* Layer selector pills (mobile-friendly) */}
        <div className="flex mb-6" style={{ gap: '0.75rem' }}>
          {LAYERS.map((key) => {
            const isActive = active === key
            const color = LAYER_COLORS[key]
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="relative font-mono text-xs font-bold uppercase tracking-widest-mono px-4 py-2 rounded border transition-colors duration-200"
                style={{
                  borderColor: isActive ? color : '#334155',
                  backgroundColor: isActive ? `${color}15` : 'transparent',
                  color: isActive ? color : '#94a3b8',
                }}
              >
                {layerData[key].label}
                {isActive && (
                  <motion.div
                    layoutId="activeLayerPill"
                    className="absolute inset-0 rounded"
                    style={{
                      border: `1.5px solid ${color}`,
                      boxShadow: `0 0 12px ${color}40`,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Detail content (animated swap) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-lg border bg-navy-900/80 p-6 md:p-8"
            style={{
              borderColor: `${LAYER_COLORS[active]}30`,
              WebkitBackdropFilter: 'blur(8px)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Color accent bar */}
            <div
              className="w-12 h-1 rounded-full mb-5"
              style={{ backgroundColor: LAYER_COLORS[active] }}
              aria-hidden="true"
            />

            {/* Label + name */}
            <div className="flex flex-wrap items-center mb-2" style={{ gap: '0.75rem' }}>
              <span
                className="font-mono text-xs font-semibold uppercase tracking-widest-mono"
                style={{ color: LAYER_COLORS[active] }}
              >
                {layerData[active].label}
              </span>
              <span className="font-display text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                {layerData[active].name}
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-body text-sm text-slate-400 mb-6">
              {layerData[active].subtitle}
            </p>

            {/* Details list */}
            <ul className="space-y-3">
              {layerData[active].details.map((detail, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * j }}
                  className="flex items-start"
                  style={{ gap: '0.75rem' }}
                >
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: LAYER_COLORS[active] }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-slate-300 leading-relaxed">
                    {detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
