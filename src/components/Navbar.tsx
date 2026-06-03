"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
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
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/education") return pathname.startsWith("/education")
    return pathname === href
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A84C] focus:text-[#0A0F1E] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0A0F1E] font-bold text-lg font-mono transition-all duration-300">
                本
              </div>
              <div className="hidden sm:block">
                <div className="text-[#F5F0E8] font-bold text-base leading-none tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
                  HON Tennis
                </div>
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase mt-0.5">
                  Coach Tim Brielmaier
                </div>
              </div>
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm tracking-wide transition-colors duration-200 font-medium whitespace-nowrap relative ${
                      active
                        ? "text-[#C9A84C]"
                        : "text-[#F5F0E8]/75 hover:text-[#C9A84C]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A84C] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right side — stacked Book + Phone */}
            <div className="hidden lg:flex flex-col items-end gap-1 shrink-0">
              <a
                href={SQUARE_BOOKING_URL || "/#book"}
                target={SQUARE_BOOKING_URL ? "_blank" : undefined}
                rel={SQUARE_BOOKING_URL ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25 whitespace-nowrap"
              >
                Book a Lesson
              </a>
              <a
                href="sms:+14142326840?body=Hi Tim, I have a question!"
                className="flex items-center gap-1 text-[#F5F0E8]/45 hover:text-[#C9A84C] text-xs transition-colors font-mono whitespace-nowrap"
              >
                <Phone className="w-3 h-3" />
                (414) 232-6840
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#F5F0E8] p-2 shrink-0"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
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
            id="mobile-menu"
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0F1E]/98 backdrop-blur-md pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`text-2xl py-3 border-b border-[#C9A84C]/10 transition-colors ${
                      active ? "text-[#C9A84C]" : "text-[#F5F0E8] hover:text-[#C9A84C]"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href={SQUARE_BOOKING_URL || "/#book"}
                className="mt-6 flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0F1E] font-bold text-lg px-6 py-4 rounded-full"
              >
                Book a Lesson
              </a>
              <a
                href="sms:+14142326840?body=Hi Tim, I have a question about lessons!"
                className="flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold text-base px-6 py-3 rounded-full mt-2"
              >
                <Phone className="w-4 h-4" />
                Text Tim — (414) 232-6840
              </a>
              <a
                href="tel:+14142326840"
                className="flex items-center justify-center gap-2 text-[#F5F0E8]/40 text-sm py-2"
              >
                Or call (414) 232-6840
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
