import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Cledger',
  description: 'Privacy Policy for Cledger Ltd — how we collect, use and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0B1222', minHeight: '100vh', padding: '6rem 1.5rem', fontFamily: "'Sora','Inter',sans-serif" }}>
        <div style={{ maxWidth: 720, margin: '0 auto', color: '#F8F5EE' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>Legal</p>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 400, marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: '#8a94a8', marginBottom: '3rem' }}>Last updated: May 2026</p>

          {[
            { title: '1. Who we are', body: 'Cledger Ltd is a financial services company registered in England and Wales. Our registered office is in London, United Kingdom. We can be contacted at info@cledger.co.uk or by phone on +44 7774 002712.' },
            { title: '2. What data we collect', body: 'We collect information you provide directly — including your name, email address, phone number, company name and details about your business when you use our contact form or request a quote. We also collect basic analytics data about how visitors use our website.' },
            { title: '3. How we use your data', body: 'We use your personal data to respond to your enquiries, provide accounting and financial services, send you quotes and proposals, comply with our legal obligations, and improve our website and services. We never sell your data to third parties.' },
            { title: '4. Legal basis for processing', body: 'We process your data on the basis of your consent (when you submit a form), our legitimate interests (in providing and improving our services), and our legal obligations as a UK-regulated financial services firm.' },
            { title: '5. Data retention', body: 'We retain your personal data for as long as necessary to provide our services and comply with our legal obligations. Client financial records are retained for a minimum of 6 years in accordance with HMRC requirements.' },
            { title: '6. Your rights', body: 'Under UK GDPR, you have the right to access, correct or delete your personal data, object to processing, and request data portability. To exercise any of these rights, please contact us at info@cledger.co.uk.' },
            { title: '7. Cookies', body: 'Our website uses essential cookies to function correctly. We do not use tracking or advertising cookies without your consent. You can control cookie settings through your browser.' },
            { title: '8. Third-party services', body: 'We use Resend to send emails and Google Analytics to understand website traffic. These services have their own privacy policies and process data in accordance with GDPR.' },
            { title: '9. Contact us', body: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at info@cledger.co.uk or write to us at our registered address in London, United Kingdom.' },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#F8F5EE', marginBottom: '0.5rem' }}>{s.title}</h2>
              <p style={{ fontSize: 14, color: '#8a94a8', lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
