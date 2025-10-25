"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
            aria-expanded={openIndex === index}
          >
            <span className="font-baloo text-lg md:text-xl font-bold text-brand-blue pr-4">{item.question}</span>
            <span
              className={`flex-shrink-0 text-brand-yellow text-2xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 pt-0 font-open text-gray-700 leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
