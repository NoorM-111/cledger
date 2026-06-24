import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cledger',
  description: 'Read the Cledger privacy policy. We explain what personal data we collect, how we use it, and your rights under UK GDPR and the Data Protection Act 2018.',
  alternates: { canonical: 'https://www.cledger.co.uk/privacy' },
  openGraph: {
    title: 'Privacy Policy | Cledger',
    description: 'How Cledger collects, uses and protects your personal data under UK GDPR.',
    url: 'https://www.cledger.co.uk/privacy',
  },
  robots: { index: true, follow: true },
}

const sections = [
  { n: '01', title: 'Who we are', body: 'Cledger Ltd is an accounting services company registered in England and Wales. Our registered office is in the United Kingdom. We can be contacted at info@cledger.co.uk or by phone on +44 7774 002712.' },
  { n: '02', title: 'What data we collect', body: 'We collect information you provide directly, including your name, email address, phone number, company name and details about your business when you use our contact form or request a quote. We also collect basic analytics data about how visitors use our website.' },
  { n: '03', title: 'How we use your data', body: 'We use your personal data to respond to your enquiries, provide accounting services, send you quotes and proposals, comply with our legal obligations, and improve our website and services. We never sell your data to third parties.' },
  { n: '04', title: 'Legal basis for processing', body: 'We process your data on the basis of your consent (when you submit a form), our legitimate interests (in providing and improving our services), and our legal obligations as a UK-regulated accounting firm.' },
  { n: '05', title: 'Data retention', body: 'We retain your personal data for as long as necessary to provide our services and comply with our legal obligations. Client financial records are retained for a minimum of 6 years in accordance with HMRC requirements.' },
  { n: '06', title: 'Your rights', body: 'Under UK GDPR, you have the right to access, correct or delete your personal data, object to processing, and request data portability. To exercise any of these rights, please contact us at info@cledger.co.uk.' },
  { n: '07', title: 'Cookies', body: 'Our website uses essential cookies to function correctly. We do not use tracking or advertising cookies without your consent. You can control cookie settings through your browser.' },
  { n: '08', title: 'Third-party services', body: 'We use Resend to send emails and Google Analytics to understand website traffic. These services have their own privacy policies and process data in accordance with GDPR.' },
  { n: '09', title: 'International transfers', body: 'Cledger operates with team members based outside the UK. Any transfer of personal data outside the UK is carried out under appropriate safeguards in accordance with UK GDPR Article 46, including standard contractual clauses where applicable.' },
  { n: '10', title: 'Contact us', body: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at info@cledger.co.uk or write to us at our registered address.' },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#F7F4EC', minHeight: '100vh' }}>
        <section style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: 'clamp(118px,14vw,152px) clamp(22px,5vw,56px) clamp(36px,5vw,56px)',
        }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>Legal</div>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 'clamp(34px,5.4vw,56px)', lineHeight: 1.05, letterSpacing: '-1.2px', color: '#1A1A16', margin: '0 0 14px' }}>Privacy Policy</h1>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, fontSize: 12, color: '#9A958A', margin: 0 }}>Last updated · May 2026</p>
          <p style={{ fontFamily: "'Hanken Grotesk', 'Inter', sans-serif", fontSize: 16, lineHeight: 1.7, color: '#5F5A50', margin: '22px 0 0', maxWidth: '60ch' }}>
            How Cledger Ltd collects, uses and protects your personal data under UK GDPR and the Data Protection Act 2018.
          </p>
        </section>

        <section style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '0 clamp(22px,5vw,56px) clamp(76px,10vw,120px)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px,3.5vw,40px)' }}>
            {sections.map(s => (
              <div key={s.n} style={{ borderTop: '1px solid #E4DDCF', paddingTop: 24 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, fontSize: 12, color: '#9A7B39', marginBottom: 10 }}>{s.n}</div>
                <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: 21, lineHeight: 1.25, color: '#1A1A16', margin: '0 0 10px', letterSpacing: '-0.3px' }}>{s.title}</h2>
                <p style={{ fontFamily: "'Hanken Grotesk', 'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#5F5A50', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
