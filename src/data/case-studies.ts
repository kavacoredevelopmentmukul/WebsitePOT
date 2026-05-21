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
 * TODO:VERIFY-WITH-DEEPAK — All case studies are ILLUSTRATIVE EXAMPLES.
 * Client names, metrics, and outcomes must be verified with real data and
 * client permission before launch. Shipping fabricated case studies is
 * a legal liability.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'ngx-startup',
    featured: true,
    category: 'Start-Up',
    industry: 'E-commerce / Retail',
    client: 'NGX',
    service: 'Web Development',
    title: `2× revenue growth with zero downtime over 18 months`,
    description: `Dedicated web team rebuilt NGX’s storefront for speed, stability, and conversion.`,
    challenge: `NGX had built their initial storefront on a heavily customised Shopify theme that was never designed for the traffic volumes they were now attracting. Page load times hovered around 4.2 seconds on mobile, and checkout abandonment had crept above 68% — costing the business an estimated $1.8M in lost revenue per quarter. During two major sales events in a single quarter, the site went down entirely, resulting in customer complaints flooding social media and a measurable dip in repeat-purchase rates.`,
    challengeDetail: `The underlying problem went beyond performance. The legacy codebase made it nearly impossible to ship new features without breaking existing functionality. The two-person internal team was spending 80% of their time firefighting production bugs instead of building the personalisation features and loyalty integrations that the product roadmap demanded. NGX needed a team that could rebuild the storefront from the ground up while keeping the existing site running during the transition.`,
    solutionBullets: [
      `Placed 2 senior React engineers and 1 QA specialist, all with headless commerce experience, embedded full-time in NGX’s Slack and sprint cycle within 5 business days.`,
      `Rebuilt the entire storefront on a headless architecture (Next.js + Shopify Storefront API), implementing edge caching via Cloudflare Workers to bring global TTFB under 200ms.`,
      `Designed and executed a zero-downtime migration strategy using feature flags, migrating 14,000 SKUs and 200+ CMS pages without a single hour of customer-facing disruption.`,
      `Implemented automated load testing in the CI pipeline that simulated 10× peak traffic before every deployment, eliminating launch-day surprises permanently.`,
    ],
    results: [
      `2× online revenue within 12 months — driven by faster pages, higher conversion, and the ability to ship promotional features in days instead of weeks`,
      `Page load reduced from 4.2s to 1.1s on mobile (74% improvement), directly contributing to a 34% increase in checkout completion rates`,
      `99.98% uptime over 18 consecutive months, including three Black Friday events with zero incidents`,
      `Engineering velocity tripled — the team shipped 47 features in the first year post-migration compared to 15 the year prior`,
    ],
    resultsContext: `Within six months of the migration, NGX’s CTO reported that the headless architecture had paid for itself. The performance gains alone drove a measurable lift in organic search rankings, and the new codebase enabled the product team to experiment with A/B tests that were previously impossible on the legacy platform.`,
    quote: "Pacific Ocean Tech didn’t just rebuild our site — they gave us a platform we can actually grow on. The engineers felt like part of our team from week one, and the results speak for themselves.",
    quoteAuthor: 'Sarah Lin',
    quoteRole: 'CTO, NGX',
    image: `${base}/images/case-study-ecommerce.webp`,
  },
  {
    id: 'fintech-midsize',
    featured: true,
    category: 'Mid-Size',
    industry: 'Fintech',
    client: 'FinTech Solutions',
    service: 'Mobile App Development',
    title: `300% mobile user growth, shipped 2 months early`,
    description: `Flutter squad delivered a secure cross-platform app ahead of a critical funding milestone.`,
    challenge: `FinTech Solutions had a working web platform and a loyal user base, but their mobile presence was limited to a poorly maintained iOS app built by a single part-time contractor. The app had a 2.9-star rating, frequent crashes on newer iOS versions, and zero Android coverage — meaning they were ignoring 44% of their addressable market. The mobile MVP was already four months behind the roadmap, and the board had tied the next funding round to a cross-platform launch date that was now at serious risk.`,
    challengeDetail: `The technical complexity compounded the timeline pressure. The app needed to integrate with the company’s existing Node.js backend, comply with SOC 2 requirements for financial data handling, and support biometric authentication and real-time transaction notifications. The in-house engineering team was fully committed to core banking API work and had no bandwidth to take on mobile development. Hiring locally in their market would have taken 3–4 months and cost upwards of $800K annually for a team of comparable size.`,
    solutionBullets: [
      `Deployed 4 Flutter engineers and 1 QA lead within 10 days, all working US-aligned hours (9am–6pm EST) and integrated into the existing Jira and Slack workflows.`,
      `Built a shared Flutter component library with SOC 2-compliant auth flows (biometric + MFA), encrypted local storage, and certificate pinning for all API communication.`,
      `Implemented a CI/CD pipeline with automated security scanning, screenshot testing across 12 device profiles, and staged rollouts via Firebase App Distribution.`,
      `Ran bi-weekly demo sessions with the product team and incorporated user feedback from a 200-person beta cohort before the public launch.`,
    ],
    results: [
      `300% increase in monthly active mobile users within 9 months of launch, with Android users accounting for 52% of the growth`,
      `Launched 8 weeks ahead of the revised schedule, securing the funding milestone and unlocking the company’s Series B`,
      `App Store rating improved from 2.9★ to 4.7★, with crash-free sessions exceeding 99.6%`,
      `$1.2M saved compared to the quoted cost of a local mobile development agency for equivalent scope and timeline`,
    ],
    resultsContext: `The mobile launch directly contributed to FinTech Solutions closing their Series B at a 40% higher valuation than their initial target. The POT Flutter team continues to maintain and extend the app, shipping bi-weekly releases with an average cycle time of 3.2 days from ticket to production.`,
    quote: "We were staring down a missed deadline that would have cost us our funding round. POT’s team didn’t just deliver on time — they delivered early, and the quality was better than what we’d seen from agencies charging three times the rate.",
    quoteAuthor: 'James Thornton',
    quoteRole: 'VP of Engineering, FinTech Solutions',
    image: `${base}/images/case-study-fintech.webp`,
  },
  {
    id: 'healthcorp-enterprise',
    featured: true,
    category: 'Enterprise',
    industry: 'Healthcare',
    client: 'HealthCorp Plus',
    service: 'Medical Process Outsourcing',
    title: `40% fewer claim denials, RCM cycle 12 days faster`,
    description: `15-person billing pod integrated with Epic and cleared a 90-day claims backlog.`,
    challenge: `HealthCorp Plus had just acquired three new clinics, expanding their provider network by 35% overnight. Their revenue cycle management (RCM) operation was already strained before the acquisition — claim denial rates had reached 18%, accounts receivable days exceeded 52, and a backlog of 14,000+ claims was growing by the week. The internal billing team was working overtime but could not keep pace with the volume, and the financial impact was becoming material: an estimated $3.1M in delayed or lost reimbursements per quarter.`,
    challengeDetail: `The complexity of the situation extended beyond headcount. The acquired clinics used different EHR systems that needed to be migrated to Epic, coding accuracy varied widely across providers, and payer-specific denial patterns required root-cause analysis that nobody had bandwidth to perform. HealthCorp Plus needed a team that understood medical coding, could work inside Epic, and could scale quickly without the 6-month ramp time of training new internal hires.`,
    solutionBullets: [
      `Onboarded 15 CPC-certified coders and billers with documented Epic proficiency, fully integrated into HealthCorp’s RCM workflow within 3 weeks.`,
      `Implemented a dual-QA coding accuracy protocol where every claim was reviewed by a second coder before submission, reducing first-pass error rates from 12% to under 3%.`,
      `Conducted weekly denial root-cause analysis sessions with the CFO and clinical leadership, building a denial-prevention playbook segmented by payer and procedure code.`,
      `Managed the EHR migration for the three acquired clinics, standardising coding templates and charge capture workflows across all locations.`,
    ],
    results: [
      `Denial rate dropped from 18% to 10.8% within 90 days — a 40% reduction that translated directly to faster cash collection and fewer write-offs`,
      `Average reimbursement cycle shortened by 12 days (from 52 to 40 AR days), improving quarterly cash flow by an estimated $2.4M`,
      `Cleared the entire 14,000+ claim backlog within 60 days, including appeals on 2,300 previously denied claims that recovered $890K`,
      `Coding accuracy improved to 97.2%, exceeding the industry benchmark of 95% and reducing audit risk across all payer contracts`,
    ],
    resultsContext: `Within two quarters, HealthCorp Plus’s CFO reported that the RCM operation had gone from a liability to a competitive advantage. The POT team’s denial-prevention playbook was adopted as a company-wide standard, and the partnership expanded to include credentialing and prior-authorization support for the growing provider network.`,
    quote: "Hiring and training 15 certified coders internally would have taken us six months and cost twice as much. POT had a fully operational team running inside Epic within three weeks. The impact on our cash flow was immediate and significant.",
    quoteAuthor: 'Dr. Priya Nair',
    quoteRole: 'CFO, HealthCorp Plus',
    image: `${base}/images/case-study-healthcare.webp`,
  },
  {
    id: 'saas-ai-scale',
    featured: false,
    category: 'Mid-Size',
    industry: 'B2B SaaS',
    client: 'DataPulse AI',
    service: 'Artificial Intelligence',
    title: `Production RAG assistant live in 28 days`,
    description: `LLM engineering pod shipped a customer-facing copilot with guardrails and analytics.`,
    challenge: `DataPulse AI had built a prototype chatbot for their enterprise analytics platform, but it was far from production-ready. The bot hallucinated on product documentation, fabricated feature descriptions, and had no evaluation framework to measure accuracy. With their annual customer conference 5 weeks away, the board mandated a production-quality launch — and the internal ML team of two had neither the LLM engineering depth nor the bandwidth to deliver it.`,
    challengeDetail: `The requirements were exacting: the assistant needed to answer questions accurately across 12,000 product documentation pages, provide citations for every response, meet a 2-second latency SLA, and include a human-review queue for low-confidence answers. It also needed to integrate with the existing authentication system and respect per-tenant data isolation. Building this in-house would have required hiring 3–4 specialised ML engineers — a process that typically takes 4–6 months in competitive AI talent markets.`,
    solutionBullets: [
      `Deployed 3 AI engineers with production RAG experience within 7 days, working embedded in the DataPulse engineering team’s daily standups and code review process.`,
      `Built a hybrid retrieval pipeline combining dense vector search (Pinecone) with sparse BM25 retrieval, chunked and indexed across all 12,000 documentation pages with automated re-indexing on every docs deployment.`,
      `Implemented citation-grounded generation with confidence scoring — responses below a 0.7 confidence threshold were automatically routed to a human-review queue with full context.`,
      `Designed a comprehensive eval framework with 500+ test cases across 8 intent categories, integrated into CI so accuracy regressions blocked deployment.`,
    ],
    results: [
      `Production launch in 28 days from kickoff — 7 days ahead of the conference deadline, with time for a staged rollout to beta customers`,
      `87% answer accuracy on the internal eval set at launch, improving to 92% within 60 days through retrieval tuning and prompt iteration`,
      `Support ticket volume decreased 22% in the first 90 days, with the assistant handling 1,400+ customer queries per week autonomously`,
      `Inference cost 40% below the initial OpenAI-only prototype by using a tiered model strategy (fast model for simple queries, GPT-4 for complex ones)`,
    ],
    resultsContext: `The RAG assistant became DataPulse AI’s most-requested feature at the conference, directly contributing to 3 enterprise deals worth a combined $2.1M ARR. The POT AI team transitioned to maintaining and extending the system, adding multi-language support and analytics dashboards in the following quarter.`,
    quote: "We went from a hallucinating prototype to a production system our enterprise customers actually trust — in under a month. The POT engineers brought a level of RAG expertise that would have taken us a year to build internally.",
    quoteAuthor: 'Michael Chen',
    quoteRole: 'Head of Product, DataPulse AI',
    image: `${base}/images/case-study-ai.webp`,
  },
  {
    id: 'agency-design',
    featured: false,
    category: 'Start-Up',
    industry: 'Digital Agency',
    client: 'North & Co.',
    service: 'Graphic & Web Design',
    title: `Design throughput up 3× without new local hires`,
    description: `Dedicated design pod absorbed overflow work from 8 concurrent client campaigns.`,
    challenge: `North & Co., a boutique digital agency in Sydney, was turning away projects worth an estimated $60K/month because their 4-person design team was buried under a 6-week backlog. Every new client campaign required brand exploration, UI design, motion assets, and responsive web layouts — and the team simply could not absorb any more work. Two senior designers had already flagged burnout risks, and the agency’s client NPS had dropped 12 points in the previous quarter due to missed deadlines.`,
    challengeDetail: `Hiring locally was prohibitively expensive and slow. Senior UI/UX designers in Sydney commanded $120K+ salaries, and the recruitment cycle averaged 8–10 weeks. Even if North & Co. could afford the hires, the agency’s project pipeline was seasonal — they needed the ability to scale capacity up and down without committing to permanent headcount. They needed designers who could work within existing Figma brand systems, follow established component libraries, and deliver work that was indistinguishable from the in-house team’s output.`,
    solutionBullets: [
      `Assigned 2 senior UI/UX designers and 1 motion graphics specialist, all working Australian business hours (9am–6pm AEST) and fully embedded in the agency’s Figma workspace.`,
      `Conducted a 3-day brand immersion workshop where the POT designers studied North & Co.’s 8 active client brand systems, component libraries, and design principles to ensure output consistency.`,
      `Integrated into the agency’s project management workflow (Asana), participating in weekly creative briefs and client feedback sessions as full team members.`,
      `Established a design QA process where all deliverables were reviewed against brand guidelines before client presentation, maintaining the agency’s quality standard.`,
    ],
    results: [
      `3× increase in design deliverables per month (from 12 to 38 assets), enabling the agency to accept projects they would have previously declined`,
      `Average turnaround reduced from 6 weeks to 9 business days, with urgent requests handled within 48 hours`,
      `Client NPS recovered by 18 points within one quarter, driven by faster delivery and improved communication`,
      `$380K in avoided annual salary costs compared to hiring equivalent local talent, with the flexibility to scale the pod up for peak seasons`,
    ],
    resultsContext: `Within four months, North & Co. reported that the POT design pod had become integral to their operation. The agency expanded the engagement to include a front-end developer for the following quarter, citing the seamless integration and consistent quality as the deciding factor.`,
    quote: "Our clients can’t tell the difference between work from our Sydney team and work from the POT designers — and that’s the highest compliment I can give. They’ve tripled our capacity without any of the overhead of local hiring.",
    quoteAuthor: 'Emma Walsh',
    quoteRole: 'Creative Director, North & Co.',
    image: `${base}/images/case-study-design.webp`,
  },
  {
    id: 'logistics-va',
    featured: false,
    category: 'Enterprise',
    industry: 'Logistics',
    client: 'Pacific Route Logistics',
    service: 'Virtual Assistants',
    title: `Ops team reclaimed 120+ executive hours per month`,
    description: `Executive and ops VAs standardised scheduling, vendor follow-ups, and CRM hygiene.`,
    challenge: `Pacific Route Logistics had scaled to 200+ employees across three offices, but their operations infrastructure had not kept pace. Regional directors were spending 15+ hours per week on administrative tasks — scheduling meetings across time zones, chasing vendor follow-ups, managing expense reports, and manually updating CRM records. The CRM data was only 60% complete, which meant sales forecasts were unreliable, pipeline reports were inaccurate, and leadership was making decisions based on incomplete information.`,
    challengeDetail: `The problem was compounding. Incomplete CRM data led to missed follow-ups, which led to lost deals, which led to pressure on the sales team, which led to even less time spent on data hygiene. The operations team had tried hiring a local executive assistant, but the cost ($75K+ in their market) and the breadth of skills required (CRM administration, calendar management, vendor coordination, data entry) made a single hire impractical. They needed a team with diverse administrative skills, timezone overlap with both their US and Australian offices, and the ability to work inside Salesforce and Microsoft 365.`,
    solutionBullets: [
      `Placed 4 bilingual virtual assistants (English + Hindi) trained on Salesforce, Microsoft 365, and the company’s internal SOPs, with staggered schedules covering both US and AEST business hours.`,
      `Documented and standardised 23 operational SOPs covering meeting scheduling, vendor follow-up cadences, expense report processing, and CRM data-entry protocols.`,
      `Implemented weekly CRM data-quality audits with automated reports flagging incomplete records, duplicate contacts, and stale opportunities for cleanup.`,
      `Created a vendor communication tracking system within Salesforce that automatically escalated unresponsive vendors after 48 hours.`,
    ],
    results: [
      `120+ hours per month returned to leadership — regional directors reduced their admin time from 15+ hours/week to under 3, freeing them to focus on strategic priorities`,
      `CRM data completeness improved from 60% to 94% within 8 weeks, directly improving forecast accuracy and pipeline visibility for the executive team`,
      `Vendor response SLA met 96% of the time (up from 71%), reducing supply-chain delays and improving on-time delivery metrics`,
      `Full VA team onboarded and productive within 5 business days, with SOPs documented and knowledge-base articles created for long-term continuity`,
    ],
    resultsContext: `The CFO estimated that the improved CRM data alone justified the investment, citing a 15% improvement in forecast accuracy that influenced a major fleet expansion decision. The VA team became a permanent part of the operations structure, with plans to add a fifth assistant to cover after-hours vendor communications.`,
    quote: "I used to spend half my week on emails and spreadsheets. Now I spend it on strategy and client relationships. The POT virtual assistants are not just handling tasks — they have fundamentally changed how our leadership team operates.",
    quoteAuthor: 'David Park',
    quoteRole: 'COO, Pacific Route Logistics',
    image: `${base}/images/case-study-va.webp`,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
