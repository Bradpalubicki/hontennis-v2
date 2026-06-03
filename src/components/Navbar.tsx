"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Star, Phone } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import TextSizeToggle from "@/components/TextSizeToggle"

const navLinks = [
  { href: "/tennis-lessons", label: "Tennis" },
  { href: "/pickleball-lessons", label: "Pickleball" },
  { href: "/services", label: "Services" },
  { href: "/education", label: "Learn" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const SQUARE_BOOKING_URL = process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0A0F1E] font-bold text-lg font-mono group-hover:glow-gold transition-all duration-300">
                本
              </div>
              <div className="hidden sm:block">
                <div className="text-[#F5F0E8] font-bold text-lg leading-none tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
                  HON Tennis
                </div>
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase">
                  Coach Tim Brielmaier
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F5F0E8]/80 hover:text-[#C9A84C] text-sm tracking-wide transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side — Google rating + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <TextSizeToggle />
              {/* Google Rating badge */}
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <span className="text-[#F5F0E8]/60 text-xs">Google Reviews</span>
              </div>

              {/* Book button — goes to Square when configured, else scrolls to #book */}
              <a
                href={SQUARE_BOOKING_URL || "/#book"}
                target={SQUARE_BOOKING_URL ? "_blank" : undefined}
                rel={SQUARE_BOOKING_URL ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25"
              >
                Book a Lesson
              </a>
              {/* Tim's number always visible */}
              <a
                href="sms:+14142326840?body=Hi Tim, I have a question about lessons!"
                className="flex items-center gap-2 text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors"
                title="Text Tim"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">(414) 232-6840</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#F5F0E8] p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0F1E]/98 backdrop-blur-md pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#F5F0E8] text-2xl py-3 border-b border-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="sms:+14142326840"
                className="mt-6 flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0F1E] font-bold text-lg px-6 py-4 rounded-full"
              >
                <Phone className="w-5 h-5" />
                Text Tim — (414) 232-6840
              </a>
              <a
                href="tel:+14142326840"
                className="flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold text-base px-6 py-3 rounded-full mt-2"
              >
                Call Instead
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
