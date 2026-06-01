'use client'

import { motion } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote: 'Pasamos de responder leads en 6 horas a 2 minutos. Las ventas subieron un 38% ese trimestre sin contratar a nadie.',
    name: 'María Fernández',
    role: 'Directora Comercial',
    company: 'Castellano Industrial',
    initials: 'MF',
  },
  {
    quote: 'Automatizamos el seguimiento de 400 clientes mensuales. Ahora lo gestiona la IA sola y el equipo se centra en cerrar.',
    name: 'Javier Pons',
    role: 'CEO',
    company: 'Arquitectura Pons',
    initials: 'JP',
  },
  {
    quote: 'Implementaron el sistema en 3 semanas. El equipo dejó de hacer trabajo repetitivo y recuperamos 12 horas semanales.',
    name: 'Laura Broto',
    role: 'COO',
    company: 'Broto Partners',
    initials: 'LB',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 relative">
      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Clientes</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Lo que dicen
            <br />
            <span className="text-slate-500">los que ya lo usan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200/50 dark:bg-white/[0.06] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/[0.06]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-between p-8 bg-white dark:bg-[#09090b] hover:bg-slate-50 dark:hover:bg-white/[0.025] transition-colors duration-250"
            >
              <div>
                <Quotes size={18} className="text-accent/40 mb-5" weight="fill" />
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">&quot;{t.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200/50 dark:border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/50 dark:border-white/[0.08] flex items-center justify-center shrink-0">
                  <span className="text-slate-900 dark:text-white text-xs font-semibold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-600">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

