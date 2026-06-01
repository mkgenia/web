'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import React from 'react'

interface AnimatedCounterProps {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

const AnimatedCounter = React.memo(function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })
  const spring = useSpring(0, { stiffness: 55, damping: 18 })
  const display = useTransform(spring, (val) => `${prefix}${val.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    if (isInView) spring.set(to)
  }, [isInView, spring, to])

  return (
    <span ref={containerRef} className={className}>
      <motion.span>{display}</motion.span>
    </span>
  )
})

export default AnimatedCounter
