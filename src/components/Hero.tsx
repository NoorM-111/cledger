'use client'
import React, { useState, useEffect, useRef } from 'react'

const DWELL = 5200
const STEP = 60
const TOTAL_SLIDES = 3

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const pausedRef = useRef(false)
  const currentRef = useRef(0)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    currentRef.current = current
  }, [current])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const interval = setInterval(() => {
      if (pausedRef.current) return
      setProgress(prev => {
        const next = prev + (STEP / DWELL) * 100
        if (next >= 100) {
          const nextSlide = (currentRef.current + 1) % TOTAL_SLIDES
          setCurrent(nextSlide)
          currentRef.current = nextSlide
          return 0
        }
        return next
      })
    }, STEP)
    return () => clearInterval(interval)
  }, [])

  const slideBase: React.CSSProperties = {
    position: 'absolute', inset: 0,
    padding: 'clamp(24px,3vw,38px)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    transition: 'opacity .7s ease, transform .7s cubic-bezier(.22,.61,.36,1)',
    willChange: 'opacity, transform',
  }

  const slide = (i: number): React.CSSProperties => ({
    ...slideBase,
    opacity: i === current ? 1 : 0,
    transform: i === current ? 'none' : 'translateY(10px)',
    pointerEvents: i === current ? 'auto' : 'none',
  })

  const dotStyle = (i: number): React.CSSProperties => ({
    cursor: 'pointer', height: 6, borderRadius: 6, border: 'none', padding: 0,
    transition: 'width .35s ease, background .35s ease',
    width: i === current ? 22 : 6,
    background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.22)',
  })

  const srow: React.CSSProperties = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
  }
  const srowLast: React.CSSProperties = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 0',
  }

  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(132px,16vw,176px) clamp(22px,5vw,56px) clamp(56px,7vw,80px)' }}>
      <style>{`
        @keyframes cdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.7)} }
        @keyframes clpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }
      `}</style>

      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, font: "500 11.5px 'IBM Plex Mono',monospace", letterSpacing: '1.6px', textTransform: 'uppercase', color: '#8A7A52', marginBottom: 'clamp(26px,4vw,38px)' }}>
        <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#9A7B39', animation: 'cdot 2.4s ease-in-out infinite' }} />
        Online accountants for UK small businesses
      </div>

      {/* H1 */}
      <h1 style={{ font: "400 clamp(40px,7.2vw,82px)/1.04 'Newsreader',serif", letterSpacing: '-1.4px', color: '#1A1A16', maxWidth: '13ch', margin: '0 0 clamp(22px,3vw,30px)', textWrap: 'balance' as any }}>
        Clear books. Clear numbers. <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>Clear future.</em>
      </h1>

      {/* Body */}
      <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.62, color: '#5F5A50', maxWidth: 560, margin: '0 0 clamp(34px,4vw,44px)' }}>
        Bookkeeping, VAT, payroll and full finance outsourcing for UK small businesses — delivered remotely by qualified accountants from £175/month.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap' }}>
        <a href="https://calendly.com/cledger-info/30min" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#F7F4EC', textDecoration: 'none', background: '#1A1A16', padding: '15px 28px', borderRadius: 8 }}>
          Book a free consultation →
        </a>
        <a href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#1A1A16', textDecoration: 'none', background: 'transparent', padding: '15px 28px', borderRadius: 8, border: '1px solid #D8CFBC' }}>
          See pricing
        </a>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,4vw,8px)', marginTop: 'clamp(48px,7vw,76px)', borderTop: '1px solid #E4DDCF', paddingTop: 'clamp(26px,3vw,30px)' }}>
        {[
          { num: '100+', label: 'Client accounts delivered' },
          { num: '100%', label: 'HMRC compliant' },
          { num: '£0', label: 'Setup fees' },
          { num: '1hr', label: 'Slack response, UK hours' },
        ].map(({ num, label }) => (
          <div key={label} style={{ flex: '1 1 140px' }}>
            <div style={{ font: "500 clamp(34px,4.6vw,48px)/1 'Newsreader',serif", letterSpacing: '-1px', color: '#1A1A16' }}>
              {num.replace(/[+%]/, '').replace('hr', '')}
              {num.includes('+') && <span style={{ color: '#9A7B39' }}>+</span>}
              {num.includes('%') && <span style={{ color: '#9A7B39' }}>%</span>}
              {num.includes('hr') && <span style={{ color: '#9A7B39' }}>hr</span>}
            </div>
            <div style={{ marginTop: 9, font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: '1.2px', textTransform: 'uppercase', color: '#8A8478' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Dark panel */}
      <div style={{ marginTop: 'clamp(44px,6vw,72px)', position: 'relative', border: '1px solid #24241F', borderRadius: 14, overflow: 'hidden', background: '#1A1A17', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>

        {/* Left: brand statement */}
        <div style={{ padding: 'clamp(26px,3.4vw,46px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, borderRight: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#5BBF8A' }} />
            <span style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: '1.4px', textTransform: 'uppercase', color: '#9E988A' }}>Online · Working with clients UK-wide</span>
          </div>
          <div>
            <div style={{ font: "400 clamp(24px,2.8vw,34px)/1.15 'Newsreader',serif", color: '#F7F2E6', letterSpacing: '-0.6px', marginBottom: 14 }}>
              A remote-first practice, run with the rigour of a traditional firm.
            </div>
            <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, lineHeight: 1.65, color: '#9E988A', margin: 0, maxWidth: '42ch' }}>
              Your books, deadlines and reports — managed digitally, reviewed by qualified accountants, and never more than a Slack message away.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Xero', 'QuickBooks', 'Slack', 'HMRC MTD'].map(tag => (
              <span key={tag} style={{ font: "500 11px 'Hanken Grotesk'", color: '#C7C1B2', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 30, padding: '6px 13px' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', background: '#1F1F1B', minHeight: 'clamp(264px,30vw,300px)', overflow: 'hidden' }}
        >
          {/* Slide 0 – Live overview */}
          <div style={slide(0)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", letterSpacing: '1.4px', textTransform: 'uppercase', color: '#C9A84C' }}>Live overview</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: "500 10.5px 'IBM Plex Mono',monospace", color: '#7E796D' }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#5BBF8A', animation: 'clpulse 2.2s ease-in-out infinite' }} />
                Updated today
              </span>
            </div>
            {[['Bookkeeping', '✓ Up to date'], ['VAT return (Q3)', '✓ Filed'], ['Payroll — June', '✓ Processed'], ['Management accounts', '✓ Sent']].map(([label, status], i, arr) => (
              <div key={label} style={i < arr.length - 1 ? srow : srowLast}>
                <span style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13, color: '#9E988A' }}>{label}</span>
                <span style={{ font: "500 11.5px 'IBM Plex Mono',monospace", color: '#A9C49C' }}>{status}</span>
              </div>
            ))}
          </div>

          {/* Slide 1 – Slack */}
          <div style={slide(1)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", letterSpacing: '1.4px', textTransform: 'uppercase', color: '#C9A84C' }}>#yourbusiness · cledger</span>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", color: '#7E796D' }}>09:41</span>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ flex: 'none', width: 28, height: 28, borderRadius: 7, background: '#2C2C25', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "500 11px 'Newsreader',serif", color: '#C9A84C' }}>You</span>
              <div style={{ background: '#26261F', borderRadius: '3px 10px 10px 10px', padding: '10px 13px' }}>
                <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 12.5, lineHeight: 1.5, color: '#C7C1B2', margin: 0 }}>Quick one — can I expense a client lunch?</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
              <span style={{ flex: 'none', width: 28, height: 28, borderRadius: 7, background: '#9A7B39', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "500 11px 'Newsreader',serif", color: '#1A1A17' }}>NM</span>
              <div style={{ background: '#33321F', borderRadius: '10px 3px 10px 10px', padding: '10px 13px' }}>
                <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 12.5, lineHeight: 1.5, color: '#EFE3C4', margin: 0 }}>Yes — 50% deductible if it&apos;s client entertainment. I&apos;ll log it.</p>
              </div>
            </div>
            <div style={{ marginTop: 14, font: "500 10.5px 'IBM Plex Mono',monospace", color: '#7E796D', display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#5BBF8A', animation: 'clpulse 2.2s ease-in-out infinite' }} />
              Replied in under an hour
            </div>
          </div>

          {/* Slide 2 – Deadlines */}
          <div style={slide(2)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", letterSpacing: '1.4px', textTransform: 'uppercase', color: '#C9A84C' }}>Deadlines, handled</span>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", color: '#7E796D' }}>Tracked for you</span>
            </div>
            {[
              ['VAT return', '7 Aug · on track'],
              ['Payroll RTI', '22 Jul · scheduled'],
              ['Confirmation statement', '14 Sep · on track'],
              ['Year-end accounts', '31 Dec · on track'],
            ].map(([label, date], i, arr) => (
              <div key={label} style={i < arr.length - 1 ? srow : srowLast}>
                <span style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13, color: '#9E988A' }}>{label}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: "500 10.5px 'IBM Plex Mono',monospace", color: '#C9A84C', background: 'rgba(201,168,76,0.12)', padding: '3px 9px', borderRadius: 5 }}>{date}</span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.06)', zIndex: 6 }}>
            <div style={{ height: '100%', width: `${progress.toFixed(1)}%`, background: '#C9A84C', transition: 'width .1s linear' }} />
          </div>

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, display: 'flex', gap: 7, justifyContent: 'center', zIndex: 6 }}>
            {[0, 1, 2].map(i => (
              <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => { setCurrent(i); setProgress(0) }} style={dotStyle(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
