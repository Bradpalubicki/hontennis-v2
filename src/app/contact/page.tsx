import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "Contact | HON Tennis — Coach Tim Brielmaier",
  description: "Book a tennis or pickleball lesson with Coach Tim Brielmaier. Text, call, or email — Tim responds within 1 business day. Serving Melbourne, Palm Bay, Viera, and all of Florida's Space Coast.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Book a Lesson with"
        titleAccent="Coach Tim"
        subtitle="Text is fastest. Tim responds to every message personally — no bots, no booking software. Just a coach who wants to help you play better."
        ctaText="Text Tim Now — (414) 232-6840"
        ctaHref="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
      />
      <ContactSection />
    </>
  )
}
