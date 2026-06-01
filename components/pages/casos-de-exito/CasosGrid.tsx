'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const casos = [
  {
    empresa: 'Grupo Inmobiliario Levante',
    tipo: 'Agencia mediana · Valencia',
    reto: 'Perdían el 60% de los leads de Idealista por responder tarde. Su equipo de 8 agentes gestionaba manualmente 400 consultas al mes.',
    solucion: 'Implementamos el agente de captación conectado a Idealista y Fotocasa con respuesta automática por WhatsApp y cualificación en tiempo real.',
    resultados: [
      { valor: '< 45s', label: 'Tiempo medio de respuesta' },
      { valor: '+210%', label: 'Leads cualificados/mes' },
      { valor: '31h', label: 'Ahorro semanal del equipo' },
    ],
    plazo: '2 semanas de implementación',
    color: '#3B3FFF',
  },
  {
    empresa: 'Fincas Mediterrània',
    tipo: 'Red de oficinas · Barcelona',
    reto: 'El seguimiento post-visita era inconsistente. Los agentes olvidaban hacer seguimiento y perdían operaciones en la fase de decisión.',
    solucion: 'Desplegamos el sistema de seguimiento automático con secuencias de WhatsApp personalizadas según el perfil del comprador y el inmueble visitado.',
    resultados: [
      { valor: '+47%', label: 'Mejora en conversión' },
      { valor: '0', label: 'Leads sin seguimiento' },
      { valor: '22%', label: 'Más operaciones cerradas' },
    ],
    plazo: '3 semanas de implementación',
    color: '#5B4FFF',
  },
  {
    empresa: 'Inmobiliaria Costa Norte',
    tipo: 'Agencia boutique · Bilbao',
    reto: 'Equipo de 3 personas que no daba abasto. Querían escalar sin contratar más personal, manteniendo la atención personalizada que los diferenciaba.',
    solucion: 'Sistema completo con agente de captación, cualificación, seguimiento y agenda integrada en su CRM. El equipo solo interviene en visitas y firma.',
    resultados: [
      { valor: '3.2×', label: 'Más capacidad sin contratar' },
      { valor: '90%', label: 'Tareas automatizadas' },
      { valor: '18h', label: 'Liberadas por agente/semana' },
    ],
    plazo: '2 semanas de implementación',
    color: '#F020F0',
  },
]

export default function CasosGrid() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(91,79,255,0.05) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6 flex flex-col gap-8">
        {casos.map((caso, i) => (
          <motion.article
            key={caso.empresa}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] overflow-hidden"
          >
            {/* Top bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${caso.color}, #F020F0)` }} />

            <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Empresa + reto */}
              <div className="lg:col-span-1">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-600 tracking-widest uppercase mb-2">{caso.tipo}</p>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{caso.empresa}</h2>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">El reto</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{caso.reto}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">La solución</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{caso.solucion}</p>
                </div>
                <p className="mt-4 text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  {caso.plazo}
                </p>
              </div>

              {/* Resultados */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Resultados</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caso.resultados.map((r) => (
                    <div
                      key={r.label}
                      className="p-6 rounded-xl border border-slate-100 dark:border-white/[0.05] bg-slate-50 dark:bg-white/[0.02]"
                    >
                      <p className="text-4xl font-bold mb-1" style={{ color: caso.color }}>{r.valor}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 leading-tight">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
