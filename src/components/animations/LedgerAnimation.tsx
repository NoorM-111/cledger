'use client'
import { useEffect, useState } from 'react'

const rows = [
  { label: 'Sales income', amount: '+£8,400', type: 'income' },
  { label: 'Consultancy', amount: '+£3,200', type: 'income' },
  { label: 'Office rent', amount: '-£1,100', type: 'expense' },
  { label: 'Payroll', amount: '-£2,800', type: 'expense' },
  { label: 'Software', amount: '-£340', type: 'expense' },
]

export default function LedgerAnimation() {
  const [visibleRows, setVisibleRows] = useState<number[]>([])
  const [showTotal, setShowTotal] = useState(false)

  useEffect(() => {
    function run() {
      setVisibleRows([])
      setShowTotal(false)
      rows.forEach((_, i) => {
        setTimeout(() => setVisibleRows(prev => [...prev, i]), 400 + i * 300)
      })
      setTimeout(() => setShowTotal(true), 400 + rows.length * 300 + 200)
    }
    run()
    const interval = setInterval(run, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      background: '#131d31',
      borderRadius: '12px',
      border: '1px solid rgba(201,168,76,0.15)',
      padding: '20px',
      width: '100%',
      maxWidth: '280px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '10px',
        color: '#8a94a8',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '10px',
        fontFamily: 'Sora, sans-serif',
      }}>
        <span>Description</span><span>Amount</span>
      </div>

      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '7px 10px',
          borderRadius: '6px',
          marginBottom: '4px',
          opacity: visibleRows.includes(i) ? 1 : 0,
          transform: visibleRows.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
          transition: 'all 0.4s ease',
          background: row.type === 'income' ? 'rgba(34,197,94,0.08)' : 'rgba(248,113,113,0.08)',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: row.type === 'income' ? '#22c55e' : '#f87171',
        }}>
          <span>{row.label}</span>
          <span>{row.amount}</span>
        </div>
      ))}

      <div style={{ height: '1px', background: 'rgba(201,168,76,0.2)', margin: '8px 0' }} />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7px 10px',
        borderRadius: '6px',
        background: 'rgba(201,168,76,0.08)',
        fontFamily: 'monospace',
        fontSize: '13px',
        fontWeight: '700',
        color: '#C9A84C',
        opacity: showTotal ? 1 : 0,
        transform: showTotal ? 'translateX(0)' : 'translateX(-12px)',
        transition: 'all 0.4s ease',
      }}>
        <span>Net profit</span>
        <span>£7,360</span>
      </div>
    </div>
  )
}
