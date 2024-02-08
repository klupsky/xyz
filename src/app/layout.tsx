import './styles/fonts.css'
import './styles/reset.css'
import './styles/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'XYZ Photographers',
  description: 'A photography portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
