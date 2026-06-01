'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from '@phosphor-icons/react'

const COOKIE_KEY = 'mkgenia_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Small delay so it doesn't flash on first render
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:max-w-sm z-[100]"
          role="dialog"
          aria-label="Aviso de cookies"
        >
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/[0.10] bg-white/95 dark:bg-[#111113]/95 backdrop-blur-xl shadow-2xl p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">🍪 Usamos cookies</p>
              <button
                onClick={reject}
                className="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="Cerrar"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Puedes{' '}
              <Link href="/politica-de-cookies" className="underline hover:text-accent">
                leer más aquí
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                id="cookie-accept"
                className="flex-1 px-4 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] text-xs font-semibold rounded-full transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={reject}
                id="cookie-reject"
                className="px-4 py-2 border border-slate-200 dark:border-white/[0.12] text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/[0.2] text-xs font-medium rounded-full transition-colors"
              >
                Solo esenciales
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
