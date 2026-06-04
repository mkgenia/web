import type { Metadata } from 'next'
import NavbarGlass from '@/components/ui/NavbarGlass'

export const metadata: Metadata = {
  title: 'MKGENIA · Automatización IA para Agencias Inmobiliarias',
  description:
    'Capta leads de Idealista, Fotocasa y Habitaclia automáticamente, responde compradores 24/7 por WhatsApp con IA y cierra más operaciones sin ampliar tu equipo. Implementación en 3 semanas.',
  alternates: {
    canonical: 'https://mkgenia.com',
  },
  openGraph: {
    title: 'MKGENIA · Capta más pisos y cierra más ventas con IA',
    description:
      'Bot WhatsApp inmobiliario 24/7, captación automática desde portales y CRM inteligente. +47 agencias inmobiliarias ya automatizan con MKGENIA.',
    url: 'https://mkgenia.com',
    siteName: 'MKGENIA',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MKGENIA — Automatización IA para Inmobiliarias' }],
  },
}
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import HowItWorks from '@/components/sections/HowItWorks'
import BenefitsSection from '@/components/sections/BenefitsSection'
import PricingSection from '@/components/sections/PricingSection'
import Testimonials from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQSection'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/sections/Footer'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿De qué portales podéis captar leads automáticamente?',
      acceptedAnswer: { '@type': 'Answer', text: 'Integramos con Idealista, Fotocasa, Habitaclia, Pisos.com y cualquier portal que permita acceso a sus leads. Los contactos entran directamente en tu CRM con toda la información del piso y el comprador, listos para trabajar.' },
    },
    {
      '@type': 'Question',
      name: '¿El bot puede responder preguntas concretas sobre mis pisos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. El bot se alimenta de tu cartera de propiedades y responde preguntas sobre precio, superficie, planta, estado, barrio y disponibilidad de visita. Si el comprador pregunta algo que no sabe, escala al agente sin interrumpir la conversación.' },
    },
    {
      '@type': 'Question',
      name: '¿Funciona con mi CRM actual?',
      acceptedAnswer: { '@type': 'Answer', text: 'Integramos con los principales CRMs inmobiliarios: Witei, Inmovilla, Sooprema, Wolly, HubSpot y más de 200 herramientas vía API o Zapier/Make. Si usas algo personalizado, lo analizamos en la consulta inicial.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda la implementación?',
      acceptedAnswer: { '@type': 'Answer', text: 'El proceso completo va de 2 a 4 semanas. El bot respondiendo en WhatsApp suele estar activo en los primeros 10 días. La sincronización de portales y el CRM, en la semana 2-3.' },
    },
    {
      '@type': 'Question',
      name: '¿Puedo empezar solo con el bot de WhatsApp?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí, y es lo que recomendamos como primer paso. Empezamos con el canal que más impacto tiene en tu agencia, medimos resultados en 30 días y luego decidimos qué automatizar a continuación.' },
    },
    {
      '@type': 'Question',
      name: '¿Los datos de mis clientes y propiedades están seguros?',
      acceptedAnswer: { '@type': 'Answer', text: 'Todos los datos se procesan bajo cumplimiento RGPD. Trabajamos con proveedores con certificación SOC 2 y los datos nunca se usan para entrenar modelos de terceros. Firmamos DPA en todos los contratos.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia a MKGENIA de otras soluciones para inmobiliarias?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nos especializamos en automatización IA para el sector inmobiliario, no somos una herramienta genérica. Configuramos cada sistema a medida de tu cartera, tus portales y tu proceso de venta. Si no hay resultados en 90 días, revisamos el proyecto sin coste adicional.' },
    },
  ],
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* GLOBAL FIXED GRADIENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-fuchsia-600/15 dark:bg-fuchsia-600/[0.20] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 dark:bg-blue-600/[0.20] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-purple-600/15 dark:bg-purple-600/[0.20] blur-[120px] rounded-full" />
      </div>

      <NavbarGlass />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <SolutionsSection />
      <HowItWorks />
      <BenefitsSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </main>
  )
}

