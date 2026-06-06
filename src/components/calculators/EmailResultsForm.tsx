'use client'
import { useState } from 'react'

const C = {
  card: '#111827',
  gold: '#C9A84C',
  white: '#F8F5EE',
  muted: '#8a94a8',
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
    background: C.card,
    border: '1px solid rgba(201,168,76,0.2)',
    color: C.white,
    borderRadius: '8px',
    padding: '0.625rem 1rem',
    fontSize: '14px',
    fontFamily: 'Sora, sans-serif',
    outline: 'none',
  }

  return (
    <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '2rem', marginTop: '1.5rem' }}>
      {status === 'success' ? (
        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: C.white }}>
          Sent. Check your inbox — we&apos;ll be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: '1.35rem',
            color: C.white,
            marginBottom: '0.4rem',
          }}>
            Get these results in your inbox
          </h3>
          <p style={{
            fontFamily: 'Sora, sans-serif',
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
                fontFamily: 'Sora, sans-serif',
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
                fontFamily: 'Sora, sans-serif',
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
              fontFamily: 'Sora, sans-serif',
              fontSize: '13px',
              color: '#f87171',
              marginBottom: '0.75rem',
            }}>
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              background: status === 'loading' ? 'rgba(201,168,76,0.5)' : '#C9A84C',
              color: '#0B1222',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send me my results →'}
          </button>
        </form>
      )}
    </div>
  )
}
