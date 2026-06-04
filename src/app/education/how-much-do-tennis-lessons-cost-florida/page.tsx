import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import RelatedArticles from "@/components/RelatedArticles"
import { articleSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "How Much Do Tennis Lessons Cost in Florida? (2026 Pricing Guide)",
  description: "Complete 2026 breakdown of tennis lesson prices in Florida. Private lessons, group sessions, clinics — what affects cost, Space Coast pricing, and how to get the best value from a certified instructor.",
  keywords: "tennis lesson cost Florida, how much tennis lessons cost, tennis instructor pricing Space Coast, tennis lesson price Melbourne FL, pickleball lesson cost Florida",
  alternates: { canonical: "https://hontennis.com/education/how-much-do-tennis-lessons-cost-florida" },
  openGraph: {
    title: "How Much Do Tennis Lessons Cost in Florida? 2026 Guide",
    description: "Private lessons, group sessions, clinics — complete pricing breakdown for Florida's Space Coast.",
    type: "article",
    url: "https://hontennis.com/education/how-much-do-tennis-lessons-cost-florida",
    images: [{ url: "https://hontennis.com/images/tennis-lesson.webp", width: 1200, height: 800, alt: "Tennis lesson in progress — Space Coast Florida" }],
  },
}

const faqs = [
  { question: "How much do tennis lessons cost in Florida in 2026?", answer: "Private tennis lessons in Florida typically range from $60–$120 per hour depending on the coach's certification, experience, and location. On Florida's Space Coast, RSPA-certified coaches charge around $80/hr for private sessions. Group lessons and clinics are significantly cheaper — $20/person for a 90-minute clinic with 5–8 players." },
  { question: "Are group tennis lessons cheaper than private lessons?", answer: "Yes. Group clinics (5–8 players) typically cost $20/person per session, compared to $80/hr for private instruction. Group lessons (2–4 players) split the hourly rate and are a great middle ground for friends or family who want to improve together." },
  { question: "What's included in a tennis lesson?", answer: "A professional lesson includes a skill assessment, targeted drills based on your current level, technique correction, and a personalized improvement plan. With a mobile coach like Tim, it also includes travel to your court — no facility fees or commute required." },
  { question: "Is $80/hr a fair price for tennis lessons in Florida?", answer: "Yes — $80/hr is at the mid-range for RSPA-certified instruction in Florida. Uncertified instructors may charge less, but lack professional credentials. Elite academies and club pros often charge $100–$150+/hr. For mobile coaching from a 40+ year certified veteran, $80/hr is strong value." },
  { question: "Do tennis coaches charge more for traveling to my court?", answer: "Some coaches charge travel fees; others include it in their rate. Coach Tim's $80/hr rate includes travel to your court across the Space Coast — Melbourne, Palm Bay, Viera, Vero Beach, and surrounding areas." },
  { question: "Are pickleball lessons the same price as tennis?", answer: "Yes — IPTPA-certified pickleball instruction from Coach Tim is the same rate as tennis: $80/hr private, $20/person for clinics. Some specialized pickleball coaches charge a premium due to demand, but Tim's dual-certification keeps pricing consistent." },
]

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Evaluate and Budget for Tennis Lessons in Florida",
  "description": "A step-by-step guide to understanding tennis lesson formats, comparing Florida instructor rates, and finding the best value for your budget.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Understand lesson formats (private vs group vs clinic)",
      "text": "Tennis instruction comes in three main formats: private lessons (one-on-one, typically $60–$120/hr), group lessons (2–4 players sharing a session), and clinics (5–8 players, 90 minutes, $15–$25/person). Each format serves different goals and budgets — private lessons accelerate improvement fastest, clinics are most affordable.",
    },
    {
      "@type": "HowToStep",
      "name": "Compare rates in your area ($60–$120/hr range in Florida)",
      "text": "In Florida, certified tennis instructors generally charge $60–$120/hr for private sessions. Space Coast rates run $70–$90/hr. Miami and Tampa instructors often charge $100–$150+/hr due to higher cost of living. Always verify the coach holds RSPA or USPTA certification before comparing prices.",
    },
    {
      "@type": "HowToStep",
      "name": "Ask about package deals or multi-session discounts",
      "text": "Most coaches offer discounted packages for 5 or 10 session commitments. A typical 5-lesson package saves $40–$60 vs. pay-per-session. Ask about this upfront — coaches won't always advertise it unless asked. Only buy a package after a trial lesson confirms the fit.",
    },
    {
      "@type": "HowToStep",
      "name": "Factor in travel fees for mobile coaches",
      "text": "Some coaches charge flat travel fees on top of their hourly rate; others include it. Mobile coaches who travel to your court eliminate facility fees and court rental costs, which can offset a slightly higher hourly rate. Always clarify what's included in the quoted price.",
    },
    {
      "@type": "HowToStep",
      "name": "Book a trial lesson to assess value",
      "text": "Before committing to a series, book a single trial lesson. Evaluate whether the coach clearly identifies your weaknesses, explains the reasoning behind each drill, and provides a structured takeaway. A good lesson should leave you with specific things to practice before the next session.",
    },
  ],
}

