import type { Metadata } from "next"
import BookingSection from "@/components/BookingSection"
import ContactSection from "@/components/ContactSection"
import { Phone, Mail, MapPin, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Lesson",
  description: "Book a tennis or pickleball lesson with Coach Tim Brielmaier online via Square, or call/text Tim directly at (414) 232-6840. Serving Melbourne, Palm Bay, Viera, and all of Florida's Space Coast.",
  alternates: { canonical: "https://hontennis.com/contact" },
  openGraph: {
    title: "Book a Lesson | HON Tennis — Coach Tim Brielmaier",
    description: "Book a tennis or pickleball lesson with Coach Tim Brielmaier. Comes to your court across Florida's Space Coast.",
    url: "https://hontennis.com/contact",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier" }],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Two-column hero — left: content, right: Tim's photo */}
      <section className="relative min-h-screen bg-[#0A0F1E] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

            {/* LEFT — contact content */}
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-4">
                Schedule Online or Call Directly
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-[#F5F0E8] mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Book a Lesson with{" "}
                <span className="text-gold-gradient">Coach Tim</span>
              </h1>
              <p className="text-lg text-[#F5F0E8]/65 mb-10 leading-relaxed">
                Book online through Square — instant SMS confirmation sent to your phone. Or call Tim directly for questions. He responds same day, personally.
              </p>

              {/* Contact methods */}
              <div className="space-y-4 mb-10">
                <a href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!" className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/25 bg-[#1A2744] hover:border-[#C9A84C]/50 transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold">Text Tim — Fastest Response</p>
                    <p className="text-[#F5F0E8]/50 text-sm">(414) 232-6840</p>
                  </div>
                </a>

                <a href="tel:+14142326840" className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744]/60 hover:border-[#C9A84C]/35 transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-full bg-[#C9A84C]/8 border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold">Call Tim</p>
                    <p className="text-[#F5F0E8]/50 text-sm">(414) 232-6840</p>
                  </div>
                </a>

                <a href="mailto:brielmaiert@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/15 bg-[#1A2744]/60 hover:border-[#C9A84C]/35 transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-full bg-[#C9A84C]/8 border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold">Email Tim</p>
                    <p className="text-[#F5F0E8]/50 text-sm">brielmaiert@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/10 bg-[#1A2744]/40">
                  <div className="w-11 h-11 rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold">Service Area</p>
                    <p className="text-[#F5F0E8]/50 text-sm">Space Coast & Treasure Coast, Florida</p>
                  </div>
                </div>
              </div>

              {/* Cert badges */}
              <div className="flex gap-3 flex-wrap">
                <div className="flex items-center gap-2 border border-[#C9A84C]/30 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-sm font-semibold">RSPA Certified</span>
                </div>
                <div className="flex items-center gap-2 border border-[#6FCF97]/30 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-[#6FCF97]" />
                  <span className="text-[#6FCF97] text-sm font-semibold">IPTPA Certified</span>
                </div>
                <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2">
                  <span className="text-[#F5F0E8]/50 text-sm">40+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Tim at the net, full photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_70%)] rounded-3xl" />
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-[#0A0F1E]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tim-at-net.webp"
                  alt="Coach Tim Brielmaier at the net — Space Coast Florida"
                  className="w-full h-auto block"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/40 to-transparent pt-12 pb-4 px-4">
                  <p className="text-[#F5F0E8] font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                    Coach Tim Brielmaier
                  </p>
                  <p className="text-[#C9A84C] text-xs font-mono">Space Coast, Florida · Comes to Your Court</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingSection />
      <ContactSection />
    </>
  )
}
