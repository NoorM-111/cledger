'use client'
import { useEffect, useState } from 'react'

const boxes = [
  { label: 'Box 1 — Output VAT', value: '£3,480.00', delay: 400 },
  { label: 'Box 4 — Input VAT', value: '£1,120.00', delay: 900 },
  { label: 'Box 5 — Net payable', value: '£2,360.00', delay: 1400 },
  { label: 'Box 6 — Net sales', value: '£17,400.00', delay: 1900 },
]

export default function VatReturnAnimation() {
  const [values, setValues] = useState(['£0.00', '£0.00', '£0.00', '£0.00'])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    function run() {
      setValues(['£0.00', '£0.00', '£0.00', '£0.00'])
      setSubmitted(false)
      boxes.forEach((box, i) => {
        setTimeout(() => {
          let step = 0
          const str = box.value
          const timer = setInterval(() => {
            step++
            setValues(prev => {
              const next = [...prev]
              next[i] = str.slice(0, step)
              return next
            })
            if (step >= str.length) clearInterval(timer)
          }, 40)
        }, box.delay)
      })
      setTimeout(() => setSubmitted(true), 2800)
    }
    run()
    const interval = setInterval(run, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      background: '#131d31',
      borderRadius: '12px',
      border: '1px solid rgba(201,168,76,0.15)',
      padding: '16px',
      width: '100%',
      maxWidth: '260px',
      fontFamily: 'Sora, sans-serif',
    }}>
      <div style={{ fontSize: '9px', color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '600' }}>
        VAT Return — Q1 2026
      </div>
      {boxes.map((box, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '10px', color: '#8a94a8' }}>{box.label}</span>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: '600', color: i === 2 ? '#C9A84C' : '#F8F5EE' }}>{values[i]}</span>
        </div>
      ))}
      <div style={{
        marginTop: '10px',
        display: 'inline-block',
        background: 'rgba(34,197,94,0.15)',
        color: '#22c55e',
        fontSize: '9px',
        padding: '3px 10px',
        borderRadius: '10px',
        opacity: submitted ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}>✓ Submitted to HMRC</div>
    </div>
  )
}
