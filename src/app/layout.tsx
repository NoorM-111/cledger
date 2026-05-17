import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cledger | Financial Services for UK Businesses',
  description:
    'Cledger is a UK financial services firm delivering expert accounting, tax compliance and financial planning for businesses across all sectors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
