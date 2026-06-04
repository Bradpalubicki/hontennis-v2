import type { Metadata } from "next"
import PageHeroPhoto from "@/components/PageHeroPhoto"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import PhilosophySection from "@/components/PhilosophySection"
import BackToTop from "@/components/BackToTop"

export const metadata: Metadata = {
  title: "About Coach Tim Brielmaier",
  description: "Meet Coach Tim Brielmaier — RSPA & IPTPA certified, 40+ years of tennis and pickleball coaching. Former Director of Tennis at Vizcaya Clubhouse. Serving Florida's Space Coast & Treasure Coast.",
  alternates: { canonical: "https://hontennis.com/about" },
  openGraph: {
    title: "About Coach Tim Brielmaier | HON Tennis",
    description: "40+ years of tennis and pickleball coaching experience. RSPA & IPTPA certified. Serving Florida's Space Coast.",
    url: "https://hontennis.com/about",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier" }],
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHeroPhoto
        image="/images/coach-tim-clinic.webp"
        alt="Coach Tim Brielmaier on court with students — Space Coast Florida"
        eyebrow="40+ Years · RSPA · IPTPA · Former Director of Tennis"
        title="Meet Coach"
        titleAccent="Tim Brielmaier"
        subtitle="Four decades of coaching experience across international club environments and Florida's Space Coast. RSPA certified in tennis, IPTPA certified in pickleball — and he comes to your court."
        ctaText="Book a Lesson"
        ctaHref="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
        ctaSecondaryText="Text Tim — (414) 232-6840"
        ctaSecondaryHref="sms:+14142326840"
      />
      <AboutSection />

      {/* Career Timeline */}
      <section className="py-24 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Journey</p>
          <h2 className="text-4xl font-bold text-[#F5F0E8] mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            A Career Built on the Court
          </h2>
          <ol className="relative border-l border-[#C9A84C]/20 space-y-10">
            {[
              {
                era: "Early Career",
                title: "International Club Coaching",
                org: "Hong Kong Country Club",
                detail: "Tim began his international coaching career at the prestigious Hong Kong Country Club, developing his technique-first philosophy while working with players across a wide range of skill levels in a world-class club environment.",
              },
              {
                era: "Club Leadership",
                title: "Director of Tennis",
                org: "Vizcaya Clubhouse, Florida",
                detail: "As Director of Tennis at Vizcaya Clubhouse, Tim oversaw the full tennis program — managing court operations, coaching staff, and delivering instruction to club members from juniors to competitive adults. This role sharpened his ability to build programs, not just players.",
              },
              {
                era: "Elite Club Experience",
                title: "Coaching at Huntington Lakes",
                org: "Huntington Lakes",
                detail: "Continued his work in elite club settings, coaching competitive and recreational players at Huntington Lakes. Each club environment deepened Tim's understanding of what serious players need and what casual players enjoy.",
              },
              {
                era: "Certifications",
                title: "RSPA & IPTPA Dual Certification",
                org: "Racquet Sports Professionals Association · IPTPA",
                detail: "Tim earned his RSPA certification in tennis instruction and his IPTPA certification in pickleball — becoming one of a relatively small number of coaches certified to teach both sports at the professional level. The dual certification reflects his deep commitment to staying current as pickleball transformed the racquet sports landscape.",
              },
              {
                era: "Space Coast",
                title: "Mobile Coaching — Florida's Space Coast",
                org: "HON Tennis",
                detail: "Founding HON Tennis as a mobile coaching operation, Tim brought world-class instruction directly to players' courts across Brevard and Indian River Counties. No facility membership required. No commute. Just the same fundamentals-first coaching Tim has delivered for 40+ years — at the court you already use.",
              },
            ].map((item, i) => (
              <li key={i} className="ml-8">
                <div className="absolute -left-2 w-4 h-4 rounded-full border-2 border-[#C9A84C] bg-[#0A0F1E]" />
                <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-1">{item.era}</p>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                <p className="text-[#C9A84C]/60 text-sm mb-3">{item.org}</p>
                <p className="text-[#F5F0E8]/60 leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PhilosophySection />
      <ContactSection />
      <BackToTop />
    </>
  )
}
