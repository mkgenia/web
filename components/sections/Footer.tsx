'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LinkedinLogo, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react'

const year = new Date().getFullYear()

const cols = [
  {
    title: 'Producto',
    links: [{ label: 'Soluciones', href: '#soluciones' }, { label: 'Proceso', href: '#proceso' }, { label: 'Resultados', href: '#beneficios' }, { label: 'Blog', href: '#' }],
  },
  {
    title: 'Empresa',
    links: [{ label: 'FAQ', href: '#faq' }, { label: 'Casos de uso', href: '#' }, { label: 'Sobre nosotros', href: '#' }],
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-black">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="MKGENIA"
                width={120}
                height={34}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-600 leading-relaxed max-w-[180px]">
              Automatización con IA para empresas que quieren crecer sin crecer el equipo.
            </p>
            <p className="mt-6 text-xs text-slate-700">© {year} MKGENIA.</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-[0.15em] mb-5">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-500 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-[0.15em] mb-5">Contacto</h3>
            <div className="flex flex-col gap-3 mb-8">
              <a href="mailto:hola@mkgenia.es" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                <EnvelopeSimple size={15} weight="light" /> hola@mkgenia.es
              </a>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                <WhatsappLogo size={15} weight="light" /> WhatsApp
              </a>
              <a href="https://linkedin.com/company/mkgenia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                <LinkedinLogo size={15} weight="light" /> LinkedIn
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-xs text-slate-500 dark:text-slate-700 hover:text-slate-800 dark:hover:text-slate-500 transition-colors">Política de privacidad</Link>
              <Link href="#" className="text-xs text-slate-500 dark:text-slate-700 hover:text-slate-800 dark:hover:text-slate-500 transition-colors">Política de cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
