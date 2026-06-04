import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Sebastian FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis and pickleball lessons in Sebastian, FL. Coach Tim Brielmaier comes to your court. Private $80/hr, clinics $20/person. Serving Indian River County.",
  alternates: { canonical: "https://hontennis.com/tennis-lessons-sebastian" },
  openGraph: {
    title: "Tennis Lessons in Sebastian FL | Coach Tim Brielmaier",
    description: "RSPA certified tennis and pickleball lessons in Sebastian, FL. Coach Tim comes to your court. Private $80/hr, clinics $20/person. Serving Indian River County.",
    url: "https://hontennis.com/tennis-lessons-sebastian",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier — tennis & pickleball coach Sebastian FL" }],
  },
}

export default function SebastianPage() {
  return (
    <CityPage
      city="Sebastian"
      county="Indian River"
      slug="sebastian"
      courts={["Barber Street Sports Complex", "Sebastian River Landing courts", "Local HOA and community courts"]}
      blurb="Sebastian sits at the northern tip of Indian River County, surrounded by the Indian River Lagoon and some of Florida's most beautiful natural scenery. Coach Tim serves Sebastian players with the same professional instruction he brings to the entire Space Coast and Treasure Coast — mobile, flexible, and focused on results. Whether you're playing at Barber Street Sports Complex or your neighborhood HOA court, Tim comes to you."
      faq={[
        { q: "Do you offer tennis lessons in Sebastian, FL?", a: "Yes — Sebastian is within Coach Tim's Treasure Coast service area. He works with players at community courts and HOA facilities throughout the city." },
        { q: "What sports does Coach Tim teach in Sebastian?", a: "Both tennis and pickleball. Tim is dual-certified (RSPA tennis, IPTPA pickleball) and teaches both sports at the same locations he serves in Sebastian." },
        { q: "Are there good pickleball courts in Sebastian?", a: "Sebastian has several pickleball-friendly facilities, including Barber Street Sports Complex. Tim is familiar with the local courts and will work with you to find the best fit." },
        { q: "How do I contact Coach Tim for Sebastian lessons?", a: "Text (414) 232-6840 or email brielmaiert@gmail.com. Tim responds within 1 business day to coordinate scheduling for Sebastian sessions." },
      ]}
    />
  )
}
