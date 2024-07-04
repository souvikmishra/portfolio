import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from '@sections/NavBar'
import dynamic from 'next/dynamic'

const Providers = dynamic(() => import('@utilities/providers'), {
  ssr: false,
})

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} mx-auto h-dvh w-[1080px] max-w-[90%] bg-white dark:bg-[#0c0c0c] tablet:max-w-[95%]`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
