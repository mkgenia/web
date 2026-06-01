'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Warning, Envelope, WhatsappLogo, Clock } from '@phosphor-icons/react'

const infos = [
  { Icon: Clock, title: 'Respuesta en < 24h', desc: 'Te contactamos el mismo día laborable en la mayoría de casos.' },
  { Icon: Envelope, title: 'hola@mkgenia.es', desc: 'Para consultas que prefieras por escrito.' },
  { Icon: WhatsappLogo, title: 'WhatsApp directo', desc: 'Si prefieres un mensaje rápido antes de la llamada.' },
]

type FormState = { nombre: string; empresa: string; email: string; telefono: string; mensaje: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' })
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))
  const blur = (k: keyof FormState) => () => setTouched((t) => ({ ...t, [k]: true }))

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const valid = form.nombre.trim() && form.empresa.trim() && emailOk

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ nombre: true, empresa: true, email: true, telefono: true, mensaje: true })
    if (!valid) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (k: keyof FormState, extra = '') =>
    `w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 ${
      touched[k] && !form[k].trim()
        ? 'border-red-400/40 focus:border-red-400/60'
        : 'border-slate-200 dark:border-white/[0.08] focus:border-accent/40'
    } ${extra}`

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-[#09090b]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 50% at 0% 0%, rgba(59,63,255,0.10) 0%, transparent 55%), radial-gradient(ellipse 45% 55% at 100% 100%, rgba(240,32,240,0.09) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — info (2 cols) */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-6">Contacto</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5">
                Hablemos de<br />tu agencia
              </h1>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                30 minutos. Sin compromiso. Analizamos tu situación y te
                decimos exactamente qué automatizar primero para ver
                resultados en los primeros 30 días.
              </p>

              <div className="flex flex-col gap-6">
                {infos.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-accent shrink-0">
                      <Icon size={17} weight="light" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <CheckCircle size={48} className="text-green-400" weight="light" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">¡Solicitud recibida!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
                    Te contactamos en menos de 24 horas laborables para confirmar la llamada.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">Nombre *</label>
                      <input type="text" value={form.nombre} onChange={set('nombre')} onBlur={blur('nombre')} placeholder="Tu nombre" className={inputClass('nombre')} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">Agencia *</label>
                      <input type="text" value={form.empresa} onChange={set('empresa')} onBlur={blur('empresa')} placeholder="Nombre de tu agencia" className={inputClass('empresa')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">Email *</label>
                      <input type="email" value={form.email} onChange={set('email')} onBlur={blur('email')} placeholder="tu@agencia.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 ${
                          touched.email && !emailOk ? 'border-red-400/40' : 'border-slate-200 dark:border-white/[0.08] focus:border-accent/40'
                        }`}
                      />
                      {touched.email && !emailOk && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <Warning size={11} weight="fill" /> Email no válido
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">Teléfono</label>
                      <input type="tel" value={form.telefono} onChange={set('telefono')} onBlur={blur('telefono')} placeholder="+34 600 000 000" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent/40" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">¿Cuál es tu mayor reto ahora mismo?</label>
                    <textarea value={form.mensaje} onChange={set('mensaje')} onBlur={blur('mensaje')} rows={4} placeholder="Ej: respondemos tarde a los leads de Idealista, el seguimiento es manual, no damos abasto..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent/40 resize-none" />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                      <Warning size={12} weight="fill" /> Algo salió mal. Inténtalo de nuevo o escríbenos a hola@mkgenia.es
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} className="inline-block w-4 h-4 border-2 border-black/20 border-t-black dark:border-white/20 dark:border-t-white rounded-full" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Reservar llamada gratuita
                        <ArrowRight size={15} weight="bold" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 dark:text-slate-600">
                    Sin compromiso · Sin permanencia · Respuesta en menos de 24h
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
