import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import { articleSchema } from "@/lib/schema"
import { CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "What Is RSPA Certification? What to Look for in a Tennis Coach",
  description: "What does RSPA certification mean for a tennis coach? Learn the difference between certified and uncertified instructors, what questions to ask before hiring, and what red flags to watch for.",
  keywords: "RSPA certification tennis, what is RSPA certified coach, tennis instructor certification, IPTPA pickleball certification, how to choose tennis coach Florida, certified tennis instructor Space Coast",
  alternates: { canonical: "https://hontennis.com/education/what-is-rspa-certification-tennis-coach" },
  openGraph: { title: "What Is RSPA Certification? Choosing a Tennis Coach", description: "What RSPA and IPTPA certifications mean, and how to find the right coach.", type: "article" },
}

const faqs = [
  { question: "What does RSPA certification mean for a tennis coach?", answer: "RSPA stands for Racquet Sports Professionals Association. An RSPA-certified tennis instructor has completed professional training in instruction methodology, stroke mechanics, lesson planning, and student assessment. It's a recognized professional credential in the racquet sports industry." },
  { question: "What is IPTPA certification for pickleball?", answer: "IPTPA stands for International Pickleball Teaching Professional Association. An IPTPA-certified instructor has been trained and tested specifically in pickleball instruction — rules, technique, drill design, and how to teach players at different skill levels." },
  { question: "What's the difference between a certified coach and a club pro?", answer: "A club pro is employed by a facility and may or may not hold a professional certification. A certified coach (RSPA, USPTA, PTR) has completed a recognized professional training program. Some club pros are also certified; others are talented players without formal instructor training." },
  { question: "Should I ask to see a coach's certification before booking?", answer: "Yes — it's a reasonable and professional request. Any legitimate certified coach will have documentation or can direct you to the certifying body's registry. Coach Tim's RSPA and IPTPA certifications are verifiable through the respective organizations." },
  { question: "How many years of experience should a tennis coach have?", answer: "For general recreational instruction, 5+ years is reasonable. For competitive development, college prep, or players seeking advanced coaching, look for coaches with 10+ years of documented coaching experience (not just playing). Coach Tim has 40+ years of coaching experience across multiple countries." },
]

export default function RSPACertificationPage() {
  const schema = articleSchema({
    title: "What Is RSPA Certification? What to Look for in a Tennis Coach",
    description: "What RSPA and IPTPA certifications mean, and how to find the right tennis or pickleball coach.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "what-is-rspa-certification-tennis-coach",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: "RSPA Certification & Choosing a Coach" }]} />

      <article className="bg-[#0A0F1E]">

        {/* Two-column intro — text left, Tim portrait right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — title + byline + quick answer */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-1 rounded">Coaching</span>
                <span className="text-[#F5F0E8]/30 text-xs font-mono">5 min read · June 2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                What Is RSPA Certification? What to Look for in a Tennis Coach
              </h1>
              <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
                By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · RSPA & IPTPA Certified
              </p>
              <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Quick Answer</p>
                <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
                  RSPA (Racquet Sports Professionals Association) certification means a tennis coach has completed professional instructor training — not just played at a high level. For pickleball, IPTPA is the equivalent credential. Always verify certifications before hiring.
                </p>
              </div>
            </div>
            {/* Right — Tim portrait */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#C9A84C]/20">
              <Image
                src="/images/coach-tim-portrait.webp"
                alt="Coach Tim Brielmaier — RSPA certified tennis instructor, Space Coast Florida"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                <span className="text-xs font-mono tracking-wider uppercase bg-[#C9A84C] text-[#0A0F1E] px-2 py-1 rounded font-bold">RSPA Certified</span>
                <span className="text-xs font-mono tracking-wider uppercase bg-[#2D6A4F] text-white px-2 py-1 rounded font-bold">IPTPA Certified</span>
                <span className="text-xs font-mono tracking-wider uppercase bg-white/15 text-white px-2 py-1 rounded">40+ Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

          <div className="space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>What RSPA Certification Means</h2>
            <p>The Racquet Sports Professionals Association certifies tennis instructors who have demonstrated competency in lesson design, stroke mechanics, player assessment, and teaching methodology. It&apos;s one of several recognized certifying bodies in tennis alongside USPTA (United States Professional Tennis Association) and PTR (Professional Tennis Registry).</p>
            <p>Certification isn&apos;t just about playing ability — it&apos;s about instructional skill. A certified coach knows how to break down a forehand for a 7-year-old differently than for a 65-year-old. That&apos;s a learned skill, not an innate one.</p>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Green Flags vs. Red Flags</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#2D6A4F]/30 bg-[#2D6A4F]/10 p-5">
                <p className="text-[#6FCF97] font-bold mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Green Flags</p>
                <ul className="space-y-2 text-sm text-[#F5F0E8]/65">
                  {["RSPA, USPTA, or PTR certified","Can articulate your specific improvement plan","References from current students","Clear pricing with no hidden fees","Responds promptly and professionally","Comes to your court or has a clear facility"].map(f => <li key={f} className="flex items-start gap-2"><span className="text-[#6FCF97] mt-1 shrink-0">✓</span>{f}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="text-red-400 font-bold mb-3 flex items-center gap-2"><XCircle className="w-4 h-4" /> Red Flags</p>
                <ul className="space-y-2 text-sm text-[#F5F0E8]/65">
                  {["No verifiable certification","Teaches the same drills to everyone","Can&apos;t explain why they teach certain techniques","Vague about pricing until you&apos;re committed","Pushes long lesson packages before building trust","Only focuses on elite players"].map(f => <li key={f} className="flex items-start gap-2"><span className="text-red-400 mt-1 shrink-0">✗</span><span dangerouslySetInnerHTML={{__html: f}} /></li>)}
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Questions to Ask Before Hiring a Tennis Coach</h2>
            <ul className="space-y-3">
              {[
                "Are you RSPA, USPTA, or PTR certified? Can I verify that?",
                "How long have you been coaching (not playing)?",
                "What&apos;s your approach for players at my level?",
                "Do you have current students I could speak with?",
                "What does a typical session look like?",
                "What&apos;s your cancellation and rescheduling policy?",
              ].map((q, i) => (
                <li key={i} className="flex gap-3 p-4 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50 text-sm">
                  <span className="text-[#C9A84C] font-mono font-bold shrink-0">{String(i+1).padStart(2,"0")}</span>
                  <span dangerouslySetInnerHTML={{__html: q}} />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Work with a Certified Coach</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">RSPA & IPTPA certified · 40+ years experience · Space Coast, FL</p>
            <a href="sms:+14142326840" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all">
              Text Tim — (414) 232-6840
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Tennis Coach Certification FAQs" />
      <ContactSection />
    </>
  )
}
