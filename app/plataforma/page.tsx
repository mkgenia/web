import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import PlataformaHero from '@/components/pages/plataforma/PlataformaHero'
import PlataformaFunciones from '@/components/pages/plataforma/PlataformaFunciones'
import PlataformaFlujo from '@/components/pages/plataforma/PlataformaFlujo'
import PlataformaIntegraciones from '@/components/pages/plataforma/PlataformaIntegraciones'
import PlataformaCTA from '@/components/pages/plataforma/PlataformaCTA'

export const metadata: Metadata = {
  title: 'La Plataforma · Cómo funciona el sistema IA para inmobiliarias',
  description:
    'De la consulta en Idealista a la visita agendada, sin tocar nada. Conoce cómo el sistema de MKGENIA capta leads, los cualifica automáticamente, hace seguimiento por WhatsApp y mantiene tu CRM al día.',
  keywords: [
    'plataforma automatización inmobiliaria IA',
    'cómo funciona bot inmobiliaria',
    'sistema captación leads inmobiliaria automático',
    'agente IA cualificación compradores inmobiliaria',
    'CRM inmobiliario automatizado',
    'seguimiento WhatsApp automático compradores',
    'integración Idealista Fotocasa CRM',
    'software inmobiliaria inteligencia artificial',
  ],
  alternates: {
    canonical: 'https://mkgenia.com/plataforma',
  },
  openGraph: {
    title: 'La Plataforma MKGENIA — De la consulta a la visita sin tocar nada',
    description:
      'Capta leads de portales, cualifícalos con IA, haz seguimiento automático por WhatsApp y agenda visitas solas. Sin aumentar tu equipo.',
    url: 'https://mkgenia.com/plataforma',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Plataforma MKGENIA para inmobiliarias' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mkgenia.com' },
    { '@type': 'ListItem', position: 2, name: 'La Plataforma', item: 'https://mkgenia.com/plataforma' },
  ],
}

export default function PlataformaPage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
