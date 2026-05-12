import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AssetForge — Turn Webinars Into Revenue Assets',
  description: 'Transform webinars, transcripts, PDFs, slides, and expert knowledge into publishable ebooks, lead magnets, campaigns, and sales assets.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  )
}
