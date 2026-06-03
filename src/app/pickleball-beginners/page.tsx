import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/PageHero"
import ContactSection from "@/components/ContactSection"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pickleball for Beginners | Coach Tim Brielmaier — Space Coast FL",
  description: "Never played pickleball? Coach Tim Brielmaier starts you from zero — rules, scoring, serve, and strokes. IPTPA certified instruction across Florida's Space Coast. $20/person clinics, $80/hr private.",
}

const steps = [
  { step: "01", title: "The Rules & Scoring", desc: "Pickleball has its own scoring system and unique rules (the kitchen, double-bounce rule, serving rules). Tim makes these clear and memorable in the first session." },
  { step: "02", title: "Grip & Paddle Basics", desc: "The right grip prevents bad habits that are hard to unlearn later. Tim starts here — it takes 10 minutes and makes everything else easier." },
  { step: "03", title: "The Serve & Return", desc: "Every point starts with a serve. Tim teaches you a reliable, legal serve from day one so you can actually play games during practice." },
  { step: "04", title: "Dinking & The Kitchen", desc: "The non-volley zone (kitchen) is what makes pickleball unique. Tim teaches you how to use it offensively and defensively — this is where most beginners get stuck." },
  { step: "05", title: "Court Movement", desc: "Where to stand, when to move, and how to cover the court with a partner. Tim's tennis background makes him exceptionally good at teaching positioning." },
  { step: "06", title: "Playing Real Games", desc: "By the end of your first few sessions, you'll have everything you need to join a recreational game, a clinic, or open play at a local court." },
]

export default function PickleballBeginnersPage() {
  return (
    <>
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image src="/images/pickleball-action.webp" alt="Pickleball beginners learning the game" fill priority className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/60 via-[#0A0F1E]/30 to-[#0A0F1E]" />
      </div>
      <PageHero
        eyebrow="Never Played Before? Start Here."
        title="Pickleball Lessons for"
        titleAccent="Complete Beginners"
        subtitle="Coach Tim starts you from zero — rules, grip, serve, and your first real game. Florida's fastest-growing sport is easier to learn than you think with the right instruction."
        ctaText="Book Your First Lesson — $20/person"
        ctaHref="sms:+14142326840?body=Hi Tim, I'm a pickleball beginner and want to get started!"
      />

      {/* Why now */}
      <section className="py-14 bg-[#2D6A4F]/10 border-y border-[#2D6A4F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5F0E8]/70 text-lg leading-relaxed">
            Pickleball is the <strong className="text-[#6FCF97]">fastest-growing sport in the US</strong> — 24 million players in 2025, up 22.8% year-over-year. Florida has more pickleball courts than any other state. There has never been a better time to learn, and more games to join once you do.
          </p>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">The Curriculum</p>
            <h2 className="text-4xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              What You&apos;ll Learn in Your First Sessions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((item) => (
              <div key={item.step} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6">
                <span className="text-3xl font-bold text-[#C9A84C]/20 font-mono block mb-3">{item.step}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-20 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Start Today</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Beginner-Friendly Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6">
              <p className="text-3xl font-bold text-[#C9A84C] font-mono mb-1">$20<span className="text-base text-[#F5F0E8]/40">/person</span></p>
              <p className="text-[#F5F0E8] font-bold mb-2">Group Clinic</p>
              <p className="text-[#F5F0E8]/50 text-sm">90 min · 5–8 beginners · Best way to start</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6">
              <p className="text-3xl font-bold text-[#C9A84C] font-mono mb-1">$80<span className="text-base text-[#F5F0E8]/40">/hr</span></p>
              <p className="text-[#F5F0E8] font-bold mb-2">Private Lesson</p>
              <p className="text-[#F5F0E8]/50 text-sm">60 min · One-on-one · Fastest way to learn</p>
            </div>
          </div>
          <a
            href="sms:+14142326840?body=Hi Tim, I'm a complete beginner and want to start pickleball!"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25"
          >
            Text Tim to Get Started
          </a>
          <p className="mt-4 text-[#F5F0E8]/40 text-sm">
            Or explore <Link href="/pickleball-lessons" className="text-[#C9A84C] hover:underline">all pickleball lessons</Link>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
