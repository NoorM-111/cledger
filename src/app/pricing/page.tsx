import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'
import SeoSchema from '@/components/SeoSchema'
import RelatedGuides from '@/components/sectors/RelatedGuides'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accountant & Bookkeeping Prices UK | Fixed Fees from £99/month',
  description: 'Transparent, turnover-based pricing for UK bookkeeping, VAT, payroll and full finance outsourcing. Fixed monthly fees from £99/month — build your custom package and get an instant quote.',
  alternates: { canonical: 'https://www.cledger.co.uk/pricing' },
  openGraph: {
    title: 'Accountant & Bookkeeping Prices UK | Fixed Fees from £99/month',
    description: 'Transparent, turnover-based pricing for UK bookkeeping, VAT, payroll and full finance outsourcing. Fixed monthly fees from £99/month.',
    url: 'https://www.cledger.co.uk/pricing',
    siteName: 'Cledger', locale: 'en_GB', type: 'website',
    images: [{ url: 'https://www.cledger.co.uk/og-image.png', width: 1200, height: 630 }],
  },
}

/**
 * Every figure below is the one the calculator above actually produces. This is the
 * highest-intent page on the site and the answers get quoted back by AI assistants, so
 * a price that drifts from PricingSection is a wrong quote given to a prospect.
 */
const FAQS = [
  {
    q: 'How much does an accountant cost for a UK small business?',
    a: 'It depends on turnover, how many entities you run and which services you need, which is why the calculator above prices it rather than a fixed package. As a guide: VAT returns start at £99 a month, bookkeeping at £175 a month, and management accounts at £149 a month for a quarterly pack. Most small businesses land between £99 and £449 a month. Select your turnover band and services above and the monthly figure is calculated instantly.',
  },
  {
    q: 'Is there a setup fee or a lock-in contract?',
    a: 'No to both. There are no setup fees, no hidden add-ons and no lock-in contracts. You pay a fixed monthly fee for the services you selected, and you can stop when you choose.',
  },
  {
    q: "What's included in bookkeeping at £175 a month?",
    a: 'Bank reconciliation, transaction categorisation, and a monthly profit and loss plus balance sheet delivered by the 10th of the following month. The P&L and balance sheet are included at no extra cost. Work is done on Xero or QuickBooks.',
  },
  {
    q: 'Are your VAT returns Making Tax Digital compliant?',
    a: 'Yes. VAT returns are £99 a month and cover a quarterly MTD-compliant return: prepared, reviewed and submitted to HMRC on your behalf.',
  },
  {
    q: 'Do you handle payroll, and what does it cover?',
    a: 'There are two options. Payroll journals to Xero is £69 a month and covers payroll data entry and journal posting only — it does not include RTI submissions or payslips. Full payroll processing is £99 a month and covers calculating pay, issuing payslips, RTI submissions to HMRC and annual P60s for up to 10 employees.',
  },
  {
    q: 'What if I run more than one company?',
    a: 'The calculator prices one, two, three, or four or more entities. Each additional entity increases the monthly fee because each set of books is prepared and filed separately. Select the number of entities above to see your figure.',
  },
  {
    q: 'Can I get advice without signing up to a monthly plan?',
    a: 'Yes. One-off consultations are priced separately from monthly services: a 30-minute clarity call is £95 for a single focused question, a one-hour strategy session is £175 for structure, VAT planning or director tax, a two-hour financial review is £325 and includes written recommendations, and CFO advisory for multi-entity or investor work is £595 for a half day.',
  },
]

export default function PricingPage() {
  return (
    <>
      <SeoSchema
        path="/pricing"
        serviceName="Accountant & Bookkeeping Pricing UK"
        serviceDescription="Transparent, turnover-based fixed-fee pricing for UK bookkeeping, VAT, payroll and full finance outsourcing, from £99/month with no setup fees or lock-in contracts."
        breadcrumbs={[{ name: 'Pricing', path: '/pricing' }]}
      />
      <Navbar />
      <PricingSection />

      {/* FAQ — visible copy and FAQPage schema come from the same FAQS array,
          so what Google reads is always what a visitor can see on the page. */}
      <section style={{ background: '#FBF8F1', padding: 'clamp(48px,6vw,72px) 0', borderTop: '1px solid #E9E2D4' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 400,
              color: '#1A1A16',
              lineHeight: 1.2,
              margin: 0,
            }}>
              Pricing questions, answered
            </h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <FAQAccordion items={FAQS} theme="light" />
          </div>
        </div>
      </section>

      <RelatedGuides
        variant="light"
        links={[
          { href: '/blog/how-much-does-a-bookkeeper-cost-uk', label: 'How much does a bookkeeper cost in the UK?' },
          { href: '/bookkeeping-prices-uk', label: 'Bookkeeping prices and packages UK' },
          { href: '/accountant-for-limited-companies', label: 'Accountant for limited companies in the UK' },
          { href: '/accountant-for-sole-traders-uk', label: 'Accountant for sole traders in the UK' },
        ]}
      />

      <Footer />
    </>
  )
}
