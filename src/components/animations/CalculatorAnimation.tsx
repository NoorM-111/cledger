'use client'
import { useEffect, useState } from 'react'

const sequence = [
  { btn: '8', display: '8', sub: 'Net amount' },
  { btn: '4', display: '84', sub: 'Net amount' },
  { btn: '0', display: '840', sub: 'Net amount' },
  { btn: '0', display: '8400', sub: 'Net amount' },
  { btn: '×', display: '8400 ×', sub: 'Net amount' },
  { btn: '2', display: '8400 × 2', sub: 'VAT rate' },
  { btn: '0', display: '8400 × 20', sub: 'VAT rate' },
  { btn: '%', display: '8400 × 20%', sub: 'VAT rate' },
  { btn: '=', display: '£1,680.00', sub: 'VAT @ 20%' },
]

const buttons = ['7','8','9','÷','4','5','6','×','1','2','3','−','.','0','%','=']

export default function CalculatorAnimation() {
  const [display, setDisplay] = useState('£0.00')
  const [sub, setSub] = useState('Enter net amount')
  const [activeBtn, setActiveBtn] = useState('')

  useEffect(() => {
    function run() {
      setDisplay('£0.00')
      setSub('Enter net amount')
      setActiveBtn('')
      let step = 0
      function next() {
        if (step >= sequence.length) {
          setTimeout(run, 1500)
          return
        }
        const s = sequence[step]
        setActiveBtn(s.btn)
        setDisplay(s.display)
        setSub(s.sub)
        setTimeout(() => setActiveBtn(''), 200)
        step++
        setTimeout(next, step === sequence.length ? 1500 : 400)
      }
      setTimeout(next, 600)
    }
    run()
  }, [])

  return (
    <div style={{
      background: '#131d31',
      borderRadius: '12px',
      padding: '14px',
      width: '100%',
      maxWidth: '200px',
      border: '1px solid rgba(201,168,76,0.2)',
      fontFamily: 'Sora, sans-serif',
    }}>
      <div style={{ background: '#0B1222', borderRadius: '8px', padding: '10px 12px', marginBottom: '12px', textAlign: 'right', border: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ fontSize: '10px', color: '#8a94a8', marginBottom: '2px' }}>{sub}</div>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#C9A84C', fontFamily: 'monospace', minHeight: '26px' }}>{display}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {buttons.map((btn, i) => (
          <div key={i} style={{
            background: activeBtn === btn ? 'rgba(201,168,76,0.5)' : btn === '=' ? '#C9A84C' : ['÷','×','−','%'].includes(btn) ? 'rgba(201,168,76,0.15)' : '#1e2d47',
            borderRadius: '5px', padding: '8px 4px', textAlign: 'center',
            fontSize: '11px', fontFamily: 'monospace',
            color: btn === '=' ? '#0B1222' : ['÷','×','−','%'].includes(btn) ? '#C9A84C' : '#F8F5EE',
            fontWeight: btn === '=' ? '700' : '400',
            transform: activeBtn === btn ? 'scale(0.9)' : 'scale(1)',
            transition: 'all 0.15s ease',
          } as React.CSSProperties}>{btn}</div>
        ))}
      </div>
    </div>
  )
}
