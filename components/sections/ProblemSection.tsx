'use client'

import { motion } from 'framer-motion'
import { Clock, Gear, FolderUser, ChatText, ChartLineUp } from '@phosphor-icons/react'

const problems = [
  { Icon: Clock, title: 'Un lead escribe a las 11PM. Nadie responde.', desc: 'Cada hora sin respuesta es un cliente que evalúa a tu competencia.' },
  { Icon: Gear, title: 'Tu equipo tarda horas en tareas que duran minutos con IA.', desc: 'El tiempo operativo que no genera valor directo es el mayor coste oculto.' },
  { Icon: FolderUser, title: 'Seguimiento manual de clientes en Excel.', desc: 'Sin automatización, los leads calientes se enfrían antes de que alguien los contacte.' },
  { Icon: ChatText, title: 'Atención al cliente reactiva, no proactiva.', desc: 'Responder cuando ya hay un problema es tarde. La IA anticipa y actúa antes.' },
  { Icon: ChartLineUp, title: 'Procesos que escalan sólo si contratas más personas.', desc: 'El crecimiento lineal tiene un techo. Los sistemas IA escalan sin costes proporcionales.' },
]

export default function ProblemSection() {
  return (
    <section id="problema" className="py-28 lg:py-36 relative z-10">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">
              El problema
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-7">
              ¿Cuántas oportunidades
              <br />
              <span className="text-slate-500">pierdes cada día?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-sm">
              Cada proceso manual es una oportunidad perdida. Los datos lo confirman.
            </p>
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-100/50 dark:bg-white/[0.03]">
              <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">78%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                de los leads que no reciben respuesta en menos de 5 minutos nunca vuelven a contactar.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-2.5">
            {problems.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200/50 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all duration-250 cursor-default"
              >
                <div className="w-8 h-8 shrink-0 rounded-lg border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-accent group-hover:border-accent/20 group-hover:bg-accent/[0.08] transition-all duration-250">
                  <Icon size={16} weight="light" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">{title}</p>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

