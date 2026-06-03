import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import { articleSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "How to Find a Pickleball Coach Near You (Florida Guide)",
  description: "With 24 million US pickleball players in 2025, demand for qualified coaches is exploding. Here's how to find, evaluate, and book a certified pickleball instructor in Florida.",
  keywords: "find pickleball coach near me, pickleball instructor Florida, IPTPA certified pickleball coach, pickleball lessons Space Coast, how to find pickleball teacher Melbourne FL",
  alternates: { canonical: "https://hontennis.com/education/how-to-find-pickleball-coach-near-you" },
  openGraph: { title: "How to Find a Pickleball Coach Near You (Florida Guide)", description: "How to find, evaluate, and book a qualified pickleball instructor.", type: "article" },
}

const faqs = [
  { question: "How do I find a pickleball coach near me in Florida?", answer: "Start with the IPTPA directory (iptpa.com/find-a-pro) or PPR (pprpickleball.org/find-a-coach) to find certified instructors in your area. On Florida's Space Coast, Coach Tim Brielmaier is IPTPA certified and serves Melbourne, Palm Bay, Viera, and surrounding areas." },
  { question: "What certification should a pickleball coach have?", answer: "Look for IPTPA (International Pickleball Teaching Professional Association) or PPR (Professional Pickleball Registry) certification. Both require instructors to complete formal training in pickleball-specific teaching methodology." },
  { question: "How much does a pickleball coach cost in Florida?", answer: "Certified pickleball instruction in Florida ranges from $60–$100/hr for private lessons. Group clinics (5–8 players) typically cost $15–$25/person per session. On the Space Coast, Coach Tim charges $80/hr private and $20/person for clinics." },
  { question: "Is it worth hiring a pickleball coach?", answer: "Yes — especially for beginners. Self-taught players often develop habits (wrong grip, poor kitchen positioning, incorrect serve technique) that are very difficult to unlearn. A certified coach gets you playing correctly from the start, which accelerates improvement dramatically." },
  { question: "Can I learn pickleball without lessons?", answer: "You can learn the basics from YouTube and open play, but you'll develop faster with structured instruction. Most self-taught players plateau because they repeat the same patterns. A coach identifies the specific adjustments that unlock your next level." },
]

export default function FindPickleballCoachPage() {
  const schema = articleSchema({
    title: "How to Find a Pickleball Coach Near You (Florida Guide)",
    description: "How to find, evaluate, and book a certified pickleball instructor in Florida.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "how-to-find-pickleball-coach-near-you",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: "How to Find a Pickleball Coach" }]} />

      <article className="bg-[#0A0F1E]">
        <div className="relative h-64 w-full overflow-hidden">
          <Image src="/images/pickleball-action.webp" alt="Pickleball coaching in Florida" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-1 rounded">Finding a Coach</span>
            <span className="text-[#F5F0E8]/30 text-xs font-mono">5 min read · June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            How to Find a Pickleball Coach Near You (Florida Guide)
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
            By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · IPTPA Certified Pickleball Instructor
          </p>

          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Quick Answer</p>
            <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
              Use the <strong className="text-[#C9A84C]">IPTPA or PPR coach directory</strong> to find certified pickleball instructors near you. In Florida, also check local club courts, recreation centers, and Google for &ldquo;pickleball coach [your city] FL.&rdquo; Always verify certification before booking.
            </p>
          </div>

          <div className="space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Why the Market Is Exploding</h2>
            <p>24 million Americans played pickleball in 2025 — up 22.8% year-over-year. Florida leads the nation with 1,071+ pickleball locations. That growth means more players than ever are looking for quality instruction, and demand is outpacing supply of qualified coaches.</p>
            <p>The result: a wide range of coaching quality in the market. Knowing how to identify a qualified instructor saves you money, time, and the frustration of bad habits that are hard to unlearn.</p>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Step-by-Step: How to Find a Coach</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Search IPTPA or PPR Directory", desc: "The IPTPA (iptpa.com) and PPR (pprpickleball.org) maintain searchable directories of certified instructors by location. This is the fastest way to find credentialed coaches in your area." },
                { step: "2", title: "Check Google with Location Keywords", desc: "Search 'pickleball coach [your city] FL' or 'pickleball lessons near me.' Look for coaches with Google reviews, a professional website, and clear pricing — all signals of legitimacy." },
                { step: "3", title: "Ask at Local Courts", desc: "Open play sessions at local courts often lead to coach recommendations. Other players are the most honest source of referrals — they&apos;ve paid for lessons and know who's actually good." },
                { step: "4", title: "Verify Certification", desc: "Before booking, ask for their certification. IPTPA and PPR certifications are verifiable on the organizations' websites. Don't hire based on playing ability alone." },
                { step: "5", title: "Book a Trial Lesson", desc: "Start with one session before committing to a package. A good coach will assess your level, explain what they're working on and why, and leave you with clear takeaways." },
              ].map(item => (
                <div key={item.step} className="flex gap-4 p-5 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/50">
                  <span className="text-3xl font-bold text-[#C9A84C]/20 font-mono shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-[#F5F0E8] font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-[#F5F0E8]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>On Florida&apos;s Space Coast</h2>
            <p>Coach Tim Brielmaier is IPTPA certified and serves Melbourne, Palm Bay, Viera, Rockledge, Indialantic, Vero Beach, Sebastian, and surrounding areas. As a mobile coach, he comes to your court — no facility membership required, no commute on your end.</p>
            <p>Tim also holds RSPA certification in tennis, making him a rare dual-certified instructor for players who want to learn or improve in both sports.</p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Book with an IPTPA Certified Coach</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">Space Coast & Treasure Coast, FL · $20/person clinics · $80/hr private</p>
            <a href="sms:+14142326840?body=Hi Tim, I want to start pickleball lessons!" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all">
              Text Tim to Book
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Finding a Pickleball Coach FAQs" />
      <ContactSection />
    </>
  )
}
