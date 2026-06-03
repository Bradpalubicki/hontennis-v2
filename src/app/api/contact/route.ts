import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  message: z.string().min(5),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "HON Tennis Website <noreply@hontennis.com>",
        to: "brielmaiert@gmail.com",
        subject: `New lesson inquiry from ${data.name}`,
        text: `
Name: ${data.name}
Phone: ${data.phone}

Message:
${data.message}

---
Sent from hontennis.com contact form
        `.trim(),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
