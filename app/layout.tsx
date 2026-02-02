import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vanessa Haughton | Chef & Culinary Creative',
  description: 'BBC Masterchef 2022 Contestant. Creator of Set the Table. Premium food delivery, supper clubs, and culinary experiences in London.',
  keywords: ['chef', 'masterchef', 'food delivery', 'supper club', 'london', 'catering', 'private chef'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
