"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  message: z.string().min(5, "Tell Tim what you're working on"),
})
type FormData = z.infer<typeof schema>

export default function ContactSection() {
  const shouldReduce = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // fail silently — user can still text/call
    } finally {
      setSubmitting(false)
    }
  }

  const fade = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  })

  return (
    <section id="contact" className="py-24 bg-[#050810] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade(0)} className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Ready to Start?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Book a Lesson with Tim
          </h2>
          <p className="text-[#F5F0E8]/60 max-w-xl mx-auto text-lg">
            Text, call, or fill out the form. Tim responds within 1 business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — direct contact */}
          <motion.div {...fade(0.1)}>
            <h3 className="text-2xl font-bold text-[#F5F0E8] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Prefer to Reach Out Directly?
            </h3>

            <div className="space-y-4 mb-10">
              <a
                href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#C9A84C]/20 bg-[#1A2744] hover:border-[#C9A84C]/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold">Text Tim</p>
                  <p className="text-[#F5F0E8]/50 text-sm">(414) 232-6840 — Fastest response</p>
                </div>
              </a>

              <a
                href="tel:+14142326840"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744]/50 hover:border-[#C9A84C]/35 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/15 transition-colors">
                  <Phone className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold">Call Tim</p>
                  <p className="text-[#F5F0E8]/50 text-sm">(414) 232-6840</p>
                </div>
              </a>

              <a
                href="mailto:brielmaiert@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744]/50 hover:border-[#C9A84C]/35 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/15 transition-colors">
                  <Mail className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold">Email Tim</p>
                  <p className="text-[#F5F0E8]/50 text-sm">brielmaiert@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Response promise */}
            <div className="p-5 rounded-xl border border-[#2D6A4F]/30 bg-[#2D6A4F]/10">
              <p className="text-[#6FCF97] font-semibold mb-1">Tim&apos;s Promise</p>
              <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
                Every message gets a personal reply — no automated responses, no booking software runaround. You&apos;ll hear from Tim directly, within 1 business day.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fade(0.2)}>
            <div className="rounded-2xl border border-[#C9A84C]/20 bg-[#1A2744] p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎾</div>
                  <h3 className="text-2xl font-bold text-[#F5F0E8] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-[#F5F0E8]/60">
                    Tim will be in touch within 1 business day. Get ready to play your best.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#F5F0E8] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                    Send Tim a Message
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div>
                      <label className="block text-sm font-medium text-[#F5F0E8]/70 mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register("name")}
                        className="w-full bg-[#0A0F1E] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors text-base min-h-[48px]"
                        placeholder="First and last name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#F5F0E8]/70 mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        className="w-full bg-[#0A0F1E] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors text-base min-h-[48px]"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#F5F0E8]/70 mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        className="w-full bg-[#0A0F1E] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors text-base min-h-[48px]"
                        placeholder="(321) 555-0000"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#F5F0E8]/70 mb-2" htmlFor="message">
                        What Are You Working On?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="w-full bg-[#0A0F1E] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors text-base resize-none"
                        placeholder="e.g. I'm a beginner wanting to learn pickleball, I play 3x/week and want to improve my serve..."
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] disabled:opacity-60 text-[#0A0F1E] font-bold text-base px-6 py-4 rounded-full transition-all duration-200 min-h-[56px]"
                    >
                      {submitting ? "Sending..." : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message to Tim
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-[#F5F0E8]/30">
                      Or text directly: (414) 232-6840 — fastest response
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
