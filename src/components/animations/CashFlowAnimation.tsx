'use client'
import { useEffect, useState } from 'react'

export default function CashFlowAnimation() {
  const [inflow, setInflow] = useState(0)
  const [outflow, setOutflow] = useState(0)
  const [net, setNet] = useState(0)
  const [inflowW, setInflowW] = useState(0)
  const [outflowW, setOutflowW] = useState(0)
  const [netW, setNetW] = useState(0)

  useEffect(() => {
    function run() {
      setInflow(0); setOutflow(0); setNet(0)
      setInflowW(0); setOutflowW(0); setNetW(0)

      setTimeout(() => {
        setInflowW(88)
        let n = 0
        const t = setInterval(() => { n += 600; if (n >= 42000) { setInflow(42000); clearInterval(t) } else setInflow(n) }, 30)
      }, 300)

      setTimeout(() => {
        setOutflowW(62)
        let n = 0
        const t = setInterval(() => { n += 400; if (n >= 28500) { setOutflow(28500); clearInterval(t) } else setOutflow(n) }, 30)
      }, 900)

      setTimeout(() => {
        setNetW(32)
        let n = 0
        const t = setInterval(() => { n += 200; if (n >= 13500) { setNet(13500); clearInterval(t) } else setNet(n) }, 30)
      }, 1600)
    }
    run()
    const interval = setInterval(run, 5500)
    return () => clearInterval(interval)
  }, [])

  const Bar = ({ label, width, amount, color }: { label: string; width: number; amount: number; color: string }) => (
    <div style={{ marginBottom: '12px', fontFamily: 'Sora, sans-serif' }}>
      <div style={{ fontSize: '10px', color: '#8a94a8', marginBottom: '4px' }}>{label}</div>
      <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: '4px', background: color, width: `${width}%`, transition: 'width 1.2s ease' }} />
      </div>
      <div style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: '600', color, marginTop: '3px' }}>£{amount.toLocaleString()}</div>
    </div>
  )

  return (
    <div style={{ width: '100%', maxWidth: '260px' }}>
      <Bar label="Cash inflow" width={inflowW} amount={inflow} color="#C9A84C" />
      <Bar label="Cash outflow" width={outflowW} amount={outflow} color="#378ADD" />
      <Bar label="Net position" width={netW} amount={net} color="#22c55e" />
    </div>
  )
}
