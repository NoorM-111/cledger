'use client'
import { useState, useMemo, useCallback } from 'react'
import { TAX_RATES } from '@/lib/tax-rates'
import EmailResultsForm from './EmailResultsForm'

const C = {
  card: '#FFFFFF',
  card2: '#F4ECD7',
  gold: '#9A7B39',
  white: '#1A1A16',
  muted: '#5F5A50',
  green: '#16A34A',
  red: '#DC2626',
}

function fmt(n: number): string {
  return '£' + Math.round(n).toLocaleString('en-GB')
}

type VATRateKey = 'standard' | 'reduced' | 'zero' | 'exempt'
type Scheme = 'standard' | 'cash' | 'flatrate'

interface VATRow {
  id: string
  description: string
  net: number
  rateKey: VATRateKey
}

const RATE_LABELS: Record<VATRateKey, string> = {
  standard: 'Standard 20%',
  reduced: 'Reduced 5%',
  zero: 'Zero 0%',
  exempt: 'Exempt',
}

let _nextId = 100
function nextId() { return (++_nextId).toString() }

function getVATRate(rateKey: VATRateKey): number {
  if (rateKey === 'standard') return TAX_RATES.vat.standardRate
  if (rateKey === 'reduced') return TAX_RATES.vat.reducedRate
  return TAX_RATES.vat.zeroRate
}

const DEFAULT_SALES: VATRow[] = [
  { id: '1', description: 'Consultancy fees', net: 8000, rateKey: 'standard' },
  { id: '2', description: 'Product sales', net: 3500, rateKey: 'standard' },
]
const DEFAULT_EXPENSES: VATRow[] = [
  { id: '3', description: 'Office rent', net: 1200, rateKey: 'standard' },
  { id: '4', description: 'Software subscriptions', net: 400, rateKey: 'standard' },
  { id: '5', description: 'Professional fees', net: 600, rateKey: 'standard' },
]

interface RowBreakdown {
  description: string
  net: number
  rate: number
  vat: number
}

interface VATResults {
  scheme: Scheme
  totalNetSales: number
  outputVAT: number
  inputVAT: number
  vatDue: number
  grossTurnover: number
  salesBreakdown: RowBreakdown[]
  expenseBreakdown: RowBreakdown[]
}

