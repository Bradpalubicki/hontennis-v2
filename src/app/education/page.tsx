import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Breadcrumbs from "@/components/Breadcrumbs"
import ContactSection from "@/components/ContactSection"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tennis & Pickleball Education | HON Tennis",
  description: "Free guides, tips, and expert advice from RSPA & IPTPA certified Coach Tim Brielmaier. Learn about tennis lessons, pickleball, coaching costs, and finding the right instructor on Florida's Space Coast.",
  alternates: { canonical: "https://hontennis.com/education" },
  openGraph: {
    title: "Tennis & Pickleball Education Hub | HON Tennis",
    description: "Expert guides from Coach Tim Brielmaier — tennis lesson costs, pickleball tips, senior coaching, and more.",
    type: "website",
  },
}

const articles = [
  {
    slug: "how-much-do-tennis-lessons-cost-florida",
    title: "How Much Do Tennis Lessons Cost in Florida? (2026 Pricing Guide)",
    excerpt: "Private lessons, group sessions, clinics — a complete breakdown of tennis lesson pricing on Florida's Space Coast, what affects cost, and how to get the most value.",
    category: "Pricing",
    readTime: "6 min read",
    image: "/images/tennis-lesson.webp",
    intent: "Commercial",
  },
  {
    slug: "tennis-vs-pickleball-which-should-you-learn",
    title: "Tennis vs. Pickleball: Which Should You Learn First?",
    excerpt: "Both sports are thriving in Florida. A certified coach breaks down the key differences, who should start with which sport, and how they complement each other.",
    category: "Getting Started",
    readTime: "7 min read",
    image: "/images/kiwi-pickleball.jpg",
    intent: "Informational",
  },
  {
    slug: "what-is-rspa-certification-tennis-coach",
    title: "What Is RSPA Certification? What to Look for in a Tennis Coach",
    excerpt: "Not all tennis coaches are equal. Learn what RSPA and IPTPA certifications mean, what questions to ask before hiring a coach, and what red flags to avoid.",
    category: "Coaching",
    readTime: "5 min read",
    image: "/images/coach-tim-clinic.webp",
    intent: "Informational",
  },
  {
    slug: "how-to-find-pickleball-coach-near-you",
    title: "How to Find a Pickleball Coach Near You (Florida Guide)",
    excerpt: "With 24 million players and growing, pickleball coaching demand is exploding. Here's exactly how to find, evaluate, and book a qualified instructor in your area.",
    category: "Finding a Coach",
    readTime: "5 min read",
    image: "/images/tennis-coaching-lesson.jpg",
    intent: "Commercial",
  },
  {
    slug: "best-tennis-courts-space-coast-florida",
    title: "Best Tennis & Pickleball Courts on Florida's Space Coast",
    excerpt: "A local coach's guide to the top courts in Melbourne, Viera, Palm Bay, Rockledge, and across Brevard County — public, HOA, and club facilities.",
    category: "Local Guide",
    readTime: "8 min read",
    image: "/images/pickleball-lady.jpg",
    intent: "Navigational",
  },
  {
    slug: "senior-tennis-pickleball-health-benefits",
    title: "Senior Tennis & Pickleball: Health Benefits and How to Start",
    excerpt: "Why tennis and pickleball are among the best sports for players 55+, what the research says about health outcomes, and how to get started safely at any age.",
    category: "Senior Sports",
    readTime: "7 min read",
    image: "/images/kiwi-courts.jpg",
    intent: "Informational",
  },
]

const intentColors: Record<string, string> = {
  Commercial: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20",
  Informational: "bg-[#2D6A4F]/10 text-[#6FCF97] border-[#2D6A4F]/20",
  Navigational: "bg-white/5 text-[#F5F0E8]/50 border-white/10",
}

export default function EducationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "HON Tennis Education",
    "description": "Tennis and pickleball guides from RSPA & IPTPA certified Coach Tim Brielmaier",
    "url": "https://hontennis.com/education",
    "author": { "@type": "Person", "name": "Tim Brielmaier" },
    "publisher": { "@type": "Organization", "name": "HON Tennis" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Tennis Education" }]} />

      {/* Header */}
      <section className="relative pt-8 pb-16 bg-[#0A0F1E]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,168,76,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-4">From Coach Tim</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4 max-w-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Tennis & Pickleball Education Hub
          </h1>
          <p className="text-lg text-[#F5F0E8]/60 max-w-2xl leading-relaxed">
            Free guides, pricing breakdowns, and expert advice from RSPA & IPTPA certified Coach Tim Brielmaier — 40+ years of coaching experience on Florida&apos;s Space Coast.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/education/${article.slug}`}
                className="group rounded-2xl border border-[#C9A84C]/15 bg-[#1A2744] overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A84C]/5 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-mono tracking-wider uppercase px-2 py-1 rounded border ${intentColors[article.intent]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-[#F5F0E8] mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                    {article.title}
                  </h2>
                  <p className="text-[#F5F0E8]/55 text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                    <div className="flex items-center gap-1.5 text-[#F5F0E8]/30 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span className="text-[#C9A84C] text-xs font-mono flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
