import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Cledger',
  description: 'The terms governing your use of the Cledger website and the engagement of our accounting services.',
  alternates: { canonical: 'https://www.cledger.co.uk/terms' },
  openGraph: {
    title: 'Terms of Service | Cledger',
    description: 'The terms governing your use of the Cledger website and the engagement of our accounting services.',
    url: 'https://www.cledger.co.uk/terms',
  },
  robots: { index: true, follow: true },
}

const sections = [
  { n: '01', title: 'About Cledger', body: 'Cledger Ltd is an accounting services company registered in England and Wales. By using our website or engaging our services, you agree to these Terms of Service.' },
  { n: '02', title: 'Our services', body: 'Cledger provides bookkeeping, VAT compliance, payroll, management accounts, corporation tax, self assessment and related accounting services to UK businesses. All services are subject to a separate engagement letter agreed between Cledger and the client.' },
  { n: '03', title: 'Website use', body: 'You may use our website for lawful purposes only. You must not misuse our website by introducing viruses or other malicious content, or attempt to gain unauthorised access to our systems.' },
  { n: '04', title: 'Accuracy of information', body: 'The information on this website is provided for general guidance only and does not constitute professional financial or tax advice. Always obtain specific professional advice before taking any action based on information from this website.' },
  { n: '05', title: 'Intellectual property', body: 'All content on this website, including text, graphics, logos and design, is the property of Cledger Ltd and is protected by UK copyright law. You may not reproduce any content without our written permission.' },
  { n: '06', title: 'Limitation of liability', body: 'To the fullest extent permitted by law, Cledger Ltd shall not be liable for any indirect, incidental or consequential losses arising from your use of this website or our services, except where such liability cannot be excluded under UK law.' },
  { n: '07', title: 'Governing law', body: 'These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.' },
  { n: '08', title: 'Changes to these terms', body: 'We may update these Terms from time to time. The most current version will always be available on this page. Continued use of our website after changes constitutes acceptance of the updated terms.' },
  { n: '09', title: 'Contact', body: 'For any questions regarding these Terms, please contact us at info@cledger.co.uk.' },
]

export default function TermsPage() {
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
          <h1 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 'clamp(34px,5.4vw,56px)', lineHeight: 1.05, letterSpacing: '-1.2px', color: '#1A1A16', margin: '0 0 14px' }}>Terms of Service</h1>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, fontSize: 12, color: '#9A958A', margin: 0 }}>Last updated · May 2026</p>
          <p style={{ fontFamily: "'Hanken Grotesk', 'Inter', sans-serif", fontSize: 16, lineHeight: 1.7, color: '#5F5A50', margin: '22px 0 0', maxWidth: '60ch' }}>
            The terms governing your use of the Cledger website and the engagement of our accounting services.
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
