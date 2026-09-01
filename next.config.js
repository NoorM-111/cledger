/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /**
   * Canonical consolidation.
   *
   * Search Console showed two pages answering the same question, splitting the
   * signals between them so neither ranked:
   *
   *   /blog/what-is-making-tax-digital-mtd  3,235 impressions  position 75.6  4 internal links
   *   /what-is-making-tax-digital             502 impressions  position 88.8  0 internal links
   *
   * The orphan is the one with more words, and it ranks worse precisely because
   * nothing links to it. The blog URL keeps the impressions, the internal links
   * and the Article schema, so it is the survivor and the orphan 301s into it.
   *
   * `permanent: true` emits a 308 (the modern permanent redirect). Google treats
   * it as a 301 and passes the consolidated signals to the target.
   */
  async redirects() {
    return [
      {
        source: '/what-is-making-tax-digital',
        destination: '/blog/what-is-making-tax-digital-mtd',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
