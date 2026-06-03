"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award, MapPin, Star } from "lucide-react"
import Image from "next/image"

const credentials = [
  { year: "40+", title: "Years of Experience", detail: "Coaching tennis players of all ages and skill levels across multiple states and countries." },
  { year: "RSPA", title: "Certified Tennis Instructor", detail: "Racquet Sports Professionals Association — professional certification in tennis instruction." },
  { year: "IPTPA", title: "Certified Pickleball Instructor", detail: "International Pickleball Teaching Professional Association — certified to teach both sports at the highest level." },
  { year: "Dir.", title: "Former Director of Tennis", detail: "Vizcaya Clubhouse, Florida — led the full tennis program, court management, and coaching staff." },
  { year: "Intl.", title: "International Experience", detail: "Hong Kong Country Club & Huntington Lakes — coaching experience across multiple countries and elite club environments." },
]

const testimonials = [
  {
    quote: "Tim is patient, understanding, and a strategic teacher. His clinic engagement is excellent and his students show real improvement.",
    name: "Rick B.",
    role: "Club President",
    sport: "Tennis",
  },
  {
    quote: "Great instructor who knows how to break it down and make you better. I've been playing with Tim for years and keep improving.",
    name: "Doug S.",
    role: "Longtime Student",
    sport: "Tennis & Pickleball",
  },
  {
    quote: "Excellent clinics and lessons. Tim gives clear evaluations and builds a real plan for improvement — not just drills.",
    name: "C.D.",
    role: "Student",
    sport: "Pickleball",
  },
]

export default function AboutSection() {
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  })

  return (
    <section id="about" className="py-24 bg-[#050810] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade(0)} className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">The Coach</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
            Meet Coach Tim Brielmaier
          </h2>
        </motion.div>

        {/* Bio + Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — large quote + bio */}
          <motion.div {...fade(0.1)}>
            {/* Coach Tim portrait */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-8 border border-[#C9A84C]/20">
              <Image
                src="/images/coach-tim-portrait.webp"
                alt="Coach Tim Brielmaier — HON Tennis, Space Coast Florida"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-mono tracking-wider uppercase bg-[#C9A84C] text-[#0A0F1E] px-2 py-1 rounded font-bold">RSPA Certified</span>
                  <span className="text-xs font-mono tracking-wider uppercase bg-[#2D6A4F] text-white px-2 py-1 rounded font-bold">IPTPA Certified</span>
                  <span className="text-xs font-mono tracking-wider uppercase bg-white/20 text-white px-2 py-1 rounded">40+ Years</span>
                </div>
              </div>
            </div>
            <blockquote className="text-3xl lg:text-4xl font-bold text-[#F5F0E8] leading-tight mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="text-[#C9A84C] text-6xl leading-none">&ldquo;</span>
              <br />
              I meet you where you are — in skill, in location, in life.
              <span className="text-[#C9A84C] text-6xl leading-none">&rdquo;</span>
            </blockquote>
            <p className="text-[#F5F0E8]/60 leading-relaxed mb-6 text-lg">
              Coach Tim Brielmaier has spent over four decades doing one thing: making players better. From elite club environments in Hong Kong and Florida to community courts across the Space Coast, Tim brings the same philosophy to every lesson — fundamentals first, patience always, results guaranteed.
            </p>
            <p className="text-[#F5F0E8]/60 leading-relaxed text-lg">
              As a mobile coach, Tim comes to you. Your court, your schedule, your pace. No facility memberships, no commute. Just world-class coaching at the court you already use.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#F5F0E8]/50 text-sm">Space Coast & Treasure Coast, Florida</span>
            </div>
            {/* Cert badges */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <div className="flex items-center gap-2 border border-[#C9A84C]/30 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-semibold">RSPA Certified</span>
              </div>
              <div className="flex items-center gap-2 border border-[#6FCF97]/30 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-[#6FCF97]" />
                <span className="text-[#6FCF97] text-sm font-semibold">IPTPA Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right — credential timeline */}
          <motion.div {...fade(0.2)} className="space-y-4">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={shouldReduce ? {} : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50 hover:border-[#C9A84C]/25 transition-all duration-300"
              >
                <div
                  className="text-[#C9A84C] font-bold text-sm font-mono shrink-0 w-12 pt-0.5"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {cred.year}
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-semibold mb-1">{cred.title}</h4>
                  <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{cred.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        {/* Florida court atmosphere photo banner */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 border border-[#C9A84C]/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tim-action-1.jpg" alt="Florida tennis courts — Space Coast" className="w-full h-auto block" />
          <div className="absolute inset-0 bg-[#0A0F1E]/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#C9A84C] font-mono text-xs tracking-widest uppercase">Tim&apos;s courts — Space Coast, Florida</p>
          </div>
        </div>

        <motion.div {...fade(0.15)}>
          <div className="text-center mb-10">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-2">What Students Say</p>
            <h3 className="text-3xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Real Results, Real Players
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#F5F0E8]/80 leading-relaxed mb-5 text-base italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                  <div>
                    <p className="text-[#F5F0E8] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#F5F0E8]/40 text-xs">{t.role}</p>
                  </div>
                  <span className="text-xs font-mono bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-0.5 rounded-full">
                    {t.sport}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
