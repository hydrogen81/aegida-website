'use client'

import { motion } from 'framer-motion'

interface ShieldSVGProps {
  size?: number
  className?: string
  animated?: boolean
}

export default function ShieldSVG({
  size = 120,
  className = '',
  animated = false,
}: ShieldSVGProps) {
  const shieldPath =
    'M60 4 L112 24 L112 62 C112 90 90 112 60 120 C30 112 8 90 8 62 L8 24 Z'

  // Two upward-pointing chevrons forming a geometric "A" shape
  const chevronOuter = 'M60 30 L40 72 L46 72 L60 42 L74 72 L80 72 Z'
  const chevronInner = 'M60 44 L48 72 L53 72 L60 56 L67 72 L72 72 Z'

  if (!animated) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AEGIDA shield logo"
        role="img"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2540" />
            <stop offset="50%" stopColor="#131b2e" />
            <stop offset="100%" stopColor="#0d1321" />
          </linearGradient>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#243055" />
            <stop offset="100%" stopColor="#1a2540" />
          </linearGradient>
        </defs>
        <path
          d={shieldPath}
          fill="url(#shieldGrad)"
          stroke="url(#shieldStroke)"
          strokeWidth="1.5"
        />
        <path d={chevronOuter} fill="url(#silverGrad)" />
        <path d={chevronInner} fill="url(#silverGrad)" opacity="0.6" />
      </svg>
    )
  }

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AEGIDA shield logo"
        role="img"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <defs>
          <linearGradient id="shieldGradAnim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2540" />
            <stop offset="50%" stopColor="#131b2e" />
            <stop offset="100%" stopColor="#0d1321" />
          </linearGradient>
          <linearGradient id="silverGradAnim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="shieldStrokeAnim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#243055" />
            <stop offset="100%" stopColor="#1a2540" />
          </linearGradient>
        </defs>

        {/* Shield body */}
        <motion.path
          d={shieldPath}
          fill="url(#shieldGradAnim)"
          stroke="url(#shieldStrokeAnim)"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ transformOrigin: '60px 62px' }}
        />

        {/* Chevron "A" outer */}
        <motion.path
          d={chevronOuter}
          fill="url(#silverGradAnim)"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Chevron "A" inner */}
        <motion.path
          d={chevronInner}
          fill="url(#silverGradAnim)"
          opacity="0.6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        />

        {/* Circuit lines - decorative horizontal lines */}
        <motion.line
          x1="20" y1="84" x2="50" y2="84"
          stroke="#243055"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        <motion.line
          x1="70" y1="84" x2="100" y2="84"
          stroke="#243055"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        <motion.circle
          cx="50" cy="84" r="1.5"
          fill="#b8960c"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
        />
        <motion.circle
          cx="70" cy="84" r="1.5"
          fill="#b8960c"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 1, 0.4] }}
          transition={{ duration: 2, delay: 1.4, repeat: Infinity }}
        />
      </svg>

      {/* Orbital ring */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: size * 1.15,
          height: size * 1.15,
          marginTop: -(size * 1.15) / 2,
          marginLeft: -(size * 1.15) / 2,
          borderRadius: '50%',
          border: '1px solid rgba(184, 150, 12, 0.15)',
          zIndex: 1,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: 4,
            height: 4,
            marginLeft: -2,
            marginTop: -2,
            borderRadius: '50%',
            background: '#b8960c',
            opacity: 0.6,
          }}
        />
      </motion.div>
    </div>
  )
}
