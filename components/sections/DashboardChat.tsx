'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Robot } from '@phosphor-icons/react'

const conversation = [
  { role: 'user', name: 'Carlos R.', text: 'Hola, vi el piso de 3 habitaciones en Idealista, ¿sigue disponible?' },
  { role: 'ai', text: 'Hola Carlos, sí está disponible. Son 95m², planta 4ª con ascensor, zona Eixample. Precio 285.000€. ¿Te gustaría ver fotos completas o prefieres que te cuente más detalles?' },
  { role: 'user', name: 'Carlos R.', text: 'Me interesa. ¿Podría ver el piso esta semana?' },
  { role: 'ai', text: 'Claro. Tengo disponibilidad el miércoles a las 17h o el viernes a las 11h. ¿Cuál te viene mejor?' },
  { role: 'user', name: 'Carlos R.', text: 'El viernes a las 11h perfecto.' },
  { role: 'ai', text: 'Visita confirmada para el viernes a las 11:00. Te envío la dirección exacta y los datos del agente por WhatsApp ahora mismo. ¡Hasta el viernes!' },
]

const DashboardChat = React.memo(function DashboardChat() {
  const [visibleCount, setVisibleCount] = useState(0)
  // Ref on the scrollable container — direct scrollTop avoids any window scroll side-effect
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleCount >= conversation.length) {
      const reset = setTimeout(() => setVisibleCount(0), 3500)
      return () => clearTimeout(reset)
    }
    const delay = visibleCount === 0 ? 800 : 2200
    const timer = setTimeout(() => setVisibleCount((p) => p + 1), delay)
    return () => clearTimeout(timer)
  }, [visibleCount])

  // Scroll ONLY the chat container — never propagates to the window
  useEffect(() => {
    const el = scrollAreaRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [visibleCount])

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/50 dark:border-white/[0.06] shrink-0">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Agente IA · activo</span>
      </div>

      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
        <AnimatePresence mode="popLayout" initial={false}>
          {conversation.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {msg.role === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Robot size={12} className="text-accent" weight="fill" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-200/50 dark:bg-white/[0.08] text-slate-700 dark:text-slate-300 rounded-tr-sm'
                    : 'bg-accent/[0.12] text-slate-800 dark:text-slate-200 rounded-tl-sm border border-accent/10'
                }`}
              >
                {msg.role === 'user' && (
                  <span className="block text-[10px] text-slate-500 mb-1 font-medium">
                    {msg.name}
                  </span>
                )}
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleCount > 0 && visibleCount < conversation.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
              <Robot size={12} className="text-accent" weight="fill" />
            </div>
            <div className="px-3 py-2 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center gap-1">
              {[0, 0.15, 0.3].map((d) => (
                <motion.span
                  key={d}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: d }}
                  className="w-1.5 h-1.5 rounded-full bg-accent/60"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-4 py-2.5 border-t border-slate-200/50 dark:border-white/[0.06] shrink-0">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
          <span className="text-xs text-slate-500 dark:text-slate-600 flex-1">Escribe un mensaje…</span>
        </div>
      </div>
    </div>
  )
})

export default DashboardChat
