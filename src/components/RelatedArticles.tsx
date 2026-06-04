import Link from "next/link"

const allArticles = [
  {
    href: "/education/how-much-do-tennis-lessons-cost-florida",
    title: "How Much Do Tennis Lessons Cost in Florida?",
    desc: "2026 pricing guide — private lessons, clinics, packages.",
    tag: "Tennis",
  },
  {
    href: "/education/tennis-vs-pickleball-which-should-you-learn",
    title: "Tennis vs. Pickleball: Which Should You Learn First?",
    desc: "A certified coach breaks down both sports.",
    tag: "Comparison",
  },
  {
    href: "/education/what-is-rspa-certification-tennis-coach",
    title: "What Is RSPA Certification?",
    desc: "What to look for when choosing a tennis coach.",
    tag: "Coaching",
  },
  {
    href: "/education/how-to-find-pickleball-coach-near-you",
    title: "How to Find a Pickleball Coach Near You",
    desc: "Florida guide to locating certified instructors.",
    tag: "Pickleball",
  },
  {
    href: "/education/best-tennis-courts-space-coast-florida",
    title: "Best Courts on Florida's Space Coast",
    desc: "A local coach's guide to courts across Brevard County.",
    tag: "Courts",
  },
  {
    href: "/education/senior-tennis-pickleball-health-benefits",
    title: "Senior Tennis & Pickleball: Health Benefits",
    desc: "Research-backed benefits for players 55+.",
    tag: "Senior",
  },
]

interface Props {
  currentHref: string
}

export default function RelatedArticles({ currentHref }: Props) {
  const related = allArticles.filter((a) => a.href !== currentHref).slice(0, 3)

  return (
    <section className="py-16 bg-[#1A2744]/20 border-t border-[#C9A84C]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-6">Continue Reading</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-5 hover:border-[#C9A84C]/40 transition-all duration-200"
            >
              <span className="text-xs font-mono uppercase text-[#C9A84C]/60 mb-2 block">{a.tag}</span>
              <h3 className="text-[#F5F0E8] font-bold text-sm leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                {a.title}
              </h3>
              <p className="text-[#F5F0E8]/45 text-xs leading-relaxed">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
