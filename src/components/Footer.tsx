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
  { href: "/tennis-lessons-cocoa-beach", label: "Indialantic" },
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
                  Space Coast & Treasure Coast, Florida
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-[#F5F0E8]/40 text-xs">Response within 1 business day</p>
              <p className="text-[#F5F0E8]/40 text-xs mt-1">I come to your court — no travel needed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#F5F0E8]/30 text-xs">
            © {new Date().getFullYear()} HON Tennis — Coach Tim Brielmaier. All rights reserved.
          </p>
          <p className="text-[#F5F0E8]/20 text-xs">
            Built by{" "}
            <a href="https://nustack.digital" className="hover:text-[#C9A84C] transition-colors">
              NuStack Digital Ventures
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
