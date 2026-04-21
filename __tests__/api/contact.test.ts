/**
 * @jest-environment node
 */
// __tests__/api/contact.test.ts
import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

// Mock Resend so no real API calls are made
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'test-id', error: null }),
    },
  })),
}))

describe('POST /api/contact', () => {
  it('returns 400 when required fields are missing', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toBeTruthy()
  })

  it('returns 200 when all required fields are provided', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Ahmed Hassan',
        company: 'Cairo Garage',
        email: 'ahmed@example.com',
        phone: '+201001234567',
        subject: 'Sales Inquiry',
        message: 'I am interested in vehicle lifts for my workshop.',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
  })
})
