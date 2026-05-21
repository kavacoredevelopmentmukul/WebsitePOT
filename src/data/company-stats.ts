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

  /** Total professionals placed / deployed.  TODO:VERIFY-WITH-DEEPAK — was "500+" in footer, "5,000+" in llms.txt and about page. Pick one real number. */
  professionalsPlaced: '500+',

  /** Countries served.  TODO:VERIFY-WITH-DEEPAK — was "12+" in StatsBand, "15+" in llms.txt. */
  countriesServed: '12+',

  /** Client retention rate.  TODO:VERIFY-WITH-DEEPAK — was "96%" in StatsBand, "94%" in llms.txt. */
  clientRetention: '96%',

  /** Skill domains covered.  TODO:VERIFY-WITH-DEEPAK */
  skillDomains: '150+',

  /** Headline cost-savings claim.  TODO:VERIFY-WITH-DEEPAK — hero says "up to 70%", llms.txt says "60% average". */
  costSavings: 'up to 70%',

  /** Average placement speed.  TODO:VERIFY-WITH-DEEPAK */
  placementSpeed: '48 hours',

  /** Global clients served.  TODO:VERIFY-WITH-DEEPAK — about page says 200+. */
  clientsServed: '200+',

  /** Phone number.  TODO:VERIFY-WITH-DEEPAK — currently placeholder +1-555 number. Replace with real NAP before launch. */
  phone: '+1 (555) 123-4567',
  phoneTel: '+15551234567',

  /** Primary email.  TODO:VERIFY-WITH-DEEPAK */
  email: 'hello@pacificoceantech.com',

  /** HQ address.  TODO:VERIFY-WITH-DEEPAK */
  address: {
    street: 'Tech Park Sector 17',
    city: 'Chandigarh',
    postalCode: '160017',
    country: 'India',
    /** Formatted single-line version */
    oneLiner: 'Tech Park Sector 17, Chandigarh 160017, India',
  },
} as const;

/** Trust-band stats shown below the hero and in the footer. */
export const trustBandStats = [
  `Established ${companyStats.establishedYear}`,
  `${companyStats.professionalsPlaced} professionals placed`,
  `${companyStats.countriesServed} countries served`,
  `${companyStats.clientRetention} client retention`,
  `${companyStats.skillDomains} skill domains`,
] as const;
