'use client'
import { useState, useMemo } from 'react'
import { TAX_RATES } from '@/lib/tax-rates'
import EmailResultsForm from './EmailResultsForm'

const C = {
  card: '#111827',
  card2: '#131d31',
  gold: '#C9A84C',
  white: '#F8F5EE',
  muted: '#8a94a8',
  green: '#4ade80',
  red: '#f87171',
}

function fmt(n: number): string {
  return '£' + Math.round(n).toLocaleString('en-GB')
}

function fmtPct(n: number): string {
  return (Math.round(n * 10) / 10) + '%'
}

interface CTResults {
  profit: number
  ctDue: number
  profitAfterTax: number
  effectiveRate: number
  rateLabel: string
  marginalRelief: number | null
  adjustedLower: number
  adjustedUpper: number
  divisor: number
}

function calculateCT(profit: number, associatedCompanies: number): CTResults {
  const CT = TAX_RATES.corporationTax
  const divisor = associatedCompanies + 1
  const adjustedLower = CT.lowerLimit / divisor
  const adjustedUpper = CT.upperLimit / divisor

  let ctDue: number
  let rateLabel: string
  let marginalRelief: number | null = null

  if (profit <= adjustedLower) {
    ctDue = profit * CT.smallProfitsRate
    rateLabel = 'Small profits rate (19%)'
  } else if (profit >= adjustedUpper) {
    ctDue = profit * CT.mainRate
    rateLabel = 'Main rate (25%)'
  } else {
    const mainTax = profit * CT.mainRate
    marginalRelief = (adjustedUpper - profit) * CT.marginalReliefFraction
    ctDue = mainTax - marginalRelief
    rateLabel = 'Marginal relief applies'
  }

  const profitAfterTax = profit - ctDue
  const effectiveRate = profit > 0 ? (ctDue / profit) * 100 : 0

  return {
    profit,
    ctDue,
    profitAfterTax,
    effectiveRate,
    rateLabel,
    marginalRelief,
    adjustedLower,
    adjustedUpper,
    divisor,
  }
}

export default function CorporationTaxCalculator() {
  const [profit, setProfit] = useState(80000)
  const [associatedCompanies, setAssociatedCompanies] = useState(0)

  const res = useMemo(
    () => calculateCT(profit, associatedCompanies),
    [profit, associatedCompanies],
  )

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

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Sora, sans-serif',
    fontSize: '13px',
    color: C.muted,
    display: 'block',
    marginBottom: '4px',
  }

  const cardStyle: React.CSSProperties = {
    background: C.card2,
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '12px',
    padding: '1.25rem',
  }

  const thStyle: React.CSSProperties = {
    padding: '0.6rem 0.75rem',
    textAlign: 'left' as const,
    color: C.gold,
    fontWeight: 600,
  }

  const tdStyle: React.CSSProperties = {
    padding: '0.5rem 0.75rem',
    color: C.white,
  }

  return (
    <div>
      {/* Inputs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}>
        <div>
          <label style={labelStyle}>Taxable profit (£)</label>
          <input
            type="number"
            value={profit}
            min={0}
            step={5000}
            onChange={e => setProfit(Math.max(0, Number(e.target.value)))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Number of associated companies</label>
          <input
            type="number"
            value={associatedCompanies}
            min={0}
            step={1}
            onChange={e => setAssociatedCompanies(Math.max(0, Math.floor(Number(e.target.value))))}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Result cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{ ...cardStyle, border: '1px solid rgba(201,168,76,0.3)' }}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Profit after tax</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.75rem', color: C.gold, lineHeight: 1.1 }}>{fmt(res.profitAfterTax)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Corporation tax due</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(res.ctDue)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Effective rate</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmtPct(res.effectiveRate)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Rate applied</p>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: C.white, lineHeight: 1.4 }}>{res.rateLabel}</p>
        </div>
        {res.marginalRelief !== null && (
          <div style={cardStyle}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Marginal relief</p>
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.green, lineHeight: 1.1 }}>{fmt(res.marginalRelief)}</p>
          </div>
        )}
      </div>

      {/* Threshold table */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.1rem', color: C.white, marginBottom: '0.5rem' }}>
          CT threshold breakdown
        </h3>
        {res.divisor > 1 && (
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: C.muted, marginBottom: '0.75rem' }}>
            Thresholds divided by {res.divisor} ({associatedCompanies} associated {associatedCompanies === 1 ? 'company' : 'companies'})
          </p>
        )}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Sora, sans-serif', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                <th style={thStyle}>Threshold</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Amount</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <td style={tdStyle}>Small profits limit (lower)</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: C.muted }}>{fmt(res.adjustedLower)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: res.profit <= res.adjustedLower ? C.green : C.muted }}>
                  {res.profit <= res.adjustedLower ? 'Applies' : 'Above limit'}
                </td>
              </tr>
              <tr style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <td style={tdStyle}>Main rate limit (upper)</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: C.muted }}>{fmt(res.adjustedUpper)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: res.profit >= res.adjustedUpper ? C.red : C.muted }}>
                  {res.profit >= res.adjustedUpper ? 'Above limit' : 'Below limit'}
                </td>
              </tr>
              <tr style={{ borderTop: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.05)' }}>
                <td style={tdStyle}>Your taxable profit</td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 600 }}>{fmt(res.profit)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: C.gold, fontWeight: 600 }}>{res.rateLabel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <EmailResultsForm
        calculatorType="corporation-tax"
        results={{
          'Profit after tax': fmt(res.profitAfterTax),
          'Corporation tax due': fmt(res.ctDue),
          'Effective rate': fmtPct(res.effectiveRate),
          'Rate applied': res.rateLabel,
          ...(res.marginalRelief !== null ? { 'Marginal relief': fmt(res.marginalRelief) } : {}),
        }}
        inputs={{
          'Taxable profit': fmt(res.profit),
          'Associated companies': associatedCompanies.toString(),
        }}
      />
    </div>
  )
}
