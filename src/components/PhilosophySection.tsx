"use client"

import { motion, useReducedMotion } from "framer-motion"

const pillars = [
  {
    icon: "根",
    title: "Root",
    description: "Every great shot begins with the right foundation. We build from the ground up — footwork, stance, and body mechanics before pace or power.",
  },
  {
    icon: "本",
    title: "Foundation",
    description: "Fundamentals aren't basics — they're the bedrock of every advanced skill. HON coaching reinforces the essentials at every level.",
  },
  {
    icon: "道",
    title: "Path",
    description: "Improvement is a journey, not a destination. Coach Tim meets you where you are today and builds a clear path to where you want to be.",
  },
]

export default function PhilosophySection() {
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  })

  return (
    <section className="py-24 bg-[#050810] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — HON character */}
          <motion.div {...fade(0)} className="text-center lg:text-left">
            <div className="inline-block relative">
              <div className="text-[180px] lg:text-[220px] leading-none font-bold text-[#C9A84C] opacity-10 select-none absolute -top-8 -left-4" style={{ fontFamily: "serif" }}>
                本
              </div>
              <div className="text-[180px] lg:text-[220px] leading-none font-bold text-gold-gradient select-none relative z-10" style={{ fontFamily: "serif" }}>
                本
              </div>
            </div>
            <motion.div {...fade(0.15)} className="mt-6">
              <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-2">HON — 本</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                The Philosophy Behind the Name
              </h2>
              <p className="text-[#F5F0E8]/60 leading-relaxed text-lg">
                In Japanese, 本 (HON) means &ldquo;root&rdquo; or &ldquo;foundation.&rdquo; It&apos;s the same character used in &ldquo;honest,&rdquo; &ldquo;original,&rdquo; and &ldquo;book.&rdquo; Coach Tim&apos;s entire coaching philosophy is built around this idea — that mastery starts at the root, not the result.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Three pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...fade(0.1 + i * 0.1)}
                className="flex gap-5 p-6 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744]/50 hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <div className="text-4xl text-[#C9A84C] shrink-0 w-12 text-center" style={{ fontFamily: "serif" }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F0E8] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-[#F5F0E8]/60 text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
