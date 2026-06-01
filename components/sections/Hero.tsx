'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import MagneticButton from '@/components/ui/MagneticButton'
import LogoMarquee from '@/components/ui/LogoMarquee'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Aurora layers */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#09090b]">
        {/* Pink/rose — top right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 5%, rgba(240,32,240,0.35) 0%, transparent 60%)',
          }}
        />
        {/* Teal — left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 10% 40%, rgba(59,63,255,0.32) 0%, transparent 60%)',
          }}
        />
        {/* Orange — bottom center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 50% 90%, rgba(91,79,255,0.18) 0%, transparent 55%)',
          }}
        />
        {/* Soft pink center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(240,32,240,0.10) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 w-full pt-28 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.12] bg-slate-100 dark:bg-white/[0.06] mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Automatización con IA para empresas
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-bold text-slate-900 dark:text-white leading-[0.93] tracking-[-0.03em] mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 130px)' }}
        >
          <motion.span variants={item} className="block">
            Tu negocio
          </motion.span>
          <motion.span
            variants={item}
            className="block text-transparent bg-clip-text pb-[0.2em] -mb-[0.2em]"
            style={{ backgroundImage: 'linear-gradient(110deg, #3B3FFF 0%, #3B3FFF 35%, #5B4FFF 47.5%, #F020F0 75%, #F020F0 100%)' }}
          >
            trabajando
          </motion.span>
          <motion.span variants={item} className="block">
            mientras duermes
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="text-slate-600 dark:text-slate-400 max-w-[520px] leading-relaxed mb-10"
          style={{ fontSize: 'clamp(15px, 1.8vw, 18px)' }}
        >
          Sistemas de IA que captan leads, responden clientes y cierran ventas —
          sin que tu equipo intervenga.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <MagneticButton
            href="#contacto"
            className="px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 text-white dark:text-[#09090b] font-semibold rounded-full gap-2 text-sm shadow-[0_0_40px_rgba(59,63,255,0.18)]"
          >
            Reservar consulta gratuita
            <ArrowRight size={15} weight="bold" />
          </MagneticButton>
          <MagneticButton
            href="#demo"
            className="px-7 py-3.5 border border-slate-300 dark:border-white/[0.18] hover:border-slate-400 dark:hover:border-white/[0.35] text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-sm"
          >
            Ver en acción
          </MagneticButton>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex items-center gap-3 mt-10"
        >
          <div className="flex -space-x-2">
            {['from-[#F020F0] to-[#B010B0]', 'from-[#3B3FFF] to-[#2B2FCC]', 'from-[#5B4FFF] to-[#4B3FCC]', 'from-slate-600 to-slate-700'].map((g, i) => (
              <div key={i} className={`w-7 h-7 rounded-full border-2 border-slate-50 dark:border-[#09090b] bg-gradient-to-br ${g}`} />
            ))}
          </div>
          <p className="text-sm text-slate-500">
            <span className="text-slate-800 dark:text-slate-300 font-medium">+47 empresas</span> ya automatizan
          </p>
        </motion.div>

        {/* Logo marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="w-full"
        >
          <LogoMarquee />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#09090b] to-transparent pointer-events-none" />
    </section>
  )
}
