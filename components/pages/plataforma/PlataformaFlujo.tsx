'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bell, ChatCircleText, FunnelSimple, CalendarCheck, Handshake } from '@phosphor-icons/react'

const pasos = [
  {
    n: '01',
    Icon: Bell,
    verb: 'Llega el lead',
    title: 'Un comprador consulta por un inmueble en Idealista',
    desc: 'Da igual si son las 3 de la mañana o un domingo. El sistema lo recibe al instante desde cualquier portal o formulario de tu web.',
  },
  {
    n: '02',
    Icon: ChatCircleText,
    verb: 'Responde solo',
    title: 'Respuesta personalizada en menos de 90 segundos',
    desc: 'El agente IA saluda con el nombre del lead, menciona el inmueble concreto que consultó y abre conversación por WhatsApp o email según su preferencia.',
  },
  {
    n: '03',
    Icon: FunnelSimple,
    verb: 'Cualifica',
    title: 'Descubre si es un comprador real',
    desc: 'En 3 o 4 mensajes naturales recaba presupuesto, zona de interés, urgencia y situación actual. Si cumple criterios, lo marca como lead caliente y alerta a tu equipo.',
  },
  {
    n: '04',
    Icon: CalendarCheck,
    verb: 'Agenda',
    title: 'Propone y confirma la visita',
    desc: 'Consulta el calendario de tus agentes en tiempo real y ofrece huecos disponibles. El lead confirma directamente en el chat. Cero llamadas de coordinación.',
  },
  {
    n: '05',
    Icon: Handshake,
    verb: 'Cierra',
    title: 'Tu agente llega a la visita ya con contexto',
    desc: 'Todo queda en el CRM: conversación completa, perfil del comprador, inmuebles que le interesan y historial de contacto. Tu equipo solo tiene que aparecer y cerrar.',
  },
]

export default function PlataformaFlujo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end 0.2'] })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 55% at 5% 85%, rgba(59,63,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 90% 10%, rgba(240,32,240,0.08) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-20"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">El flujo</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5">
            Un lead entra.
            <br />
            <span className="text-slate-500 dark:text-slate-400">Esto es lo que pasa</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            De la primera consulta a la visita confirmada — completamente automático.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-200 dark:bg-white/[0.05]">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-accent/50 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-10 pl-14">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="absolute -left-[46px] w-8 h-8 rounded-full border border-slate-200 dark:border-white/[0.10] bg-white dark:bg-[#09090b] flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <paso.Icon size={14} weight="light" />
                </div>
                <div className="p-5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-250">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-accent/50 tracking-widest">{paso.n}</span>
                    <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">{paso.verb}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1.5">{paso.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-500 leading-relaxed">{paso.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
