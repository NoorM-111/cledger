// Lead discovery — Companies House (UK) + Apollo.io + Hunter.io

// ─── Main entry point ─────────────────────────────────────────────────────────

function findLeads(needed) {
  const leads = [];
  const seen  = new Set();

  // Try Apollo first (has contact details + email)
  try {
    const apolloLeads = findLeadsViaApollo(needed);
    apolloLeads.forEach(l => {
      if (!seen.has(l.email) && !seen.has(l.company)) {
        seen.add(l.email);
        seen.add(l.company);
        leads.push(l);
      }
    });
    logInfo(`Apollo returned ${apolloLeads.length} raw leads`);
  } catch (e) {
    logWarn(`Apollo search failed: ${e.message}`);
  }

  // Top up with Companies House if still short
  if (leads.length < needed) {
    try {
      const chLeads = findUKLeadsViaCompaniesHouse(needed - leads.length);
      chLeads.forEach(l => {
        if (!seen.has(l.company)) {
          seen.add(l.company);
          leads.push(l);
        }
      });
      logInfo(`Companies House returned ${chLeads.length} raw leads`);
    } catch (e) {
      logWarn(`Companies House search failed: ${e.message}`);
    }
  }

  return leads;
}

// ─── Apollo.io ────────────────────────────────────────────────────────────────

function findLeadsViaApollo(count) {
  const results = [];

  // Run UK + US searches in parallel batches
  const searches = [
    { country: 'United Kingdom', industries: CONFIG.UK_INDUSTRIES, region: 'UK' },
    { country: 'United States',  industries: CONFIG.US_INDUSTRIES, region: 'US' },
  ];

  searches.forEach(search => {
    const batch = Math.ceil(count / 2);
    const leads = apolloPeopleSearch(search.country, search.industries, batch, search.region);
    results.push(...leads);
  });

  return results;
}

function apolloPeopleSearch(country, industries, perPage, region) {
  const url  = 'https://api.apollo.io/v1/mixed_people/search';
  const body = {
    api_key:              CONFIG.APOLLO_API_KEY,
    q_organization_industry_tag_ids: [],
    page:                 1,
    per_page:             Math.min(perPage, 25),
    person_titles:        [
      'owner', 'director', 'managing director', 'founder', 'co-founder',
      'ceo', 'md', 'head of finance', 'finance manager', 'operations manager',
    ],
    organization_locations: [country],
    q_organization_keyword_tags: industries.slice(0, 5),
    contact_email_status: ['verified', 'likely to engage'],
  };

  const options = {
    method:      'POST',
    contentType: 'application/json',
    payload:     JSON.stringify(body),
    muteHttpExceptions: true,
  };

  const resp = fetchWithRetry(url, options);
  const data = parseJSON(resp);
  if (!data || !data.people) return [];

  return data.people
    .filter(p => p.email && isValidEmail(p.email))
    .map(p => ({
      id:           generateLeadId(),
      company:      (p.organization && p.organization.name) || '',
      firstName:    p.first_name || '',
      lastName:     p.last_name  || '',
      email:        sanitizeEmail(p.email),
      phone:        (p.phone_numbers && p.phone_numbers[0] && p.phone_numbers[0].raw_number) || '',
      businessType: 'Limited Company',
      industry:     (p.organization && p.organization.industry) || '',
      country:      region,
      city:         (p.city) || (p.organization && p.organization.city) || '',
      companySize:  (p.organization && p.organization.estimated_num_employees) || '',
      website:      (p.organization && p.organization.website_url) || '',
      linkedinUrl:  p.linkedin_url || '',
      source:       'Apollo.io',
    }));
}

// ─── Companies House (UK) ─────────────────────────────────────────────────────

function findUKLeadsViaCompaniesHouse(count) {
  const results = [];
  const terms   = CONFIG.UK_SEARCH_TERMS;
  const perTerm = Math.ceil(count / terms.length);

  for (let i = 0; i < terms.length && results.length < count; i++) {
    const companies = searchCompaniesHouse(terms[i], perTerm);
    companies.forEach(c => results.push(c));
    Utilities.sleep(300); // respect rate limit
  }

  return results.slice(0, count);
}

