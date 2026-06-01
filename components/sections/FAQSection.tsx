'use client'

import { motion } from 'framer-motion'
import AccordionFAQ, { FAQItem } from '@/components/ui/AccordionFAQ'

const faqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo tarda la implementación?',
    answer:
      'El proceso completo va de 2 a 4 semanas dependiendo de la complejidad de tus procesos e integraciones. Las primeras automatizaciones suelen estar activas en los primeros 10 días.',
  },
  {
    question: '¿Necesito conocimientos técnicos?',
    answer:
      'No. Nosotros nos encargamos de todo el desarrollo, configuración e integración. Tú solo necesitas explicarnos cómo funciona tu negocio. El dashboard que recibirás es tan simple como enviar un email.',
  },
  {
    question: '¿Funciona con mi CRM actual?',
    answer:
      'Integramos con los principales CRMs: HubSpot, Salesforce, Pipedrive, Monday, Notion y más de 200 herramientas vía API o Zapier/Make. Si usas algo personalizado, lo analizamos en la consulta inicial.',
  },
  {
    question: '¿Qué pasa si la IA comete un error?',
    answer:
      'El sistema tiene umbrales de confianza configurados. Si la IA no está segura de la respuesta correcta, escala automáticamente a una persona de tu equipo. Nunca responde si puede perjudicar la relación con el cliente.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Los proyectos empiezan desde 2.400€ para automatizaciones puntuales. Los planes de gestión continua se adaptan al volumen de tu negocio. Te damos un presupuesto exacto en la primera llamada, sin letra pequeña.',
  },
  {
    question: '¿Puedo empezar con una sola automatización?',
    answer:
      'Sí, y es lo que recomendamos. Empezamos con el proceso que más impacto tiene en tu negocio, medimos resultados reales en 30 días y después decidimos juntos qué escalar.',
  },
  {
    question: '¿Los datos de mis clientes están seguros?',
    answer:
      'Todos los datos se procesan bajo cumplimiento RGPD. Trabajamos con proveedores con certificación SOC 2 y los datos nunca se usan para entrenar modelos de terceros. Firmamos DPA en todos los contratos.',
  },
  {
    question: '¿Qué diferencia a MKGENIA de otras agencias?',
    answer:
      'Nos especializamos exclusivamente en automatización con IA, no hacemos webs ni SEO. Todos los sistemas que construimos tienen métricas de resultado concretas desde el día uno. Si no hay resultados en 90 días, revisamos el proyecto sin coste adicional.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 lg:py-36 relative z-10">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 xl:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
              Todo lo que
              <br />
              <span className="text-slate-500 dark:text-slate-400">quieres saber</span>
            </h2>
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Si tienes alguna duda que no está aquí, escríbenos directamente.
              Respondemos en menos de 2 horas en horario laboral.
            </p>
            <a
              href="mailto:hola@mkgenia.es"
              className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              hola@mkgenia.es →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AccordionFAQ items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
