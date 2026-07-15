import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Genesis Search Group - Executive Search & Leadership Recruitment',
  description: 'Connecting Exceptional Talent with Exceptional Companies. Executive search, leadership recruitment, and professional hiring services.',
  keywords: 'executive search, recruitment, leadership hiring, professional recruiters',
  openGraph: {
    title: 'Genesis Search Group',
    description: 'Connecting Exceptional Talent with Exceptional Companies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
