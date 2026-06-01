import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import CasosHero from '@/components/pages/casos-de-exito/CasosHero'
import CasosGrid from '@/components/pages/casos-de-exito/CasosGrid'
import CasosTestimonials from '@/components/pages/casos-de-exito/CasosTestimonials'
import CasosCTA from '@/components/pages/casos-de-exito/CasosCTA'

export const metadata: Metadata = {
  title: 'Casos de Éxito · MKGENIA — Inmobiliarias que ya automatizan con IA',
  description:
    'Descubre cómo agencias inmobiliarias en España han multiplicado sus leads cualificados, reducido el tiempo operativo y cerrado más operaciones con el sistema de IA de MKGENIA.',
  keywords: [
    'casos de éxito automatización inmobiliaria',
    'resultados IA agencia inmobiliaria',
    'automatización leads inmobiliaria resultados',
    'inmobiliaria inteligencia artificial caso real',
  ],
  openGraph: {
    title: 'Casos de Éxito · MKGENIA',
    description: 'Inmobiliarias reales. Resultados reales. Ve cómo el sistema de IA ha transformado su operativa.',
    url: 'https://mkgenia.es/casos-de-exito',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function CasosPage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <NavbarGlass />
      <CasosHero />
      <CasosGrid />
      <CasosTestimonials />
      <CasosCTA />
      <Footer />
    </main>
  )
}
