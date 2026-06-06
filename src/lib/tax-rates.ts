// Source: https://commonslibrary.parliament.uk/research-briefings/cbp-10618/
// Source: https://www.gov.uk/guidance/rates-and-allowances-national-insurance-contributions
// Source: https://www.gov.uk/guidance/corporation-tax-rates
// Source: https://www.gov.uk/vat-rates

export const TAX_RATES = {
  incomeTax: {
    // England, Wales, Northern Ireland 2026/27
    engWalesNI: {
      personalAllowance: 12570,
      basicRateLimit: 50270,
      higherRateLimit: 125140,
      basicRate: 0.20,
      higherRate: 0.40,
      additionalRate: 0.45,
      taperStart: 100000,
      taperEnd: 125140,
    },
    // Scotland 2026/27
    scotland: {
      personalAllowance: 12570,
      starterRateLimit: 14732,
      basicRateLimit: 25688,
      intermediateRateLimit: 43662,
      higherRateLimit: 75000,
      advancedRateLimit: 125140,
      rates: {
        starter: 0.19,
        basic: 0.20,
        intermediate: 0.21,
        higher: 0.42,
        advanced: 0.45,
        top: 0.48,
      },
      taperStart: 100000,
      taperEnd: 125140,
    },
  },
  nationalInsurance: {
    // Employee Class 1 2026/27
    primaryThreshold: 12570,
    upperEarningsLimit: 50270,
    lowerRate: 0.08,
    upperRate: 0.02,
  },
  corporationTax: {
    smallProfitsRate: 0.19,
    mainRate: 0.25,
    lowerLimit: 50000,
    upperLimit: 250000,
    marginalReliefFraction: 3 / 200, // 0.015
  },
  vat: {
    standardRate: 0.20,
    reducedRate: 0.05,
    zeroRate: 0,
    registrationThreshold: 90000,
  },
}
