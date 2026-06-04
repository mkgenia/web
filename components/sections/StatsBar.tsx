const stats = [
  { label: 'RESPUESTA AL LEAD', value: '< 90s' },
  { label: 'AGENCIAS ACTIVAS', value: '+47' },
  { label: 'MÁS CAPTACIONES', value: '+3.2×' },
  { label: 'IMPLEMENTACIÓN', value: '< 3 sem.' },
]

export default function StatsBar() {
  return (
    <div className="border-y border-slate-200/50 dark:border-white/[0.07] bg-slate-50 dark:bg-[#09090b]">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-10 px-8 ${i < stats.length - 1 ? 'border-r border-slate-200/50 dark:border-white/[0.07]' : ''} ${i === 1 ? 'border-b border-r lg:border-b-0 border-slate-200/50 dark:border-white/[0.07]' : ''} ${i === 0 ? 'border-b lg:border-b-0 border-slate-200/50 dark:border-white/[0.07]' : ''}`}
            >
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-600 tracking-[0.15em] uppercase mb-2.5">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

