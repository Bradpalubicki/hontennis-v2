import type { Metadata } from "next"
import { Inter, Playfair_Display, Space_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TextTimButton from "@/components/TextTimButton"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HON Tennis | Coach Tim Brielmaier — Space Coast Florida",
  description:
    "Tennis & pickleball lessons that meet you where you are. Coach Tim Brielmaier comes to your court across Melbourne, Palm Bay, Viera, and all of Florida's Space Coast. 40+ years experience, RSPA & IPTPA certified.",
  keywords:
    "tennis lessons Melbourne FL, pickleball coach Space Coast, tennis instructor Brevard County, HON tennis, Coach Tim Brielmaier, pickleball lessons Florida",
  openGraph: {
    title: "HON Tennis | Coach Tim Brielmaier",
    description:
      "Tennis & pickleball coaching that meets you where you are — across Florida's Space Coast.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0A0F1E] text-[#F5F0E8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <TextTimButton />
      </body>
    </html>
  )
}
