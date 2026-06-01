import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'li'
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={`
        rounded-2xl border border-white/[0.08] bg-white/[0.04]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        ${hover ? 'transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_20px_60px_rgba(37,99,235,0.08)]' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}
