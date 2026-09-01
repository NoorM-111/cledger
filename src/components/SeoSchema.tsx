import React from 'react'

const SITE = 'https://www.cledger.co.uk'
const ORG = `${SITE}/#organisation`

export interface SchemaFaq {
  q: string
  a: string
}

interface Crumb {
  name: string
  path: string // e.g. "/accountant-for-dental-practices-uk" or "" for home
}

interface SeoSchemaProps {
  /** Canonical path for this page, e.g. "/accountant-for-dental-practices-uk" */
  path: string
  /** Service name used in the Service node, e.g. "Accountant for Dental Practices UK" */
  serviceName: string
  /** Short plain-text summary for the Service node. */
  serviceDescription: string
  /**
   * FAQs to emit as FAQPage schema.
   *
   * Leave this UNSET on any page that renders <FAQAccordion>, which emits its own
   * FAQPage from the same array. Passing it here as well puts two identical FAQPage
   * entities on one page, and Google's usual response to conflicting duplicate
   * structured data is to ignore it — costing the rich result this is meant to win.
   * Set it only where FAQ content exists without the accordion component.
   */
  faqs?: SchemaFaq[]
  /** Breadcrumb trail (excluding Home, which is prepended automatically). */
  breadcrumbs?: Crumb[]
  /** Optional service type, e.g. "AccountingService". Defaults to AccountingService. */
  serviceType?: string
}

/**
 * Emits Service + BreadcrumbList JSON-LD for a landing/sector page, and FAQPage only
 * when `faqs` is passed (see the caveat on that prop).
 * Organisation, Person and WebSite schema are already emitted globally by
 * SchemaMarkup in the root layout, so this only adds page-specific nodes and
 * references the org via @id to avoid duplication.
 */
export default function SeoSchema({
  path,
  serviceName,
  serviceDescription,
  faqs,
  breadcrumbs,
  serviceType = 'AccountingService',
}: SeoSchemaProps) {
  const url = `${SITE}${path}`

  const crumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    ...(breadcrumbs ?? []).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  ]

  const graph: object[] = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: serviceName,
      description: serviceDescription,
      serviceType,
      provider: { '@id': ORG },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbItems,
    },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
