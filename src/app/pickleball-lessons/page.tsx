import type { Metadata } from "next"
import PageHeroPhoto from "@/components/PageHeroPhoto"
import ContactSection from "@/components/ContactSection"
import { Award, TrendingUp, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Pickleball Lessons — Space Coast FL",
  description: "IPTPA certified pickleball coaching across Florida's Space Coast. Tennis-trained Coach Tim Brielmaier comes to your court. Beginners through competitive players. Melbourne, Palm Bay, Viera & more.",
  alternates: { canonical: "https://hontennis.com/pickleball-lessons" },
  openGraph: {
    title: "Pickleball Lessons | Coach Tim Brielmaier — Space Coast FL",
    description: "IPTPA certified pickleball coaching — comes to your court across Florida's Space Coast.",
    url: "https://hontennis.com/pickleball-lessons",
    images: [{ url: "https://hontennis.com/images/pickleball-players.webp", width: 1200, height: 800, alt: "Pickleball coaching session" }],
  },
}

const whyTennisBackground = [
  { title: "Footwork & Court Positioning", desc: "Tennis-trained footwork transfers directly to pickleball — you'll move better than players who've only played pickleball from day one." },
  { title: "Stroke Mechanics", desc: "Sound groundstroke fundamentals make dinks, drives, and resets more natural and consistent right from the start." },
  { title: "Strategy & Pattern Recognition", desc: "40 years of reading play patterns in tennis translates to sharper court sense and faster tactical development in pickleball." },
  { title: "Athletic Development", desc: "Tim's approach builds real athletic habits — not just pickleball habits. You'll be a better mover, competitor, and player overall." },
]

const levels = [
  { level: "Beginner", desc: "Never held a paddle? Tim starts from zero — rules, scoring, grip, serve, and the fundamental strokes.", price: "$80/hr private · $20/person clinic", link: "/pickleball-beginners" },
  { level: "Intermediate", desc: "You know the basics but want to play smarter. Tim works on the third-shot drop, dinking consistency, stacking, and reading your opponents.", price: "$80/hr private · $20/person clinic", link: null },
  { level: "Advanced & Competitive", desc: "Tournament prep, strategy refinement, and film analysis. Tim's competitive tennis background brings tactical depth most pickleball-only coaches can't match.", price: "$80/hr private", link: null },
  { level: "Senior Players", desc: "Pickleball is the perfect lifelong sport — Tim's senior specialty means lessons that prioritize sustainable movement, injury prevention, and maximizing enjoyment at every age.", price: "$80/hr private · $20/person clinic", link: "/senior-tennis-pickleball" },
]

export default function PickleballLessonsPage() {
  return (
    <>
      <PageHeroPhoto
        image="/images/pickleball-players.webp"
        alt="Pickleball players in action — Space Coast Florida"
        eyebrow="Pickleball Instruction · IPTPA Certified · Florida's #1 Sport"
        title="Pickleball Coaching for"
        titleAccent="Every Level"
        subtitle="IPTPA certified and tennis-trained — Coach Tim's background in tennis fundamentals accelerates your pickleball improvement faster than coaching from pickleball-only instructors."
        ctaText="Book a Pickleball Lesson"
        ctaHref="sms:+14142326840?body=Hi Tim, I'd like to book a pickleball lesson!"
        ctaSecondaryText="Call Tim — (414) 232-6840"
        ctaSecondaryHref="tel:+14142326840"
      />

      {/* Market context banner */}
      <section className="py-10 bg-[#2D6A4F]/10 border-y border-[#2D6A4F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "24M+", label: "US Players in 2025" },
              { stat: "#1", label: "Florida — Most Courts in the Nation" },
              { stat: "22.8%", label: "Year-Over-Year Growth" },
              { stat: "IPTPA", label: "Certified Instructor" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#6FCF97] font-mono">{item.stat}</span>
                <span className="text-xs text-[#F5F0E8]/50 font-mono tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tennis background advantage */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#6FCF97] mb-3">The Advantage</p>
            <h2 className="text-4xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Why a Tennis-Trained Coach Makes You Better Faster
            </h2>
            <p className="text-[#F5F0E8]/60 max-w-2xl mx-auto">
              Most pickleball coaches learned pickleball first. Coach Tim learned tennis — and the fundamentals transfer in ways that accelerate your development at every skill level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyTennisBackground.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-[#2D6A4F]/30 bg-[#1A2744]/50 hover:border-[#2D6A4F]/60 transition-all duration-300">
                <TrendingUp className="w-5 h-5 text-[#6FCF97] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#F5F0E8] font-bold mb-2">{item.title}</h3>
                  <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-24 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Find Your Level</p>
            <h2 className="text-4xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Coaching for Every Pickleball Player
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels.map((l) => (
              <div key={l.level} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-7 hover:border-[#C9A84C]/35 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#6FCF97]" />
                  <h3 className="text-xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>{l.level}</h3>
                </div>
                <p className="text-[#F5F0E8]/60 leading-relaxed mb-4">{l.desc}</p>
                <p className="text-xs text-[#C9A84C]/70 font-mono mb-3">{l.price}</p>
                {l.link && <a href={l.link} className="text-sm text-[#6FCF97] hover:underline">Learn more →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { cert: "IPTPA Certified", sub: "International Pickleball Teaching Professional", color: "text-[#6FCF97]", border: "border-[#6FCF97]/30" },
              { cert: "RSPA Certified Tennis", sub: "Foundation in racquet sport fundamentals", color: "text-[#C9A84C]", border: "border-[#C9A84C]/30" },
              { cert: "40+ Years Coaching", sub: "Multi-sport, multi-level, international experience", color: "text-[#C9A84C]", border: "border-[#C9A84C]/30" },
            ].map((c) => (
              <div key={c.cert} className={`flex items-center gap-3 border ${c.border} rounded-full px-6 py-3`}>
                <Award className={`w-5 h-5 ${c.color}`} />
                <div className="text-left">
                  <p className={`font-semibold text-sm ${c.color}`}>{c.cert}</p>
                  <p className="text-[#F5F0E8]/40 text-xs">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
