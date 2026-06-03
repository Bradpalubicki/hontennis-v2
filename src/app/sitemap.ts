import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hontennis.com"
  const now = new Date("2026-06-03")

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/tennis-lessons", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pickleball-lessons", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/senior-tennis-pickleball", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pickleball-beginners", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/reviews", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/education", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/education/how-much-do-tennis-lessons-cost-florida", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/education/tennis-vs-pickleball-which-should-you-learn", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/education/what-is-rspa-certification-tennis-coach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/education/how-to-find-pickleball-coach-near-you", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/education/best-tennis-courts-space-coast-florida", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/education/senior-tennis-pickleball-health-benefits", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-melbourne", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-palm-bay", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-viera", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-rockledge", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-indialantic", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-suntree", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-indian-harbour-beach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-vero-beach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tennis-lessons-sebastian", priority: 0.7, changeFrequency: "monthly" as const },
  ]

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
