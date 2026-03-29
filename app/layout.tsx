import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glassio — Premium Business Communication App',
  description: 'Glassio is the premium business communication app built for modern teams. Crystal-clear interface, lightning-fast messaging, and intelligent workflow tools — all in one place.',
  keywords: ['business communication', 'team messaging', 'professional app', 'workflow', 'iOS app', 'Apple App Store'],
  authors: [{ name: 'Glassio' }],
  creator: 'Glassio',
  publisher: 'Glassio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glassio.app',
    siteName: 'Glassio',
    title: 'Glassio — Premium Business Communication App',
    description: 'The premium business communication app built for modern teams. Available on the App Store.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Glassio App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glassio — Premium Business Communication App',
    description: 'The premium business communication app built for modern teams.',
    creator: '@glassioapp',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#080B14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080B14] text-[#f8fafc] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
