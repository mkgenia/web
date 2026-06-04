import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import NosotrosHero from '@/components/pages/sobre-nosotros/NosotrosHero'
import NosotrosMision from '@/components/pages/sobre-nosotros/NosotrosMision'
import NosotrosValores from '@/components/pages/sobre-nosotros/NosotrosValores'
import NosotrosCTA from '@/components/pages/sobre-nosotros/NosotrosCTA'

export const metadata: Metadata = {
  title: 'Sobre Nosotros · MKGENIA — Especialistas en IA para el sector inmobiliario',
  description:
    'No somos una agencia de marketing que pivotó a IA. Somos un equipo especializado desde el primer día en automatizar el ciclo de venta inmobiliario con inteligencia artificial.',
  keywords: [
    'mkgenia quienes somos',
    'especialistas automatización IA inmobiliaria España',
    'empresa IA sector inmobiliario',
    'equipo mkgenia',
    'automatización ciclo venta inmobiliario',
  ],
  alternates: {
    canonical: 'https://mkgenia.com/sobre-nosotros',
  },
  openGraph: {
    title: 'Sobre MKGENIA — Especialistas en IA para inmobiliarias',
    description: 'El equipo especializado desde el primer día en automatizar el ciclo de venta inmobiliario. Sin generalismo, sin atajos.',
    url: 'https://mkgenia.com/sobre-nosotros',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sobre MKGENIA — IA para inmobiliarias' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mkgenia.com' },
    { '@type': 'ListItem', position: 2, name: 'Sobre Nosotros', item: 'https://mkgenia.com/sobre-nosotros' },
  ],
}

export default function SobreNosotrosPage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <NavbarGlass />
      <NosotrosHero />
      <NosotrosMision />
      <NosotrosValores />
      <NosotrosCTA />
      <Footer />
    </main>
  )
}
