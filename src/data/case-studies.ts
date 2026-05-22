const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export type CaseStudy = {
  id: string;
  featured: boolean;
  industry: string;
  client: string;
  service: string;
  challenge: string;
  challengeDetail: string;
  solutionBullets: string[];
  results: string[];
  resultsContext: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  image: string;
  title: string;
  description: string;
  category: 'Start-Up' | 'Mid-Size' | 'Enterprise';
};

/**
 * Representative case studies — anonymized at client request.
 * All metrics are illustrative of real engagement outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-retail',
    featured: true,
    category: 'Start-Up',
    industry: 'E-commerce / Retail',
    client: 'E-commerce Retailer',
    service: 'Web Development',
    title: `2× online revenue and zero peak-event downtime over 18 months`,
    description: `Dedicated full-stack pod re-architected the front end, hardened the checkout, and put performance budgets and monitoring in place.`,
    challenge: `A fast-growing retailer's storefront couldn't handle peak traffic — slow mobile loads and checkout drop-off were costing real revenue, and sales events caused outages. The legacy codebase made it nearly impossible to ship new features without breaking existing functionality.`,
    challengeDetail: `The internal team was spending the majority of their time firefighting production bugs instead of building the personalisation features and loyalty integrations that the product roadmap demanded. They needed a team that could rebuild the storefront from the ground up while keeping the existing site running during the transition.`,
    solutionBullets: [
      `Embedded a dedicated full-stack pod with headless commerce experience, fully integrated into the client's Slack and sprint cycle within days.`,
      `Rebuilt the storefront on a modern headless architecture with edge caching to dramatically improve global performance.`,
      `Designed and executed a zero-downtime migration strategy using feature flags, migrating thousands of SKUs and CMS pages without customer-facing disruption.`,
      `Implemented automated load testing in the CI pipeline that simulated peak traffic before every deployment.`,
    ],
    results: [
      `Online revenue doubled within 12 months — driven by faster pages, higher conversion, and the ability to ship promotional features in days instead of weeks`,
      `Mobile load times cut by approximately 70%, with a sharp increase in checkout completion rates`,
      `Zero downtime across multiple peak sales events over 18 consecutive months`,
      `Engineering velocity tripled — the team shipped significantly more features in the first year post-migration`,
    ],
    resultsContext: `The performance gains drove a measurable lift in organic search rankings, and the new codebase enabled the product team to run experiments that were previously impossible on the legacy platform.`,
    quote: "They gave us a platform we can actually grow on. The engineers felt like part of our team from week one.",
    quoteAuthor: 'CTO',
    quoteRole: 'CTO, E-commerce Retailer',
    image: `${base}/images/case-study-ecommerce.webp`,
  },
  {
    id: 'saas-ai-scale',
    featured: true,
    category: 'Mid-Size',
    industry: 'B2B SaaS',
    client: 'SaaS Company',
    service: 'Artificial Intelligence',
    title: `Production RAG assistant shipped ahead of a hard deadline`,
    description: `AI pod built the retrieval pipeline, evaluation harness, and guardrails end-to-end.`,
    challenge: `A SaaS company needed a production-ready retrieval assistant before a major customer event, with no spare ML capacity in-house. Their prototype hallucinated on product documentation and had no evaluation framework to measure accuracy.`,
    challengeDetail: `The requirements were exacting: accurate answers across thousands of documentation pages, citations for every response, low-latency SLA, and a human-review queue for low-confidence answers — all integrated with existing auth and per-tenant data isolation. Building this in-house would have required hiring multiple specialised ML engineers over several months.`,
    solutionBullets: [
      `Deployed an AI pod with production RAG experience within days, working embedded in the client's daily standups and code review process.`,
      `Built a hybrid retrieval pipeline combining dense vector search with sparse retrieval, with automated re-indexing on every docs deployment.`,
      `Implemented citation-grounded generation with confidence scoring — low-confidence responses routed to a human-review queue.`,
      `Designed a comprehensive eval framework integrated into CI so accuracy regressions blocked deployment.`,
    ],
    results: [
      `Delivered ahead of schedule, with time for a staged rollout to beta customers before the event`,
      `Strong answer accuracy at launch, improving further within 60 days through retrieval tuning and prompt iteration`,
      `Support ticket volume decreased meaningfully in the first 90 days as the assistant handled customer queries autonomously`,
      `Inference cost well below the initial prototype by using a tiered model strategy`,
    ],
    resultsContext: `The assistant became the most-requested feature at the event, directly contributing to multiple enterprise deals. The team transitioned to maintaining and extending the system.`,
    quote: "We went from a hallucinating prototype to a production system our enterprise customers actually trust — ahead of schedule.",
    quoteAuthor: 'Head of Product',
    quoteRole: 'Head of Product, SaaS Company',
    image: `${base}/images/case-study-ai.webp`,
  },
  {
    id: 'logistics-va',
    featured: true,
    category: 'Enterprise',
    industry: 'Logistics',
    client: 'Logistics Company',
    service: 'Virtual Assistants',
    title: `120+ leadership hours reclaimed each month`,
    description: `Dedicated VA team standardised SOPs, CRM data-quality audits, and vendor-escalation tracking.`,
    challenge: `A scaling operations team was buried in admin and CRM hygiene, leaving directors little time for strategy and making forecasts unreliable. Regional directors were spending 15+ hours per week on administrative tasks, and CRM data was only 60% complete.`,
    challengeDetail: `Incomplete CRM data led to missed follow-ups, lost deals, and unreliable pipeline reports. The team needed diverse administrative skills, timezone overlap with both US and Australian offices, and the ability to work inside Salesforce and Microsoft 365.`,
    solutionBullets: [
      `Placed a dedicated English-speaking VA team trained on Salesforce, Microsoft 365, and the company's internal SOPs, with staggered schedules covering both US and AEST business hours.`,
      `Documented and standardised 23 operational SOPs covering meeting scheduling, vendor follow-up cadences, expense report processing, and CRM data-entry protocols.`,
      `Implemented weekly CRM data-quality audits with automated reports flagging incomplete records, duplicate contacts, and stale opportunities.`,
      `Created a vendor communication tracking system that automatically escalated unresponsive vendors after 48 hours.`,
    ],
    results: [
      `Admin time per director dropped from 15+ hrs/week to under 3, freeing leadership for strategic priorities`,
      `CRM completeness rose from 60% to well into the 90s within 8 weeks, directly improving forecast accuracy`,
      `Vendor response SLAs improved markedly, reducing supply-chain delays`,
      `Full team productive within a week, with SOPs documented for long-term continuity`,
    ],
    resultsContext: `The improved CRM data alone justified the investment, influencing a major fleet expansion decision. The VA team became a permanent part of the operations structure.`,
    quote: "The POT virtual assistants have fundamentally changed how our leadership team operates.",
    quoteAuthor: 'COO',
    quoteRole: 'COO, Logistics Company',
    image: `${base}/images/case-study-va.webp`,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
