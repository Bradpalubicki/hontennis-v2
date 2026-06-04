import Link from "next/link"
import { Phone, Mail, MapPin, Star } from "lucide-react"

const serviceLinks = [
  { href: "/tennis-lessons", label: "Tennis Lessons" },
  { href: "/pickleball-lessons", label: "Pickleball Lessons" },
  { href: "/services", label: "All Services" },
  { href: "/senior-tennis-pickleball", label: "Senior Coaching" },
  { href: "/services#clinics", label: "Group Clinics" },
  { href: "/services#stringing", label: "Racquet Stringing" },
  { href: "/services#court-maintenance", label: "Court Maintenance" },
]

const locationLinks = [
  { href: "/tennis-lessons-melbourne", label: "Melbourne" },
  { href: "/tennis-lessons-palm-bay", label: "Palm Bay" },
  { href: "/tennis-lessons-viera", label: "Viera" },
  { href: "/tennis-lessons-rockledge", label: "Rockledge" },
  { href: "/tennis-lessons-indialantic", label: "Indialantic" },
  { href: "/tennis-lessons-vero-beach", label: "Vero Beach" },
  { href: "/tennis-lessons-sebastian", label: "Sebastian" },
]

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-[#C9A84C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0A0F1E] font-bold text-lg">
                本
              </div>
              <div>
                <div className="text-[#F5F0E8] font-bold text-lg leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                  HON Tennis
                </div>
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase mt-0.5">
                  Coach Tim Brielmaier
                </div>
              </div>
            </div>
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-4">
              Tennis & pickleball lessons that meet you where you are — across Florida&apos;s Space Coast & Treasure Coast.
            </p>
            {/* Certs */}
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs border border-[#C9A84C]/40 text-[#C9A84C] px-2 py-1 rounded">RSPA Certified</span>
              <span className="text-xs border border-[#C9A84C]/40 text-[#C9A84C] px-2 py-1 rounded">IPTPA Certified</span>
            </div>
            {/* Social links — TODO: replace href="#" with Tim's actual Facebook/Instagram URLs when known */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="HON Tennis on Facebook" className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="HON Tennis on Instagram" className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
              </a>
            </div>

            {/* Google rating */}
            <div className="flex items-center gap-1.5 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <span className="text-[#F5F0E8]/50 text-xs">5.0 on Google</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="sms:+14142326840" className="flex items-start gap-2 text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[#C9A84C]" />
                  (414) 232-6840 — Call or Text
                </a>
              </li>
              <li>
                <a href="mailto:brielmaiert@gmail.com" className="flex items-start gap-2 text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[#C9A84C]" />
                  brielmaiert@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-[#F5F0E8]/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Melbourne, FL · Space Coast &amp; Treasure Coast
                </div>
              </li>
            </ul>
            <div className="mt-6 space-y-1">
              <p className="text-[#F5F0E8]/40 text-xs">Responds within 1 business day</p>
              <p className="text-[#F5F0E8]/40 text-xs">Comes to your court — no travel needed</p>
            </div>

            {/* External authority links — SEO */}
            <div className="mt-6">
              <p className="text-[#C9A84C]/50 text-xs font-mono uppercase tracking-wider mb-2">Certifications</p>
              <ul className="space-y-1.5">
                <li>
                  <a href="https://www.rspa.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/35 hover:text-[#C9A84C] text-xs transition-colors">
                    RSPA — Racquet Sports Professionals ↗
                  </a>
                </li>
                <li>
                  <a href="https://iptpa.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/35 hover:text-[#C9A84C] text-xs transition-colors">
                    IPTPA — Pickleball Teaching Pro ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.usapickleball.org" target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/35 hover:text-[#C9A84C] text-xs transition-colors">
                    USA Pickleball — Official Rules ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education links row — internal SEO */}
        <div className="mt-10 pt-6 border-t border-[#C9A84C]/10">
          <p className="text-[#C9A84C]/40 text-xs font-mono uppercase tracking-wider mb-3">Tennis &amp; Pickleball Guides</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { href: "/education/how-much-do-tennis-lessons-cost-florida", label: "Tennis Lesson Costs in Florida" },
              { href: "/education/tennis-vs-pickleball-which-should-you-learn", label: "Tennis vs. Pickleball" },
              { href: "/education/what-is-rspa-certification-tennis-coach", label: "RSPA Certification Guide" },
              { href: "/education/how-to-find-pickleball-coach-near-you", label: "Find a Pickleball Coach" },
              { href: "/education/best-tennis-courts-space-coast-florida", label: "Best Courts on the Space Coast" },
              { href: "/education/senior-tennis-pickleball-health-benefits", label: "Senior Tennis &amp; Pickleball" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[#F5F0E8]/30 hover:text-[#C9A84C] text-xs transition-colors" dangerouslySetInnerHTML={{ __html: l.label }} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#F5F0E8]/30 text-xs">
            © {new Date().getFullYear()} HON Tennis — Coach Tim Brielmaier · Melbourne, FL · Space Coast Florida. All rights reserved.
          </p>
          <p className="text-[#F5F0E8]/20 text-xs">
            Built by{" "}
            <a href="https://nustack.digital" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
              NuStack Digital Ventures
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
