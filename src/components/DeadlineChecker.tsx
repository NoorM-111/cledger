'use client'

import { useState, useCallback } from 'react'

const C = {
  navy: '#0B1222', navy2: '#131d31', card: '#111827',
  gold: '#C9A84C', gold2: '#e8c96a',
  white: '#F8F5EE', muted: '#8a94a8',
  border: 'rgba(201,168,76,0.2)', faint: 'rgba(255,255,255,0.07)',
}

interface CompanyData {
  company_name: string
  company_number: string
  company_status: string
  accounts?: { next_due?: string; accounting_reference_date?: { day: string; month: string } }
  confirmation_statement?: { next_due?: string }
}

interface SearchResult {
  name: string
  number: string
  status: string
}

function daysFromNow(dateStr: string): number {
  const due = new Date(dateStr)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return Math.round((due.getTime() - now.getTime()) / 86400000)
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function DeadlineRow({ label, dateStr }: { label: string; dateStr?: string }) {
  if (!dateStr) return null
  const days = daysFromNow(dateStr)
  const soon = days <= 60
  const overdue = days < 0
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 0', borderBottom: `0.5px solid ${C.faint}`, gap: 12 }}>
      <div>
        <div style={{ fontSize: 13, color: C.white, fontWeight: 500, marginBottom: 3 }}>{label}</div>
        <div style={{ fontSize: 12, color: C.muted }}>{formatDate(dateStr)}</div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        {overdue ? (
          <span style={{ fontSize: 11, fontWeight: 700, color: '#f87171', background: 'rgba(248,113,113,0.1)', padding: '3px 10px', borderRadius: 20 }}>Overdue</span>
        ) : soon ? (
          <>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.gold2, background: 'rgba(201,168,76,0.12)', padding: '3px 10px', borderRadius: 20, display: 'block', marginBottom: 3 }}>Due soon</span>
            <span style={{ fontSize: 11, color: C.gold2 }}>{days} day{days !== 1 ? 's' : ''}</span>
          </>
        ) : (
          <span style={{ fontSize: 11, color: C.muted }}>{days} days</span>
        )}
      </div>
    </div>
  )
}

export default function DeadlineChecker() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null)
  const [company, setCompany] = useState<CompanyData | null>(null)

  const search = useCallback(async (q: string) => {
    if (!q.trim()) return
    setLoading(true)
    setError('')
    setSearchResults(null)
    setCompany(null)
    try {
      const res = await fetch(`/api/company?q=${encodeURIComponent(q.trim())}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }
      if (data.type === 'company') {
        setCompany(data.data)
      } else {
        setSearchResults(data.results)
        if (!data.results?.length) setError('No companies found. Try a different name or enter the 8-character company number.')
      }
    } catch {
      setError('Unable to reach Companies House. Please try again shortly.')
    } finally {
      setLoading(false)
    }
  }, [])

  const selectCompany = useCallback(async (number: string) => {
    setQuery(number)
    await search(number)
  }, [search])

  const ard = company?.accounts?.accounting_reference_date
  const ardStr = ard ? `${ard.day.padStart(2, '0')}/${ard.month.padStart(2, '0')}` : undefined

  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderLeft: `4px solid ${C.gold}`,
      borderRadius: 16,
      padding: '32px',
      fontFamily: "'Sora', 'Inter', sans-serif",
      marginTop: 32,
      maxWidth: 560,
    }}>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold }}>
          Companies House
        </span>
        <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 400, color: C.white, lineHeight: 1.2, marginTop: 6, marginBottom: 8 }}>
          Check your real deadlines
        </h3>
        <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
          Enter your company name or number for live statutory deadlines.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search(query)}
          placeholder="e.g. Acme Ltd or 12345678"
          style={{
            flex: 1,
            fontFamily: "'Sora', 'Inter', sans-serif",
            fontSize: 13,
            color: C.white,
            background: '#0e1520',
            border: `0.5px solid rgba(255,255,255,0.12)`,
            borderRadius: 9,
            padding: '11px 14px',
            outline: 'none',
          }}
        />
        <button
          onClick={() => search(query)}
          disabled={loading || !query.trim()}
          style={{
            fontFamily: "'Sora', 'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            padding: '11px 20px',
            borderRadius: 9,
            border: 'none',
            background: loading ? 'rgba(201,168,76,0.4)' : C.gold,
            color: C.navy,
            cursor: loading || !query.trim() ? 'not-allowed' : 'pointer',
            flexShrink: 0,
          }}
        >
          {loading ? '...' : 'Check'}
        </button>
      </div>

      {error && (
        <p style={{ fontSize: 12, color: '#f87171', marginTop: 8 }}>{error}</p>
      )}

      {searchResults && searchResults.length > 0 && (
        <div style={{ marginTop: 12, border: `0.5px solid ${C.faint}`, borderRadius: 10, overflow: 'hidden' }}>
          {searchResults.map(r => (
            <button
              key={r.number}
              onClick={() => selectCompany(r.number)}
              style={{
                width: '100%', textAlign: 'left',
                background: 'transparent', border: 'none',
                borderBottom: `0.5px solid ${C.faint}`,
                padding: '12px 14px', cursor: 'pointer',
                fontFamily: "'Sora', 'Inter', sans-serif",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: C.white }}>{r.name}</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{r.number} · {r.status}</div>
            </button>
          ))}
        </div>
      )}

      {company && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.white }}>{company.company_name}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                {company.company_number}
                {ardStr ? ` · Year end ${ardStr}` : ''}
              </div>
            </div>
            <span style={{
              fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
              background: company.company_status === 'active' ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
              color: company.company_status === 'active' ? '#4ade80' : '#f87171',
              textTransform: 'capitalize',
            }}>
              {company.company_status}
            </span>
          </div>

          <DeadlineRow label="Next accounts due" dateStr={company.accounts?.next_due} />
          <DeadlineRow label="Next confirmation statement due" dateStr={company.confirmation_statement?.next_due} />

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `0.5px solid ${C.faint}` }}>
            <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 14 }}>
              These are your statutory deadlines. We guarantee every one of them.
            </p>
            <a
              href="/#contact"
              style={{
                display: 'inline-block',
                background: C.gold,
                color: C.navy,
                fontFamily: "'Sora', 'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                padding: '11px 22px',
                borderRadius: 9,
                textDecoration: 'none',
              }}
            >
              Book a free consultation →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
