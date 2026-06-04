import type { Metadata } from "next"
import CityPage from "@/components/CityPage"

export const metadata: Metadata = {
  title: "Tennis Lessons in Palm Bay FL | Coach Tim Brielmaier",
  description: "RSPA certified tennis & pickleball lessons in Palm Bay, FL. Coach Tim comes to your court — private $80/hr, clinics $20/person. All ages & skill levels.",
  alternates: { canonical: "https://hontennis.com/tennis-lessons-palm-bay" },
  openGraph: {
    title: "Tennis Lessons in Palm Bay FL | Coach Tim Brielmaier",
    description: "RSPA certified tennis and pickleball lessons in Palm Bay, FL. Coach Tim comes to your court. Private $80/hr, clinics $20/person. All ages & skill levels.",
    url: "https://hontennis.com/tennis-lessons-palm-bay",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier — tennis & pickleball coach Palm Bay FL" }],
  },
}

export default function PalmBayPage() {
  return (
    <CityPage
      city="Palm Bay"
      county="Brevard"
      slug="palm-bay"
      courts={["Turkey Creek Sanctuary area courts", "Castlewood Park", "Local HOA courts", "Private residential courts"]}
      blurb="Palm Bay is one of the largest cities on Florida's Space Coast and home to a growing tennis and pickleball community. Coach Tim serves players across Palm Bay's neighborhoods — from established residential areas to newer HOA developments. With his mobile coaching model, Tim eliminates the commute entirely: he comes to whatever court is closest and most convenient for you."
      faq={[
        { q: "Do you offer tennis lessons in Palm Bay, FL?", a: "Yes — Palm Bay is a regular service area for Coach Tim. He travels to courts throughout the city and surrounding neighborhoods." },
        { q: "Is pickleball popular in Palm Bay?", a: "Pickleball has grown significantly in Palm Bay, with both public courts and HOA facilities hosting regular play. Tim teaches pickleball at all locations he serves." },
        { q: "What skill levels do you teach in Palm Bay?", a: "All skill levels — complete beginners through competitive players. Tim assesses your current level in the first session and builds a program from there." },
        { q: "How do I get started with lessons in Palm Bay?", a: "Text Tim at (414) 232-6840 with your location and availability. He'll confirm your court, schedule your first session, and show up ready to work." },
      ]}
    />
  )
}
