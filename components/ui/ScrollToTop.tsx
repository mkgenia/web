'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-[#09090b] shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
