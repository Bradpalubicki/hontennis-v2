import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  crumbs: Crumb[]
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.label,
      ...(crumb.href ? { "item": `https://hontennis.com${crumb.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-2">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3 text-[#F5F0E8]/20 shrink-0" />}
              {crumb.href && i < crumbs.length - 1 ? (
                <Link href={crumb.href} className="text-xs text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors font-mono tracking-wide">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-xs text-[#F5F0E8]/35 font-mono tracking-wide">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
