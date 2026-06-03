"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function TextTimButton() {
  const [visible, setVisible] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      setNearFooter(scrollBottom >= pageHeight - 120)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !nearFooter && (
        <motion.a
          href="sms:+14142326840?body=Hi Tim, I'd like to book a lesson!"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={shouldReduce ? {} : { scale: 1.05 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C87A] text-[#0A0F1E] font-bold px-5 py-3 rounded-full shadow-xl shadow-[#C9A84C]/20 transition-colors duration-200"
          aria-label="Text Coach Tim to book a lesson"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Text Tim</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
