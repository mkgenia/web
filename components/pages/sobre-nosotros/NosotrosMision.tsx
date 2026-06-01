'use client'

import { motion } from 'framer-motion'

export default function NosotrosMision() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(91,79,255,0.06) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-6">Nuestra misión</p>
            <blockquote
              className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
              style={{ backgroundImage: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              "Que ninguna agencia inmobiliaria pierda una venta por falta de tiempo."
            </blockquote>
          </motion.div>

          {/* Right — contexto */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              El sector inmobiliario tiene un problema de velocidad. Los compradores
              consultan en varios portales a la vez y van con quien responde primero.
              Las agencias con mejor producto pierden frente a las que son más rápidas.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Creemos que eso es injusto y que la tecnología puede cambiarlo.
              No necesitas más personal — necesitas un sistema que trabaje a
              la misma velocidad que la intención de compra de tus clientes.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Por eso nos especializamos en inmobiliarias. Conocemos el ciclo de venta,
              los portales, los CRMs y el lenguaje del sector. No hacemos soluciones
              genéricas: hacemos una sola cosa y la hacemos bien.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
