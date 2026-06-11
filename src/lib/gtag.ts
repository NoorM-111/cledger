export const CONTACT_CONVERSION_LABEL = 'AW-18199125035/Gu6VCKPrmL0cEKu4guZD'

export function fireContactConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: CONTACT_CONVERSION_LABEL,
    })
  }
}
