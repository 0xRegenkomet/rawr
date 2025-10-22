import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat, Bebas_Neue, Bangers, Lilita_One, Permanent_Marker, Press_Start_2P } from 'next/font/google'
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
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
  weight: '400'
})
const bangers = Bangers({ 
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
  weight: '400'
})
const lilitaOne = Lilita_One({ 
  subsets: ['latin'],
  variable: '--font-lilita-one',
  display: 'swap',
  weight: '400'
})
const permanentMarker = Permanent_Marker({ 
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap',
  weight: '400'
})
const pressStart2P = Press_Start_2P({ 
  subsets: ['latin'],
  variable: '--font-press-start-2p',
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
      <body className={`${inter.className} ${poppins.variable} ${montserrat.variable} ${bebasNeue.variable} ${bangers.variable} ${lilitaOne.variable} ${permanentMarker.variable} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}
