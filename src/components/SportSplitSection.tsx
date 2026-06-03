"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Users, Clock, Zap } from "lucide-react"

export default function SportSplitSection() {
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  })

  return (
    <section className="py-24 bg-[#0A0F1E] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade(0)} className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Two Sports. One Coach.</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
            Choose Your Game
          </h2>
        </motion.div>

        {/* Clinic photo banner — natural height, no crop */}
        <motion.div {...fade(0.05)} className="relative w-full rounded-2xl overflow-hidden mb-8 border border-[#C9A84C]/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kiwi-courts.jpg"
            alt="Tennis player at Kiwi Racquet and Fitness Club — Indian Harbour Beach, Space Coast Florida"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/65 via-[#0A0F1E]/15 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <p className="text-[#F5F0E8] text-lg font-bold leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
              Space Coast Florida — Where Tim Coaches
            </p>
            <p className="text-[#C9A84C] text-xs font-mono mt-1">Indian Harbour Beach · Melbourne · Viera · Palm Bay</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tennis Card */}
          <motion.div {...fade(0.1)} className="group relative rounded-2xl border border-[#C9A84C]/20 bg-[#1A2744] p-8 hover:border-[#C9A84C]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A84C]/5">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C87A]" />
            <div className="mb-6">
              <span className="text-4xl font-mono text-[#C9A84C] opacity-20 select-none">01</span>
            </div>
            <h3 className="text-3xl font-bold text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Tennis</h3>
            <p className="text-[#F5F0E8]/60 mb-6 leading-relaxed">
              From baseline fundamentals to advanced strategy — Coach Tim&apos;s 40+ years of competitive and coaching experience means faster improvement at every skill level.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: <Users className="w-4 h-4" />, text: "Private, group & hitting lessons" },
                { icon: <Award className="w-4 h-4" />, text: "RSPA Certified instructor" },
                { icon: <Zap className="w-4 h-4" />, text: "All ages & skill levels welcome" },
                { icon: <Clock className="w-4 h-4" />, text: "60-minute sessions, $80/hr" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#F5F0E8]/70">
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <Link href="/tennis-lessons" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold group-hover:gap-3 transition-all duration-200">
              Explore Tennis Lessons <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Pickleball Card */}
          <motion.div {...fade(0.2)} className="group relative rounded-2xl border border-[#2D6A4F]/40 bg-[#1A2744] p-8 hover:border-[#2D6A4F]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#2D6A4F]/5">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2D6A4F] to-[#6FCF97]" />
            <div className="mb-6">
              <span className="text-4xl font-mono text-[#6FCF97] opacity-20 select-none">02</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Pickleball</h3>
              <span className="text-xs font-mono tracking-wider uppercase bg-[#2D6A4F]/30 text-[#6FCF97] px-2 py-1 rounded-full border border-[#2D6A4F]/40">
                Florida&apos;s #1 Sport
              </span>
            </div>
            <p className="text-[#F5F0E8]/60 mb-6 leading-relaxed">
              Tennis-trained coaching means faster pickleball improvement. Tim&apos;s footwork, strategy, and stroke mechanics transfer directly — giving you a competitive edge from day one.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: <Users className="w-4 h-4" />, text: "Beginner through competitive players" },
                { icon: <Award className="w-4 h-4" />, text: "IPTPA Certified instructor" },
                { icon: <Zap className="w-4 h-4" />, text: "Tennis background = faster improvement" },
                { icon: <Clock className="w-4 h-4" />, text: "60-minute sessions, $80/hr" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#F5F0E8]/70">
                  <span className="text-[#6FCF97]">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <Link href="/pickleball-lessons" className="inline-flex items-center gap-2 text-[#6FCF97] font-semibold group-hover:gap-3 transition-all duration-200">
              Explore Pickleball Lessons <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
