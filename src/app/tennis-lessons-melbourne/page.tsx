import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Melbourne FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Melbourne, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person. All ages & skill levels.",
}

export default function MelbournePage() {
  return (
    <CityPage
      city="Melbourne"
      county="Brevard"
      slug="melbourne"
      courts={["Wickham Park Tennis Center", "Melbourne Village Courts", "Fee Avenue Park", "Local HOA and residential courts"]}
      blurb="Melbourne is the heart of Florida's Space Coast and one of Tim's most active coaching locations. With multiple public and private courts across the city — from Wickham Park to neighborhood HOA facilities — Tim brings professional instruction directly to wherever you play. Whether you're a Melbourne resident picking up a racquet for the first time or a competitive player looking to sharpen your game, Tim's mobile coaching model means zero travel on your end."
      faq={[
        { q: "Do you offer tennis lessons in Melbourne, FL?", a: "Yes — Melbourne is one of Coach Tim's primary service areas. He comes to your court across the city, including Wickham Park, neighborhood courts, and private club facilities." },
        { q: "How much do tennis lessons cost in Melbourne?", a: "Private lessons are $80/hr. Group lessons (2–4 players) are also $80/hr shared. Clinics for 5–8 players are $20/person for a 90-minute session." },
        { q: "Do you teach pickleball in Melbourne too?", a: "Yes — Tim is IPTPA certified and teaches pickleball at the same locations. Melbourne has several excellent pickleball courts and Tim serves them all." },
        { q: "How do I book a lesson in Melbourne?", a: "Text Tim at (414) 232-6840 — it's the fastest way. He responds within 1 business day and will work around your schedule and preferred court." },
      ]}
    />
  )
}
