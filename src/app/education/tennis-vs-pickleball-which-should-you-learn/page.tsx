import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import RelatedArticles from "@/components/RelatedArticles"
import { articleSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Tennis vs. Pickleball: Which Should You Learn First?",
  description: "Should you learn tennis or pickleball first? A certified coach breaks down the differences in cost, learning curve, physical demands, and how the two sports complement each other.",
  keywords: "tennis vs pickleball, should I learn tennis or pickleball, pickleball vs tennis differences, which sport easier to learn, tennis pickleball Space Coast Florida",
  alternates: { canonical: "https://hontennis.com/education/tennis-vs-pickleball-which-should-you-learn" },
  openGraph: { title: "Tennis vs. Pickleball: Which Should You Learn First?", description: "A certified coach breaks down both sports so you can make the right choice.", type: "article" },
}

const faqs = [
  { question: "Is pickleball easier to learn than tennis?", answer: "Yes — pickleball has a shorter learning curve. The smaller court, slower ball speed at recreational levels, and underhand serve make it accessible to beginners within a session or two. Tennis requires more time to develop consistent groundstrokes due to the longer swing and faster ball." },
  { question: "Can tennis players pick up pickleball quickly?", answer: "Yes, and often faster than non-tennis players. The footwork, court positioning, and hand-eye coordination from tennis transfer directly. Most tennis players can play a basic game of pickleball within their first session." },
  { question: "Which sport is better for seniors?", answer: "Both are excellent for seniors, but pickleball is generally easier on the joints due to the smaller court and slower pace at recreational levels. Tennis offers more cardiovascular intensity. Many seniors play both — pickleball for social play, tennis for fitness." },
  { question: "Is tennis or pickleball more popular in Florida?", answer: "Both are very popular in Florida. Pickleball has grown faster recently — Florida has more pickleball courts than any other state (1,071+ locations). Tennis remains the larger sport globally. On the Space Coast, both communities are thriving." },
  { question: "Do I need different equipment for pickleball vs tennis?", answer: "Yes. Tennis uses a strung racquet and felt balls; pickleball uses a solid paddle and a plastic wiffle-style ball. Courts are also different — pickleball courts are smaller and can be laid over tennis courts. Most coaches can teach both sports." },
]

export default function TennisVsPickleballPage() {
  const schema = articleSchema({
    title: "Tennis vs. Pickleball: Which Should You Learn First?",
    description: "A certified dual-sport coach breaks down tennis vs. pickleball — learning curve, cost, physical demands, and which to start with.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "tennis-vs-pickleball-which-should-you-learn",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: "Tennis vs. Pickleball" }]} />

      <article className="bg-[#0A0F1E]">
        <div className="relative h-64 w-full overflow-hidden">
          <Image src="/images/pickleball-players.webp" alt="Pickleball paddle and ball on a colorful Florida court" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-widest bg-[#2D6A4F]/10 text-[#6FCF97] border border-[#2D6A4F]/20 px-2 py-1 rounded">Getting Started</span>
            <span className="text-[#F5F0E8]/30 text-xs font-mono">7 min read · <time dateTime="2026-06-03">June 2026</time></span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Tennis vs. Pickleball: Which Should You Learn First?
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
            By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · RSPA & IPTPA Certified · Space Coast, FL
          </p>

          {/* Quick answer box */}
          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Quick Answer</p>
            <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
              <strong className="text-[#6FCF97]">Start with pickleball</strong> if you want to play games quickly and with less physical demand. <strong className="text-[#C9A84C]">Start with tennis</strong> if you want deeper athletic development and a sport with a higher skill ceiling. Both sports reward each other — learning one makes the other easier.
            </p>
          </div>

          <div className="space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>The Key Differences at a Glance</h2>

            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#C9A84C]/15">
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Factor</th>
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Tennis</th>
                    <th className="text-left p-4 text-[#C9A84C] font-mono uppercase tracking-wider text-xs">Pickleball</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C9A84C]/10 text-[#F5F0E8]/70">
                  {[
                    ["Learning Curve", "Moderate–High", "Low–Moderate"],
                    ["Court Size", "Large (78 ft)", "Small (44 ft)"],
                    ["Equipment Cost", "$30–$300 racquet", "$30–$150 paddle"],
                    ["Physical Demand", "High", "Low–Moderate"],
                    ["Game Speed", "Fast", "Slower (recreational)"],
                    ["Lesson to First Game", "Several sessions", "1–2 sessions"],
                    ["Social Scene", "Strong in FL", "Exploding in FL"],
                    ["Seniors", "Excellent", "Excellent"],
                  ].map(([factor, tennis, pickle]) => (
                    <tr key={factor}>
                      <td className="p-4 text-[#F5F0E8] font-medium text-sm">{factor}</td>
                      <td className="p-4 text-sm">{tennis}</td>
                      <td className="p-4 text-sm">{pickle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>When to Start with Pickleball</h2>
            <p>Pickleball is the right first sport if: you want to play competitive games within your first few weeks, your primary goal is social play, you have joint issues that make tennis uncomfortable, or you&apos;re 55+ and want a sport that&apos;s sustainable for decades.</p>
            <p>Florida is the #1 state for pickleball — 1,071+ court locations and growing. You&apos;ll find games to join very quickly once you have the basics.</p>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>When to Start with Tennis</h2>
            <p>Tennis is the right first sport if: you want deeper athletic development, you&apos;re interested in competitive play at higher levels, you want a skill ceiling you can chase for decades, or you have kids who may want to play competitively (college recruiting, junior circuits).</p>
            <p>Tennis fundamentals also accelerate your pickleball game significantly — footwork, court coverage, and stroke mechanics transfer directly. Many of my best pickleball students started in tennis.</p>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Why a Dual-Sport Coach Changes Everything</h2>
            <p>Most coaches specialize in one sport. As both an RSPA-certified tennis instructor and IPTPA-certified pickleball coach, I teach the connection between the two — which means my tennis students become better pickleball players faster, and vice versa. If you&apos;re considering both sports, a dual-certified coach is the most efficient path to competency in both.</p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Learn Both with One Coach</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">RSPA & IPTPA certified · Comes to your court · Space Coast, FL</p>
            <a href="sms:+14142326840?body=Hi Tim, I want to learn tennis and/or pickleball!" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all duration-200">
              Text Tim to Get Started
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Tennis vs. Pickleball FAQs" />
      <RelatedArticles currentHref="/education/tennis-vs-pickleball-which-should-you-learn" />
      <ContactSection />
    </>
  )
}
