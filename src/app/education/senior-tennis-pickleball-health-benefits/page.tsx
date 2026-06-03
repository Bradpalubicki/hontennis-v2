import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import { articleSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Senior Tennis & Pickleball: Health Benefits and How to Start",
  description: "Why tennis and pickleball are among the best sports for players 55+. Research-backed health benefits, how to start safely at any age, and what to look for in a senior-focused coach on Florida's Space Coast.",
  keywords: "senior tennis Florida, pickleball seniors health benefits, tennis benefits over 60, pickleball for seniors Space Coast, senior sports coaching Brevard County, how to start tennis at 60 70",
  alternates: { canonical: "https://hontennis.com/education/senior-tennis-pickleball-health-benefits" },
  openGraph: { title: "Senior Tennis & Pickleball: Health Benefits and How to Start", description: "Research-backed health benefits of tennis and pickleball for players 55+, and how to start safely.", type: "article" },
}

const faqs = [
  { question: "Is tennis good for seniors over 60?", answer: "Yes — research consistently shows tennis players live longer and have better cardiovascular health, bone density, and cognitive function than non-players. A 25-year study found tennis players had a 47% lower risk of all-cause mortality compared to sedentary individuals. The key is appropriate instruction and adapted technique to prevent injury." },
  { question: "Is pickleball safer than tennis for older adults?", answer: "Pickleball is generally lower impact — smaller court, shorter rallies, and slower ball speed at recreational levels. However, common injuries (ankle sprains from lateral movement, shoulder strain from improper technique) occur in both sports. Proper instruction dramatically reduces injury risk in either sport." },
  { question: "Can I start tennis or pickleball at 65 or 70?", answer: "Absolutely. Both sports have active competitive communities for players 70+. The key is starting with certified instruction rather than self-teaching — proper technique from day one protects your joints and builds sustainable athletic habits. Coach Tim regularly works with players who are starting in their 60s and 70s." },
  { question: "What are the cognitive benefits of tennis and pickleball for seniors?", answer: "Both sports require pattern recognition, anticipation, and rapid decision-making — which research links to reduced cognitive decline. The social engagement of playing with others also contributes to mental well-being. Several studies suggest racquet sport players have significantly lower rates of dementia than the general population." },
  { question: "How often should seniors play tennis or pickleball?", answer: "Research suggests 2–3 times per week is optimal for health benefits while allowing adequate recovery. 41% of pickleball players over 65 already play 3+ times per week — the highest frequency of any age group. Start with 2x/week and increase based on how your body responds." },
  { question: "What should I look for in a senior tennis or pickleball coach?", answer: "Look for a coach who explicitly adapts instruction to age and fitness level — not one who uses the same drills for everyone. They should emphasize injury prevention, sustainable movement patterns, and progression at your pace. Ask specifically about their experience with seniors and how they modify technique." },
]

