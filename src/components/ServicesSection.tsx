"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Users, User, Zap, Heart, Monitor, Wrench, Layers } from "lucide-react"

const services = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Private Lessons",
    duration: "60 min",
    price: "$80",
    unit: "/hr",
    description: "One-on-one coaching tailored entirely to your game. The fastest path to measurable improvement.",
    badge: null,
    sport: "Tennis & Pickleball",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Group Lessons",
    duration: "60 min",
    price: "$80",
    unit: "/hr",
    description: "Small groups of 2–4 players. Same focused coaching, shared investment. Great for friends and families.",
    badge: "Most Popular",
    sport: "Tennis & Pickleball",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Clinics",
    duration: "90 min",
    price: "$20",
    unit: "/person",
    description: "Groups of 5–8 players. Structured drill sessions with direct coaching. Best value per session.",
    badge: null,
    sport: "Tennis & Pickleball",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Hitting Lessons",
    duration: "60 min",
    price: "$80",
    unit: "/hr",
    description: "Pure repetition and rhythm. Coach Tim feeds balls and works your strokes until they’re automatic.",
    badge: null,
    sport: "Tennis",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Senior & Longevity Coaching",
    duration: "60 min",
    price: "$80",
    unit: "/hr",
    description: "Specialized coaching designed for players 55+. Emphasis on mobility, injury prevention, and sustainable play at any age.",
    badge: "Specialty",
    sport: "Tennis & Pickleball",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Remote Coaching",
    duration: "Variable",
    price: "Contact",
    unit: " for rates",
    description: "Film analysis and coaching delivered anywhere. Upload your match footage, get detailed breakdown and drills.",
    badge: null,
    sport: "Tennis & Pickleball",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Racquet Stringing",
    duration: "—",
    price: "$20",
    unit: "+ strings",
    description: "Bring your own strings — $20 labor. Need strings? $30+ all-in. Fast turnaround, professional tension.",
    badge: null,
    sport: "Equipment",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Har-Tru Court Maintenance",
    duration: "—",
    price: "Contact",
    unit: " for estimate",
    description: "Professional clay court maintenance for facilities and clubs. Keep your courts in championship condition.",
    badge: "B2B",
    sport: "Facilities",
  },
]

export default function ServicesSection() {
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  })

  return (
    <section id="services" className="py-24 bg-[#0A0F1E] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade(0)} className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">What Tim Offers</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Services & Pricing
          </h2>
          <p className="text-[#F5F0E8]/60 max-w-xl mx-auto text-lg">
            All sessions come to your court — no facility fees, no travel required on your end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              {...fade(0.05 * i)}
              className="relative rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6 hover:border-[#C9A84C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/8 flex flex-col cursor-pointer group"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                    service.badge === "Most Popular"
                      ? "bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30"
                      : service.badge === "Specialty"
                      ? "bg-[#2D6A4F]/20 text-[#6FCF97] border border-[#2D6A4F]/40"
                      : "bg-white/5 text-[#F5F0E8]/40 border border-white/10"
                  }`}>
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <div className="text-[#C9A84C] mt-0.5">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {service.title}
                  </h3>
                  <span className="text-xs text-[#F5F0E8]/40 font-mono">{service.sport}</span>
                </div>
              </div>

              <p className="text-[#F5F0E8]/60 text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              <div className="flex items-end justify-between pt-4 border-t border-[#C9A84C]/10 mt-auto">
                <div>
                  <span className="text-2xl font-bold text-[#C9A84C]" style={{ fontFamily: "var(--font-space-mono)" }}>
                    {service.price}
                  </span>
                  <span className="text-sm text-[#F5F0E8]/40">{service.unit}</span>
                </div>
                <span className="text-xs text-[#C9A84C]/0 group-hover:text-[#C9A84C]/80 font-mono transition-colors duration-200">
                  Book this →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pricing packages */}
        <motion.div {...fade(0.2)} className="rounded-2xl border border-[#C9A84C]/20 bg-[#1A2744] p-8 lg:p-12">
          <div className="text-center mb-10">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-2">Save When You Commit</p>
            <h3 className="text-3xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Lesson Programs
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Single Session", sessions: "1 lesson", price: "$80", savings: null, desc: "Try it out — no commitment required." },
              { name: "5-Lesson Program", sessions: "5 lessons", price: "$350", savings: "Save $50", desc: "The most popular choice. Real progress in 5 sessions.", popular: true },
              { name: "10-Lesson Series", sessions: "10 lessons", price: "$650", savings: "Save $150", desc: "Full transformation. Best value for committed players." },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl p-6 text-center border ${
                  pkg.popular
                    ? "border-[#C9A84C]/50 bg-[#C9A84C]/5"
                    : "border-[#C9A84C]/15 bg-[#0A0F1E]/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C9A84C] text-[#0A0F1E] text-xs font-bold font-mono tracking-widest uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <p className="text-xs font-mono tracking-widest uppercase text-[#F5F0E8]/40 mb-1">{pkg.sessions}</p>
                <h4 className="text-lg font-bold text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{pkg.name}</h4>
                <div className="text-4xl font-bold text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-space-mono)" }}>{pkg.price}</div>
                {pkg.savings && (
                  <div className="text-sm text-[#6FCF97] mb-3">{pkg.savings}</div>
                )}
                <p className="text-sm text-[#F5F0E8]/50 mb-5">{pkg.desc}</p>
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                    pkg.popular
                      ? "bg-[#C9A84C] text-[#0A0F1E] hover:bg-[#E8C87A]"
                      : "border border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C]"
                  }`}
                >
                  Reserve Your Spot
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Weather policy */}
        <motion.div {...fade(0.3)} className="mt-8 rounded-xl border border-[#2D6A4F]/30 bg-[#2D6A4F]/10 p-5 flex items-start gap-4">
          <div className="text-2xl shrink-0">⛅</div>
          <div>
            <p className="text-[#6FCF97] font-semibold mb-1">Weather & Cancellation Policy</p>
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
              Weather happens — especially in Florida. Sessions cancelled due to weather are rescheduled at no cost. Please provide 24-hour notice for non-weather cancellations. Tim responds to all messages within 1 business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
