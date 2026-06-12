'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { fireContactConversion } from '@/lib/gtag'

const STORAGE_KEY = 'cledger_popup_seen'
const BLOCKED_PATHS = ['/privacy', '/terms']
const TRIGGER_DELAY = 8000
const TRIGGER_SCROLL = 0.4

const C = {
  navy: '#0B1222', navy2: '#131d31', card: '#111827',
  gold: '#C9A84C', gold2: '#e8c96a',
  white: '#F8F5EE', muted: '#8a94a8',
  border: 'rgba(201,168,76,0.2)', faint: 'rgba(255,255,255,0.07)',
}

export default function LeadPopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const triggered = useRef(false)

  const open = useCallback(() => {
    if (triggered.current) return
    if (typeof window === 'undefined') return
    if (localStorage.getItem(STORAGE_KEY)) return
    triggered.current = true
    setVisible(true)
  }, [])

  useEffect(() => {
    if (BLOCKED_PATHS.includes(pathname)) return
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(open, TRIGGER_DELAY)

    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrolled >= TRIGGER_SCROLL) open()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname, open])

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }, [])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [visible, dismiss])

  if (!visible) return null

  return <PopupModal onClose={dismiss} />
}

function PopupModal({ onClose }: { onClose: () => void }) {
  const firstFocusRef = useRef<HTMLButtonElement>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', businessType: '' })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    firstFocusRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) { setErrorMsg('Name and email are required.'); return }
    if (!consent) { setErrorMsg('Please tick the consent checkbox.'); return }
    setErrorMsg('')
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessType: form.businessType,
          service: 'Free deadline checklist (popup)',
          message: `Lead from popup. Business type: ${form.businessType || 'not provided'}. Source: popup.`,
          source: 'popup',
        }),
      })
      if (!res.ok) throw new Error()
      fireContactConversion()
      setStatus('success')
      setTimeout(onClose, 3000)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please email us at info@cledger.co.uk')
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get your free deadline checklist"
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.72)',
        zIndex: 9000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderLeft: `4px solid ${C.gold}`,
        borderRadius: 16,
        padding: '36px 32px 28px',
        width: '100%',
        maxWidth: 480,
        maxHeight: '90vh',
        overflowY: 'auto',
        fontFamily: "'Sora', 'Inter', sans-serif",
        position: 'relative',
      }}>
        <button
          ref={firstFocusRef}
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'transparent', border: 'none',
            color: C.muted, fontSize: 18, cursor: 'pointer', lineHeight: 1, padding: '4px 8px',
          }}
        >✕</button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: C.white, marginBottom: 8 }}>Done.</h3>
            <p style={{ fontSize: 13, color: C.muted }}>Check your inbox shortly.</p>
          </div>
        ) : (
          <>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, display: 'block', marginBottom: 10 }}>Free resource</span>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 10 }}>
              Never miss an HMRC deadline
            </h2>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.68, marginBottom: 24 }}>
              Leave your details and we&rsquo;ll send you a free deadline checklist for your business type, plus a no-obligation callback from a qualified accountant.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <Field label="Full name" required>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inp}
                />
              </Field>
              <Field label="Email address" required>
                <input
                  type="email"
                  placeholder="jane@company.co.uk"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inp}
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  placeholder="+44 7700 000000"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  style={inp}
                />
              </Field>
              <Field label="Business type">
                <select
                  value={form.businessType}
                  onChange={e => setForm(f => ({ ...f, businessType: e.target.value }))}
                  style={{ ...inp, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Select one</option>
                  <option>Sole trader</option>
                  <option>Ltd company</option>
                  <option>Partnership</option>
                  <option>Startup / pre-revenue</option>
                  <option>E-commerce store</option>
                  <option>Other</option>
                </select>
              </Field>

              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 16, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  style={{ marginTop: 2, flexShrink: 0, accentColor: C.gold }}
                />
                <span style={{ fontSize: 11, color: C.muted, lineHeight: 1.6 }}>
                  I&rsquo;m happy for Cledger to contact me about my enquiry. See our{' '}
                  <Link href="/privacy" style={{ color: C.gold, textDecoration: 'underline' }}>Privacy Policy</Link>.
                </span>
              </label>

              {errorMsg && <p style={{ fontSize: 12, color: '#f87171', marginBottom: 12 }}>{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  fontFamily: "'Sora', 'Inter', sans-serif",
                  fontSize: 13, fontWeight: 600,
                  padding: '13px',
                  borderRadius: 10, border: 'none',
                  background: status === 'loading' ? 'rgba(201,168,76,0.5)' : C.gold,
                  color: C.navy,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Send me the checklist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 14 }}>
      <label style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted }}>
        {label}{required && <span style={{ color: C.gold }}> *</span>}
      </label>
      {children}
    </div>
  )
}

const inp: React.CSSProperties = {
  fontFamily: "'Sora', 'Inter', sans-serif",
  fontSize: 13, color: C.white,
  background: '#0e1520',
  border: '0.5px solid rgba(255,255,255,0.1)',
  borderRadius: 9,
  padding: '11px 14px',
  outline: 'none', width: '100%',
}
