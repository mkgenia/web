'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const baseClass = `inline-flex items-center justify-center active:scale-[0.98] transition-all duration-200 ${className}`

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  )
}
