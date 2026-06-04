import type { Metadata } from "next"
import PageHeroPhoto from "@/components/PageHeroPhoto"
import ContactSection from "@/components/ContactSection"
import { Heart, Shield, Activity, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Senior Tennis & Pickleball Coaching",
  description: "Specialized tennis and pickleball coaching for players 55+. Coach Tim Brielmaier focuses on sustainable movement, injury prevention, and lifelong enjoyment of the sport. Mobile coaching across Florida's Space Coast.",
  alternates: { canonical: "https://hontennis.com/senior-tennis-pickleball" },
  openGraph: {
    title: "Senior Tennis & Pickleball Coaching | HON Tennis",
    description: "Specialized coaching for players 55+. Sustainable movement, injury prevention, and lifelong sport.",
    url: "https://hontennis.com/senior-tennis-pickleball",
    images: [{ url: "https://hontennis.com/images/senior-tennis-active.webp", width: 1200, height: 800, alt: "Senior tennis coaching" }],
  },
}

const pillars = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Longevity First",
    desc: "Every session is designed around keeping you healthy and on the court for years to come. Tim prioritizes movement patterns that reduce joint stress and build sustainable athletic habits.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Injury Prevention",
    desc: "Proper warm-up, stroke mechanics that protect the shoulder and elbow, and footwork patterns that minimize fall risk. Tim's coaching keeps you playing — not sidelined.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Adapted Intensity",
    desc: "World-class coaching doesn't mean punishing workouts. Tim meets you at your current fitness level and builds from there — challenging enough to improve, smart enough to stay safe.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Social & Enjoyable",
    desc: "Tennis and pickleball are among the most social sports on earth. Tim's senior sessions emphasize match play, group interaction, and the joy of the game — not just drills.",
  },
]

const faqs = [
  {
    q: "I haven't played in years — can I still take lessons?",
    a: "Absolutely. Tim specializes in getting players back on the court after long breaks. He'll assess where you are now and build a progression that respects your current fitness and mobility.",
  },
  {
    q: "Is pickleball easier on the body than tennis for seniors?",
    a: "Pickleball is generally lower-impact — smaller court, lighter paddle, slower ball speed at recreational levels. Tim coaches both and can help you find the right sport or combination for your body.",
  },
  {
    q: "What if I have a shoulder or knee issue?",
    a: "Tell Tim upfront. He's worked with players through all kinds of physical limitations and will adapt your technique and session accordingly. He's not a physical therapist, but he knows how to coach around common issues.",
  },
  {
    q: "Do you offer group sessions for senior players?",
    a: "Yes — Tim's clinics work especially well for senior social groups. Groups of 5–8 at $20/person per 90-minute session. A great way to improve and socialize at the same time.",
  },
]

export default function SeniorPage() {
  return (
    <>
      <PageHeroPhoto
        image="/images/senior-tennis-active.webp"
        alt="Senior tennis players on a Florida court — Space Coast"
        eyebrow="Senior & Longevity Coaching · All Ages Welcome"
        title="Tennis & Pickleball Coaching"
        titleAccent="Built for 55+"
        subtitle="Specialized instruction that prioritizes your health, mobility, and long-term enjoyment of the sport. Coach Tim comes to your court — no travel required."
        ctaText="Book a Senior Lesson"
        ctaHref="sms:+14142326840?body=Hi Tim, I'm interested in senior coaching!"
        ctaSecondaryText="Call Tim — (414) 232-6840"
        ctaSecondaryHref="tel:+14142326840"
        objectPosition="center center"
      />

      {/* Stats for senior pickleball market */}
      <section className="py-12 bg-[#1A2744]/40 border-y border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 text-center">
            {[
              { stat: "41%", label: "of players 65+ play 3x/week — highest of any age group" },
              { stat: "15.4%", label: "of pickleball players are 65+ (3.7M people)" },
              { stat: "#1", label: "Florida — most pickleball courts in the nation" },
              { stat: "$80", label: "per hour — same rate, specialized approach" },
            ].map((item) => (
              <div key={item.stat} className="max-w-[180px]">
                <span className="text-3xl font-bold text-[#C9A84C] font-mono block">{item.stat}</span>
                <span className="text-xs text-[#F5F0E8]/50 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching pillars */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">The Approach</p>
            <h2 className="text-4xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Coaching Designed for the Long Game
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-5 p-7 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] hover:border-[#C9A84C]/35 transition-all duration-300">
                <span className="text-[#C9A84C] shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F0E8] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
                  <p className="text-[#F5F0E8]/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Simple Pricing</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Same Quality, Adapted for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#C9A84C]/20 bg-[#1A2744] p-6">
              <p className="text-3xl font-bold text-[#C9A84C] font-mono mb-1">$80<span className="text-base text-[#F5F0E8]/40">/hr</span></p>
              <p className="text-[#F5F0E8] font-semibold mb-2">Private Session</p>
              <p className="text-[#F5F0E8]/50 text-sm">One-on-one, fully adapted to your pace and goals</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/20 bg-[#1A2744] p-6">
              <p className="text-3xl font-bold text-[#C9A84C] font-mono mb-1">$20<span className="text-base text-[#F5F0E8]/40">/person</span></p>
              <p className="text-[#F5F0E8] font-semibold mb-2">Group Clinic</p>
              <p className="text-[#F5F0E8]/50 text-sm">90 min · 5–8 players · Social and structured</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3 text-center">Common Questions</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-10 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Senior Coaching FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6">
                <h3 className="text-[#F5F0E8] font-bold mb-3 text-lg">{faq.q}</h3>
                <p className="text-[#F5F0E8]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
