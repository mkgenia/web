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

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
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

