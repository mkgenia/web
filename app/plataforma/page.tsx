import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import PlataformaHero from '@/components/pages/plataforma/PlataformaHero'
import PlataformaFunciones from '@/components/pages/plataforma/PlataformaFunciones'
import PlataformaFlujo from '@/components/pages/plataforma/PlataformaFlujo'
import PlataformaIntegraciones from '@/components/pages/plataforma/PlataformaIntegraciones'
import PlataformaCTA from '@/components/pages/plataforma/PlataformaCTA'

export const metadata: Metadata = {
  title: 'La Plataforma · MKGENIA — Automatización IA para Inmobiliarias',
  description:
    'Un sistema de IA diseñado para inmobiliarias que capta leads, los cualifica automáticamente, hace seguimiento por WhatsApp y mantiene tu CRM al día — sin que tu equipo intervenga.',
  keywords: [
    'plataforma IA inmobiliaria',
    'automatización inmobiliaria inteligencia artificial',
    'sistema automatización agencia inmobiliaria',
    'agente IA leads inmobiliaria',
    'CRM automatizado inmobiliaria',
    'seguimiento automático clientes inmobiliaria',
    'whatsapp automatico inmobiliaria',
  ],
  openGraph: {
    title: 'La Plataforma · MKGENIA — Automatización IA para Inmobiliarias',
    description:
      'Capta, cualifica y cierra más operaciones sin aumentar tu equipo. El sistema de IA diseñado para agencias inmobiliarias.',
    url: 'https://mkgenia.es/plataforma',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function PlataformaPage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <NavbarGlass />
      <PlataformaHero />
      <PlataformaFunciones />
      <PlataformaFlujo />
      <PlataformaIntegraciones />
      <PlataformaCTA />
      <Footer />
    </main>
  )
}
