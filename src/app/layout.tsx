import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mailblew - Transactional & Marketing Email Service',
  description: 'Deliver emails that actually arrive. Transactional and marketing emails with 99.9% deliverability. Built for developers.',
  keywords: 'email api, transactional email, marketing email, smtp, email service, email delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-text">
        {children}
      </body>
    </html>
  )
}
