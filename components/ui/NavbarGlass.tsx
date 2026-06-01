'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { List, X } from '@phosphor-icons/react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/plataforma', label: 'Plataforma' },
  { href: '/#precios', label: 'Precios' },
  { href: '/casos-de-exito', label: 'Casos de éxito' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
]

export default function NavbarGlass() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'backdrop-blur-2xl bg-white/50 dark:bg-[#09090b]/50 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="MKGENIA"
              width={200}
              height={56}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contacto"
              className="px-5 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] text-sm font-semibold rounded-full transition-all duration-200 active:scale-[0.98]"
            >
              Hablar con un experto
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl bg-white/95 dark:bg-[#09090b]/95 border-b border-slate-200/50 dark:border-white/[0.06] md:hidden overflow-hidden"
          >
            <div className="max-w-container mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-base border-b border-slate-200/50 dark:border-white/[0.05] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-[#09090b] text-sm font-semibold rounded-full text-center"
              >
                Hablar con un experto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

