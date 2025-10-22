import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
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
      <body className={`${inter.className} ${poppins.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
