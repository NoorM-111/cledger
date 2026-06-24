'use client'
import { useState } from 'react'
import SalaryCalculator from '@/components/calculators/SalaryCalculator'
import CorporationTaxCalculator from '@/components/calculators/CorporationTaxCalculator'
import VatCalculator from '@/components/calculators/VatCalculator'

const tabs = [
  { id: 'vat', label: 'VAT calculator' },
  { id: 'corporation-tax', label: 'Corporation Tax' },
  { id: 'salary', label: 'Take-home pay' },
] as const

type TabId = (typeof tabs)[number]['id']

export default function CalculatorsClient() {
  const [active, setActive] = useState<TabId>('vat')

  return (
    <section style={{ background: '#F7F4EC', paddingBottom: '5rem' }}>
      <div className="wrap">
        {/* Tab bar */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E9E2D4',
          marginBottom: '2.5rem',
          paddingTop: '2.5rem',
          overflowX: 'auto',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '0.9rem',
                fontWeight: active === tab.id ? 600 : 500,
                color: active === tab.id ? '#1A1A16' : '#5F5A50',
                background: 'none',
                border: 'none',
                borderBottom: active === tab.id ? '2px solid #1A1A16' : '2px solid transparent',
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

        {active === 'vat' && <VatCalculator />}
        {active === 'corporation-tax' && <CorporationTaxCalculator />}
        {active === 'salary' && <SalaryCalculator />}
      </div>

      <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <p style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: '0.875rem',
          color: '#5F5A50',
          margin: '0 0 16px',
        }}>
          Estimates only, for guidance. Not a substitute for professional advice.
        </p>
        <a
          href="https://calendly.com/cledger-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: '8px',
            background: '#1A1A16',
            color: '#F7F4EC',
            textDecoration: 'none',
          }}
        >
          Book a free call →
        </a>
      </div>
    </section>
  )
}
