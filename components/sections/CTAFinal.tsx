'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Warning } from '@phosphor-icons/react'

export default function CTAFinal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [touched, setTouched] = useState(false)

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const showError = touched && !isValid && email.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: email.split('@')[0], email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-28 lg:py-36 relative z-10">

      <div className="relative z-10 max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-6">
            Tu competencia ya está
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-soft">
              automatizando.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Primera consulta sin compromiso. Analizamos tu negocio y te decimos exactamente qué
            automatizar para obtener resultados en 30 días.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-md mx-auto"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03]"
            >
              <CheckCircle size={40} className="text-green-400" weight="light" />
              <p className="text-slate-900 dark:text-white font-semibold">Solicitud recibida</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm text-center">
                Te contactamos en menos de 24 horas laborables.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="cta-email" className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Tu email de empresa
                </label>
                <input
                  id="cta-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="nombre@empresa.com"
                  className={`w-full px-5 py-3.5 rounded-full border bg-slate-100 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-slate-300 dark:focus:ring-white/[0.15] ${
                    showError ? 'border-red-400/40' : 'border-slate-300 dark:border-white/[0.10] focus:border-slate-400 dark:focus:border-white/[0.22]'
                  }`}
                  aria-invalid={showError}
                />
                {showError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 text-xs text-red-400 pl-2"
                    role="alert"
                  >
                    <Warning size={12} weight="fill" /> Introduce un email válido
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                    />
                    Enviando…
                  </>
                ) : (
                  <>
                    Reservar consulta gratuita
                    <ArrowRight size={15} weight="bold" />
                  </>
                )}
              </button>
            </form>
          )}
          <p className="mt-4 text-center text-xs text-slate-700">
            Sin tarjeta de crédito · Sin permanencia · Respuesta en menos de 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
