import type { Metadata } from "next"
import PageHeroPhoto from "@/components/PageHeroPhoto"
import BookingSection from "@/components/BookingSection"
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "Book a Lesson | HON Tennis — Coach Tim Brielmaier",
  description: "Book a tennis or pickleball lesson with Coach Tim Brielmaier online via Square, or call/text Tim directly at (414) 232-6840. Serving Melbourne, Palm Bay, Viera, and all of Florida's Space Coast.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeroPhoto
        image="/images/tim-at-net.webp"
        alt="Coach Tim Brielmaier at the net — tennis court, Space Coast Florida"
        eyebrow="Schedule Online or Call Directly"
        title="Book a Lesson with"
        titleAccent="Coach Tim"
        subtitle="Book online through Square — instant confirmation sent to your phone. Or call/text Tim directly at (414) 232-6840 for questions. He responds same day."
        ctaText="Book a Lesson Online"
        ctaHref="/#book"
        ctaSecondaryText="Text Tim — (414) 232-6840"
        ctaSecondaryHref="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
      />
      <BookingSection />
      <ContactSection />
    </>
  )
}
