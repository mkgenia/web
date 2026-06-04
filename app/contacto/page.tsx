import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import ContactoPage from '@/components/pages/contacto/ContactoPage'

export const metadata: Metadata = {
  title: 'Contacto · Reserva tu consulta gratuita con MKGENIA',
  description:
    '30 minutos sin compromiso. Analizamos tu agencia inmobiliaria y te decimos exactamente qué automatizar para conseguir más captaciones y cerrar más operaciones en los próximos 30 días.',
  keywords: [
    'contacto mkgenia',
    'reservar consulta automatización inmobiliaria',
    'consulta gratuita IA inmobiliaria',
    'demo sistema automatización inmobiliaria',
  ],
  alternates: {
    canonical: 'https://mkgenia.com/contacto',
  },
  openGraph: {
    title: 'Reserva tu consulta gratuita · MKGENIA',
    description: '30 minutos. Sin compromiso. Analizamos tu agencia y te decimos qué automatizar para ver resultados en 30 días.',
    url: 'https://mkgenia.com/contacto',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contacto MKGENIA — Consulta gratuita' }],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mkgenia.com' },
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://mkgenia.com/contacto' },
  ],
}

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <NavbarGlass />
      <ContactoPage />
      <Footer />
    </main>
  )
}
