import './globals.css'
import { ReactNode } from 'react'
import {
  Source_Sans_3 as Sans,
  Source_Serif_4 as Serif,
} from 'next/font/google'

const sans = Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Serif({ subsets: ['latin'], variable: '--font-serif' })

export const metadata = {
  title: 'June Recipes',
  description: 'A June Recipes made by dev Sérgio Sanchez',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} font-serif`}>
        {children}
      </body>
    </html>
  )
}