export default function TennisLessonsCostPage() {
  const schema = articleSchema({
    title: "How Much Do Tennis Lessons Cost in Florida? (2026 Pricing Guide)",
    description: "Complete breakdown of tennis lesson pricing in Florida — private lessons, group sessions, clinics, and what affects cost.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "how-much-do-tennis-lessons-cost-florida",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumbs crumbs={[
        { label: "Home", href: "/" },
        { label: "Education", href: "/education" },
        { label: "Tennis Lesson Costs in Florida" },
      ]} />

      <article className="bg-[#0A0F1E]">
        {/* Hero */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image src="/images/tennis-lesson.webp" alt="Tennis lesson in progress — Space Coast Florida" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-1 rounded">Pricing Guide</span>
            <span className="text-[#F5F0E8]/30 text-xs font-mono">6 min read · Updated <time dateTime="2026-06-03">June 2026</time></span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            How Much Do Tennis Lessons Cost in Florida? (2026 Pricing Guide)
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
            By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · RSPA & IPTPA Certified · Space Coast, FL
          </p>

          {/* Answer box — targets Featured Snippet */}
          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Quick Answer</p>
            <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
              Tennis lessons in Florida cost <strong className="text-[#C9A84C]">$60–$120/hr</strong> for private instruction. On the Space Coast, expect to pay around <strong className="text-[#C9A84C]">$80/hr</strong> for a certified (RSPA) coach. Group clinics cost as little as <strong className="text-[#C9A84C]">$20/person</strong> for a 90-minute session.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Tennis Lesson Pricing Breakdown</h2>
            <p>If you&apos;re looking for tennis lessons in Florida — particularly on the Space Coast — you&apos;ve likely wondered what&apos;s a fair price and what you should expect to get for your money. As an RSPA-certified coach with 40+ years of experience, I&apos;ll give you an honest breakdown.</p>

            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#C9A84C]/15">
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Lesson Type</th>
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Duration</th>
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C9A84C]/10">
                  {[
                    ["Private Lesson", "60 min", "$80/hr"],
                    ["Group Lesson (2–4 players)", "60 min", "$80/hr shared"],
                    ["Clinic (5–8 players)", "90 min", "$20/person"],
                    ["Hitting Lesson", "60 min", "$80/hr"],
                    ["Senior & Longevity", "60 min", "$80/hr"],
                    ["Remote Coaching", "Variable", "Contact for rates"],
                  ].map(([type, duration, price]) => (
                    <tr key={type}>
                      <td className="p-4 text-[#F5F0E8]">{type}</td>
                      <td className="p-4 text-[#F5F0E8]/50">{duration}</td>
                      <td className="p-4 text-[#C9A84C] font-mono font-bold">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>What Affects the Price of Tennis Lessons?</h2>
            <p>Several factors influence what a coach charges:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                ["Certification", "RSPA and USPTA certified coaches command higher rates because they&apos;ve completed rigorous professional training. Uncertified coaches may charge less but provide less structured instruction."],
                ["Experience", "Coaches with 10+ years typically charge a premium. A 40-year veteran brings depth of pattern recognition that newer coaches simply can&apos;t replicate."],
                ["Mobile vs. Facility", "A mobile coach who travels to your court eliminates facility overhead — and often costs less than a club pro who charges court fees on top of lesson fees."],
                ["Group Size", "Larger groups lower per-person cost dramatically. A clinic with 8 players at $20/person generates $160/session — competitive with private rates while serving more students."],
                ["Location in Florida", "Miami and Tampa instructors often charge $100–$150+/hr due to higher cost of living. Space Coast rates are more accessible at $70–$90/hr for certified instruction."],
              ].map(([term, desc]) => (
                <li key={term as string} className="flex gap-3 p-4 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50">
                  <span className="text-[#C9A84C] font-bold shrink-0 w-28 text-sm">{term}</span>
                  <span className="text-sm" dangerouslySetInnerHTML={{ __html: desc as string }} />
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>How to Get the Most Value</h2>
            <p>The best value in tennis instruction is usually a lesson package rather than single sessions. A 5-session program allows the coach to build a proper progression plan — assessing, targeting, reinforcing. One-off lessons often reset progress between sessions.</p>
            <p>Clinics are the most cost-effective way to learn, especially for beginners. At $20/person, a 90-minute group clinic delivers structured instruction at a fraction of the private rate. The social element also accelerates learning — watching other players&apos; mistakes and corrections teaches you faster than solo repetition.</p>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Lesson Programs vs. Pay-Per-Session</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Single Session", price: "$80", note: "Best for: trying it out", highlight: false },
                { name: "5-Lesson Program", price: "$350", note: "Save $50 · Most popular", highlight: true },
                { name: "10-Lesson Series", price: "$650", note: "Save $150 · Best value", highlight: false },
              ].map((pkg) => (
                <div key={pkg.name} className={`rounded-xl border p-5 text-center ${pkg.highlight ? "border-[#C9A84C]/40 bg-[#C9A84C]/5" : "border-[#C9A84C]/15 bg-[#1A2744]"}`}>
                  <p className="text-2xl font-bold text-[#C9A84C] font-mono mb-1">{pkg.price}</p>
                  <p className="text-[#F5F0E8] font-semibold text-sm mb-1">{pkg.name}</p>
                  <p className="text-[#F5F0E8]/40 text-xs">{pkg.note}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Ready to Book a Lesson on the Space Coast?</h2>
            <p>Coach Tim offers <Link href="/tennis-lessons" className="text-[#C9A84C] hover:underline">tennis lessons</Link> and <Link href="/pickleball-lessons" className="text-[#C9A84C] hover:underline">pickleball lessons</Link> across Melbourne, Palm Bay, Viera, Rockledge, Vero Beach, Sebastian, and surrounding areas. He comes to your court — no travel on your end, no facility fees.</p>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Book a Lesson with Coach Tim</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">Private $80/hr · Clinics $20/person · Comes to your court</p>
            <a href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all duration-200">
              Text Tim — (414) 232-6840
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Tennis Lesson Cost FAQs" eyebrow="Frequently Asked Questions" />
      <RelatedArticles currentHref="/education/how-much-do-tennis-lessons-cost-florida" />
      <ContactSection />
    </>
  )
}
