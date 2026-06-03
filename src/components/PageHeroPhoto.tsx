"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Phone } from "lucide-react"

interface PageHeroPhotoProps {
  image: string
  alt: string
  eyebrow: string
  title: string
  titleAccent?: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
}

export default function PageHeroPhoto({
  image,
  alt,
  eyebrow,
  title,
  titleAccent,
  subtitle,
  ctaText,
  ctaHref,
  ctaSecondaryText,
  ctaSecondaryHref,
}: PageHeroPhotoProps) {
  const shouldReduce = useReducedMotion()

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Full-bleed background photo — covers entire hero */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: 0,
        }}
      />

      {/* Dark overlay — readable but photo clearly visible */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.6)", zIndex: 1 }} />

      {/* Bottom fade — merges into page below */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0F1E 0%, rgba(10,15,30,0.2) 35%, transparent 100%)", zIndex: 2 }} />

      {/* Content — vertically centered, clears navbar */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16" style={{ zIndex: 3 }}>
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
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-5 max-w-3xl leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}{" "}
          {titleAccent && <span className="text-gold-gradient">{titleAccent}</span>}
        </motion.h1>

        <motion.p
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed mb-8"
        >
          {subtitle}
        </motion.p>

        {(ctaText || ctaSecondaryText) && (
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#C9A84C]/25 min-h-[52px]"
              >
                {ctaText}
              </a>
            )}
            {ctaSecondaryText && ctaSecondaryHref && (
              <a
                href={ctaSecondaryHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#F5F0E8] hover:text-[#C9A84C] font-semibold text-base px-7 py-4 rounded-full transition-all duration-200 min-h-[52px]"
              >
                <Phone className="w-4 h-4" />
                {ctaSecondaryText}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
