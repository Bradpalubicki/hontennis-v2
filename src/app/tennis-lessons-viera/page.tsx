import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Viera FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis & pickleball lessons in Viera, FL. Coach Tim comes to your court — private $80/hr, clinics $20/person. All ages & skill levels.",
  alternates: { canonical: "https://hontennis.com/tennis-lessons-viera" },
  openGraph: {
    title: "Tennis Lessons in Viera FL | Coach Tim Brielmaier",
    description: "RSPA certified tennis and pickleball lessons in Viera, FL. Coach Tim comes to your court. Private $80/hr, clinics $20/person. All ages & skill levels.",
    url: "https://hontennis.com/tennis-lessons-viera",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier — tennis & pickleball coach Viera FL" }],
  },
}

export default function VieraPage() {
  return (
    <CityPage
      city="Viera"
      county="Brevard"
      slug="viera"
      courts={["Viera Regional Park", "The Duran Golf Club area courts", "Viera HOA tennis facilities", "Suntree area courts"]}
      blurb="Viera is one of Brevard County's most active planned communities — with excellent recreational facilities and a strong tennis and pickleball culture. Coach Tim regularly serves players in Viera's residential communities, HOA courts, and public park facilities. The area's newer courts and well-maintained surfaces make for great coaching conditions year-round."
      faq={[
        { q: "Do you teach tennis in Viera, FL?", a: "Yes — Viera is one of Coach Tim's most active service areas. He works with players at HOA courts, Viera Regional Park, and private residential facilities throughout the community." },
        { q: "Are there pickleball courts in Viera?", a: "Yes — Viera has dedicated pickleball courts at several facilities. Tim is IPTPA certified and teaches pickleball at all his Viera locations." },
        { q: "Do you offer senior coaching in Viera?", a: "Absolutely. Viera has a significant active senior population and Tim's senior coaching specialty is a great fit. He focuses on sustainable movement, injury prevention, and lifelong enjoyment." },
        { q: "How do I book a lesson in Viera?", a: "Text (414) 232-6840 — Tim responds within 1 business day and will schedule at your preferred court." },
      ]}
    />
  )
}
