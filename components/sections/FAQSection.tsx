'use client'

import { motion } from 'framer-motion'
import AccordionFAQ, { FAQItem } from '@/components/ui/AccordionFAQ'

const faqs: FAQItem[] = [
  {
    question: '¿De qué portales podéis captar leads automáticamente?',
    answer:
      'Integramos con Idealista, Fotocasa, Habitaclia, Pisos.com y cualquier portal que permita acceso a sus leads. Los contactos entran directamente en tu CRM con toda la información del piso y el comprador, listos para trabajar.',
  },
  {
    question: '¿El bot puede responder preguntas concretas sobre mis pisos?',
    answer:
      'Sí. El bot se alimenta de tu cartera de propiedades y responde preguntas sobre precio, superficie, planta, estado, barrio y disponibilidad de visita. Si el comprador pregunta algo que no sabe, escala al agente sin interrumpir la conversación.',
  },
  {
    question: '¿Funciona con mi CRM actual?',
    answer:
      'Integramos con los principales CRMs inmobiliarios: Witei, Inmovilla, Sooprema, Wolly, HubSpot y más de 200 herramientas vía API o Zapier/Make. Si usas algo personalizado, lo analizamos en la consulta inicial.',
  },
  {
    question: '¿Cuánto tiempo tarda la implementación?',
    answer:
      'El proceso completo va de 2 a 4 semanas. El bot respondiendo en WhatsApp suele estar activo en los primeros 10 días. La sincronización de portales y el CRM, en la semana 2-3.',
  },
  {
    question: '¿Qué pasa si la IA no sabe responder algo?',
    answer:
      'El sistema tiene umbrales de confianza configurados. Si la IA no está segura de la respuesta, escala automáticamente al agente asignado con todo el historial de la conversación. El comprador nunca lo nota.',
  },
  {
    question: '¿Puedo empezar solo con el bot de WhatsApp?',
    answer:
      'Sí, y es lo que recomendamos como primer paso. Empezamos con el canal que más impacto tiene en tu agencia, medimos resultados en 30 días y luego decidimos qué automatizar a continuación.',
  },
  {
    question: '¿Los datos de mis clientes y propiedades están seguros?',
    answer:
      'Todos los datos se procesan bajo cumplimiento RGPD. Trabajamos con proveedores con certificación SOC 2 y los datos nunca se usan para entrenar modelos de terceros. Firmamos DPA en todos los contratos.',
  },
  {
    question: '¿Qué diferencia a MKGENIA de otras soluciones para inmobiliarias?',
    answer:
      'Nos especializamos en automatización IA para el sector inmobiliario, no somos una herramienta genérica. Configuramos cada sistema a medida de tu cartera, tus portales y tu proceso de venta. Si no hay resultados en 90 días, revisamos el proyecto sin coste adicional.',
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
