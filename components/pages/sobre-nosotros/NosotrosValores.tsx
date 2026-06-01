'use client'

import { motion } from 'framer-motion'

const valores = [
  {
    n: '01',
    titulo: 'Especialización, no generalismo',
    desc: 'Solo trabajamos con inmobiliarias. Eso nos permite entender el sector profundamente y construir sistemas que realmente funcionan en el día a día de una agencia.',
  },
  {
    n: '02',
    titulo: 'Resultados medibles primero',
    desc: 'Cada implementación arranca con métricas base. No hablamos de éxito sin números. Tiempo de respuesta, leads cualificados, operaciones cerradas — todo medido desde el día uno.',
  },
  {
    n: '03',
    titulo: 'Rapidez sin sacrificar calidad',
    desc: 'Implementamos en 3 semanas porque hemos construido el mismo sistema muchas veces. La rapidez viene de la experiencia, no de hacer las cosas a medias.',
  },
  {
    n: '04',
    titulo: 'Transparencia total',
    desc: 'Sin contratos trampa. Sin costes ocultos. Si el sistema no funciona, lo arreglamos. Creemos que la relación con nuestros clientes tiene que ser tan limpia como nuestro código.',
  },
]

export default function NosotrosValores() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 55% at 5% 85%, rgba(59,63,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 95% 10%, rgba(240,32,240,0.07) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Cómo trabajamos</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Lo que nos define
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/50 dark:bg-white/[0.06] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/[0.06]">
          {valores.map(({ n, titulo, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-8 bg-white dark:bg-[#09090b] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all duration-200"
            >
              <span className="text-xs font-bold text-accent/40 tracking-widest block mb-4">{n}</span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{titulo}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
