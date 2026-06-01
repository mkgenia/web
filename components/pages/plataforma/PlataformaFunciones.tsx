'use client'

import { motion } from 'framer-motion'
import {
  Robot, WhatsappLogo, UsersThree, CalendarCheck,
  Database, ChartLineUp
} from '@phosphor-icons/react'

const funciones = [
  {
    Icon: Robot,
    title: 'Captación y respuesta inmediata',
    desc: 'El sistema recibe el lead de Idealista, Fotocasa o tu web y responde en menos de 90 segundos — a cualquier hora del día, cualquier día del año.',
    tag: 'Disponible 24/7',
  },
  {
    Icon: UsersThree,
    title: 'Cualificación automática',
    desc: 'Hace las preguntas clave — presupuesto, zona, urgencia — y clasifica cada lead en frío, templado o caliente para que tu equipo sepa dónde centrar la energía.',
    tag: 'Filtrado inteligente',
  },
  {
    Icon: WhatsappLogo,
    title: 'Seguimiento por WhatsApp',
    desc: 'Mantiene la conversación activa con cada contacto. Recuerda plazos, envía fichas de inmuebles y reactiva leads fríos de forma automática y natural.',
    tag: 'Canal favorito del comprador',
  },
  {
    Icon: CalendarCheck,
    title: 'Agenda visitas sin fricciones',
    desc: 'El agente consulta la disponibilidad de tu equipo y propone huecos directamente en la conversación. La visita queda confirmada sin llamadas ni emails de ida y vuelta.',
    tag: 'Cero coordinación manual',
  },
  {
    Icon: Database,
    title: 'CRM siempre actualizado',
    desc: 'Cada interacción queda registrada en tu CRM en tiempo real. Sin duplicados, sin datos perdidos. Tu pipeline refleja la realidad en todo momento.',
    tag: 'Integración nativa',
  },
  {
    Icon: ChartLineUp,
    title: 'Informes de rendimiento',
    desc: 'Cada semana recibes un resumen con leads captados, cualificados, visitas agendadas y conversiones. Datos reales para tomar decisiones reales.',
    tag: 'Visibilidad total',
  },
]

export default function PlataformaFunciones() {
  return (
    <section id="funciones" className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 55% at 95% 40%, rgba(240,32,240,0.08) 0%, transparent 60%), radial-gradient(ellipse 45% 50% at 5% 60%, rgba(59,63,255,0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Funcionalidades</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5">
            Todo lo que hace
            <br />
            <span className="text-slate-500 dark:text-slate-400">el sistema por ti</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            No son módulos separados que hay que conectar. Es un sistema único que entiende
            el ciclo de venta inmobiliario y actúa en cada fase sin intervención humana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/50 dark:bg-white/[0.06] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/[0.06]">
          {funciones.map(({ Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-7 bg-white dark:bg-[#09090b] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all duration-200 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-accent group-hover:border-accent/20 group-hover:bg-accent/[0.07] transition-all duration-200 group-hover:scale-110">
                  <Icon size={18} weight="light" />
                </div>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-600 tracking-wide border border-slate-200 dark:border-white/[0.06] px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
