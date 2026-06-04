import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import CookieBanner from '@/components/ui/CookieBanner'
import ScrollToTop from '@/components/ui/ScrollToTop'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mkgenia.com'),
  icons: [
    { rel: 'icon', url: '/logo2_b.png', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', url: '/logo2_w.png', media: '(prefers-color-scheme: dark)' },
  ],
  title: {
    default: 'MKGENIA · Automatización IA para Inmobiliarias',
    template: '%s · MKGENIA',
  },
  description:
    'Sistemas de IA para agencias inmobiliarias: capta leads de Idealista y Fotocasa, responde compradores 24/7 por WhatsApp, cualifica automáticamente y agenda visitas — sin que tu equipo intervenga.',
  keywords: [
    'automatización inmobiliaria inteligencia artificial',
    'bot inmobiliaria WhatsApp',
    'captación leads inmobiliaria automática',
    'agente IA inmobiliaria',
    'software automatización agencia inmobiliaria',
    'CRM inmobiliario inteligente',
    'leads Idealista Fotocasa automático',
    'sistema automatización inmobiliaria España',
    'inteligencia artificial agente inmobiliario',
    'chatbot inmobiliaria 24 horas',
    'automatización agencias inmobiliarias',
    'mkgenia',
  ],
  authors: [{ name: 'MKGENIA', url: 'https://mkgenia.com' }],
  creator: 'MKGENIA',
  publisher: 'MKGENIA',
  alternates: {
    canonical: 'https://mkgenia.com',
  },
  openGraph: {
    title: 'MKGENIA · Capta más pisos y cierra más ventas con IA',
    description:
      'Automatización IA para agencias inmobiliarias: captación desde portales, bot WhatsApp 24/7, cualificación automática y seguimiento sin trabajo manual.',
    url: 'https://mkgenia.com',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MKGENIA — Automatización IA para Inmobiliarias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKGENIA · Automatización IA para Inmobiliarias',
    description: 'Bot WhatsApp 24/7, captación automática de Idealista y Fotocasa, y seguimiento de compradores sin trabajo manual.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://mkgenia.com/#organization',
  name: 'MKGENIA',
  url: 'https://mkgenia.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mkgenia.com/logo_w.png',
    width: 200,
    height: 56,
  },
  description:
    'Automatización con inteligencia artificial para agencias inmobiliarias en España. Captación automática de leads desde Idealista, Fotocasa y Habitaclia, bot WhatsApp 24/7, cualificación automática y seguimiento de compradores.',
  email: 'info.mkgenia@gmail.com',
  areaServed: { '@type': 'Country', name: 'España' },
  serviceType: [
    'Automatización inmobiliaria con IA',
    'Bot WhatsApp para inmobiliarias',
    'Captación automática de leads inmobiliarios',
    'CRM inmobiliario inteligente',
    'Sincronización de portales inmobiliarios',
  ],
  sameAs: ['https://linkedin.com/company/mkgenia'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planes de automatización inmobiliaria',
    itemListElement: [
      { '@type': 'Offer', name: 'Plan Arranque', price: '290', priceCurrency: 'EUR', description: 'Bot IA 24/7 + 2 integraciones + hasta 500 interacciones/mes' },
      { '@type': 'Offer', name: 'Plan Crecimiento', price: '690', priceCurrency: 'EUR', description: 'Hasta 5 agentes IA + integraciones ilimitadas + optimización activa mensual' },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mkgenia.com/#website',
  name: 'MKGENIA',
  url: 'https://mkgenia.com',
  publisher: { '@id': 'https://mkgenia.com/#organization' },
  inLanguage: 'es-ES',
}

const jsonLd = [organizationSchema, websiteSchema]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#3B3FFF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${hanken.variable} font-sans bg-slate-50 dark:bg-[#09090b] transition-colors duration-300`}>
        <Providers>
          {children}
          <CookieBanner />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}

