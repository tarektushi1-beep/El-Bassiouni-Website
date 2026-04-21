// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const DESTINATION_EMAIL = process.env.CONTACT_DESTINATION_EMAIL ?? 'info@elbassiouni.com'

interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  subject: string
  message: string
}

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name || data.name.trim().length < 2) return 'Name is required'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Valid email is required'
  if (!data.message || data.message.trim().length < 10) return 'Message must be at least 10 characters'
  if (!data.subject) return 'Subject is required'
  return null
}

export async function POST(req: NextRequest) {
  try {
    const data: Partial<ContactFormData> = await req.json()
    const validationError = validateForm(data)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const { name, company, email, phone, subject, message } = data as ContactFormData

    const { error } = await resend.emails.send({
      from: 'Elbassiouni Website <noreply@elbassiouni.com>',
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `[${subject}] New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          ${company ? `<tr><td><strong>Company:</strong></td><td>${company}</td></tr>` : ''}
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
          <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
