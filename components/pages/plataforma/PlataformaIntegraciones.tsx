'use client'

import { motion } from 'framer-motion'

const integraciones = [
  { abbr: 'ID', name: 'Idealista', color: '#FF6B35' },
  { abbr: 'FC', name: 'Fotocasa', color: '#E31E52' },
  { abbr: 'WA', name: 'WhatsApp', color: '#25D366' },
  { abbr: 'HS', name: 'HubSpot', color: '#FF7A59' },
  { abbr: 'SF', name: 'Salesforce', color: '#00A1E0' },
  { abbr: 'GC', name: 'Google Calendar', color: '#4285F4' },
  { abbr: 'GM', name: 'Gmail', color: '#EA4335' },
  { abbr: 'ZA', name: 'Zapier', color: '#FF4A00' },
  { abbr: 'MK', name: 'Make', color: '#6D00CC' },
  { abbr: 'NO', name: 'Notion', color: '#000000' },
]

const garantias = [
  { title: 'Cumplimiento RGPD', desc: 'Todos los datos se tratan conforme a la normativa europea de protección de datos.' },
  { title: 'Datos en servidores EU', desc: 'La infraestructura está alojada en centros de datos dentro de la Unión Europea.' },
  { title: 'Sin acceso a tu CRM', desc: 'Solo escribimos los datos que el sistema genera. No leemos ni exportamos tu base de contactos.' },
  { title: 'Cifrado de extremo a extremo', desc: 'Las conversaciones con tus leads viajan siempre cifradas en tránsito y en reposo.' },
]

export default function PlataformaIntegraciones() {
  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(91,79,255,0.07) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6">
        {/* Integraciones */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Integraciones</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5">
            Conecta con lo que
            <br />
            <span className="text-slate-500 dark:text-slate-400">ya estás usando</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            El sistema se integra con los portales inmobiliarios, tu CRM y tus herramientas de comunicación. Sin cambiar tu flujo de trabajo actual.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-24"
        >
          {integraciones.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm hover:border-slate-300 dark:hover:border-white/[0.15] transition-all duration-200 cursor-default"
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ backgroundColor: int.color }}
              >
                {int.abbr.slice(0, 2)}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{int.name}</span>
            </motion.div>
          ))}
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-dashed border-slate-300 dark:border-white/[0.10] text-xs text-slate-400 dark:text-slate-600">
            + muchos más
          </div>
        </motion.div>

        {/* Garantías de seguridad */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Seguridad</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Los datos de tus clientes, protegidos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {garantias.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02]"
            >
              <div className="w-2 h-2 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #3B3FFF, #F020F0)' }} />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
