export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
        "@id": "https://www.cledger.co.uk/#organisation",
        "name": "Cledger",
        "legalName": "Cledger Ltd",
        "url": "https://www.cledger.co.uk",
        "logo": "https://www.cledger.co.uk/logo.png",
        "description": "Cledger is a UK-registered online bookkeeping and accounting firm offering VAT returns, management accounts, payroll, and CT600 filing for UK small businesses and limited companies.",
        "email": "info@cledger.co.uk",
        "telephone": "+447774002712",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71-75 Shelton Street, Covent Garden",
          "addressLocality": "London",
          "addressRegion": "England",
          "postalCode": "WC2H 9JQ",
          "addressCountry": "GB"
        },
        "areaServed": ["GB"],
        "priceRange": "££",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
          "https://www.linkedin.com/company/cledger-uk",
          "https://twitter.com/CledgerUK"
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
        "name": "Cledger — Online Bookkeeping & Accounting for UK Businesses",
        "publisher": { "@id": "https://www.cledger.co.uk/#organisation" }
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
