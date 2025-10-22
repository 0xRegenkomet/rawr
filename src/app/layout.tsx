import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Lilita_One } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
  weight: '400'
})
const lilitaOne = Lilita_One({ 
  subsets: ['latin'],
  variable: '--font-lilita-one',
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: '$rawr',
  description: 'little cat big rawr',
  icons: {
    icon: [
      { url: '/images/rawr.jpg', sizes: 'any' },
      { url: '/images/rawr.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/images/rawr.jpg',
    apple: '/images/rawr.jpg',
  },
  openGraph: {
    title: '$rawr',
    description: 'little cat big rawr',
    images: ['/images/rawr.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$rawr',
    description: 'little cat big rawr',
    images: ['/images/rawr.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.variable} ${lilitaOne.variable}`}>{children}</body>
    </html>
  )
}
