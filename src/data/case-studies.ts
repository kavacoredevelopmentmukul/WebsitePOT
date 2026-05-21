import { serviceImages } from './service-images';

export type CaseStudy = {
  id: string;
  featured: boolean;
  industry: string;
  client: string;
  service: string;
  challenge: string;
  solution: string;
  results: string[];
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
    title: '2× revenue growth with zero downtime over 18 months',
    description: 'Dedicated web team rebuilt NGX’s storefront for speed, stability, and conversion.',
    challenge: 'Legacy Shopify theme caused 4.2s load times and checkout abandonment above 68%. Peak traffic crashed the site twice in one quarter.',
    solution: 'We placed 2 senior React developers and 1 QA specialist to rebuild the storefront headlessly, optimize CDN caching, and implement automated load testing before each campaign.',
    results: [
      '2× online revenue within 12 months',
      'Page load reduced from 4.2s to 1.1s',
      '99.98% uptime over 18 months',
      'Checkout completion up 34%',
    ],
    image: serviceImages['web-development'],
  },
  {
    id: 'fintech-midsize',
    featured: true,
    category: 'Mid-Size',
    industry: 'Fintech',
    client: 'FinTech Solutions',
    service: 'Mobile App Development',
    title: '300% mobile user growth, shipped 2 months early',
    description: 'Flutter squad delivered a secure cross-platform app ahead of a critical funding milestone.',
    challenge: 'In-house team was backlogged on core banking APIs. Mobile MVP was 4 months behind roadmap with only one part-time iOS contractor.',
    solution: 'POT deployed 4 Flutter engineers and 1 QA lead working US hours, integrating with existing Node.js services and SOC2-compliant auth flows.',
    results: [
      '300% increase in monthly active users in 9 months',
      'Launched 8 weeks ahead of revised schedule',
      'App Store rating improved to 4.7★',
      '$1.2M saved vs. local mobile agency quote',
    ],
    image: serviceImages['mobile-app-development'],
  },
  {
    id: 'healthcorp-enterprise',
    featured: true,
    category: 'Enterprise',
    industry: 'Healthcare',
    client: 'HealthCorp Plus',
    service: 'Medical Process Outsourcing',
    title: '40% fewer claim denials, RCM cycle 12 days faster',
    description: '15-person billing pod integrated with Epic and cleared a 90-day claims backlog.',
    challenge: 'Claim denial rate hit 18% and AR days exceeded 52. Internal RCM team could not scale for acquisition of 3 new clinics.',
    solution: 'We onboarded 15 certified coders and billers with Epic experience, dual QA on coding accuracy, and weekly denial root-cause reviews with their CFO.',
    results: [
      'Denial rate dropped from 18% to 10.8%',
      'Average reimbursement cycle shortened by 12 days',
      'Cleared 14,000+ backlog claims in 60 days',
      '$2.4M additional cash collected in Q1 post-launch',
    ],
    image: serviceImages['medical-process-outsourcing'],
  },
  {
    id: 'saas-ai-scale',
    featured: false,
    category: 'Mid-Size',
    industry: 'B2B SaaS',
    client: 'DataPulse AI',
    service: 'Artificial Intelligence',
    title: 'Production RAG assistant live in 28 days',
    description: 'LLM engineering pod shipped a customer-facing copilot with guardrails and analytics.',
    challenge: 'Prototype chatbot hallucinated on product docs and had no eval framework. Board required production launch before annual conference.',
    solution: '3 AI engineers built RAG over 12k documents, implemented citation requirements, latency SLAs, and a human-review queue for low-confidence answers.',
    results: [
      'Live in 28 days from kickoff',
      '87% answer accuracy on internal eval set',
      'Support ticket volume down 22% in 90 days',
      'Inference cost 40% below initial OpenAI-only prototype',
    ],
    image: serviceImages['artificial-intelligence'],
  },
  {
    id: 'agency-design',
    featured: false,
    category: 'Start-Up',
    industry: 'Digital Agency',
    client: 'North & Co.',
    service: 'Graphic & Web Design',
    title: 'Design throughput up 3× without new local hires',
    description: 'Dedicated design pod absorbed overflow work from 8 concurrent client campaigns.',
    challenge: 'Boutique agency turned away projects due to 6-week design backlog. Hiring senior designers locally quoted $120k+ each.',
    solution: 'POT assigned 2 UI/UX designers and 1 motion specialist in Australian business hours with Figma libraries aligned to agency brand systems.',
    results: [
      '3× more deliverables per month',
      'Average turnaround cut from 6 weeks to 9 days',
      'Client NPS up 18 points',
      'Saved $380k in avoided local salary costs annually',
    ],
    image: serviceImages['graphic-web-design'],
  },
  {
    id: 'logistics-va',
    featured: false,
    category: 'Enterprise',
    industry: 'Logistics',
    client: 'Pacific Route Logistics',
    service: 'Virtual Assistants',
    title: 'Ops team reclaimed 120+ executive hours per month',
    description: 'Executive and ops VAs standardized scheduling, vendor follow-ups, and CRM hygiene.',
    challenge: 'Regional directors spent 15+ hours weekly on scheduling and email. CRM data was 40% incomplete, hurting forecast accuracy.',
    solution: '4 bilingual VAs integrated with Salesforce and Microsoft 365, documented SOPs, and ran weekly data-quality audits with ops leadership.',
    results: [
      '120+ hours/month returned to leadership',
      'CRM completeness improved from 60% to 94%',
      'Vendor response SLA met 96% of the time',
      'Onboarding completed in 5 business days',
    ],
    image: serviceImages['virtual-assistant'],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
