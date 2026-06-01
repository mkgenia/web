'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '+47', label: 'Inmobiliarias activas' },
  { value: '3.2×', label: 'Más leads cualificados' },
  { value: '74%', label: 'Menos tiempo operativo' },
]

export default function CasosHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50 dark:bg-[#09090b]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(59,63,255,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(240,32,240,0.10) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-6"
            >
              Casos de éxito
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.0] tracking-tight mb-6"
            >
              Inmobiliarias reales.
              <br />
              <span className="text-slate-400 dark:text-slate-500">Resultados reales.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md"
            >
              No prometemos, demostramos. Estas agencias ya tienen el sistema
              funcionando y comparten sus números reales.
            </motion.p>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] text-center"
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ backgroundImage: 'linear-gradient(110deg,#3B3FFF,#F020F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
