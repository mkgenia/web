import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import CasosHero from '@/components/pages/casos-de-exito/CasosHero'
import CasosGrid from '@/components/pages/casos-de-exito/CasosGrid'
import CasosTestimonials from '@/components/pages/casos-de-exito/CasosTestimonials'
import CasosCTA from '@/components/pages/casos-de-exito/CasosCTA'

export const metadata: Metadata = {
  title: 'Casos de Éxito · Inmobiliarias que ya automatizan con IA',
  description:
    'Agencias inmobiliarias reales en España que han multiplicado sus captaciones, reducido el tiempo operativo y cerrado más operaciones con el sistema IA de MKGENIA. Resultados medibles desde el primer mes.',
  keywords: [
    'casos éxito automatización agencia inmobiliaria',
    'resultados IA inmobiliaria España',
    'agencia inmobiliaria automatización leads resultados',
    'inmobiliaria inteligencia artificial caso real España',
    'aumentar captaciones inmobiliaria IA',
    'cerrar más operaciones inmobiliaria automatización',
  ],
  alternates: {
    canonical: 'https://mkgenia.com/casos-de-exito',
  },
  openGraph: {
    title: 'Casos de Éxito MKGENIA — Inmobiliarias reales, resultados reales',
    description: 'Descubre cómo agencias inmobiliarias en España han multiplicado captaciones y operaciones con el sistema IA de MKGENIA.',
    url: 'https://mkgenia.com/casos-de-exito',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Casos de éxito MKGENIA — Inmobiliarias con IA' }],
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
