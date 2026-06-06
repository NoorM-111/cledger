import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.cledger.co.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.cledger.co.uk/pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.cledger.co.uk/team',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.cledger.co.uk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Existing blog posts
    {
      url: 'https://www.cledger.co.uk/blog/how-much-does-a-bookkeeper-cost-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/what-is-making-tax-digital-mtd',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/bookkeeping-for-dental-practices-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // New blog posts
    {
      url: 'https://www.cledger.co.uk/blog/vat-return-deadlines-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/how-to-pay-yourself-ltd-director',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/mtd-for-income-tax-self-employed',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/what-are-management-accounts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/corporation-tax-guide-small-business-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/xero-vs-quickbooks-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/blog/self-assessment-tax-return-guide-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Sector landing pages
    {
      url: 'https://www.cledger.co.uk/accountant-for-freelancers-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/accountant-for-limited-companies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/accountant-for-landlords-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.cledger.co.uk/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.cledger.co.uk/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
