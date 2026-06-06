'use client'
import { useEffect, useState } from 'react'

export default function InvoiceAnimation() {
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    function run() {
      setPaid(false)
      setTimeout(() => setPaid(true), 2500)
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
      padding: '16px',
      width: '100%',
      maxWidth: '240px',
      position: 'relative',
      fontFamily: 'Sora, sans-serif',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{
          width: '28px', height: '28px', background: '#0B1222',
          borderRadius: '6px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontFamily: 'Georgia, serif',
          fontSize: '18px', color: '#C9A84C', fontWeight: '700',
        }}>C</div>
        <span style={{ fontSize: '9px', color: '#8a94a8', fontFamily: 'monospace' }}>INV-2026-047</span>
        <span style={{
          fontSize: '9px', padding: '2px 8px', borderRadius: '10px',
          background: paid ? 'rgba(34,197,94,0.15)' : 'rgba(239,159,39,0.15)',
          color: paid ? '#22c55e' : '#EF9F27',
          transition: 'all 0.4s ease',
        }}>{paid ? 'Paid ✓' : 'Pending'}</span>
      </div>

      {[
        ['Bookkeeping — May', '£175.00'],
        ['VAT return Q1', '£85.00'],
        ['Payroll (4 staff)', '£99.00'],
      ].map(([label, amt], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#8a94a8', padding: '3px 0' }}>
          <span>{label}</span><span>{amt}</span>
        </div>
      ))}

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', color: '#C9A84C', fontFamily: 'monospace' }}>
        <span>Total</span><span>£430.80</span>
      </div>

      <div style={{
        position: 'absolute', right: '12px', bottom: '12px',
        width: '44px', height: '44px',
        border: '2px solid #22c55e', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '8px', color: '#22c55e', fontWeight: '700',
        textAlign: 'center', lineHeight: '1.2',
        opacity: paid ? 1 : 0,
        transform: paid ? 'rotate(-15deg) scale(1)' : 'rotate(-20deg) scale(0.5)',
        transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
      }}>PAID<br/>✓</div>
    </div>
  )
}
