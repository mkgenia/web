'use client'

import { motion } from 'framer-motion'
import { Clock, Gear, FolderUser, ChatText, ChartLineUp } from '@phosphor-icons/react'

const problems = [
  { Icon: Clock, title: 'Un comprador pregunta por un piso a las 11PM. Nadie responde.', desc: 'Cada hora sin respuesta es un comprador que ya está hablando con otra agencia.' },
  { Icon: Gear, title: 'Tu equipo pierde horas publicando en portales manualmente.', desc: 'Subir fichas a Idealista, Fotocasa y Habitaclia a mano es tiempo que no genera negocio.' },
  { Icon: FolderUser, title: 'Seguimiento de compradores en Excel o en la cabeza.', desc: 'Sin automatización, los interesados se enfrían antes de que alguien los vuelva a contactar.' },
  { Icon: ChatText, title: 'Captaciones perdidas por no responder antes que la competencia.', desc: 'El propietario que quiere vender llama a varias agencias. El primero en responder se lleva el encargo.' },
  { Icon: ChartLineUp, title: 'Solo puedes gestionar los pisos que tu equipo puede atender.', desc: 'Sin automatización, el número de operaciones está limitado por el tamaño de tu equipo.' },
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
              ¿Cuántas captaciones
              <br />
              <span className="text-slate-500">y ventas pierdes cada día?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-sm">
              El sector inmobiliario es ultra-competitivo. Cada minuto de retraso vale operaciones cerradas.
            </p>
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-100/50 dark:bg-white/[0.03]">
              <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">78%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                de los compradores que no reciben respuesta en menos de 5 minutos contactan con otra agencia.
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

