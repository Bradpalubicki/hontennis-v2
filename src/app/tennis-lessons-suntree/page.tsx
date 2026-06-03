import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Suntree FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Suntree, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person. Brevard County.",
  alternates: { canonical: "https://hontennis.com/tennis-lessons-suntree" },
}

export default function SuntreePage() {
  return (
    <CityPage
      city="Suntree"
      county="Brevard"
      slug="suntree"
      courts={["Suntree Country Club", "Suntree HOA courts", "Nearby Viera Regional Park"]}
      blurb="Suntree is one of Brevard County's most desirable residential communities — with beautifully maintained HOA courts and a strong racquet sports culture. Coach Tim regularly serves Suntree residents at their community courts, providing professional tennis and pickleball instruction without leaving the neighborhood. The Suntree Country Club and surrounding HOA facilities make this one of the premier coaching environments on the Space Coast."
      faq={[
        { q: "Do you teach tennis at Suntree Country Club?", a: "Yes — Tim coaches at Suntree Country Club and HOA courts throughout the Suntree community. He coordinates with your facility's court availability." },
        { q: "Is pickleball popular in Suntree?", a: "Very much so — Suntree has embraced pickleball enthusiastically. Tim offers IPTPA certified pickleball instruction at HOA and club facilities across the community." },
        { q: "Do you offer group lessons for Suntree HOA residents?", a: "Absolutely. HOA group clinics at $20/person per 90-minute session are a great fit for Suntree's community culture. Tim can coordinate with your HOA for group scheduling." },
        { q: "How do I schedule a lesson in Suntree?", a: "Text Tim at (414) 232-6840 with your court preference and availability. He responds within 1 business day." },
      ]}
    />
  )
}
