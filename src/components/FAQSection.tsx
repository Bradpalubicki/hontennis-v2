"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  eyebrow?: string
  includeSchema?: boolean
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions", eyebrow = "FAQ", includeSchema = true }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 bg-[#050810] border-t border-[#C9A84C]/10">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3 text-center">{eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#F5F0E8] mb-10 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4 min-h-[56px]"
                aria-expanded={open === i}
              >
                <span className="text-[#F5F0E8] font-semibold text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#F5F0E8]/65 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
