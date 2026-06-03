import type { Metadata } from "next"
import { Inter, Playfair_Display, Space_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TextTimButton from "@/components/TextTimButton"
import { localBusinessSchema, personSchema } from "@/lib/schema"

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
  title: {
    default: "HON Tennis | Coach Tim Brielmaier — Space Coast Florida",
    template: "%s | HON Tennis",
  },
  description:
    "Tennis & pickleball lessons that meet you where you are. Coach Tim Brielmaier comes to your court across Melbourne, Palm Bay, Viera, and all of Florida's Space Coast. 40+ years experience, RSPA & IPTPA certified.",
  keywords:
    "tennis lessons Melbourne FL, pickleball coach Space Coast, tennis instructor Brevard County, HON tennis, Coach Tim Brielmaier, pickleball lessons Florida, RSPA certified tennis, IPTPA pickleball instructor, mobile tennis coach Florida, tennis lessons Viera FL, pickleball coach Palm Bay, tennis instructor Indian Harbour Beach, Brevard County tennis, Space Coast pickleball, Melbourne Florida tennis coach, Treasure Coast tennis lessons",
  authors: [{ name: "Tim Brielmaier", url: "https://hontennis.com/about" }],
  creator: "Tim Brielmaier",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "HON Tennis | Coach Tim Brielmaier — Space Coast Florida",
    description: "RSPA & IPTPA certified tennis and pickleball coaching. Coach Tim comes to your court across Florida's Space Coast. 40+ years experience.",
    type: "website",
    locale: "en_US",
    url: "https://hontennis.com",
    siteName: "HON Tennis",
    images: [{ url: "https://hontennis.com/images/coach-tim-portrait.webp", width: 800, height: 1000, alt: "Coach Tim Brielmaier — HON Tennis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HON Tennis | Coach Tim Brielmaier",
    description: "RSPA & IPTPA certified tennis and pickleball coaching across Florida's Space Coast.",
    images: ["https://hontennis.com/images/coach-tim-portrait.webp"],
  },
  alternates: { canonical: "https://hontennis.com" },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <TextTimButton />
      </body>
    </html>
  )
}
