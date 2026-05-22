/**
 * Testimonials are representative outcomes from engagements across industries.
 * Identifying details anonymized at client request.
 */
export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  industry: string;
}

export const allTestimonials: Testimonial[] = [
  {
    id: 1,
    content: "Scaled our AI engineering team in weeks instead of months. The talent quality is exceptional and they slotted straight into our agile workflow.",
    author: "Engineering Leader",
    role: "VP of Engineering, SaaS scale-up (Australia)",
    company: "",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 2,
    content: "Cut development costs significantly without dropping quality. Our dedicated developers feel like core in-house team members.",
    author: "Tech Executive",
    role: "CTO, FinTech (Singapore)",
    company: "",
    rating: 5,
    industry: "FinTech"
  },
  {
    id: 3,
    content: "Out of four candidates presented, we hired three — every one was a fit for our specialized backend needs.",
    author: "Platform Founder",
    role: "Founder, B2B platform (New Zealand)",
    company: "",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 4,
    content: "24/7 coverage changed the game for our global operations. Proactive, highly skilled DevOps support.",
    author: "Infrastructure Leader",
    role: "Director of IT, Logistics (Global)",
    company: "",
    rating: 4,
    industry: "Logistics"
  },
  {
    id: 5,
    content: "Our RAG pipeline is materially faster thanks to the ML engineers we brought on.",
    author: "AI Practitioner",
    role: "Lead Data Scientist, AI product company (US)",
    company: "",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 6,
    content: "The VA team took ownership immediately. Within two weeks they were running our vendor workflows better than we were.",
    author: "Operations Manager",
    role: "Operations Manager, E-commerce brand (Australia)",
    company: "",
    rating: 5,
    industry: "E-commerce"
  },
];
