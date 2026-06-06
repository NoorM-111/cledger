'use client'
import { useState } from 'react'
import SalaryCalculator from '@/components/calculators/SalaryCalculator'
import CorporationTaxCalculator from '@/components/calculators/CorporationTaxCalculator'
import VatCalculator from '@/components/calculators/VatCalculator'
import SoftwareStrip from '@/components/SoftwareStrip'
import CalculatorAnimation from '@/components/animations/CalculatorAnimation'

const tabs = [
  { id: 'salary', label: 'Salary & PAYE' },
  { id: 'corporation-tax', label: 'Corporation Tax' },
  { id: 'vat', label: 'VAT Estimator' },
] as const

type TabId = (typeof tabs)[number]['id']

export default function CalculatorsClient() {
  const [active, setActive] = useState<TabId>('salary')

  return (
    <section style={{ background: '#0B1222', paddingBottom: '5rem' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <CalculatorAnimation />
        </div>
        {/* Tab bar */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          marginBottom: '2.5rem',
          paddingTop: '2.5rem',
          overflowX: 'auto',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.9rem',
                fontWeight: active === tab.id ? 600 : 500,
                color: active === tab.id ? '#C9A84C' : '#8a94a8',
                background: 'none',
                border: 'none',
                borderBottom: active === tab.id ? '2px solid #C9A84C' : '2px solid transparent',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                marginBottom: '-1px',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {active === 'salary' && <SalaryCalculator />}
        {active === 'corporation-tax' && <CorporationTaxCalculator />}
        {active === 'vat' && <VatCalculator />}
      </div>
      <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', margin: 0 }}>
          All Cledger clients are set up on MTD-compliant software from day one.
        </p>
      </div>
      <SoftwareStrip />
    </section>
  )
}
