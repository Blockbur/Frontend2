import React from 'react'
// eslint-disable-next-line camelcase
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weird Band',
  description:
    'Weird Band is a cross media brand that combines music, cartoons and games',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary',
    images: '/twitterIcon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:wght@800;900&family=Open+Sans:wght@300;400;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <div className="max-w-screen w-full min-h-screen bg-purple600">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
