// Lead scoring and qualification

function qualifyLead(lead) {
  lead.score    = getLeadScore(lead);
  lead.services = getRelevantServices(lead);
  return lead;
}

function getLeadScore(lead) {
  let score = 0;

  // Has a verified email (+30)
  if (lead.email && isValidEmail(lead.email)) score += 30;

  // Has a contact name (+15)
  if (lead.firstName || lead.lastName) score += 15;

  // Has a phone number (+10)
  if (lead.phone) score += 10;

  // Has a LinkedIn URL (+10)
  if (lead.linkedinUrl) score += 10;

  // Has a website (+5)
  if (lead.website) score += 5;

  // Industry is in our target list (+10 UK, +8 US)
  const industry = (lead.industry || '').toLowerCase();
  const isUKTarget = CONFIG.UK_INDUSTRIES.some(i => industry.includes(i));
  const isUSTarget = CONFIG.US_INDUSTRIES.some(i => industry.includes(i));

  if (lead.country === 'UK' && isUKTarget) score += 10;
  if (lead.country === 'US' && isUSTarget) score += 8;

  // Company size bonus (sweet spot: 1-200 employees)
  const size = String(lead.companySize || '');
  if (size.includes('1-10') || size.includes('11-50'))  score += 8;
  if (size.includes('51-200'))                           score += 5;
  if (size.match(/^\d+$/) && parseInt(size) <= 200)      score += 5;

  // Source quality
  if (lead.source === 'Apollo.io')        score += 5;
  if (lead.source === 'Manual Import')    score += 3;

  return Math.min(score, 100);
}

function getRelevantServices(lead) {
  const country  = (lead.country || '').toUpperCase();
  const industry = (lead.industry || '').toLowerCase();

  if (country === 'US') return CONFIG.US_SERVICES.slice(0, 3);

  // UK — map industry to most relevant services
  const base = [
    'Bookkeeping & Management Accounts',
    'Corporation Tax Filing',
    'VAT Returns & Making Tax Digital (MTD)',
  ];

  if (industry.includes('hospitality') || industry.includes('food')) {
    base.push('Payroll & Auto-Enrolment', 'Cash Flow Forecasting');
  } else if (industry.includes('construction') || industry.includes('trade')) {
    base.push('CIS Returns', 'Payroll & Auto-Enrolment');
  } else if (industry.includes('retail') || industry.includes('ecommerce')) {
    base.push('VAT Returns & Making Tax Digital (MTD)', 'Cash Flow Forecasting');
  } else if (industry.includes('property') || industry.includes('real estate')) {
    base.push('Self-Assessment Tax Returns', 'Financial Advisory & Growth Planning');
  } else if (industry.includes('technology') || industry.includes('software')) {
    base.push('R&D Tax Credits', 'Financial Modelling & Forecasting');
  } else {
    base.push('Self-Assessment Tax Returns', 'Financial Advisory & Growth Planning');
  }

  return [...new Set(base)].slice(0, 4);
}

function isQualified(lead) {
  return lead.score >= CONFIG.MIN_LEAD_SCORE;
}
