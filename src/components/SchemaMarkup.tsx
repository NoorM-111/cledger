export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.cledger.co.uk/#organization",
        "name": "Cledger",
        "url": "https://www.cledger.co.uk",
        "logo": "https://www.cledger.co.uk/logo.png",
        "description": "ACCA-trained UK accountants offering bookkeeping, VAT returns, payroll, management accounts and corporation tax from £175/month.",
        "telephone": "+447774002712",
        "email": "info@cledger.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "areaServed": ["GB", "EU"],
        "priceRange": "££",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
          "https://www.linkedin.com/company/cledger-uk"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Accounting Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bookkeeping" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VAT Returns" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Management Accounts" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporation Tax" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cash Flow Forecasting" } },
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cledger.co.uk/#website",
        "url": "https://www.cledger.co.uk",
        "name": "Cledger",
        "description": "Online bookkeeping and accounting services for UK businesses",
        "publisher": { "@id": "https://www.cledger.co.uk/#organization" }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
