'use client'
import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              background: '#131d31',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '1.1rem 1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
              }}
            >
              <span style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#F8F5EE',
                lineHeight: 1.5,
              }}>
                {item.q}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  flexShrink: 0,
                  marginTop: '2px',
                  transition: 'transform 0.25s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div style={{ padding: '0 1.25rem 1.25rem' }}>
                <p style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.875rem',
                  color: '#8a94a8',
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