export default function VatCalculator() {
  const [scheme, setScheme] = useState<Scheme>('standard')
  const [flatRatePct, setFlatRatePct] = useState(12)
  const [salesRows, setSalesRows] = useState<VATRow[]>(DEFAULT_SALES)
  const [expenseRows, setExpenseRows] = useState<VATRow[]>(DEFAULT_EXPENSES)

  const results = useMemo((): VATResults => {
    const totalNetSales = salesRows.reduce((s, r) => s + r.net, 0)
    const salesBreakdown = salesRows.map(r => ({
      description: r.description,
      net: r.net,
      rate: getVATRate(r.rateKey),
      vat: r.net * getVATRate(r.rateKey),
    }))
    const outputVAT = salesBreakdown.reduce((s, r) => s + r.vat, 0)

    if (scheme === 'flatrate') {
      const grossTurnover = totalNetSales * (1 + TAX_RATES.vat.standardRate)
      const vatDue = grossTurnover * (flatRatePct / 100)
      return {
        scheme,
        totalNetSales,
        outputVAT,
        inputVAT: 0,
        vatDue,
        grossTurnover,
        salesBreakdown,
        expenseBreakdown: [],
      }
    }

    const expenseBreakdown = expenseRows.map(r => ({
      description: r.description,
      net: r.net,
      rate: getVATRate(r.rateKey),
      vat: r.rateKey !== 'exempt' ? r.net * getVATRate(r.rateKey) : 0,
    }))
    const inputVAT = expenseBreakdown.reduce((s, r) => s + r.vat, 0)
    const vatDue = outputVAT - inputVAT

    return {
      scheme,
      totalNetSales,
      outputVAT,
      inputVAT,
      vatDue,
      grossTurnover: 0,
      salesBreakdown,
      expenseBreakdown,
    }
  }, [scheme, flatRatePct, salesRows, expenseRows])

  const updateRow = useCallback((
    rows: VATRow[],
    setRows: (r: VATRow[]) => void,
    id: string,
    field: keyof VATRow,
    value: string | number,
  ) => {
    setRows(rows.map(r => r.id === id ? { ...r, [field]: value } : r))
  }, [])

  const inputStyle: React.CSSProperties = {
    background: C.card,
    border: '1px solid #E9E2D4',
    color: C.white,
    borderRadius: '6px',
    padding: '0.5rem 0.625rem',
    fontSize: '13px',
    fontFamily: "'Hanken Grotesk', sans-serif",
    outline: 'none',
  }

  function RowSection({
    rows,
    setRows,
    title,
  }: {
    rows: VATRow[]
    setRows: (r: VATRow[]) => void
    title: string
  }) {
    return (
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.05rem', color: C.white }}>
            {title}
          </h3>
          <button
            onClick={() => setRows([...rows, { id: nextId(), description: '', net: 0, rateKey: 'standard' }])}
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              background: '#F4ECD7',
              border: '1px solid #D7C79A',
              color: C.gold,
              borderRadius: '6px',
              padding: '0.35rem 0.75rem',
              cursor: 'pointer',
            }}
          >
            + Add row
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {rows.map(row => (
            <div
              key={row.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 100px 130px 32px',
                gap: '0.5rem',
                alignItems: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Description"
                value={row.description}
                onChange={e => updateRow(rows, setRows, row.id, 'description', e.target.value)}
                style={{ ...inputStyle, minWidth: 0 }}
              />
              <input
                type="number"
                placeholder="Net £"
                value={row.net}
                min={0}
                step={100}
                onChange={e => updateRow(rows, setRows, row.id, 'net', Math.max(0, Number(e.target.value)))}
                style={inputStyle}
              />
              <select
                value={row.rateKey}
                onChange={e => updateRow(rows, setRows, row.id, 'rateKey', e.target.value)}
                style={inputStyle}
              >
                {(Object.keys(RATE_LABELS) as VATRateKey[]).map(k => (
                  <option key={k} value={k}>{RATE_LABELS[k]}</option>
                ))}
              </select>
              <button
                onClick={() => setRows(rows.filter(r => r.id !== row.id))}
                style={{
                  background: 'rgba(248,113,113,0.1)',
                  border: '1px solid rgba(248,113,113,0.2)',
                  color: '#DC2626',
                  borderRadius: '6px',
                  padding: '0.4rem',
                  cursor: 'pointer',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '14px',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const vatDueColor = results.vatDue < 0 ? C.green : C.red
  const vatLabel = results.vatDue < 0 ? 'Reclaimable from HMRC' : 'VAT payable to HMRC'
  const vatDisplay = fmt(Math.abs(results.vatDue))

  const thStyle: React.CSSProperties = {
    padding: '0.5rem 0.75rem',
    textAlign: 'left' as const,
    color: C.gold,
    fontWeight: 600,
  }

  return (
    <div>
      {/* Scheme selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px', color: C.muted, display: 'block', marginBottom: '6px' }}>
          VAT scheme
        </label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {([
            { id: 'standard' as const, label: 'Standard / Accrual' },
            { id: 'cash' as const, label: 'Cash Accounting' },
            { id: 'flatrate' as const, label: 'Flat Rate Scheme' },
          ]).map(s => (
            <button
              key={s.id}
              onClick={() => setScheme(s.id)}
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: scheme === s.id ? 600 : 500,
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                border: scheme === s.id ? '1px solid #9A7B39' : '1px solid #E9E2D4',
                background: scheme === s.id ? '#E9E2D4' : C.card,
                color: scheme === s.id ? C.gold : C.muted,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flat rate % */}
      {scheme === 'flatrate' && (
        <div style={{ marginBottom: '1.5rem', maxWidth: '240px' }}>
          <label style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px', color: C.muted, display: 'block', marginBottom: '4px' }}>
            Your flat rate % (sector rate)
          </label>
          <input
            type="number"
            value={flatRatePct}
            min={1}
            max={16.5}
            step={0.5}
            onChange={e => setFlatRatePct(Math.min(16.5, Math.max(1, Number(e.target.value))))}
            style={{
              width: '100%',
              background: C.card,
              border: '1px solid #E9E2D4',
              color: C.white,
              borderRadius: '8px',
              padding: '0.625rem 1rem',
              fontSize: '14px',
              fontFamily: "'Hanken Grotesk', sans-serif",
              outline: 'none',
            }}
          />
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '11px', color: C.muted, marginTop: '4px' }}>
            Enter your sector&apos;s flat rate percentage (1% – 16.5%).
          </p>
        </div>
      )}

      {/* Row sections */}
      <RowSection rows={salesRows} setRows={setSalesRows} title="Sales" />
      {scheme !== 'flatrate' && (
        <RowSection rows={expenseRows} setRows={setExpenseRows} title="Expenses (input VAT)" />
      )}

      {/* Summary cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}>
        {scheme !== 'flatrate' && (
          <div style={{ background: C.card2, border: '1px solid #E9E2D4', borderRadius: '12px', padding: '1.25rem' }}>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Output VAT on sales</p>
            <p style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(results.outputVAT)}</p>
          </div>
        )}
        {scheme !== 'flatrate' && (
          <div style={{ background: C.card2, border: '1px solid #E9E2D4', borderRadius: '12px', padding: '1.25rem' }}>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Input VAT reclaimable</p>
            <p style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(results.inputVAT)}</p>
          </div>
        )}
        {scheme === 'flatrate' && (
          <div style={{ background: C.card2, border: '1px solid #E9E2D4', borderRadius: '12px', padding: '1.25rem' }}>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>Gross turnover (inc. VAT)</p>
            <p style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.5rem', color: C.white, lineHeight: 1.1 }}>{fmt(results.grossTurnover)}</p>
          </div>
        )}
        <div style={{
          background: C.card2,
          border: `1px solid ${results.vatDue < 0 ? 'rgba(15,110,86,0.35)' : 'rgba(163,45,45,0.35)'}`,
          borderRadius: '12px',
          padding: '1.25rem',
        }}>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '12px', color: C.muted, marginBottom: '0.25rem' }}>{vatLabel}</p>
          <p style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.75rem', color: vatDueColor, lineHeight: 1.1 }}>{vatDisplay}</p>
        </div>
      </div>

      {/* Flat rate note */}
      {scheme === 'flatrate' && (
        <div style={{
          background: '#F7F2E6',
          border: '1px solid #E9E2D4',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px', color: C.muted, lineHeight: 1.6 }}>
            Under the Flat Rate Scheme, you pay a fixed percentage of your{' '}
            <strong style={{ color: C.white }}>gross (VAT-inclusive) turnover</strong> to HMRC. You cannot reclaim
            input VAT on purchases (except capital assets over £2,000). The flat rate % is sector-specific — check
            HMRC&apos;s published list for your sector.
          </p>
        </div>
      )}

      {/* Sales breakdown table */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.05rem', color: C.white, marginBottom: '0.75rem' }}>
          Sales breakdown
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#E9E2D4' }}>
                <th style={thStyle}>Description</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Net</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Rate</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>VAT</th>
              </tr>
            </thead>
            <tbody>
              {results.salesBreakdown.map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid #E9E2D4' }}>
                  <td style={{ padding: '0.5rem 0.75rem', color: C.white }}>{row.description || '—'}</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.muted }}>{fmt(row.net)}</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.muted }}>{Math.round(row.rate * 100)}%</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.white }}>{fmt(row.vat)}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '1px solid #E9E2D4', background: '#FAF6EE' }}>
                <td colSpan={3} style={{ padding: '0.5rem 0.75rem', color: C.muted, fontWeight: 600 }}>Total output VAT</td>
                <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.gold, fontWeight: 700 }}>{fmt(results.outputVAT)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expense breakdown table */}
      {scheme !== 'flatrate' && results.expenseBreakdown.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.05rem', color: C.white, marginBottom: '0.75rem' }}>
            Expense breakdown
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#E9E2D4' }}>
                  <th style={thStyle}>Description</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>Net</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>Rate</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>VAT</th>
                </tr>
              </thead>
              <tbody>
                {results.expenseBreakdown.map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #E9E2D4' }}>
                    <td style={{ padding: '0.5rem 0.75rem', color: C.white }}>{row.description || '—'}</td>
                    <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.muted }}>{fmt(row.net)}</td>
                    <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.muted }}>{Math.round(row.rate * 100)}%</td>
                    <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.white }}>{fmt(row.vat)}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '1px solid #E9E2D4', background: '#FAF6EE' }}>
                  <td colSpan={3} style={{ padding: '0.5rem 0.75rem', color: C.muted, fontWeight: 600 }}>Total input VAT</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', color: C.gold, fontWeight: 700 }}>{fmt(results.inputVAT)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Disclaimer — always visible once rendered */}
      <div style={{
        border: '1px solid #E9E2D4',
        borderLeft: '3px solid #C9A84C',
        borderRadius: '8px',
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        background: 'rgba(201,168,76,0.04)',
      }}>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '13px', color: C.muted, lineHeight: 1.7, marginBottom: '0.5rem' }}>
          <strong style={{ color: C.gold }}>Estimated figures only.</strong> Actual VAT liability depends on your invoice dates, VAT scheme election, partial exemption rules, and registration status. Always confirm with a qualified accountant before submitting to HMRC.
        </p>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '12px', color: C.muted, lineHeight: 1.6, margin: 0 }}>
          VAT registration threshold:{' '}
          <strong style={{ color: C.white }}>
            £{TAX_RATES.vat.registrationThreshold.toLocaleString('en-GB')}
          </strong>{' '}
          taxable turnover (rolling 12 months). You must notify HMRC within 30 days of exceeding this threshold.
        </p>
      </div>

      <EmailResultsForm
        calculatorType="vat"
        results={{
          'Output VAT on sales': fmt(results.outputVAT),
          'Input VAT reclaimable': scheme !== 'flatrate' ? fmt(results.inputVAT) : 'N/A (flat rate)',
          [vatLabel]: vatDisplay,
          'Scheme': scheme === 'standard' ? 'Standard / Accrual' : scheme === 'cash' ? 'Cash Accounting' : 'Flat Rate Scheme',
        }}
        inputs={{
          'Scheme': scheme === 'standard' ? 'Standard / Accrual' : scheme === 'cash' ? 'Cash Accounting' : `Flat Rate Scheme (${flatRatePct}%)`,
          'Total net sales': fmt(results.totalNetSales),
        }}
      />
    </div>
  )
}
