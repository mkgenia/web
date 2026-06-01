import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import NosotrosHero from '@/components/pages/sobre-nosotros/NosotrosHero'
import NosotrosMision from '@/components/pages/sobre-nosotros/NosotrosMision'
import NosotrosValores from '@/components/pages/sobre-nosotros/NosotrosValores'
import NosotrosCTA from '@/components/pages/sobre-nosotros/NosotrosCTA'

export const metadata: Metadata = {
  title: 'Sobre Nosotros · MKGENIA — Automatización IA para Inmobiliarias',
  description:
    'Somos un equipo especializado en automatización con inteligencia artificial para el sector inmobiliario. Conoce quiénes somos, por qué lo hacemos y cómo trabajamos.',
  keywords: [
    'mkgenia quienes somos',
    'agencia automatización IA España',
    'equipo mkgenia inmobiliarias',
    'sobre mkgenia automatización',
  ],
  openGraph: {
    title: 'Sobre Nosotros · MKGENIA',
    description: 'El equipo detrás del sistema de IA para inmobiliarias. Conoce quiénes somos y por qué nos especializamos en el sector.',
    url: 'https://mkgenia.es/sobre-nosotros',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function SobreNosotrosPage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <NavbarGlass />
      <NosotrosHero />
      <NosotrosMision />
      <NosotrosValores />
      <NosotrosCTA />
      <Footer />
    </main>
  )
}
