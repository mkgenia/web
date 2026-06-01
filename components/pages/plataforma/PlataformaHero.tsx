'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Bell, Robot, WhatsappLogo, CalendarCheck, Database } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const eventos = [
  {
    Icon: Bell,
    color: '#3B3FFF',
    title: 'Lead captado · Idealista',
    sub: 'Juan García — Piso 3 hab. Barcelona',
    tiempo: 'ahora',
  },
  {
    Icon: Robot,
    color: '#5B4FFF',
    title: 'IA respondiendo',
    sub: '"Hola Juan, gracias por tu interés..."',
    tiempo: '12s',
  },
  {
    Icon: WhatsappLogo,
    color: '#25D366',
    title: 'WhatsApp enviado',
    sub: 'Ficha del inmueble + fotos adjuntas',
    tiempo: '38s',
  },
  {
    Icon: CalendarCheck,
    color: '#F020F0',
    title: 'Visita agendada',
    sub: 'Jueves 10:00 — confirmada por el lead',
    tiempo: '4 min',
  },
  {
    Icon: Database,
    color: '#8B7FFF',
    title: 'CRM actualizado',
    sub: 'Lead marcado como caliente · Pipeline',
    tiempo: '4 min',
  },
]

const stats = [
  { value: '< 90s', label: 'Respuesta al lead' },
  { value: '+3.2×', label: 'Más leads cualificados' },
  { value: '74%', label: 'Menos tiempo operativo' },
]

function LiveFeed() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    if (visible >= eventos.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 1400)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D1117] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Sistema activo · 24h</span>
        </div>
        <span className="text-[10px] text-slate-400 dark:text-slate-600 font-medium tracking-wide">EN VIVO</span>
      </div>

      {/* Eventos */}
      <div className="p-4 flex flex-col gap-2 min-h-[320px]">
        <AnimatePresence initial={false}>
          {eventos.slice(0, visible).map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 dark:border-white/[0.05] bg-slate-50 dark:bg-white/[0.02]"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${ev.color}18` }}
              >
                <ev.Icon size={14} weight="fill" style={{ color: ev.color }} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">{ev.title}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-500 truncate">{ev.sub}</p>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-600 shrink-0">{ev.tiempo}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {visible < eventos.length && (
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="flex gap-1">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20"
                />
              ))}
            </span>
            <span className="text-[11px] text-slate-400">Procesando...</span>
          </div>
        )}
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-3 border-t border-slate-100 dark:border-white/[0.06]">
        {stats.map((s) => (
          <div key={s.label} className="py-3 px-4 text-center border-r last:border-r-0 border-slate-100 dark:border-white/[0.06]">
            <p
              className="text-base font-bold"
              style={{ backgroundImage: 'linear-gradient(110deg,#3B3FFF,#F020F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {s.value}
            </p>
            <p className="text-[9px] text-slate-400 dark:text-slate-600 leading-tight mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PlataformaHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 bg-slate-50 dark:bg-[#09090b]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 dark:hidden" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Single subtle glow — left */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 70% at 0% 50%, rgba(59,63,255,0.12) 0%, transparent 60%)' }} />
      {/* Single subtle glow — right */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 60% at 100% 30%, rgba(240,32,240,0.10) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.12] bg-white/80 dark:bg-white/[0.06] mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Diseñado exclusivamente para inmobiliarias
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6"
          >
            De la consulta
            <br />
            a la visita
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)' }}
            >
              sin tocar nada.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg"
          >
            El sistema capta el lead, lo cualifica, hace el seguimiento por WhatsApp
            y agenda la visita — de forma completamente automática. Tu equipo solo
            aparece cuando el cliente ya está listo para comprar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full text-sm shadow-[0_0_40px_rgba(59,63,255,0.18)] transition-all duration-200"
            >
              Ver una demo en vivo
              <ArrowRight size={15} weight="bold" />
            </Link>
            <Link
              href="#funciones"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 dark:border-white/[0.18] hover:border-slate-400 dark:hover:border-white/[0.35] text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white rounded-full text-sm font-medium transition-all duration-200"
            >
              Ver todas las funciones
            </Link>
          </motion.div>
        </div>

        {/* Right — live feed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LiveFeed />
        </motion.div>

      </div>
    </section>
  )
}
