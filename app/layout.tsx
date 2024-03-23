import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Souvik Mishra | AVGWEB.DEV',
  description: 'Cliche web portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
