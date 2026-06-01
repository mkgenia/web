'use client'

import { motion } from 'framer-motion'

export default function NosotrosHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-slate-50 dark:bg-[#09090b]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 100% 0%, rgba(240,32,240,0.10) 0%, transparent 55%), radial-gradient(ellipse 45% 50% at 0% 80%, rgba(59,63,255,0.10) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-6"
          >
            Sobre nosotros
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.0] tracking-tight mb-8"
          >
            Construimos sistemas IA
            <br />
            <span className="text-slate-400 dark:text-slate-500">para quien vende inmuebles.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
          >
            No somos una agencia de marketing digital que ha pivotado a la IA.
            Somos un equipo especializado desde el primer día en automatizar
            el ciclo de venta inmobiliario con inteligencia artificial.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
