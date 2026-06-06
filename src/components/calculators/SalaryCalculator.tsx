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
  blue: '#378ADD',
  amber: '#EF9F27',
  purple: '#7F77DD',
}

function fmt(n: number): string {
  return '£' + Math.round(n).toLocaleString('en-GB')
}

function fmtPct(n: number): string {
  return (Math.round(n * 10) / 10) + '%'
}

interface TaxBand {
  name: string
  taxableInBand: number
  tax: number
}

interface NIBand {
  name: string
  earningsInBand: number
  ni: number
}

interface SalaryResults {
  gross: number
  pensionAmount: number
  incomeTax: number
  employeeNI: number
  takeHome: number
  effectiveRate: number
  takeHomeMonthly: number
  taxBands: TaxBand[]
  niBands: NIBand[]
}

function calculateSalary(
  gross: number,
  pensionPct: number,
  region: 'engWalesNI' | 'scotland',
): SalaryResults {
  const IT = TAX_RATES.incomeTax
  const NI = TAX_RATES.nationalInsurance

  const pensionAmount = gross * (pensionPct / 100)
  const taxableIncome = gross - pensionAmount

  // Personal allowance with taper above £100k
  function getPA(taperStart: number, taperEnd: number, basePA: number): number {
    if (taxableIncome <= taperStart) return basePA
    if (taxableIncome >= taperEnd) return 0
    return Math.max(0, basePA - Math.floor((taxableIncome - taperStart) / 2))
  }

  const taxBands: TaxBand[] = []
  let incomeTax = 0

  if (region === 'engWalesNI') {
    const r = IT.engWalesNI
    const pa = getPA(r.taperStart, r.taperEnd, r.personalAllowance)

    const b2 = Math.max(0, Math.min(taxableIncome, r.basicRateLimit) - pa)
    const b2t = b2 * r.basicRate
    incomeTax += b2t
    taxBands.push({ name: 'Personal Allowance (0%)', taxableInBand: Math.max(0, Math.min(taxableIncome, pa)), tax: 0 })
    if (b2 > 0) taxBands.push({ name: 'Basic rate (20%)', taxableInBand: b2, tax: b2t })

    const b3 = Math.max(0, Math.min(taxableIncome, r.higherRateLimit) - r.basicRateLimit)
    const b3t = b3 * r.higherRate
    incomeTax += b3t
    if (b3 > 0) taxBands.push({ name: 'Higher rate (40%)', taxableInBand: b3, tax: b3t })

    const b4 = Math.max(0, taxableIncome - r.higherRateLimit)
    const b4t = b4 * r.additionalRate
    incomeTax += b4t
    if (b4 > 0) taxBands.push({ name: 'Additional rate (45%)', taxableInBand: b4, tax: b4t })
  } else {
    const r = IT.scotland
    const ra = r.rates
    const pa = getPA(r.taperStart, r.taperEnd, r.personalAllowance)

    taxBands.push({ name: 'Personal Allowance (0%)', taxableInBand: Math.max(0, Math.min(taxableIncome, pa)), tax: 0 })

    const bands = [
      { name: 'Starter rate (19%)', from: pa, to: r.starterRateLimit, rate: ra.starter },
      { name: 'Basic rate (20%)', from: r.starterRateLimit, to: r.basicRateLimit, rate: ra.basic },
      { name: 'Intermediate rate (21%)', from: r.basicRateLimit, to: r.intermediateRateLimit, rate: ra.intermediate },
      { name: 'Higher rate (42%)', from: r.intermediateRateLimit, to: r.higherRateLimit, rate: ra.higher },
      { name: 'Advanced rate (45%)', from: r.higherRateLimit, to: r.advancedRateLimit, rate: ra.advanced },
      { name: 'Top rate (48%)', from: r.advancedRateLimit, to: Infinity, rate: ra.top },
    ]
    for (const b of bands) {
      const amount = Math.max(0, Math.min(taxableIncome, b.to) - b.from)
      const tax = amount * b.rate
      incomeTax += tax
      if (amount > 0) taxBands.push({ name: b.name, taxableInBand: amount, tax })
    }
  }

  // Employee NI (calculated on gross, not taxable income)
  const niBands: NIBand[] = []
  let employeeNI = 0

  if (gross > NI.primaryThreshold) {
    const earnings = Math.min(gross, NI.upperEarningsLimit) - NI.primaryThreshold
    const ni = earnings * NI.lowerRate
    employeeNI += ni
    niBands.push({ name: 'Primary threshold to UEL (8%)', earningsInBand: earnings, ni })
  }
  if (gross > NI.upperEarningsLimit) {
    const earnings = gross - NI.upperEarningsLimit
    const ni = earnings * NI.upperRate
    employeeNI += ni
    niBands.push({ name: 'Above UEL (2%)', earningsInBand: earnings, ni })
  }

  const takeHome = gross - incomeTax - employeeNI - pensionAmount
  const effectiveRate = gross > 0 ? (incomeTax / gross) * 100 : 0

  return {
    gross,
    pensionAmount,
    incomeTax,
    employeeNI,
    takeHome,
    effectiveRate,
    takeHomeMonthly: takeHome / 12,
    taxBands,
    niBands,
  }
}

