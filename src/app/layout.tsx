import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaMarkup from '@/components/SchemaMarkup'
import LeadPopup from '@/components/LeadPopup'

export const metadata: Metadata = {
  title: 'Cledger | Online Bookkeeping & Accounting Services UK',
  description:
    'Qualified UK accountants from £175/month. Bookkeeping, VAT returns, payroll, management accounts & corporation tax. MTD compliant. Transparent pricing. Get an instant quote.',
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
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18199125035"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18199125035');
          `}
        </Script>
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <LeadPopup />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}