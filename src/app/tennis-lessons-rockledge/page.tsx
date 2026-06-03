import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Rockledge FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Rockledge, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person. All ages & skill levels.",
  alternates: { canonical: "https://hontennis.com/tennis-lessons-rockledge" },
}

export default function RockledgePage() {
  return (
    <CityPage
      city="Rockledge"
      county="Brevard"
      slug="rockledge"
      courts={["Rockledge Country Club", "Local community courts", "HOA tennis and pickleball facilities"]}
      blurb="Rockledge is one of Brevard County's oldest and most established communities — with a growing racquet sports scene that reflects Florida's broader pickleball boom. Coach Tim serves Rockledge players at community courts, country club facilities, and residential HOA courts. Whether you're new to the game or looking to compete at a higher level, Tim brings the same focused, fundamentals-first coaching to every session."
      faq={[
        { q: "Do you offer tennis lessons in Rockledge, FL?", a: "Yes — Rockledge is within Coach Tim's regular service area. He teaches at HOA courts, the Rockledge Country Club, and community facilities throughout the city." },
        { q: "What sports do you coach in Rockledge?", a: "Both tennis and pickleball. Tim is RSPA certified in tennis and IPTPA certified in pickleball, making him one of the few dual-sport certified coaches on the Space Coast." },
        { q: "Do you coach groups in Rockledge?", a: "Yes — clinics for 5–8 players at $20/person per 90-minute session. Great for HOA communities and neighborhood groups who want group instruction." },
        { q: "How far in advance do I need to book?", a: "Tim usually has availability within a week. Text (414) 232-6840 with your preferred dates and court — he'll confirm quickly." },
      ]}
    />
  )
}
