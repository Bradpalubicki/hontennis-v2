import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Indialantic FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Indialantic & Indian Harbour Beach, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person.",
}

export default function IndialanticPage() {
  return (
    <CityPage
      city="Indialantic"
      county="Brevard"
      slug="indialantic"
      courts={["Indialantic Riverside Park", "Indian Harbour Beach community courts", "Beachside HOA facilities"]}
      blurb="Indialantic and neighboring Indian Harbour Beach sit right on the Atlantic coast — some of the most scenic tennis and pickleball locations on the entire Space Coast. Coach Tim serves the beachside communities with the same quality instruction he brings everywhere: RSPA certified tennis, IPTPA certified pickleball, and 40+ years of coaching experience. The ocean-adjacent setting makes for an exceptional backdrop for a lesson."
      faq={[
        { q: "Do you teach tennis in Indialantic or Indian Harbour Beach?", a: "Yes — Tim serves both Indialantic and Indian Harbour Beach. He comes to community courts, HOA facilities, and residential courts throughout the beachside communities." },
        { q: "Is the weather in Indialantic good for year-round tennis?", a: "Florida's Space Coast is excellent for year-round play. Tim has a clear weather and cancellation policy — if weather cancels a session, it's rescheduled at no cost." },
        { q: "Do you offer pickleball lessons near the beach?", a: "Yes — Tim teaches pickleball everywhere he serves, including the Indialantic and Indian Harbour Beach area. IPTPA certified instruction for all skill levels." },
        { q: "How do I book a lesson in Indialantic?", a: "Text Tim at (414) 232-6840. He'll confirm your court location and schedule within 1 business day." },
      ]}
    />
  )
}
