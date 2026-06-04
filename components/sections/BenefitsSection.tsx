'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  {
    value: 3.2,
    decimals: 1,
    prefix: '',
    suffix: '×',
    label: 'más captaciones conseguidas',
    sub: 'en los primeros 3 meses',
    accent: 'from-accent/20 to-accent/0',
    border: 'border-accent/20',
    text: 'text-accent',
  },
  {
    value: 74,
    decimals: 0,
    prefix: '−',
    suffix: '%',
    label: 'menos tiempo en gestión manual',
    sub: 'portales, fichas y follow-ups',
    accent: 'from-[#3B3FFF]/20 to-[#3B3FFF]/0',
    border: 'border-[#3B3FFF]/20',
    text: 'text-[#6366FF]',
  },
  {
    value: 90,
    decimals: 0,
    prefix: '< ',
    suffix: 's',
    label: 'respuesta a compradores',
    sub: 'día y noche, sin agente',
    accent: 'from-[#5B4FFF]/20 to-[#5B4FFF]/0',
    border: 'border-[#5B4FFF]/20',
    text: 'text-[#8B7FFF]',
  },
  {
    value: 47,
    decimals: 0,
    prefix: '+',
    suffix: '%',
    label: 'más visitas a operación cerrada',
    sub: 'en los primeros 90 días',
    accent: 'from-[#F020F0]/20 to-[#F020F0]/0',
    border: 'border-[#F020F0]/20',
    text: 'text-[#F060F0]',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-28 lg:py-36 relative z-10">
      <div className="max-w-container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Resultados</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Números que ves
            <br />
            <span className="text-slate-500 dark:text-slate-500">en los primeros 90 días</span>
          </h2>
        </motion.div>

        {/* Stats grid — 4 equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative rounded-2xl border ${s.border} bg-slate-100/50 dark:bg-white/[0.025] p-7 overflow-hidden group hover:bg-slate-200/50 dark:hover:bg-white/[0.04] transition-all duration-300`}
            >
              {/* Gradient glow top */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${s.accent} pointer-events-none`} />

              <div className="relative">
                <p className={`text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4 ${s.text}`}>
                  {s.prefix}<AnimatedCounter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{s.label}</p>
                <p className="text-xs text-slate-600">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature banner — 24/7 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.025] p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Atención a compradores 24/7 — sin agente en guardia</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500">
                Tu bot inmobiliario responde, cualifica y agenda visitas los fines de semana, festivos y madrugadas. Sin coste de personal.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-green-400/20 bg-green-400/[0.06] shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Sistema activo · última respuesta hace 23s</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
