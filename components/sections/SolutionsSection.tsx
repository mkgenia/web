'use client'

import { motion } from 'framer-motion'
import { Robot, WhatsappLogo, UsersThree, Database, Plugs, PencilSimpleLine, ChartBar, MetaLogo } from '@phosphor-icons/react'

const solutions = [
  { Icon: Robot, name: 'Bot inmobiliario 24/7', desc: 'Responde consultas de compradores y arrendatarios al instante, cualifica su interés y agenda visitas — sin que nadie intervenga.', span: 2 },
  { Icon: WhatsappLogo, name: 'Bot WhatsApp & Telegram', desc: 'Conversaciones inteligentes sobre pisos en los canales donde ya están tus clientes.', span: 1 },
  { Icon: UsersThree, name: 'Captación automática de portales', desc: 'Extrae leads de Idealista, Fotocasa, Habitaclia y Pisos.com y los vuelca en tu CRM al momento.', span: 1 },
  { Icon: Database, name: 'CRM inmobiliario inteligente', desc: 'Propiedades, compradores y operaciones actualizados solos. Sin que nadie los toque.', span: 1 },
  { Icon: Plugs, name: 'Sincronización de portales', desc: 'Publica y actualiza fichas en todos los portales desde un solo lugar, automáticamente.', span: 1 },
  { Icon: PencilSimpleLine, name: 'Fichas y dossiers con IA', desc: 'Genera descripciones de propiedades, reportes de valoración y emails de seguimiento con tu voz de marca.', span: 1 },
  { Icon: ChartBar, name: 'Seguimiento automático de interesados', desc: 'Secuencias de recordatorios y follow-ups para compradores y propietarios sin trabajo manual.', span: 1 },
  { Icon: MetaLogo, name: 'Captación de propietarios en Meta', desc: 'Lanza campañas para conseguir encargos de venta y alquiler. La IA filtra y cualifica los contactos entrantes.', span: 1 },
]

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="py-14 sm:py-20 lg:py-36 relative z-10">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-accent/70 tracking-[0.2em] uppercase mb-5">Soluciones</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Lo que construimos
            <br />
            <span className="text-slate-500">para tu agencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/50 dark:bg-white/[0.06] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/[0.06]">
          {solutions.map(({ Icon, name, desc, span }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group p-7 bg-white dark:bg-[#09090b] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all duration-250 cursor-default ${
                span === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-accent group-hover:border-accent/20 group-hover:bg-accent/[0.07] transition-all duration-250 mb-5 group-hover:scale-110">
                <Icon size={18} weight="light" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

