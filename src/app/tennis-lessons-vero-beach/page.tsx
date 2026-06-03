import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Vero Beach FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Vero Beach, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person. Serving Indian River County.",
}

export default function VeroBeachPage() {
  return (
    <CityPage
      city="Vero Beach"
      county="Indian River"
      slug="vero-beach"
      courts={["Riverside Park Tennis Center", "Gifford Community Park", "Local club and HOA courts"]}
      blurb="Vero Beach is the cultural and recreational hub of Indian River County — and one of Coach Tim's Treasure Coast service locations. With excellent public courts at Riverside Park and a thriving HOA tennis and pickleball community throughout the city, Vero Beach players have access to world-class mobile coaching without leaving their neighborhood. Tim makes the drive so you don't have to."
      faq={[
        { q: "Do you travel to Vero Beach for tennis lessons?", a: "Yes — Vero Beach is part of Coach Tim's Treasure Coast service area. He travels from the Space Coast to serve Vero Beach players at their preferred courts." },
        { q: "What's the best way to learn pickleball in Vero Beach?", a: "Tim's beginner clinics ($20/person) are the fastest way to get started. He covers rules, basic strokes, and court positioning in a structured 90-minute group session." },
        { q: "Do you coach at Riverside Park in Vero Beach?", a: "Yes — Riverside Park is one of the primary locations Tim uses in Vero Beach. He can also come to private club courts or HOA facilities anywhere in the city." },
        { q: "Is there a travel fee for Vero Beach lessons?", a: "Contact Tim directly to discuss scheduling for Vero Beach — (414) 232-6840. He'll work with you on timing and logistics for Treasure Coast sessions." },
      ]}
    />
  )
}
