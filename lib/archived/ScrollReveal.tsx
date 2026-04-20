'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

const directionOffsets: Record<string, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const offset = directionOffsets[direction]

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        transform: [
          offset.x ? `translate3d(${offset.x}px, 0, 0)` : '',
          offset.y ? `translate3d(0, ${offset.y}px, 0)` : '',
          !offset.x && !offset.y ? 'translate3d(0, 0, 0)' : '',
        ]
          .filter(Boolean)
          .join(''),
      }}
      whileInView={{
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
