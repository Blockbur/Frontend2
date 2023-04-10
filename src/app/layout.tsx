import React from 'react'
// eslint-disable-next-line camelcase
import { Open_Sans, Grandstander } from '@next/font/google'
import './globals.css'

export const metadata = {
  title: 'Weirds',
  description: 'Welcome to Weirds Band',
}

const grandstander = Grandstander({
  subsets: ['latin'],
  weight: ['900'],
})

const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={(grandstander.className, opensans.className)}>
        <style>
          {`
            :root {
              --grandstander-font: ${grandstander.style.fontFamily};
              --opensans-font: ${opensans.style.fontFamily};
            }
          `}
        </style>
        {children}
      </body>
    </html>
  )
}
