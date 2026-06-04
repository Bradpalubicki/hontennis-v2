import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactSection from "@/components/ContactSection"
import BackToTop from "@/components/BackToTop"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Reviews",
  description: "Read reviews from students of Coach Tim Brielmaier — tennis and pickleball coaching across Florida's Space Coast. See what players are saying about their experience.",
  alternates: { canonical: "https://hontennis.com/reviews" },
  openGraph: {
    title: "Student Reviews | HON Tennis — Coach Tim Brielmaier",
    description: "5-star reviews from tennis and pickleball students across Florida's Space Coast.",
    url: "https://hontennis.com/reviews",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier" }],
  },
}

const reviews = [
  {
    name: "Rick B.",
    role: "Club President",
    sport: "Tennis",
    location: "Melbourne, FL",
    rating: 5,
    review: "Tim is patient, understanding, and a strategic teacher. His clinic engagement is excellent and his students show real, measurable improvement. As club president I've seen a lot of coaches — Tim stands out.",
  },
  {
    name: "Doug S.",
    role: "Longtime Student",
    sport: "Tennis & Pickleball",
    location: "Space Coast, FL",
    rating: 5,
    review: "Great instructor who knows how to break it down and make you better. I've been playing with Tim for years and keep improving. He adapts his coaching to exactly what you need — not a one-size-fits-all approach.",
  },
  {
    name: "C.D.",
    role: "Student",
    sport: "Pickleball",
    location: "Viera, FL",
    rating: 5,
    review: "Excellent clinics and lessons. Tim gives clear evaluations and builds a real plan for improvement — not just drills. I came as a beginner and now play competitive recreational pickleball. Couldn't have done it without him.",
  },
  {
    name: "Space Coast Player",
    role: "Clinic Participant",
    sport: "Tennis",
    location: "Palm Bay, FL",
    rating: 5,
    review: "The best part about Tim is that he comes to YOUR court. No driving across town, no facility memberships. He shows up, gets to work, and genuinely cares about your progress.",
  },
  {
    name: "Senior Player",
    role: "Senior Coaching Student",
    sport: "Tennis & Pickleball",
    location: "Vero Beach, FL",
    rating: 5,
    review: "I was worried about getting back into tennis after years away. Tim was incredibly patient and tailored everything to where I actually was — not where he thought I should be. Playing three times a week now.",
  },
  {
    name: "Group Lesson Student",
    role: "Group Lesson Participant",
    sport: "Pickleball",
    location: "Rockledge, FL",
    rating: 5,
    review: "Took group lessons with three friends and it was one of the best decisions we made. Tim kept all four of us engaged the whole time and gave each of us individual feedback. Worth every penny.",
  },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="What Students Are Saying"
        title="Real Reviews from"
        titleAccent="Real Players"
        subtitle="Coach Tim's students come from all skill levels, ages, and backgrounds across the Space Coast. Here's what they say about their experience."
      />

      {/* Overall rating */}
      <section className="py-12 bg-[#1A2744]/40 border-y border-[#C9A84C]/15">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <p className="text-5xl font-bold text-[#C9A84C] font-mono mb-1">5.0</p>
          <p className="text-[#F5F0E8]/70 text-base font-semibold mb-1">from 23 Google Reviews</p>
          <p className="text-[#F5F0E8]/50 text-sm">Space Coast, FL</p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-7 flex flex-col">
                <div className="flex mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#F5F0E8]/80 leading-relaxed italic flex-1 mb-6">
                  &ldquo;{r.review}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                  <div>
                    <p className="text-[#F5F0E8] font-semibold text-sm">{r.name}</p>
                    <p className="text-[#F5F0E8]/40 text-xs">{r.role} · {r.location}</p>
                  </div>
                  <span className="text-xs font-mono bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-0.5 rounded-full">
                    {r.sport}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Worked with Coach Tim?
          </h2>
          <p className="text-[#F5F0E8]/60 mb-8">
            Reviews help other players find great coaching. Share your experience on Google to help Tim&apos;s community grow.
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=hontennis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-semibold px-6 py-3 rounded-full transition-all duration-200"
          >
            Leave a Google Review
          </a>
        </div>
      </section>

      <ContactSection />
      <BackToTop />
    </>
  )
}
