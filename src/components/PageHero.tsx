"use client"

import { motion, useReducedMotion } from "framer-motion"

interface PageHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle, ctaText, ctaHref }: PageHeroProps) {
  const shouldReduce = useReducedMotion()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)]" />
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-6 max-w-4xl leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}{" "}
          {titleAccent && <span className="text-gold-gradient">{titleAccent}</span>}
        </motion.h1>
        <motion.p
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#F5F0E8]/60 max-w-2xl leading-relaxed mb-8"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaHref && (
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25"
            >
              {ctaText}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
