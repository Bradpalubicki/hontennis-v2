import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/PageHero"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "About Coach Tim Brielmaier | HON Tennis",
  description: "Meet Coach Tim Brielmaier — 40+ years of tennis and pickleball coaching experience. RSPA & IPTPA certified. Former Director of Tennis at Vizcaya Clubhouse. Serving the Space Coast & Treasure Coast, Florida.",
}

export default function AboutPage() {
  return (
    <>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden pt-20 lg:pt-24">
        <Image src="/images/coach-tim-clinic.webp" alt="Coach Tim Brielmaier on court" fill priority className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#0A0F1E]/20 to-[#0A0F1E]" />
      </div>
      <PageHero
        eyebrow="40+ Years · RSPA · IPTPA · Former Director of Tennis"
        title="Meet Coach"
        titleAccent="Tim Brielmaier"
        subtitle="Four decades of coaching experience across international club environments and Florida's Space Coast. RSPA certified in tennis, IPTPA certified in pickleball — and he comes to your court."
      />
      <AboutSection />
      <ContactSection />
    </>
  )
}
