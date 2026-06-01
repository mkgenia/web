'use client'

import { motion } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'

const testimonios = [
  {
    quote: 'El primer mes tuve que revisar las métricas dos veces porque no me las creía. Pasamos de responder leads en horas a hacerlo en segundos, y eso se nota directamente en el número de visitas.',
    nombre: 'Carlos M.',
    cargo: 'Director comercial · Grupo Inmobiliario Levante',
  },
  {
    quote: 'Lo mejor no es solo el tiempo que ahorramos. Es que el sistema nunca olvida hacer un seguimiento. Antes perdíamos operaciones por falta de constancia. Ahora eso no existe.',
    nombre: 'Laura P.',
    cargo: 'Gerente · Fincas Mediterrània',
  },
  {
    quote: 'Éramos tres personas y teníamos capacidad para atender como si fuéramos diez. Nuestros clientes ni notan que es automático porque el tono es completamente natural.',
    nombre: 'Mikel A.',
    cargo: 'Fundador · Inmobiliaria Costa Norte',
  },
]

export default function CasosTestimonials() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 45% at 80% 5%, rgba(240,32,240,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 10% 90%, rgba(59,63,255,0.07) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-12 text-center"
        >
          En sus propias palabras
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] flex flex-col gap-5"
            >
              <Quotes size={20} className="text-accent/40" weight="fill" />
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.nombre}</p>
                <p className="text-xs text-slate-500">{t.cargo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