export default function SalaryCalculator() {
  const [gross, setGross] = useState(35000)
  const [pensionPct, setPensionPct] = useState(0)
  const [region, setRegion] = useState<'engWalesNI' | 'scotland'>('engWalesNI')

  const res = useMemo(
    () => calculateSalary(gross, pensionPct, region),
    [gross, pensionPct, region],
  )

  const safeGross = res.gross > 0 ? res.gross : 1
  const barTakeHome = (res.takeHome / safeGross) * 100
  const barTax = (res.incomeTax / safeGross) * 100
  const barNI = (res.employeeNI / safeGross) * 100
  const barPension = (res.pensionAmount / safeGross) * 100

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}>
        <div>
          <label style={labelStyle}>Annual gross salary (£)</label>
          <input
            type="number"
            value={gross}
            min={0}
            step={1000}
            onChange={e => setGross(Math.max(0, Number(e.target.value)))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Pension contribution (%)</label>
          <input
            type="number"
            value={pensionPct}
            min={0}
            max={100}
            step={1}
            onChange={e => setPensionPct(Math.min(100, Math.max(0, Number(e.target.value))))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Region</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {(['engWalesNI', 'scotland'] as const).map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                style={{
                  flex: 1,
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '12px',
                  fontWeight: region === r ? 600 : 500,
                  padding: '0.5rem 0.5rem',
                  borderRadius: '6px',
                  border: region === r ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.2)',
                  background: region === r ? 'rgba(201,168,76,0.15)' : C.card,
                  color: region === r ? C.gold : C.muted,
                  cursor: 'pointer',
                }}
              >
                {r === 'engWalesNI' ? 'Eng / Wales / NI' : 'Scotland'}
              </button>
            ))}
          </div>
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
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Take-home (annual)</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.75rem', color: C.gold, lineHeight: 1.1 }}>{fmt(res.takeHome)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Take-home (monthly)</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(res.takeHomeMonthly)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Income tax</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(res.incomeTax)}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Employee NI</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(res.employeeNI)}</p>
        </div>
        {pensionPct > 0 && (
          <div style={cardStyle}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Pension</p>
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(res.pensionAmount)}</p>
          </div>
        )}
        <div style={cardStyle}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Effective tax rate</p>
          <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmtPct(res.effectiveRate)}</p>
        </div>
      </div>

      {/* Proportional bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          height: '32px',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          marginBottom: '0.75rem',
          background: '#1a2540',
        }}>
          <div style={{ width: `${Math.max(0, barTakeHome)}%`, background: C.gold, transition: 'width 0.3s' }} />
          <div style={{ width: `${Math.max(0, barTax)}%`, background: C.blue, transition: 'width 0.3s' }} />
          <div style={{ width: `${Math.max(0, barNI)}%`, background: C.amber, transition: 'width 0.3s' }} />
          {pensionPct > 0 && <div style={{ width: `${Math.max(0, barPension)}%`, background: C.purple, transition: 'width 0.3s' }} />}
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Take-home', color: C.gold, pct: barTakeHome },
            { label: 'Income tax', color: C.blue, pct: barTax },
            { label: 'NI', color: C.amber, pct: barNI },
            ...(pensionPct > 0 ? [{ label: 'Pension', color: C.purple, pct: barPension }] : []),
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: item.color, flexShrink: 0 }} />
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', color: C.muted }}>
                {item.label} ({Math.round(Math.max(0, item.pct))}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Income tax band breakdown */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.1rem', color: C.white, marginBottom: '0.75rem' }}>
          Income tax breakdown
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Sora, sans-serif', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                <th style={thStyle}>Band</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Taxable in band</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Tax</th>
              </tr>
            </thead>
            <tbody>
              {res.taxBands.map((band, i) => (
                <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                  <td style={tdStyle}>{band.name}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', color: C.muted }}>{fmt(band.taxableInBand)}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{fmt(band.tax)}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.05)' }}>
                <td colSpan={2} style={{ ...tdStyle, color: C.muted, fontWeight: 600 }}>Total income tax</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: C.gold, fontWeight: 700 }}>{fmt(res.incomeTax)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NI breakdown */}
      {res.niBands.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.1rem', color: C.white, marginBottom: '0.75rem' }}>
            National Insurance breakdown
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Sora, sans-serif', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <th style={thStyle}>Band</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>Earnings in band</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>NI due</th>
                </tr>
              </thead>
              <tbody>
                {res.niBands.map((band, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                    <td style={tdStyle}>{band.name}</td>
                    <td style={{ ...tdStyle, textAlign: 'right', color: C.muted }}>{fmt(band.earningsInBand)}</td>
                    <td style={{ ...tdStyle, textAlign: 'right' }}>{fmt(band.ni)}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.05)' }}>
                  <td colSpan={2} style={{ ...tdStyle, color: C.muted, fontWeight: 600 }}>Total employee NI</td>
                  <td style={{ ...tdStyle, textAlign: 'right', color: C.gold, fontWeight: 700 }}>{fmt(res.employeeNI)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <EmailResultsForm
        calculatorType="salary"
        results={{
          'Take-home (annual)': fmt(res.takeHome),
          'Take-home (monthly)': fmt(res.takeHomeMonthly),
          'Income tax': fmt(res.incomeTax),
          'Employee NI': fmt(res.employeeNI),
          ...(pensionPct > 0 ? { 'Pension contribution': fmt(res.pensionAmount) } : {}),
          'Effective tax rate': fmtPct(res.effectiveRate),
        }}
        inputs={{
          'Gross salary': fmt(res.gross),
          'Pension %': pensionPct + '%',
          'Region': region === 'engWalesNI' ? 'England / Wales / NI' : 'Scotland',
        }}
      />
    </div>
  )
}
