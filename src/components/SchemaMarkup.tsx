export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
        "@id": "https://www.cledger.co.uk/#organisation",
        "name": "Cledger",
        "url": "https://www.cledger.co.uk",
        "logo": "https://www.cledger.co.uk/logo.png",
        "image": "https://www.cledger.co.uk/og-image.png",
        "description": "Cledger is a UK online bookkeeping and accounting firm offering VAT returns, management accounts, payroll, and CT600 filing for UK small businesses and limited companies. Fixed monthly fees from £99/month, MTD compliant.",
        "email": "info@cledger.co.uk",
        "telephone": "+447774002712",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Jeremy Lane",
          "addressLocality": "Heckmondwike",
          "addressRegion": "West Yorkshire",
          "postalCode": "WF16 9LT",
          "addressCountry": "GB"
        },
        "areaServed": { "@type": "Country", "name": "United Kingdom" },
        "priceRange": "£99–£449 per month",
        "openingHours": "Mo-Fr 09:00-18:00",
        "slogan": "Clear books. Clear numbers. Clear future.",
        "founder": [
          { "@id": "https://www.cledger.co.uk/#noor-muhammad" },
          { "@id": "https://www.cledger.co.uk/#ali-sajjad" }
        ],
        "knowsAbout": [
          "Bookkeeping", "VAT returns", "Making Tax Digital", "Payroll", "RTI submissions",
          "Management accounts", "Corporation tax", "CT600", "Self Assessment",
          "Xero", "QuickBooks", "FRS 102", "FRS 105"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/cledger-uk",
          "https://twitter.com/CledgerUK"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Accounting Services",
          "itemListElement": [
            { "@type": "Offer", "priceCurrency": "GBP", "price": "175", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "175", "priceCurrency": "GBP", "unitText": "per month, from" }, "itemOffered": { "@type": "Service", "name": "Bookkeeping", "description": "Transaction coding, bank reconciliation and monthly trial balance on Xero or QuickBooks. From £175/month." } },
            { "@type": "Offer", "priceCurrency": "GBP", "price": "99", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "99", "priceCurrency": "GBP", "unitText": "per month, from" }, "itemOffered": { "@type": "Service", "name": "VAT Returns", "description": "MTD-compliant VAT returns prepared and filed with HMRC. From £99/month." } },
            { "@type": "Offer", "priceCurrency": "GBP", "price": "99", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "99", "priceCurrency": "GBP", "unitText": "per month, from" }, "itemOffered": { "@type": "Service", "name": "Payroll", "description": "Monthly payroll, RTI submissions, payslips, P60s and auto-enrolment. From £99/month." } },
            { "@type": "Offer", "priceCurrency": "GBP", "price": "149", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitText": "per month, from" }, "itemOffered": { "@type": "Service", "name": "Management Accounts", "description": "Monthly or quarterly P&L, balance sheet and KPI packs. From £149/month." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Year-End & Corporation Tax", "description": "Statutory accounts to FRS 102/105 and CT600 preparation and filing." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cash Flow Forecasting & Advisory", "description": "13-week cashflow forecasts, scenario modelling and tax planning." } }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.cledger.co.uk/#noor-muhammad",
        "name": "Noor Muhammad",
        "jobTitle": "Founder & Principal",
        "worksFor": { "@id": "https://www.cledger.co.uk/#organisation" },
        "description": "Part-qualified ACCA with 4+ years of UK public practice experience across VAT, corporation tax, payroll, management accounts and final accounts.",
        "knowsAbout": ["UK VAT", "Corporation tax", "CT600", "Payroll", "Management accounts", "Xero", "QuickBooks", "IRIS", "CCH"],
        "url": "https://www.cledger.co.uk/team",
        "email": "info@cledger.co.uk"
      },
      {
        "@type": "Person",
        "@id": "https://www.cledger.co.uk/#ali-sajjad",
        "name": "Ali Sajjad",
        "jobTitle": "Co-Founder",
        "worksFor": { "@id": "https://www.cledger.co.uk/#organisation" },
        "description": "Co-leads financial strategy, modelling and analytics. ACMA, MAAT, MSc Business Analytics.",
        "url": "https://www.cledger.co.uk/team"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cledger.co.uk/#website",
        "url": "https://www.cledger.co.uk",
        "name": "Cledger — Online Bookkeeping & Accounting for UK Businesses",
        "inLanguage": "en-GB",
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
