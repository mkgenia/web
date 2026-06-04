'use client'

import { motion } from 'framer-motion'
import {
  House,
  ChatsCircle,
  UsersThree,
  ChartBar,
  Gear,
  Lightning,
  Circle,
} from '@phosphor-icons/react'
import DashboardChat from './DashboardChat'

const sidebarItems = [
  { Icon: House, label: 'Inicio', active: false },
  { Icon: ChatsCircle, label: 'Conversaciones', active: true },
  { Icon: UsersThree, label: 'Leads', active: false },
  { Icon: ChartBar, label: 'Analítica', active: false },
  { Icon: Gear, label: 'Ajustes', active: false },
]

const leads = [
  { company: 'C/ Mayor 14, 3ºB · Madrid', contact: 'Ana G. · Compradora', status: 'Activo', time: '2 min', value: '€285.000' },
  { company: 'Piso en Eixample · Barcelona', contact: 'Carlos M. · Arrendatario', status: 'En seguimiento', time: '18 min', value: '€1.450/mes' },
  { company: 'Chalet Pozuelo · Madrid', contact: 'Familia López · Compradores', status: 'Visita agendada', time: '35 min', value: '€620.000' },
  { company: 'Local Calle Serrano · Madrid', contact: 'Pedro R. · Inversor', status: 'Cerrado', time: '1h 10m', value: '€410.000' },
]

const statusColors: Record<string, string> = {
  Activo: 'text-green-400 bg-green-400/10 border-green-400/20',
  'En seguimiento': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  'Visita agendada': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Cerrado: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
}

export default function DashboardDemo() {
  return (
    <section id="demo" className="py-12 sm:py-20 lg:py-32 relative z-10">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            En acción
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
            Así se ve tu sistema
            <br />
            <span className="text-slate-500 dark:text-slate-400">trabajando en tiempo real</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl border border-slate-200 dark:border-white/[0.10] bg-white dark:bg-[#0D1526] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.07)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.07)]"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/35" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/35" />
                <div className="w-3 h-3 rounded-full bg-green-500/35" />
              </div>
              <span className="text-xs text-slate-500 font-medium">MKGENIA · Panel inmobiliario</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] text-slate-500 hidden sm:inline">6 automatizaciones activas</span>
            </div>
          </div>

          <div className="flex h-[420px] sm:h-[520px]">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-14 border-r border-slate-200/50 dark:border-white/[0.06] py-4 items-center gap-3">
              {sidebarItems.map(({ Icon, label, active }) => (
                <button
                  key={label}
                  title={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    active
                      ? 'bg-accent/[0.15] text-accent border border-accent/20'
                      : 'text-slate-500 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={18} weight="light" />
                </button>
              ))}
            </div>

            {/* Main panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top metrics */}
              <div className="grid grid-cols-3 border-b border-slate-200/50 dark:border-white/[0.06] shrink-0">
                <MetricCell label="Interesados hoy" value="18" sub="+5 vs ayer" icon={<UsersThree size={13} className="text-accent" />} />
                <MetricCell label="Visitas agendadas" value="4" sub="esta semana" icon={<ChatsCircle size={13} className="text-accent-soft" />} border />
                <MetricCell label="Tiempo respuesta" value="53s" sub="media últimas 24h" icon={<Lightning size={13} className="text-green-400" />} border />
              </div>

              {/* Content area */}
              <div className="flex flex-1 min-h-0">
                {/* Chat */}
                <div className="flex-1 border-r border-slate-200/50 dark:border-white/[0.06] min-h-0 flex flex-col">
                  <DashboardChat />
                </div>

                {/* Leads table */}
                <div className="hidden lg:flex flex-col w-[340px] shrink-0 min-h-0">
                  <div className="px-4 py-3 border-b border-slate-200/50 dark:border-white/[0.06] shrink-0">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      Últimos interesados
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {leads.map((lead, i) => (
                      <motion.div
                        key={lead.company}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 dark:border-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors"
                      >
                        <div>
                          <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{lead.company}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">{lead.contact} · {lead.time}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColors[lead.status]}`}
                          >
                            {lead.status}
                          </span>
                          <span className="text-[10px] text-slate-500">{lead.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-slate-200/50 dark:border-white/[0.06] flex items-center gap-4 shrink-0 bg-slate-50 dark:bg-white/[0.01]">
                <div className="flex items-center gap-1.5">
                  <Circle size={8} className="text-green-400" weight="fill" />
                  <span className="text-[10px] text-slate-500">6 automatizaciones activas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lightning size={10} className="text-accent" />
                  <span className="text-[10px] text-slate-500">Último evento: 23s</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MetricCell({
  label,
  value,
  sub,
  icon,
  border = false,
}: {
  label: string
  value: string
  sub: string
  icon: React.ReactNode
  border?: boolean
}) {
  return (
    <div className={`p-4 ${border ? 'border-l border-slate-200/50 dark:border-white/[0.06]' : ''}`}>
      <div className="flex items-center gap-1.5 mb-1.5">
        {icon}
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
      <p className="text-[10px] text-slate-600 mt-0.5">{sub}</p>
    </div>
  )
}
