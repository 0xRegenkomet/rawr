import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat, Fredoka_One, Bungee, Righteous, Creepster, Nosifer } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})
const fredokaOne = Fredoka_One({ 
  subsets: ['latin'],
  variable: '--font-fredoka-one',
  display: 'swap',
  weight: '400'
})
const bungee = Bungee({ 
  subsets: ['latin'],
  variable: '--font-bungee',
  display: 'swap',
  weight: '400'
})
const righteous = Righteous({ 
  subsets: ['latin'],
  variable: '--font-righteous',
  display: 'swap',
  weight: '400'
})
const creepster = Creepster({ 
  subsets: ['latin'],
  variable: '--font-creepster',
  display: 'swap',
  weight: '400'
})
const nosifer = Nosifer({ 
  subsets: ['latin'],
  variable: '--font-nosifer',
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
      <body className={`${inter.className} ${poppins.variable} ${montserrat.variable} ${fredokaOne.variable} ${bungee.variable} ${righteous.variable} ${creepster.variable} ${nosifer.variable}`}>{children}</body>
    </html>
  )
}
