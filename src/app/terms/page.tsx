import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Cledger',
  description: 'Terms of Service for Cledger Ltd, the terms governing use of our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0B1222', minHeight: '100vh', padding: '6rem 1.5rem', fontFamily: "'Sora','Inter',sans-serif" }}>
        <div style={{ maxWidth: 720, margin: '0 auto', color: '#F8F5EE' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>Legal</p>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 400, marginBottom: '0.5rem' }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: '#8a94a8', marginBottom: '3rem' }}>Last updated: May 2026</p>

          {[
            { title: '1. About Cledger', body: 'Cledger Ltd is an accounting services company registered in England and Wales. By using our website or engaging our services, you agree to these Terms of Service.' },
            { title: '2. Our services', body: 'Cledger provides bookkeeping, VAT compliance, payroll, management accounts, corporation tax, self assessment and related accounting services to UK businesses. All services are subject to a separate engagement letter agreed between Cledger and the client.' },
            { title: '3. Website use', body: 'You may use our website for lawful purposes only. You must not misuse our website by introducing viruses or other malicious content, or attempt to gain unauthorised access to our systems.' },
            { title: '4. Accuracy of information', body: 'The information on this website is provided for general guidance only and does not constitute professional financial or tax advice. Always obtain specific professional advice before taking any action based on information from this website.' },
            { title: '5. Intellectual property', body: 'All content on this website, including text, graphics, logos and design, is the property of Cledger Ltd and is protected by UK copyright law. You may not reproduce any content without our written permission.' },
            { title: '6. Limitation of liability', body: 'To the fullest extent permitted by law, Cledger Ltd shall not be liable for any indirect, incidental or consequential losses arising from your use of this website or our services, except where such liability cannot be excluded under UK law.' },
            { title: '7. Governing law', body: 'These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.' },
            { title: '8. Changes to these terms', body: 'We may update these Terms from time to time. The most current version will always be available on this page. Continued use of our website after changes constitutes acceptance of the updated terms.' },
            { title: '9. Contact', body: 'For any questions regarding these Terms, please contact us at info@cledger.co.uk.' },
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