export default function SeniorHealthBenefitsPage() {
  const schema = articleSchema({
    title: "Senior Tennis & Pickleball: Health Benefits and How to Start",
    description: "Research-backed health benefits of tennis and pickleball for seniors, and how to start safely.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "senior-tennis-pickleball-health-benefits",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: "Senior Tennis & Pickleball" }]} />

      <article className="bg-[#0A0F1E]">
        <div className="relative h-64 w-full overflow-hidden">
          <Image src="/images/kiwi-courts.jpg" alt="Tennis player on a Florida court — Space Coast" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-widest bg-[#2D6A4F]/10 text-[#6FCF97] border border-[#2D6A4F]/20 px-2 py-1 rounded">Senior Sports</span>
            <span className="text-[#F5F0E8]/30 text-xs font-mono">7 min read · June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Senior Tennis & Pickleball: Health Benefits and How to Start
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
            By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · Senior Coaching Specialist · RSPA & IPTPA Certified
          </p>

          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Key Finding</p>
            <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
              Tennis players have a <strong className="text-[#C9A84C]">47% lower all-cause mortality rate</strong> than sedentary individuals, according to a 25-year Copenhagen study. Pickleball players 65+ play more frequently than any other age group — <strong className="text-[#C9A84C]">41% play 3+ times per week.</strong>
            </p>
          </div>

          <div className="space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>The Research on Racquet Sports and Longevity</h2>
            <p>Racquet sports consistently outperform other forms of exercise in long-term health studies. The combination of aerobic exercise, lateral movement, hand-eye coordination, and social engagement creates a uniquely comprehensive workout that benefits cardiovascular health, bone density, balance, and cognitive function simultaneously.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { stat: "47%", detail: "Lower all-cause mortality for tennis players (Copenhagen City Heart Study)" },
                { stat: "41%", detail: "of pickleball players 65+ play 3+ times per week — highest of any age group" },
                { stat: "30%", detail: "reduction in cardiovascular disease risk with regular racquet sport play" },
                { stat: "25yr", detail: "longitudinal study confirming tennis as top sport for longevity" },
              ].map(item => (
                <div key={item.stat} className="rounded-xl border border-[#C9A84C]/20 bg-[#1A2744] p-5 text-center">
                  <p className="text-3xl font-bold text-[#C9A84C] font-mono mb-1">{item.stat}</p>
                  <p className="text-[#F5F0E8]/55 text-sm leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Health Benefits for Players 55+</h2>
            <ul className="space-y-3">
              {[
                ["Cardiovascular Health", "Regular play maintains heart health, reduces blood pressure, and improves circulation — without the joint stress of running."],
                ["Bone Density", "Weight-bearing movement and impact activity through racquet sports maintains bone density — critical for preventing osteoporosis."],
                ["Balance & Fall Prevention", "Court movement builds proprioception and lateral agility, which directly reduces fall risk — a leading cause of serious injury in older adults."],
                ["Cognitive Function", "The pattern recognition, strategic thinking, and rapid decision-making required in both sports are linked to reduced cognitive decline and dementia risk."],
                ["Social Connection", "Both sports are inherently social. Regular play creates community, reduces isolation, and the mental health benefits of social engagement are well-documented."],
                ["Weight Management", "An hour of recreational tennis or pickleball burns 400–600 calories depending on intensity — effective weight management without feeling like exercise."],
              ].map(([title, desc]) => (
                <li key={title as string} className="flex gap-4 p-5 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50">
                  <span className="text-[#C9A84C] text-sm mt-0.5 shrink-0">✦</span>
                  <div>
                    <strong className="text-[#F5F0E8] block mb-1">{title}</strong>
                    <span className="text-[#F5F0E8]/60 text-sm">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>How to Start Safely</h2>
            <p>The most important thing for a senior starting tennis or pickleball is <strong className="text-[#F5F0E8]">professional instruction from the beginning</strong>. Self-taught players often develop compensatory movement patterns that put unnecessary stress on knees, hips, and shoulders. A certified coach builds proper mechanics from day one — protecting your joints for years of play.</p>
            <p>Start with 2 sessions per week and build from there. Focus on consistency and enjoyment over competition, especially in the first few months. The goal is to build a sustainable habit, not win a tournament in week one.</p>

            <div className="rounded-xl border border-[#2D6A4F]/25 bg-[#2D6A4F]/10 p-6">
              <p className="text-[#6FCF97] font-bold mb-2">Tim&apos;s Senior Coaching Approach</p>
              <p className="text-[#F5F0E8]/65 text-sm leading-relaxed">Every senior lesson is adapted to current fitness and mobility. Tim emphasizes injury prevention over pace, sustainable movement patterns over power, and enjoyment over competitive pressure. The goal: keep you on the court for decades.</p>
              <Link href="/senior-tennis-pickleball" className="text-[#6FCF97] text-sm font-mono hover:underline mt-3 inline-block">
                Learn about senior coaching →
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Start Playing at Any Age</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">Senior-adapted coaching · Comes to your court · Space Coast, FL</p>
            <a href="sms:+14142326840?body=Hi Tim, I'm interested in senior tennis or pickleball lessons!" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all">
              Text Tim to Get Started
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Senior Tennis & Pickleball FAQs" />
      <ContactSection />
    </>
  )
}
