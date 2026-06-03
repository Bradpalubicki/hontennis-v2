import ContactSection from "@/components/ContactSection"
import Link from "next/link"
import { MapPin, CheckCircle, Star } from "lucide-react"

interface CityPageProps {
  city: string
  county: string
  slug: string
  courts?: string[]
  blurb: string
  faq: { q: string; a: string }[]
}

export default function CityPage({ city, county, slug, courts, blurb, faq }: CityPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-[#C9A84C]" />
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C]">
              {city}, {county} County · Florida
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-6 max-w-4xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Tennis & Pickleball Lessons in{" "}
            <span className="text-gold-gradient">{city}, FL</span>
          </h1>
          <p className="text-lg text-[#F5F0E8]/60 max-w-2xl leading-relaxed mb-8">
            Coach Tim Brielmaier comes to your court in {city} — RSPA & IPTPA certified, 40+ years experience. Private lessons, group sessions, and clinics for all ages and skill levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`sms:+14142326840?body=Hi Tim, I'm looking for lessons in ${city}, FL!`}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25"
            >
              Book a Lesson in {city}
            </a>
            <a
              href="tel:+14142326840"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:border-[#C9A84C]"
            >
              Call (414) 232-6840
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-8 bg-[#1A2744]/40 border-y border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "RSPA Certified Tennis Instructor",
              "IPTPA Certified Pickleball Instructor",
              "40+ Years Experience",
              "I Come to Your Court",
              "All Ages & Skill Levels",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#F5F0E8]/60">
                <CheckCircle className="w-4 h-4 text-[#C9A84C] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific content */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">About This Location</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Tennis & Pickleball Coaching in {city}
          </h2>
          <p className="text-[#F5F0E8]/60 leading-relaxed text-lg mb-8">{blurb}</p>

          {courts && courts.length > 0 && (
            <div className="mb-10">
              <h3 className="text-[#F5F0E8] font-semibold mb-4">Courts Tim Serves in {city}</h3>
              <ul className="space-y-2">
                {courts.map((court) => (
                  <li key={court} className="flex items-center gap-3 text-[#F5F0E8]/60 text-sm">
                    <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    {court}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { name: "Private Lessons", price: "$80/hr", desc: "One-on-one at your court" },
              { name: "Group Lessons", price: "$80/hr", desc: "2–4 players, shared session" },
              { name: "Clinics", price: "$20/person", desc: "5–8 players, 90 minutes" },
            ].map((s) => (
              <div key={s.name} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-5 text-center">
                <p className="text-[#C9A84C] font-bold text-xl font-mono mb-1">{s.price}</p>
                <p className="text-[#F5F0E8] font-semibold text-sm mb-1">{s.name}</p>
                <p className="text-[#F5F0E8]/40 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="rounded-xl border border-[#C9A84C]/20 bg-[#1A2744] p-7">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />)}
            </div>
            <p className="text-[#F5F0E8]/80 italic leading-relaxed mb-4">
              &ldquo;Tim is patient, understanding, and a strategic teacher. His clinic engagement is excellent and his students show real improvement.&rdquo;
            </p>
            <p className="text-[#F5F0E8] text-sm font-semibold">Rick B. — Club President, Space Coast FL</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3 text-center">Common Questions</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-10 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Tennis Lessons in {city} — FAQs
          </h2>
          <div className="space-y-5">
            {faq.map((item) => (
              <div key={item.q} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-6">
                <h3 className="text-[#F5F0E8] font-bold mb-3">{item.q}</h3>
                <p className="text-[#F5F0E8]/60 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-14 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5F0E8]/40 text-sm mb-4">Also serving nearby areas:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Melbourne", href: "/tennis-lessons-melbourne" },
              { label: "Palm Bay", href: "/tennis-lessons-palm-bay" },
              { label: "Viera", href: "/tennis-lessons-viera" },
              { label: "Rockledge", href: "/tennis-lessons-rockledge" },
              { label: "Vero Beach", href: "/tennis-lessons-vero-beach" },
              { label: "Sebastian", href: "/tennis-lessons-sebastian" },
            ].filter(l => !l.href.includes(slug)).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-[#C9A84C]/60 hover:text-[#C9A84C] border border-[#C9A84C]/15 hover:border-[#C9A84C]/35 px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
