'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'

export interface FAQItem {
  question: string
  answer: string
}

export default function AccordionFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
              isOpen
                ? 'border-slate-300 dark:border-white/[0.15] bg-slate-100 dark:bg-white/[0.05]'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/[0.12]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={isOpen}
            >
              <span className="text-slate-900 dark:text-slate-100 font-medium text-sm leading-snug">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="shrink-0 text-slate-500 dark:text-slate-400"
              >
                <CaretDown size={16} weight="bold" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
