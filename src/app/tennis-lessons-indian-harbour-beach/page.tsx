import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Indian Harbour Beach FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Indian Harbour Beach, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person.",
}

export default function IndianHarbourBeachPage() {
  return (
    <CityPage
      city="Indian Harbour Beach"
      county="Brevard"
      slug="indian-harbour-beach"
      courts={["Indian Harbour Beach City Park", "Beachside community courts", "Local HOA facilities"]}
      blurb="Indian Harbour Beach is a barrier island community with excellent courts and an active tennis and pickleball scene. Coach Tim serves Indian Harbour Beach players at city park courts and HOA facilities — bringing world-class mobile coaching to one of the Space Coast's most scenic locations. The beachside setting, year-round warm weather, and growing pickleball community make Indian Harbour Beach an exceptional place to play and improve."
      faq={[
        { q: "Do you offer lessons in Indian Harbour Beach?", a: "Yes — Indian Harbour Beach is one of Coach Tim's beachside service locations. He comes to community courts, city park facilities, and HOA courts throughout the area." },
        { q: "What is the best lesson option for a beginner in Indian Harbour Beach?", a: "Tim's beginner clinics at $20/person are the most accessible entry point. You'll learn the rules, basic strokes, and enough to join recreational play in just a few sessions." },
        { q: "Do you teach both tennis and pickleball there?", a: "Yes — Tim is RSPA certified in tennis and IPTPA certified in pickleball. He teaches both sports at all his service locations, including Indian Harbour Beach." },
        { q: "How do I book a lesson?", a: "Text (414) 232-6840 — fastest response. Or email brielmaiert@gmail.com. Tim replies within 1 business day." },
      ]}
    />
  )
}
