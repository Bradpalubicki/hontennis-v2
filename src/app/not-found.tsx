import Link from "next/link"

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-[#0A0F1E] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,168,76,0.07),transparent)]" />
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <p className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase mb-4">404 — Page Not Found</p>
        <h1 className="text-6xl sm:text-7xl font-bold text-[#F5F0E8] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
          Out of Bounds
        </h1>
        <p className="text-[#F5F0E8]/60 text-lg mb-10 leading-relaxed">
          That page doesn&apos;t exist — but Coach Tim does. Head back and find what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Back to Homepage
          </Link>
          <Link
            href="/tennis-lessons"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Tennis Lessons
          </Link>
          <Link
            href="/pickleball-lessons"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Pickleball Lessons
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center text-sm">
          <a href="sms:+14142326840?body=Hi Tim!" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors">
            Text Tim — (414) 232-6840
          </a>
          <span className="hidden sm:inline text-[#F5F0E8]/20">·</span>
          <Link href="/contact" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors">
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  )
}
