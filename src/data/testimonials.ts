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
    author: "VP of Engineering",
    role: "VP of Engineering",
    company: "SaaS scale-up (Australia)",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 2,
    content: "Cut development costs significantly without dropping quality. Our dedicated developers feel like core in-house team members.",
    author: "CTO",
    role: "CTO",
    company: "FinTech (Singapore)",
    rating: 5,
    industry: "FinTech"
  },
  {
    id: 3,
    content: "Out of four candidates presented, we hired three — every one was a fit for our specialized backend needs.",
    author: "Founder",
    role: "Founder",
    company: "B2B platform (New Zealand)",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 4,
    content: "24/7 coverage changed the game for our global operations. Proactive, highly skilled DevOps support.",
    author: "Director of IT",
    role: "Director of IT",
    company: "Logistics (Global)",
    rating: 4,
    industry: "Logistics"
  },
  {
    id: 5,
    content: "Our RAG pipeline is materially faster thanks to the ML engineers we brought on.",
    author: "Lead Data Scientist",
    role: "Lead Data Scientist",
    company: "AI product company (US)",
    rating: 5,
    industry: "SaaS"
  },
];
