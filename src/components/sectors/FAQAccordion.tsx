'use client'
import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

/**
 * Sector pages sit on the dark navy ground; /pricing sits on the cream one. The
 * palette is a prop rather than a second component so both keep the same markup,
 * the same open/close behaviour and the same FAQPage schema. Defaults to 'dark',
 * so every existing caller renders exactly as before.
 */
type Theme = 'dark' | 'light'

const THEMES: Record<Theme, {
  card: string
  border: string
  question: string
  answer: string
  chevron: string
}> = {
  dark: {
    card: '#131d31',
    border: '1px solid rgba(201,168,76,0.15)',
    question: '#F8F5EE',
    answer: '#8a94a8',
    chevron: '#C9A84C',
  },
  light: {
    card: '#FFFFFF',
    border: '1px solid #E9E2D4',
    question: '#1A1A16',
    answer: '#5F5A50',
    chevron: '#9A7B39',
  },
}

export default function FAQAccordion({
  items,
  theme = 'dark',
}: {
  items: FAQItem[]
  theme?: Theme
}) {
  const [open, setOpen] = useState<number | null>(null)
  const t = THEMES[theme]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              background: t.card,
              border: t.border,
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
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
                color: t.question,
                lineHeight: 1.5,
              }}>
                {item.q}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={t.chevron}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
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
                  color: t.answer,
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
