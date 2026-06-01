'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from '@phosphor-icons/react'

const plans = [
  {
    name: 'Arranque',
    description: 'El sistema completo, con funciones esenciales. Ideal para probar y ver resultados antes de escalar.',
    setup: '490',
    price: '290',
    highlight: false,
    custom: false,
    features: [
      '1 agente IA activo',
      '2 integraciones incluidas',
      'Hasta 500 interacciones/mes',
      'Tiempo de respuesta < 90s',
      'Implementación en < 3 semanas',
      'Soporte por email 30 días',
      'Panel de actividad básico',
    ],
    cta: 'Empezar ahora',
    href: '#contacto',
  },
  {
    name: 'Crecimiento',
    description: 'El sistema a pleno rendimiento. Con optimización activa y seguimiento mensual para que siempre mejore.',
    setup: '1.500',
    price: '690',
    highlight: true,
    custom: false,
    badge: 'Más popular',
    features: [
      'Hasta 5 agentes IA activos',
      'Integraciones ilimitadas',
      'Interacciones ilimitadas',
      'Tiempo de respuesta < 90s',
      'Implementación en < 2 semanas',
      'Optimización activa mensual',
      'Informe de rendimiento mensual',
      'Soporte prioritario 90 días',
    ],
    cta: 'Reservar consulta',
    href: '#contacto',
  },
  {
    name: 'A medida',
    description: 'Arquitectura diseñada desde cero para tu operativa. Para quien necesita algo específico o a gran escala.',
    setup: null,
    price: null,
    highlight: false,
    custom: true,
    features: [
      'Agentes y flujos sin límite',
      'Integraciones con sistemas propios (ERP, CRM)',
      'SLA y tiempos personalizados',
      'Formación al equipo incluida',
      'Account manager dedicado',
      'Contrato y condiciones flexibles',
    ],
    cta: 'Hablemos de tu proyecto',
    href: '#contacto',
  },
]

type Plan = typeof plans[number]

function CardContent({ plan, highlight }: { plan: Plan; highlight: boolean }) {
  const isCustom = plan.custom

  return (
    <div className="flex flex-col flex-1">
      {/* Badge */}
      {'badge' in plan && plan.badge ? (
        <span
          className="self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-5 text-white"
          style={{ background: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)' }}
        >
          {plan.badge}
        </span>
      ) : (
        <div className="mb-5 h-[26px]" />
      )}

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{plan.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{plan.description}</p>

      {isCustom ? (
        <div className="mb-2">
          <p
            className="text-3xl font-bold tracking-tight"
            style={{ backgroundImage: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            Precio a consultar
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Presupuesto personalizado según alcance
          </p>
        </div>
      ) : (
        <div className="mb-2">
          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">€{plan.price}</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm mb-1.5">/mes</span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            + €{plan.setup} de implementación (pago único)
          </p>
        </div>
      )}

      <div className="w-full h-px bg-slate-100 dark:bg-white/[0.06] my-6" />

      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: 'linear-gradient(135deg, #3B3FFF, #F020F0)' }}
            >
              <Check size={9} weight="bold" color="#fff" />
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
          highlight
            ? 'bg-slate-900 dark:bg-white text-white dark:text-[#09090b] hover:opacity-90'
            : 'border border-slate-200 dark:border-white/[0.12] text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/[0.3] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        {plan.cta}
        <ArrowRight size={14} weight="bold" />
      </a>
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function PricingSection() {
  return (
    <section id="precios" className="py-28 lg:py-36 relative">
      <div className="relative z-10 max-w-container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Precios</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5">
            Inversión clara,
            <br />
            <span className="text-slate-500 dark:text-slate-400">resultados medibles</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Sin letra pequeña. Sin costes por mensaje. Sin sorpresas.
            <br />
            Pago único de implementación y una cuota mensual fija.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) =>
            plan.highlight ? (
              /* Highlighted card: gradient border wrapper + theme-aware inner */
              <motion.div key={plan.name} variants={item} className="rounded-[17px] p-[1.5px] flex" style={{ background: 'linear-gradient(135deg, #3B3FFF, #5B4FFF, #F020F0)' }}>
                <div className="bg-white dark:bg-[#0c0c10] rounded-2xl flex flex-col flex-1 p-7">
                  <CardContent plan={plan} highlight />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={plan.name}
                variants={item}
                className="rounded-2xl flex flex-col bg-white/60 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.07] p-7"
              >
                <CardContent plan={plan} highlight={false} />
              </motion.div>
            )
          )}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-xs text-slate-400 dark:text-slate-600 mt-10"
        >
          ¿Tienes necesidades específicas?{' '}
          <a href="#contacto" className="text-accent hover:underline underline-offset-2">
            Hablemos y creamos un plan a medida
          </a>
          . Todos los planes incluyen 20% de descuento con pago anual.
        </motion.p>
      </div>
    </section>
  )
}
