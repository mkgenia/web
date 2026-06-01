import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'
import ContactoPage from '@/components/pages/contacto/ContactoPage'

export const metadata: Metadata = {
  title: 'Contacto · MKGENIA — Reserva tu llamada gratuita',
  description:
    'Reserva una llamada gratuita de 30 minutos. Analizamos tu agencia inmobiliaria y te decimos exactamente qué automatizar para ver resultados en los primeros 30 días.',
  keywords: ['contacto mkgenia', 'reservar consulta automatización inmobiliaria'],
  openGraph: {
    title: 'Contacto · MKGENIA',
    description: 'Reserva una llamada gratuita. Sin compromiso, sin tarjeta.',
    url: 'https://mkgenia.es/contacto',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <NavbarGlass />
      <ContactoPage />
      <Footer />
    </main>
  )
}
