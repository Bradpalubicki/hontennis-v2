import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import RelatedArticles from "@/components/RelatedArticles"
import { articleSchema } from "@/lib/schema"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Tennis & Pickleball Courts on Florida's Space Coast",
  description: "A local coach's guide to the top tennis and pickleball courts in Melbourne, Viera, Palm Bay, Rockledge, and across Brevard County — public parks, HOA courts, and club facilities.",
  keywords: "tennis courts Melbourne FL, pickleball courts Space Coast, tennis courts Viera Florida, Wickham Park tennis, best tennis courts Brevard County, pickleball courts Brevard",
  alternates: { canonical: "https://hontennis.com/education/best-tennis-courts-space-coast-florida" },
  openGraph: { title: "Best Tennis & Pickleball Courts on Florida's Space Coast", description: "A local coach's guide to courts across Brevard County.", type: "article" },
}

const courts = [
  { name: "Wickham Park Tennis Center", city: "Melbourne", type: "Public", surface: "Hard court", notes: "Multiple courts, well-maintained, popular for lessons and open play. One of the best public facilities on the Space Coast.", slug: "melbourne" },
  { name: "Viera Regional Community Park", city: "Viera", type: "Public", surface: "Hard court", notes: "Modern facility with both tennis and pickleball courts. Excellent lighting for evening play. Adjacent to recreational fields.", slug: "viera" },
  { name: "Suntree Country Club", city: "Suntree/Viera", type: "Private/HOA", surface: "Hard court", notes: "Well-maintained HOA courts in a premium community. Tim serves residents here regularly.", slug: "suntree" },
  { name: "Rockledge Country Club", city: "Rockledge", type: "Private", surface: "Hard court", notes: "Classic club environment with professional court surfaces. Tim coaches here and at surrounding HOA facilities.", slug: "rockledge" },
  { name: "Riverside Park Tennis Center", city: "Vero Beach", type: "Public", surface: "Hard court", notes: "Vero Beach's primary public tennis facility. Multiple courts, some with pickleball lines. Great for year-round play.", slug: "vero-beach" },
  { name: "Barber Street Sports Complex", city: "Sebastian", type: "Public", surface: "Hard court", notes: "Multi-sport complex with tennis and pickleball facilities. Tim serves Sebastian players here.", slug: "sebastian" },
  { name: "Indialantic Riverside Park", city: "Indialantic", type: "Public", surface: "Hard court", notes: "Beachside courts in one of Brevard's most scenic locations. Tennis and pickleball available.", slug: "indialantic" },
  { name: "HOA and Residential Courts", city: "County-wide", type: "HOA/Private", surface: "Varies", notes: "Hundreds of HOA communities across Brevard have their own courts. Tim comes to any of these — no club membership needed.", slug: null },
]

const faqs = [
  { question: "Where are the best public tennis courts in Melbourne, FL?", answer: "Wickham Park Tennis Center is the top public tennis facility in Melbourne — multiple well-maintained hard courts, accessible pricing, and popular for both open play and lessons. Fee Avenue Park and other city facilities also offer courts." },
  { question: "Are there pickleball courts in Viera, FL?", answer: "Yes — Viera Regional Community Park has dedicated pickleball courts along with tennis. The Suntree/Viera HOA community also has private courts. Pickleball is growing rapidly throughout Brevard County." },
  { question: "Can a mobile coach use my HOA tennis court?", answer: "In most cases, yes — if you're a resident, you can invite a coach to use your HOA court. Check your HOA's guest policy. Coach Tim works with residents across Brevard County at their HOA facilities regularly." },
  { question: "What tennis courts are near Palm Bay, FL?", answer: "Palm Bay has several public parks with courts including Castlewood Park. Many Palm Bay neighborhoods also have HOA courts. Coach Tim serves Palm Bay players at their preferred local courts." },
  { question: "Do tennis courts in Florida have pickleball lines?", answer: "Many do — it's increasingly common for Florida tennis courts to add pickleball lines or dedicate courts to pickleball. Wickham Park, Viera Regional, and several HOA facilities have both." },
]

export default function BestTennisCourtsPage() {
  const schema = articleSchema({
    title: "Best Tennis & Pickleball Courts on Florida's Space Coast",
    description: "A local coach's guide to tennis and pickleball courts across Brevard County, Florida.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-03",
    slug: "best-tennis-courts-space-coast-florida",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: "Best Courts on the Space Coast" }]} />

      <article className="bg-[#0A0F1E]">
        <div className="relative h-64 w-full overflow-hidden">
          <Image src="/images/pickleball-lady.jpg" alt="Pickleball player on a Florida court — Space Coast" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-widest bg-white/5 text-[#F5F0E8]/50 border border-white/10 px-2 py-1 rounded">Local Guide</span>
            <span className="text-[#F5F0E8]/30 text-xs font-mono">8 min read · June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Best Tennis & Pickleball Courts on Florida&apos;s Space Coast
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-8">
            By <Link href="/about" className="text-[#C9A84C] hover:underline">Coach Tim Brielmaier</Link> · 40+ years coaching on the Space Coast
          </p>

          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#1A2744] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-2">Local Expert Perspective</p>
            <p className="text-[#F5F0E8] text-lg font-semibold leading-relaxed">
              As a mobile coach who&apos;s worked on courts across Brevard and Indian River Counties for decades, I know every major facility on the Space Coast — the good surfaces, the best lighting, and which HOA courts are worth driving to.
            </p>
          </div>

          <div className="space-y-8 text-[#F5F0E8]/70 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>Space Coast Courts by City</h2>
            <div className="space-y-4">
              {courts.map((court) => (
                <div key={court.name} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-[#F5F0E8] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>{court.name}</h3>
                    <span className="text-xs font-mono bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-0.5 rounded shrink-0">{court.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F5F0E8]/40 text-xs font-mono mb-3">
                    <MapPin className="w-3 h-3" />
                    {court.city} · {court.surface}
                  </div>
                  <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">{court.notes}</p>
                  {court.slug && (
                    <Link href={`/tennis-lessons-${court.slug}`} className="text-[#C9A84C] text-xs font-mono mt-3 inline-block hover:underline">
                      Tennis lessons in {court.city} →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>The Advantage of a Mobile Coach</h2>
            <p>One of the most underrated benefits of mobile coaching is that your lesson happens at the court you actually play on. That means the drills, footwork patterns, and positioning work in your session directly transfer to your regular game — not to some facility across town you&apos;ll never return to.</p>
            <p>I&apos;ve coached at virtually every significant court on the Space Coast. Wherever you play, I can come to you.</p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C9A84C]/25 bg-[#1A2744] p-7 text-center">
            <p className="text-[#F5F0E8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Book a Lesson at Your Court</p>
            <p className="text-[#F5F0E8]/55 mb-5 text-sm">Tim comes to you — any court on the Space Coast</p>
            <a href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson at my local court!" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all">
              Text Tim — (414) 232-6840
            </a>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Space Coast Courts FAQs" />
      <RelatedArticles currentHref="/education/best-tennis-courts-space-coast-florida" />
      <ContactSection />
    </>
  )
}
