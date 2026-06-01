'use client'

import { motion } from 'framer-motion'
import { Robot, WhatsappLogo, UsersThree, Database, Plugs, PencilSimpleLine, ChartBar, MetaLogo } from '@phosphor-icons/react'

const solutions = [
  { Icon: Robot, name: 'Agente IA 24/7', desc: 'Responde leads, cualifica y agenda reuniones en tiempo real, sin intervención humana.', span: 2 },
  { Icon: WhatsappLogo, name: 'Automatización WhatsApp', desc: 'Conversaciones inteligentes en el canal donde están tus clientes.', span: 1 },
  { Icon: UsersThree, name: 'Cualificación de Leads', desc: 'Filtra automáticamente quién merece atención inmediata de tu equipo.', span: 1 },
  { Icon: Database, name: 'CRM Inteligente', desc: 'Tu pipeline actualizado solo, sin que nadie lo toque.', span: 1 },
  { Icon: Plugs, name: 'Integraciones sin código', desc: 'Conectamos la IA con tus herramientas actuales en días, no meses.', span: 1 },
  { Icon: PencilSimpleLine, name: 'Contenido generativo', desc: 'Propuestas y emails redactados por IA con tu voz de marca.', span: 1 },
  { Icon: ChartBar, name: 'Analítica predictiva', desc: 'Anticipa qué clientes están listos para comprar antes de que lo sepan ellos.', span: 1 },
  { Icon: MetaLogo, name: 'Ecosistema Meta', desc: 'Programa publicaciones y lanza anuncios fácilmente usando plantillas personalizadas con tu propia marca.', span: 1 },
]

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="py-28 lg:py-36 relative z-10">
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
            <span className="text-slate-500">para tu empresa</span>
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

