"use client"

import { useReducedMotion, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"

const stats = [
  { value: 40, suffix: "+", label: "Years Coaching" },
  { value: 2, suffix: "", label: "Sports" },
  { value: 8, suffix: "+", label: "Locations" },
  { value: 100, suffix: "%", label: "Mobile — Your Court" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) { setCount(target); return }
    let start = 0
    const step = Math.ceil(target / (1800 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [target, shouldReduce])

  return <span>{count}{suffix}</span>
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion()
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.2 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])


  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0F1E]">
      {/* Background court grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.07),transparent_70%)]" />

      {/* Main content — two column */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div>
              {/* Sport tags */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                <span className="text-xs font-mono tracking-widest uppercase bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] px-3 py-1.5 rounded-full">
                  🎾 Tennis
                </span>
                <span className="text-xs font-mono tracking-widest uppercase bg-[#2D6A4F]/20 border border-[#2D6A4F]/40 text-[#6FCF97] px-3 py-1.5 rounded-full">
                  🏓 Pickleball
                </span>
                <span className="text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-[#F5F0E8]/50 px-3 py-1.5 rounded-full">
                  📍 Space Coast, FL
                </span>
              </motion.div>

              {/* Google Reviews trust signal */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="flex items-center gap-2 mb-7"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <span className="text-[#F5F0E8]/60 text-xs font-mono">5.0 · Google Reviews</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
                className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-5 text-[#F5F0E8]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Play Your Best{" "}
                <span className="text-gold-gradient">Tennis</span>
                {" & "}
                <span className="text-gold-gradient">Pickleball</span>
                <br />
                <span className="text-[#F5F0E8]/60 text-3xl sm:text-4xl xl:text-5xl">
                  at Any Age.
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" as const }}
                className="text-lg text-[#F5F0E8]/65 mb-3 leading-relaxed"
              >
                Coach Tim comes to <em>your</em> court — no travel, no hassle.
                40+ years of experience across Melbourne, Palm Bay, Viera, and all of
                Florida&apos;s Space Coast &amp; Treasure Coast.
              </motion.p>

              {/* HON tagline */}
              <motion.p
                initial={shouldReduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.48 }}
                className="text-xs font-mono text-[#C9A84C]/60 tracking-widest uppercase mb-9"
              >
                本 &nbsp;HON — Root. Foundation. Fundamentals.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#C9A84C]/25 min-h-[52px]"
                >
                  Book a Lesson
                </Link>
                <a
                  href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#F5F0E8] hover:text-[#C9A84C] font-semibold text-base px-7 py-4 rounded-full transition-all duration-200 min-h-[52px]"
                >
                  <Phone className="w-4 h-4" />
                  Text Tim — (414) 232-6840
                </a>
              </motion.div>

              {/* Trust line */}
              <motion.p
                initial={shouldReduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-5 text-xs text-[#F5F0E8]/35 font-mono tracking-wide"
              >
                RSPA Certified Tennis &nbsp;·&nbsp; IPTPA Certified Pickleball &nbsp;·&nbsp; Responds within 1 business day
              </motion.p>
            </div>

            {/* RIGHT — Tim at the net, static, full photo visible */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Gold glow behind photo */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_70%)] rounded-3xl" />

              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-[#0A0F1E]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tim-at-net.webp"
                  alt="Coach Tim Brielmaier at the net — tennis court, palm trees, Space Coast Florida"
                  className="w-full h-auto block"
                />
                {/* Bottom overlay with cert badges */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/40 to-transparent pt-12 pb-4 px-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-mono tracking-wider uppercase bg-[#C9A84C] text-[#0A0F1E] px-2.5 py-1 rounded font-bold">RSPA Tennis</span>
                    <span className="text-xs font-mono tracking-wider uppercase bg-[#2D6A4F] text-white px-2.5 py-1 rounded font-bold">IPTPA Pickleball</span>
                    <span className="text-xs font-mono tracking-wider uppercase bg-white/15 text-white px-2.5 py-1 rounded">40+ Years</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div ref={statsRef} className="relative z-10 border-t border-[#C9A84C]/15 bg-[#1A2744]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C9A84C]/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="py-6 px-4 lg:px-8 text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-space-mono)" }}>
                  {statsVisible ? <CountUp target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <div className="text-xs text-[#F5F0E8]/50 tracking-widest uppercase font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-28 left-8 z-10 hidden lg:flex flex-col items-center gap-1 text-[#F5F0E8]/20"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
