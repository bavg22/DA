import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BusinessBoost - Digital Tools for Small Restaurants & Coffee Shops',
  description: 'Transform your small business with powerful digital tools. Convert receipts to CSV, analyze finances, manage inventory, and boost productivity.',
  keywords: 'small business tools, restaurant management, coffee shop software, PDF to CSV, inventory management, financial analytics',
  authors: [{ name: 'BusinessBoost Team' }],
  openGraph: {
    title: 'BusinessBoost - Digital Tools for Small Businesses',
    description: 'Transform your small business with powerful digital tools',
    url: 'https://businessboost.com',
    siteName: 'BusinessBoost',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BusinessBoost - Digital Tools for Small Businesses',
    description: 'Transform your small business with powerful digital tools',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="canonical" href="https://businessboost.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BusinessBoost",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Digital productivity tools for small restaurants and coffee shops",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  )
}
