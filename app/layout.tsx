import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Calcident - Sourire étincelant, Fraîcheur longue durée',
  description: 'Calcident, la marque de confiance pour votre santé bucco-dentaire. Découvrez nos produits pour un sourire éclatant et une fraîcheur longue durée pour toute la famille.',
  keywords: ['Calcident', 'dentifrice', 'santé bucco-dentaire', 'hygiène dentaire', 'sourire', 'fraîcheur', 'BNB'],
  authors: [{ name: 'BNB Groupe' }],
  creator: 'BNB Groupe',
  publisher: 'BNB Groupe',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://calcident.com',
    siteName: 'Calcident',
    title: 'Calcident - Sourire étincelant, Fraîcheur longue durée',
    description: 'Découvrez Calcident, la marque de confiance pour votre santé bucco-dentaire.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calcident - Sourire étincelant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calcident - Sourire étincelant',
    description: 'Découvrez Calcident, la marque de confiance pour votre santé bucco-dentaire.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://calcident.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