function searchCompaniesHouse(query, maxResults) {
  const url = `https://api.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(query)}&items_per_page=${maxResults}`;

  const options = {
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(CONFIG.COMPANIES_HOUSE_API_KEY + ':'),
    },
    muteHttpExceptions: true,
  };

  const resp = fetchWithRetry(url, options);
  const data = parseJSON(resp);
  if (!data || !data.items) return [];

  return data.items
    .filter(c => c.company_status === 'active')
    .map(c => {
      const addr = c.registered_office_address || {};
      const lead = {
        id:           generateLeadId(),
        company:      titleCase(c.title || ''),
        firstName:    '',
        lastName:     '',
        email:        '',
        phone:        '',
        businessType: c.company_type || 'Limited Company',
        industry:     guessIndustryFromName(c.title || ''),
        country:      'UK',
        city:         titleCase(addr.locality || addr.region || ''),
        companySize:  '',
        website:      '',
        linkedinUrl:  '',
        source:       'Companies House',
        companyNumber: c.company_number,
      };

      // Try to find an email via Hunter.io if we have a website
      if (lead.company) {
        const hunterResult = findEmailViaHunter(lead.company, '', '');
        if (hunterResult) {
          lead.email       = hunterResult.email;
          lead.firstName   = hunterResult.firstName || '';
          lead.lastName    = hunterResult.lastName  || '';
          lead.website     = hunterResult.domain    || '';
        }
      }

      return lead;
    })
    .filter(l => l.email && isValidEmail(l.email));
}

function guessIndustryFromName(name) {
  const n = name.toLowerCase();
  if (n.includes('tech') || n.includes('software') || n.includes('digital')) return 'Technology';
  if (n.includes('construct') || n.includes('build'))                         return 'Construction';
  if (n.includes('restaurant') || n.includes('food') || n.includes('cafe'))   return 'Food & Beverage';
  if (n.includes('retail') || n.includes('shop'))                             return 'Retail';
  if (n.includes('consult'))                                                   return 'Consulting';
  if (n.includes('property') || n.includes('estate'))                         return 'Property';
  if (n.includes('recruit') || n.includes('staffing'))                        return 'Recruitment';
  if (n.includes('health') || n.includes('care') || n.includes('medical'))    return 'Healthcare';
  if (n.includes('market'))                                                    return 'Marketing';
  if (n.includes('logistic') || n.includes('transport'))                      return 'Logistics';
  return 'Professional Services';
}

// ─── Hunter.io email finder ───────────────────────────────────────────────────

function findEmailViaHunter(company, firstName, lastName) {
  // Try domain search first
  const domain = guessDomainFromCompany(company);
  if (!domain) return null;

  const url = `https://api.hunter.io/v2/domain-search?domain=${domain}&limit=1&api_key=${CONFIG.HUNTER_API_KEY}`;
  const resp = fetchWithRetry(url);
  const data = parseJSON(resp);

  if (data && data.data && data.data.emails && data.data.emails.length > 0) {
    const contact = data.data.emails[0];
    return {
      email:     sanitizeEmail(contact.value),
      firstName: contact.first_name || '',
      lastName:  contact.last_name  || '',
      domain:    `https://${domain}`,
    };
  }
  return null;
}

function guessDomainFromCompany(company) {
  if (!company) return null;
  const clean = company.toLowerCase()
    .replace(/\s+ltd\.?$/i, '')
    .replace(/\s+limited\.?$/i, '')
    .replace(/\s+plc\.?$/i, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
  return clean ? `${clean}.co.uk` : null;
}

// ─── Manual CSV Import helper ─────────────────────────────────────────────────
// Paste a CSV of leads into a sheet tab called "Import Queue", then call this.

function importFromQueue() {
  const ss    = getSpreadsheet();
  const queue = ss.getSheetByName('Import Queue');
  if (!queue) {
    logWarn('No "Import Queue" sheet found');
    return 0;
  }

  const data    = queue.getDataRange().getValues();
  let imported  = 0;

  // Expected columns: Company, First Name, Last Name, Email, Phone,
  //                   Industry, Country, City, Website, LinkedIn URL
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0] || !row[3]) continue; // skip if no company or email

    const lead = {
      id:          generateLeadId(),
      company:     titleCase(String(row[0])),
      firstName:   titleCase(String(row[1])),
      lastName:    titleCase(String(row[2])),
      email:       sanitizeEmail(String(row[3])),
      phone:       String(row[4]) || '',
      businessType:'Limited Company',
      industry:    String(row[5]) || '',
      country:     String(row[6]) || 'UK',
      city:        String(row[7]) || '',
      website:     String(row[8]) || '',
      linkedinUrl: String(row[9]) || '',
      source:      'Manual Import',
    };

    if (!isValidEmail(lead.email))  continue;
    if (emailExists(lead.email))    continue;
    if (companyExists(lead.company)) continue;

    const scored = qualifyLead(lead);
    if (scored.score < CONFIG.MIN_LEAD_SCORE) continue;

    appendLead(scored);
    imported++;
  }

  // Clear the queue after import
  if (data.length > 1) queue.deleteRows(2, data.length - 1);

  logInfo(`Imported ${imported} leads from Import Queue`);
  return imported;
}
