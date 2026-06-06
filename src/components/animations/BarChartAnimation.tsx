'use client'
import { useEffect, useState } from 'react'

const data = [
  { month: 'Jan', income: 55, expense: 35 },
  { month: 'Feb', income: 70, expense: 42 },
  { month: 'Mar', income: 62, expense: 38 },
  { month: 'Apr', income: 85, expense: 50 },
  { month: 'May', income: 78, expense: 45 },
]

export default function BarChartAnimation() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    function run() {
      setAnimated(false)
      setTimeout(() => setAnimated(true), 200)
    }
    run()
    const interval = setInterval(run, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: '260px', fontFamily: 'Sora, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', padding: '0 4px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', height: '100%', justifyContent: 'flex-end' }}>
            <div style={{
              width: '100%', borderRadius: '4px 4px 0 0',
              background: 'linear-gradient(180deg, #C9A84C, #a8832a)',
              height: animated ? `${d.income}px` : '0px',
              transition: `height 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s`,
            }} />
            <div style={{
              width: '100%', borderRadius: '4px 4px 0 0',
              background: 'linear-gradient(180deg, #378ADD, #1a5fa8)',
              height: animated ? `${d.expense}px` : '0px',
              transition: `height 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1 + 0.05}s`,
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', padding: '4px 4px 0', marginTop: '2px' }}>
        {data.map(d => (
          <div key={d.month} style={{ flex: 1, textAlign: 'center', fontSize: '9px', color: '#8a94a8' }}>{d.month}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px' }}>
        <span style={{ fontSize: '10px', color: '#8a94a8' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: '#C9A84C', marginRight: '4px', verticalAlign: 'middle' }} />Income</span>
        <span style={{ fontSize: '10px', color: '#8a94a8' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: '#378ADD', marginRight: '4px', verticalAlign: 'middle' }} />Expenses</span>
      </div>
    </div>
  )
}
