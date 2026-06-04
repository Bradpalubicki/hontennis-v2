"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!visible}
    >
      <a
        href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
        className="flex items-center justify-center gap-2.5 w-full bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold text-base py-4 transition-colors duration-200"
      >
        <MessageCircle className="w-5 h-5" />
        Text Tim to Book
      </a>
    </div>
  )
}
