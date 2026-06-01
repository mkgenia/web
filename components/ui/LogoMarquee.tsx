'use client'

import { motion } from 'framer-motion'

const companies = [
  { name: 'Salesforce', abbr: 'SF' },
  { name: 'HubSpot', abbr: 'HS' },
  { name: 'Zapier', abbr: 'ZAP' },
  { name: 'Pipedrive', abbr: 'PD' },
  { name: 'Make', abbr: 'MK' },
  { name: 'Notion', abbr: 'NO' },
  { name: 'WhatsApp', abbr: 'WA' },
  { name: 'OpenAI', abbr: 'AI' },
]

// Duplicate to make seamless loop
const logos = [...companies, ...companies]

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden mt-16 pb-6 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-[#09090b] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-[#09090b] to-transparent pointer-events-none" />

      <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-600 tracking-[0.2em] uppercase mb-6">
        Compatible con tus herramientas
      </p>

      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6 pr-6"
        >
          {logos.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm shrink-0"
            >
              <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/[0.08] flex items-center justify-center text-[9px] font-bold text-slate-500 dark:text-slate-400">
                {c.abbr.slice(0, 2)}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{c.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
