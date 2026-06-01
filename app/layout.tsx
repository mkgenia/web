import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import CookieBanner from '@/components/ui/CookieBanner'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'MKGENIA · Automatización con IA para empresas',
  description:
    'Construimos sistemas de IA que captan leads, responden clientes y cierran ventas. Sin que tu equipo intervenga.',
  keywords: ['automatización IA', 'inteligencia artificial empresa', 'chatbot WhatsApp', 'automatización procesos', 'agente IA', 'mkgenia'],
  openGraph: {
    title: 'MKGENIA · Tu negocio trabajando mientras duermes',
    description:
      'Automatización con IA para empresas que quieren crecer sin crecer el equipo.',
    url: 'https://mkgenia.es',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKGENIA · Automatización con IA',
    description: 'Sistemas de IA que captan leads, responden clientes y cierran ventas.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${hanken.variable} font-sans bg-slate-50 dark:bg-[#09090b] transition-colors duration-300`}>
        <Providers>
          {children}
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}

