'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

export default function CasosCTA() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(91,79,255,0.07) 0%, transparent 65%)' }} />
      <div className="relative z-10 max-w-container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
            ¿Tu agencia es la próxima?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Reserva una llamada gratuita de 30 minutos. Analizamos tu agencia
            y te decimos exactamente qué automatizar primero.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full text-sm shadow-[0_0_40px_rgba(59,63,255,0.18)] transition-all duration-200"
          >
            Reservar llamada gratuita
            <ArrowRight size={15} weight="bold" />
          </Link>
          <p className="mt-6 text-xs text-slate-400 dark:text-slate-600">Sin compromiso · Respuesta en menos de 24h</p>
        </motion.div>
      </div>
    </section>
  )
}
