"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"

const locations = [
  { name: "Melbourne", slug: "melbourne", county: "Brevard" },
  { name: "Palm Bay", slug: "palm-bay", county: "Brevard" },
  { name: "Viera", slug: "viera", county: "Brevard" },
  { name: "Suntree", slug: "suntree", county: "Brevard" },
  { name: "Indialantic", slug: "indialantic", county: "Brevard" },
  { name: "Indian Harbour Beach", slug: "indian-harbour-beach", county: "Brevard" },
  { name: "Rockledge", slug: "rockledge", county: "Brevard" },
  { name: "Vero Beach", slug: "vero-beach", county: "Indian River" },
  { name: "Sebastian", slug: "sebastian", county: "Indian River" },
]

export default function ServiceAreaSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div {...fade(0)}>
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">No Travel Required</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Coach Tim Comes to{" "}
              <span className="text-gold-gradient">Your Court</span>
            </h2>
            <p className="text-[#F5F0E8]/60 leading-relaxed text-lg mb-8">
              No facility membership required. No driving across town. Tim brings world-class coaching to the court you already use — across Brevard and Indian River Counties.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-[#C9A84C]/20 bg-[#1A2744]/50 mb-8">
              <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0" />
              <p className="text-[#F5F0E8]/70 text-sm">
                <strong className="text-[#F5F0E8]">Space Coast & Treasure Coast, Florida</strong>
                {" "}— Serving 9 cities across 2 counties. Don&apos;t see your city? Reach out — Tim may travel to you.
              </p>
            </div>
            <a
              href="sms:+14142326840?body=Hi Tim, I'd like to know if you coach in my area!"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25"
            >
              Text Tim About Your Location
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — location grid */}
          <motion.div {...fade(0.15)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={shouldReduce ? {} : { opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <Link
                    href={`/tennis-lessons-${loc.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50 hover:border-[#C9A84C]/35 hover:bg-[#1A2744] transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      <div>
                        <p className="text-[#F5F0E8] font-medium text-sm group-hover:text-[#C9A84C] transition-colors">{loc.name}</p>
                        <p className="text-[#F5F0E8]/30 text-xs">{loc.county} County</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]/0 group-hover:text-[#C9A84C]/60 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Clinic photo */}
            <div className="mt-6 relative rounded-xl overflow-hidden border border-[#C9A84C]/15 h-48">
              <Image
                src="/images/coach-tim-clinic.webp"
                alt="Coach Tim running a clinic on the Space Coast"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0A0F1E]/50" />
              <div className="absolute inset-0 flex items-end p-4">
                <a
                  href="https://maps.google.com/?q=Melbourne+FL+Tennis+Courts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] text-xs font-mono hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" /> View courts on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
