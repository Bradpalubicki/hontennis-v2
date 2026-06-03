import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "Services & Pricing | HON Tennis — Coach Tim Brielmaier",
  description: "Full list of tennis and pickleball coaching services from Coach Tim Brielmaier. Private lessons $80/hr, group lessons, clinics $20/person, senior coaching, remote coaching, racquet stringing, and Har-Tru court maintenance.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Everything Tim Offers"
        title="Services &"
        titleAccent="Pricing"
        subtitle="Private lessons, group sessions, clinics, senior coaching, remote video analysis, racquet stringing, and Har-Tru court maintenance — all delivered at your location across the Space Coast."
        ctaText="Book a Session"
        ctaHref="sms:+14142326840?body=Hi Tim, I'd like to book a session!"
      />

      <ServicesSection />

      {/* Har-Tru section */}
      <section id="court-maintenance" className="py-20 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">For Facilities & Clubs</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Har-Tru Court Maintenance
          </h2>
          <p className="text-[#F5F0E8]/60 leading-relaxed mb-6 text-lg">
            Coach Tim&apos;s professional experience as Director of Tennis extends beyond instruction. He offers Har-Tru (clay) court maintenance services for private clubs, HOAs, and residential facilities across Florida&apos;s Space Coast. Pricing by estimate based on court count and condition.
          </p>
          <p className="text-[#F5F0E8]/60 leading-relaxed mb-8">
            Services include surface grooming, line tape, net maintenance, court irrigation systems, and full seasonal preparation. Contact Tim for a free assessment and estimate.
          </p>
          <a
            href="mailto:brielmaiert@gmail.com?subject=Har-Tru Court Maintenance Inquiry"
            className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-semibold px-6 py-3 rounded-full transition-all duration-200"
          >
            Request a Maintenance Estimate
          </a>
        </div>
      </section>

      {/* Racquet stringing section */}
      <section id="stringing" className="py-20 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Equipment Services</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Racquet Stringing
          </h2>
          <p className="text-[#F5F0E8]/60 leading-relaxed mb-6 text-lg">
            Professional racquet stringing available for both tennis and pickleball. Bring your own strings for $20 labor, or Tim provides strings starting at $30+ all-in depending on the string type. Fast turnaround — usually same or next day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-5">
              <p className="text-[#C9A84C] font-bold text-xl font-mono mb-1">$20</p>
              <p className="text-[#F5F0E8] font-semibold mb-1">Labor Only</p>
              <p className="text-[#F5F0E8]/50 text-sm">Bring your own strings — Tim strings them professionally</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-5">
              <p className="text-[#C9A84C] font-bold text-xl font-mono mb-1">$30+</p>
              <p className="text-[#F5F0E8] font-semibold mb-1">Strings Provided</p>
              <p className="text-[#F5F0E8]/50 text-sm">Tim provides and installs the strings — price varies by string</p>
            </div>
          </div>
          <a
            href="sms:+14142326840?body=Hi Tim, I need my racquet restrung!"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            Text Tim About Stringing
          </a>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
