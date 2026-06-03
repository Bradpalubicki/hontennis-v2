import type { Metadata } from "next"
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
