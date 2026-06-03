"use client"

import { useReducedMotion, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
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
  const ref = useRef<HTMLSpanElement>(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) { setCount(target); return }
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [target, shouldReduce])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion()
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero background photo — Tim coaching on court */}
      <div className="absolute inset-0">
        <Image
          src="/images/coach-tim-junior.webp"
          alt="Coach Tim Brielmaier giving a tennis lesson on a Florida court"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — preserves readability + brand feel */}
        <div className="absolute inset-0 bg-[#0A0F1E]/75" />
        {/* Gold gradient from bottom — feeds into stats strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/20 to-transparent" />
        {/* Left vignette — pushes eye to text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/60 via-transparent to-transparent" />
      </div>

      {/* Subtle gold glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(201,168,76,0.06),transparent)]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-4xl">
            {/* Sport tags */}
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] px-3 py-1.5 rounded-full">
                Tennis
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase bg-[#2D6A4F]/20 border border-[#2D6A4F]/40 text-[#6FCF97] px-3 py-1.5 rounded-full">
                Pickleball
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-[#F5F0E8]/60 px-3 py-1.5 rounded-full">
                Space Coast, FL
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 text-[#F5F0E8]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Play Your Best{" "}
              <span className="text-gold-gradient">Tennis</span>
              {" & "}
              <span className="text-gold-gradient">Pickleball</span>
              <br />
              <span className="text-[#F5F0E8]/70 text-4xl sm:text-5xl lg:text-6xl">
                at Any Age.
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="text-lg sm:text-xl text-[#F5F0E8]/70 max-w-2xl mb-4 leading-relaxed"
            >
              Coach Tim comes to <em>your</em> court — no travel, no hassle.
              40+ years of experience across Melbourne, Palm Bay, Viera, and all of
              Florida&apos;s Space Coast &amp; Treasure Coast.
            </motion.p>

            {/* HON philosophy micro-line */}
            <motion.p
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm font-mono text-[#C9A84C]/70 tracking-widest uppercase mb-10"
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
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#C9A84C]/25 min-h-[56px]"
              >
                Book a Lesson
              </Link>
              <a
                href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#F5F0E8] hover:text-[#C9A84C] font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 min-h-[56px]"
              >
                <Phone className="w-5 h-5" />
                Text Tim — (414) 232-6840
              </a>
            </motion.div>

            {/* Trust micro-line */}
            <motion.p
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-5 text-sm text-[#F5F0E8]/40"
            >
              RSPA Certified &nbsp;·&nbsp; IPTPA Certified &nbsp;·&nbsp; I respond within 1 business day
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-[#C9A84C]/15 bg-[#1A2744]/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C9A84C]/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="py-6 px-6 lg:px-8 text-center"
              >
                <div
                  className="text-3xl lg:text-4xl font-bold text-[#C9A84C] mb-1"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
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
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1 text-[#F5F0E8]/20"
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
