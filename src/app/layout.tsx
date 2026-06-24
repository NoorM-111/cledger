import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaMarkup from '@/components/SchemaMarkup'
import LeadPopup from '@/components/LeadPopup'
import CookieBanner from '@/components/CookieBanner'
import AnalyticsConsent from '@/components/AnalyticsConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cledger.co.uk'),
  title: {
    default: 'Cledger | Online Bookkeeping & Accounting Services UK',
    template: '%s | Cledger',
  },
  description:
    'Qualified UK accountants from £175/month. Bookkeeping, VAT returns, payroll, management accounts and corporation tax for UK small businesses. MTD compliant. Transparent pricing.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Cledger | Online Bookkeeping & Accounting Services UK',
    description:
      'Qualified UK accountants from £175/month. Bookkeeping, VAT, payroll & management accounts. MTD compliant. Transparent pricing.',
    url: 'https://www.cledger.co.uk',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.cledger.co.uk/og-image.png', width: 1200, height: 630, alt: 'Cledger — Online Accounting for UK Small Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cledger | Online Bookkeeping & Accounting Services UK',
    description:
      'Qualified UK accountants from £175/month. Bookkeeping, VAT, payroll & management accounts. MTD compliant.',
    images: ['https://www.cledger.co.uk/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.cledger.co.uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <SchemaMarkup />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <LeadPopup />
        <CookieBanner />
        {/* Google Ads — only loaded after cookie consent (see AnalyticsConsent.tsx) */}
        <AnalyticsConsent />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
