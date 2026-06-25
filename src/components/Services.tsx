'use client'
import React, { useState } from 'react'

const services = [
  {
    num: '01',
    svc: 'Bookkeeping',
    title: 'Bookkeeping',
    desc: 'Real-time transaction coding, bank reconciliations and monthly trial balances so your books are always up to date.',
    bullets: ['Transaction coding & categorisation', 'Bank & credit card reconciliation', 'Monthly trial balance', 'Xero / QuickBooks management'],
  },
  {
    num: '02',
    svc: 'VAT & Tax',
    title: 'VAT & Tax Returns',
    desc: 'MTD-compliant VAT returns prepared and filed on time, every time. Full scheme analysis to keep you compliant.',
    bullets: ['MTD VAT returns', 'Scheme selection (standard, flat rate, cash)', 'HMRC correspondence', 'VAT health checks'],
  },
  {
    num: '03',
    svc: 'Payroll',
    title: 'Payroll Administration',
    desc: 'End-to-end payroll processing, RTI submissions and auto-enrolment management for teams of any size.',
    bullets: ['Monthly payroll processing', 'RTI submissions to HMRC', 'Payslips & P60s', 'Auto-enrolment compliance'],
  },
  {
    num: '04',
    svc: 'Mgmt Accounts',
    title: 'Management Accounts',
    desc: 'Monthly or quarterly packs that give you the P&L, balance sheet and KPIs to make confident decisions.',
    bullets: ['P&L and balance sheet', 'Budget vs actual analysis', 'KPI dashboards', 'Delivered within 10 working days'],
  },
  {
    num: '05',
    svc: 'Corp Tax',
    title: 'Year-End & Corporation Tax',
    desc: 'Statutory accounts prepared to FRS 102 / FRS 105 and CT600 filed accurately and on time.',
    bullets: ['Statutory accounts (FRS 102/105)', 'CT600 preparation & filing', 'Capital allowances', 'Director loan accounts'],
  },
  {
    num: '06',
    svc: 'Advisory',
    title: 'Cashflow & Advisory',
    desc: 'Rolling 13-week cashflow forecasts, scenario modelling and strategic advice to keep your business on track.',
    bullets: ['13-week cashflow forecasts', 'Scenario & growth modelling', 'Tax planning', 'Monthly finance calls'],
  },
]

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,120px) clamp(22px,5vw,56px)' }}>
      <div style={{ marginBottom: 'clamp(40px,5vw,56px)' }}>
        <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>What We Do</div>
        <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: 0, textWrap: 'balance' as any }}>
          Services built for <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>UK businesses</em>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(14px,1.6vw,20px)' }}>
        {services.map(({ num, svc, title, desc, bullets }) => (
          <div
            key={num}
            onMouseEnter={() => setHovered(num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === num ? '#1A1A16' : '#FFFFFF',
              border: '1px solid #E9E2D4',
              borderRadius: 12,
              padding: 'clamp(24px,2.8vw,32px)',
              transition: 'background 0.18s, border-color 0.18s',
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
              <span style={{ font: "400 32px/1 'Newsreader',serif", color: hovered === num ? '#C9A84C' : '#9A7B39' }}>{num}</span>
              <span style={{ font: "500 10px 'IBM Plex Mono',monospace", letterSpacing: '0.8px', textTransform: 'uppercase', color: hovered === num ? '#C9A84C' : '#B0A892', background: hovered === num ? 'rgba(201,168,76,0.12)' : '#F4F0E8', borderRadius: 20, padding: '4px 10px' }}>{svc}</span>
            </div>
            <h3 style={{ font: "500 19px/1.25 'Newsreader',serif", color: hovered === num ? '#F7F4EC' : '#1A1A16', margin: '0 0 10px' }}>{title}</h3>
            <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, lineHeight: 1.62, color: hovered === num ? '#BDB8A8' : '#6B675C', margin: '0 0 16px' }}>{desc}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
              {bullets.map(b => (
                <li key={b} style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13, color: hovered === num ? '#BDB8A8' : '#6B675C', display: 'flex', gap: 8 }}>
                  <span style={{ color: hovered === num ? '#C9A84C' : '#9A7B39', flexShrink: 0 }}>—</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
