'use client'

const CALENDLY_URL = 'https://calendly.com/cledger-info/30min'

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (o: { url: string }) => void }
  }
}

export default function CalendlyButton({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  const open = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button className={className} style={style} onClick={open}>
      {children}
    </button>
  )
}
