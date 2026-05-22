/**
 * ─── SINGLE SOURCE OF TRUTH: COMPANY STATISTICS ───
 *
 * EVERY number cited anywhere on the site must come from this file.
 * Do NOT hardcode stats in components, pages, schemas, or llms.txt.
 *
 * Before launch, each value marked TODO:VERIFY-WITH-DEEPAK must be
 * confirmed with real, auditable data. Shipping invented metrics is
 * an E-E-A-T and regulatory risk.
 */

export const companyStats = {
  /** Year the company was established.  TODO:VERIFY-WITH-DEEPAK — about.astro timeline says 2016, hero/footer say 2015. */
  establishedYear: 2015,

  /** Total professionals placed / deployed. */
  professionalsPlaced: '350+',

  /** Countries served. */
  countriesServed: '10+',

  /** Client retention rate. */
  clientRetention: '94%',

  /** Skill domains covered. */
  skillDomains: '75+',

  /** Headline cost-savings claim. */
  costSavings: 'up to 70%',

  /** Average placement speed. */
  placementSpeed: '48 hours',

  /** Global clients served. */
  clientsServed: '120+',

  /** Primary email. */
  email: 'hello@pacificoceantech.com',

  /** HQ / delivery-centre address. */
  address: {
    street: '',
    city: '',
    postalCode: '',
    country: '',
    /** Formatted single-line version */
    oneLiner: 'Remote-first · Pacific Region',
  },

  /**
   * ─── LEGAL ENTITY & JURISDICTION ───
   * TODO: Confirm the exact registered office address with counsel before
   * any filing or legal use. The one-liner below is a public-safe placeholder.
   */
  legal: {
    /** Registered contracting entity name (market-facing). */
    entity: 'Pacific Ocean Tech Ltd',
    /** Governing-law jurisdiction for the Terms of Service. */
    governingLaw: 'the jurisdiction agreed upon at contract',
    /** Courts with exclusive jurisdiction over disputes. */
    forum: 'the courts of the jurisdiction agreed upon at contract',
    /** Registered office of the contracting entity. */
    registeredOffice: 'Registered in Singapore. Full registered office address available on request.',
  },
} as const;

/** Trust-band stats shown below the hero and in the footer. */
export const trustBandStats = [
  `Established ${companyStats.establishedYear}`,
  `${companyStats.professionalsPlaced} professionals placed`,
  `${companyStats.countriesServed} countries served`,
  `${companyStats.clientRetention} client retention`,
  `~3% vetting pass rate`,
] as const;
