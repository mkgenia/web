'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Robot, Users, Lightning, CheckCircle } from '@phosphor-icons/react'

const chatMessages = [
  { role: 'user', text: 'Hola, me interesa vuestro servicio.' },
  { role: 'ai', text: 'Hola Ana. Cuéntame más sobre tu negocio. ¿Cuántos leads recibes al mes aproximadamente?' },
  { role: 'user', text: 'Unos 200 al mes, pero los respondemos tarde.' },
  { role: 'ai', text: 'Entendido. Puedo mostrarte cómo reducir el tiempo de respuesta a menos de 90 segundos. ¿Cuándo tienes 20 minutos esta semana?' },
  { role: 'user', text: 'El jueves a las 10h.' },
  { role: 'ai', text: 'Perfecto, he agendado la llamada para el jueves a las 10:00. Te envío la invitación.' },
]

const HeroMockup = React.memo(function HeroMockup() {
  const [visibleCount, setVisibleCount] = useState(1)
  const [leadsCount, setLeadsCount] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= chatMessages.length ? 1 : prev + 1))
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadsCount((prev) => prev + 1)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full max-w-[420px]"
    >
      <div className="rounded-2xl border border-white/[0.10] bg-[#0D1526]/90 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[11px] text-slate-500 ml-2 font-medium">MKGENIA · Dashboard</span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 border-b border-white/[0.06]">
          <div className="p-3 border-r border-white/[0.06]">
            <div className="flex items-center gap-1 mb-1">
              <Users size={11} className="text-accent" />
              <span className="text-[10px] text-slate-500">Leads hoy</span>
            </div>
            <motion.span
              key={leadsCount}
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-lg font-bold text-slate-100"
            >
              {leadsCount}
            </motion.span>
          </div>
          <div className="p-3 border-r border-white/[0.06]">
            <div className="flex items-center gap-1 mb-1">
              <Lightning size={11} className="text-green-400" />
              <span className="text-[10px] text-slate-500">Respuesta</span>
            </div>
            <span className="text-lg font-bold text-slate-100">47s</span>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-1 mb-1">
              <Robot size={11} className="text-accent-soft" />
              <span className="text-[10px] text-slate-500">Activas</span>
            </div>
            <span className="text-lg font-bold text-slate-100">4</span>
          </div>
        </div>

        {/* Chat */}
        <div className="p-4 flex flex-col gap-2.5 min-h-[210px]">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="inline-flex w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] text-slate-400 font-medium">Automatización activa</span>
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            {chatMessages.slice(0, visibleCount).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
                    <Robot size={10} className="text-accent" weight="fill" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3 py-2 rounded-xl text-[11px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-br-sm'
                      : 'bg-white/[0.07] text-slate-300 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Status bar */}
        <div className="px-4 py-2.5 border-t border-white/[0.06] bg-white/[0.02] flex items-center gap-2">
          <CheckCircle size={12} className="text-green-400" weight="fill" />
          <span className="text-[10px] text-slate-500">4 automatizaciones activas · Último lead: hace 2 min</span>
        </div>
      </div>
    </motion.div>
  )
})

export default HeroMockup
