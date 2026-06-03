"use client"

import { useState, useEffect } from "react"

export default function TextSizeToggle() {
  const [large, setLarge] = useState(false)

  useEffect(() => {
    // Restore preference
    const saved = localStorage.getItem("hon-text-large")
    if (saved === "true") {
      setLarge(true)
      document.documentElement.classList.add("text-large")
    }
  }, [])

  const toggle = () => {
    const next = !large
    setLarge(next)
    localStorage.setItem("hon-text-large", String(next))
    if (next) {
      document.documentElement.classList.add("text-large")
    } else {
      document.documentElement.classList.remove("text-large")
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={large ? "Switch to normal text size" : "Switch to larger text size"}
      title={large ? "Normal text size" : "Larger text size"}
      className="hidden lg:flex items-center gap-1 text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors text-xs font-mono"
    >
      <span className={large ? "text-[#C9A84C]" : "text-xs"}>A</span>
      <span className="text-[#F5F0E8]/20">/</span>
      <span className={large ? "text-base" : "text-sm text-[#F5F0E8]/40"}>A</span>
    </button>
  )
}
