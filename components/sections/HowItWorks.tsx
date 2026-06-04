'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagnifyingGlass, Compass, Wrench, RocketLaunch, TrendUp } from '@phosphor-icons/react'

const steps = [
  { n: '01', Icon: MagnifyingGlass, verb: 'Auditamos', title: 'Analizamos tu agencia y tus portales en 48h', desc: 'Identificamos de dónde vienen tus leads, cuántos pierdes por respuesta lenta y qué procesos internos se pueden automatizar ya.' },
  { n: '02', Icon: Compass, verb: 'Diseñamos', title: 'Mapeamos qué automatizar primero para mayor impacto', desc: 'Priorizamos bot de atención, captación de portales o seguimiento según lo que más operaciones te haga perder ahora mismo.' },
  { n: '03', Icon: Wrench, verb: 'Construimos', title: 'Desarrollamos e integramos los sistemas IA', desc: 'Configuramos el bot, conectamos los portales con tu CRM y montamos los flujos de seguimiento. Sin tocar lo que ya te funciona.' },
  { n: '04', Icon: RocketLaunch, verb: 'Lanzamos', title: 'Activamos con seguimiento en tiempo real', desc: 'Desde el primer día tienes el panel completo: leads entrando, conversaciones del bot y visitas agendadas — todo en directo.' },
  { n: '05', Icon: TrendUp, verb: 'Escalamos', title: 'Optimizamos con datos reales cada semana', desc: 'Revisamos métricas contigo — tasa de respuesta, visitas generadas, operaciones cerradas — y ajustamos para sacar más de cada lead.' },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end 0.2'] })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="proceso" ref={sectionRef} className="py-28 lg:py-36 relative z-10">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-20"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">El proceso</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            De cero a funcionando
            <br />
            <span className="text-slate-500">en 3 semanas</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-200 dark:bg-white/[0.05]">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-accent/50 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-10 pl-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[46px] w-8 h-8 rounded-full border border-slate-200 dark:border-white/[0.10] bg-white dark:bg-[#09090b] flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <step.Icon size={14} weight="light" />
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-250">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-accent/50 tracking-widest">{step.n}</span>
                    <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">{step.verb}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

