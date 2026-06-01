'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

export default function PlataformaCTA() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(91,79,255,0.08) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-6">
            Tu competencia ya está
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)' }}
            >
              automatizando.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Primera llamada gratuita de 30 minutos. Analizamos tu agencia y te decimos
            exactamente qué automatizar para ver resultados en los primeros 30 días.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full gap-2 text-sm flex items-center shadow-[0_0_40px_rgba(59,63,255,0.18)] transition-all duration-200"
            >
              Reservar llamada gratuita
              <ArrowRight size={15} weight="bold" />
            </Link>
            <Link
              href="/#precios"
              className="px-7 py-3.5 border border-slate-300 dark:border-white/[0.18] hover:border-slate-400 dark:hover:border-white/[0.35] text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white rounded-full text-sm font-medium transition-all duration-200"
            >
              Ver planes y precios
            </Link>
          </div>
          <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
            Sin compromiso · Sin tarjeta de crédito · Respuesta en menos de 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
