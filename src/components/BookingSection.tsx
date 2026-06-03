"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Calendar, Phone, Clock, CheckCircle } from "lucide-react"

// Ken: set NEXT_PUBLIC_SQUARE_BOOKING_URL in Vercel env vars
// Get it from: Tim's Square app → Appointments → Share booking link
const SQUARE_BOOKING_URL = process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL

const services = [
  { name: "Private Lesson", duration: "60 min", price: "$80", sport: "Tennis or Pickleball" },
  { name: "Group Lesson", duration: "60 min", price: "$80/hr shared", sport: "2–4 Players" },
  { name: "Clinic", duration: "90 min", price: "$20/person", sport: "5–8 Players" },
  { name: "Senior Coaching", duration: "60 min", price: "$80", sport: "Ages 55+" },
  { name: "Hitting Lesson", duration: "60 min", price: "$80", sport: "Tennis" },
]

const squareFeatures = [
  "Instant SMS confirmation sent to you",
  "Reminder 24 hrs before your lesson",
  "Easy reschedule if weather cancels",
  "Tim manages everything through his app",
]

export default function BookingSection() {
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  })

  return (
    <section id="book" className="py-24 bg-[#050810] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade(0)} className="text-center mb-14">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Ready to Play?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Book a Lesson Online
          </h2>
          <p className="text-[#F5F0E8]/60 max-w-xl mx-auto text-lg">
            Powered by Square Appointments — pick your time, get an instant SMS confirmation, and Tim comes to your court.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">

          {/* Left — services + what to expect */}
          <motion.div {...fade(0.1)} className="space-y-4">
            <p className="text-xs font-mono tracking-widest uppercase text-[#F5F0E8]/40 mb-5">Available Services</p>
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between p-4 rounded-xl border border-[#C9A84C]/12 bg-[#1A2744]/60 hover:border-[#C9A84C]/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <div>
                    <p className="text-[#F5F0E8] font-semibold text-sm">{s.name}</p>
                    <p className="text-[#F5F0E8]/40 text-xs font-mono">{s.sport} · {s.duration}</p>
                  </div>
                </div>
                <span className="text-[#C9A84C] font-bold font-mono text-sm shrink-0 ml-3">{s.price}</span>
              </div>
            ))}

            {/* How it works */}
            <div className="mt-6 p-5 rounded-xl border border-[#2D6A4F]/25 bg-[#2D6A4F]/10">
              <p className="text-[#6FCF97] font-semibold text-sm mb-3">How Square Booking Works</p>
              <ul className="space-y-2">
                {squareFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#F5F0E8]/60">
                    <CheckCircle className="w-3.5 h-3.5 text-[#6FCF97] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — booking CTA */}
          <motion.div {...fade(0.15)}>
            <div className="rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-[#C9A84C]" />
              </div>

              {SQUARE_BOOKING_URL ? (
                <>
                  <h3 className="text-2xl font-bold text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    See Tim&apos;s Availability
                  </h3>
                  <p className="text-[#F5F0E8]/55 mb-7 text-sm leading-relaxed">
                    Pick your service and time. Square sends an instant confirmation to your phone.
                  </p>
                  <a
                    href={SQUARE_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#C9A84C]/25 min-h-[56px] mb-4"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Lesson Online
                  </a>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#F5F0E8] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    Online Booking — Coming Soon
                  </h3>
                  <p className="text-[#F5F0E8]/55 mb-7 text-sm leading-relaxed">
                    Tim&apos;s Square booking calendar will be live here soon. Text or call to schedule right now — Tim responds same day.
                  </p>
                  <a
                    href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
                    className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#C9A84C]/25 min-h-[56px] mb-4"
                  >
                    <Phone className="w-5 h-5" />
                    Text Tim to Book — (414) 232-6840
                  </a>
                </>
              )}

              <a
                href="tel:+14142326840"
                className="flex items-center justify-center gap-2 w-full border-2 border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] font-semibold py-3.5 rounded-full transition-all duration-200 mb-3"
              >
                <Phone className="w-4 h-4" />
                Call Tim — (414) 232-6840
              </a>

              <p className="text-[#F5F0E8]/25 text-xs font-mono mt-6 pt-4 border-t border-[#C9A84C]/10">
                Powered by Square Appointments · Free booking · SMS confirmations included
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
