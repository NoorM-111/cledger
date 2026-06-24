'use client'
import { useState } from 'react'

const C = {
  card: '#FFFFFF',
  gold: '#9A7B39',
  white: '#1A1A16',
  muted: '#5F5A50',
}

interface Props {
  calculatorType: 'salary' | 'corporation-tax' | 'vat'
  results: Record<string, string>
  inputs: Record<string, string>
}

export default function EmailResultsForm({ calculatorType, results, inputs }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and email.')
      return
    }
    setErrorMsg('')
    setStatus('loading')
    try {
      const res = await fetch('/api/send-calculator-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, calculatorType, results, inputs }),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#FAFAF7',
    border: '1px solid #E9E2D4',
    color: C.white,
    borderRadius: '8px',
    padding: '0.625rem 1rem',
    fontSize: '14px',
    fontFamily: "'Hanken Grotesk', sans-serif",
    outline: 'none',
  }

  return (
    <div style={{ borderTop: '1px solid #E9E2D4', paddingTop: '2rem', marginTop: '1.5rem' }}>
      {status === 'success' ? (
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.95rem', color: C.white }}>
          Sent. Check your inbox — we&apos;ll be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: '1.35rem',
            fontWeight: 400,
            color: C.white,
            marginBottom: '0.4rem',
          }}>
            Get these results in your inbox
          </h3>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '0.875rem',
            color: C.muted,
            marginBottom: '1.25rem',
            lineHeight: 1.6,
          }}>
            We&apos;ll email you a clean summary — and if you&apos;d like us to handle it properly, we&apos;re one message away.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <div>
              <label style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '13px',
                color: C.muted,
                display: 'block',
                marginBottom: '4px',
              }}>
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={status === 'loading'}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '13px',
                color: C.muted,
                display: 'block',
                marginBottom: '4px',
              }}>
                Your email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status === 'loading'}
                style={inputStyle}
              />
            </div>
          </div>
          {errorMsg && (
            <p style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '13px',
              color: '#DC2626',
              marginBottom: '0.75rem',
            }}>
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              background: status === 'loading' ? '#9A7B39' : '#1A1A16',
              color: '#F7F4EC',
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send me my results →'}
          </button>
        </form>
      )}
    </div>
  )
}
