import React from 'react'
// eslint-disable-next-line camelcase
import './globals.css'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'Weirds',
  description: 'Welcome to Weirds Band',
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
        <div>{children}</div>
      </body>
    </html>
  )
}
