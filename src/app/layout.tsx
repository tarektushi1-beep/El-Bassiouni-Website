// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: {
    default: 'Elbassiouni Automotive Equipment',
    template: '%s | Elbassiouni',
  },
  description:
    "Egypt's leading distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.",
  keywords: ['automotive equipment Egypt', 'vehicle lifts', 'wheel alignment', 'Hunter Engineering Egypt', 'Rotary Lift Egypt'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
