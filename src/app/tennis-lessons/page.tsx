import type { Metadata } from "next"
import PageHeroPhoto from "@/components/PageHeroPhoto"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import { Award, CheckCircle, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Tennis Lessons | Coach Tim Brielmaier — Space Coast FL",
  description: "Private, group, and clinic tennis lessons across Florida's Space Coast. RSPA certified Coach Tim Brielmaier comes to your court. Melbourne, Palm Bay, Viera & more. $80/hr.",
}

const highlights = [
  { icon: <Award className="w-5 h-5" />, text: "RSPA Certified — professional tennis instruction credential" },
  { icon: <Users className="w-5 h-5" />, text: "All skill levels — beginner through advanced competitive" },
  { icon: <Clock className="w-5 h-5" />, text: "60-minute sessions at your court, your schedule" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "40+ years coaching experience across 3 countries" },
]

const programs = [
  {
    title: "Private Lessons",
    description: "One-on-one sessions focused entirely on your game. Tim assesses your current level, identifies the highest-leverage improvements, and builds a progression plan. The fastest path to measurable results.",
    price: "$80/hr",
    ideal: "All levels — especially beginners and competitive improvers",
  },
  {
    title: "Group Lessons",
    description: "Small groups of 2–4 players coached together. Great for friends, couples, or family members who want to improve together while sharing the session cost.",
    price: "$80/hr",
    ideal: "Friends, couples, family groups",
  },
  {
    title: "Hitting Lessons",
    description: "Pure repetition and rhythm work. Coach Tim feeds balls while you focus on consistency, footwork, and stroke mechanics. Builds muscle memory faster than match play alone.",
    price: "$80/hr",
    ideal: "Intermediate through advanced players working on specific strokes",
  },
  {
    title: "Clinics",
    description: "Structured 90-minute group sessions for 5–8 players. Drill rotations, match play, and direct coaching from Tim. Best value per-person for learning the game efficiently.",
    price: "$20/person",
    ideal: "Social players, beginners, recreational groups",
  },
]

export default function TennisLessonsPage() {
  return (
    <>
      <PageHeroPhoto
        image="/images/tennis-coaching-lesson.jpg"
        alt="Tennis coach giving a lesson to a student on a Florida court"
        eyebrow="Tennis Instruction · RSPA Certified"
        title="Tennis Lessons That Come to"
        titleAccent="Your Court"
        subtitle="40+ years of coaching experience delivered at your court across Florida's Space Coast. Private, group, hitting lessons, and clinics for all ages and skill levels."
        ctaText="Book a Tennis Lesson"
        ctaHref="sms:+14142326840?body=Hi Tim, I'd like to book a tennis lesson!"
        ctaSecondaryText="Call Tim — (414) 232-6840"
        ctaSecondaryHref="tel:+14142326840"
      />

      {/* Highlights bar */}
      <section className="py-12 bg-[#1A2744]/50 border-y border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#C9A84C] shrink-0 mt-0.5">{h.icon}</span>
                <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs detail */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">Choose Your Format</p>
            <h2 className="text-4xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Tennis Lesson Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#C9A84C]/15 bg-[#1A2744] p-7 hover:border-[#C9A84C]/35 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
                  <span className="text-[#C9A84C] font-bold font-mono text-lg shrink-0 ml-4">{p.price}</span>
                </div>
                <p className="text-[#F5F0E8]/60 leading-relaxed mb-4">{p.description}</p>
                <p className="text-xs text-[#C9A84C]/70 font-mono">Ideal for: {p.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-[#050810] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">The HON Approach</p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            What to Expect in Your First Lesson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
            {[
              { step: "01", title: "Assessment", desc: "Tim watches you play, identifies your current level, and pinpoints the 2–3 things that will make the biggest immediate difference." },
              { step: "02", title: "Focused Work", desc: "No generic drills. Every minute of the session targets your specific needs — whether that's footwork, consistency, serve, or strategy." },
              { step: "03", title: "A Clear Plan", desc: "You leave with specific things to practice and a clear picture of your progression path. Tim follows up if you have questions between sessions." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="text-3xl font-bold text-[#C9A84C]/20 font-mono">{item.step}</span>
                <h4 className="text-lg font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h4>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids & junior tennis photo section */}
      <section className="py-20 bg-[#0A0F1E] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-mono tracking-widest uppercase text-[#C9A84C] mb-3">All Ages Welcome</p>
            <h2 className="text-3xl font-bold text-[#F5F0E8]" style={{ fontFamily: "var(--font-playfair)" }}>
              From Toddlers to Competitive Juniors
            </h2>
            <p className="text-[#F5F0E8]/55 mt-3 max-w-xl mx-auto">Coach Tim works with players of all ages — beginners picking up a racquet for the first time through competitive junior players.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/kids-tennis-toddler.jpg", alt: "Toddler learning tennis — Space Coast youth lessons", position: "object-top" },
              { src: "/images/kids-tennis-girl.jpg", alt: "Junior girl playing tennis — youth coaching Florida", position: "object-top" },
              { src: "/images/kids-tennis-boy.jpg", alt: "Young boy hitting tennis ball — kids tennis lessons Space Coast", position: "object-center" },
              { src: "/images/kids-tennis-girl-red.jpg", alt: "Junior tennis player on clay court — Florida youth tennis", position: "object-top" },
            ].map((photo, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-[#C9A84C]/15 aspect-square relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} className={`w-full h-full object-cover ${photo.position} hover:scale-105 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
