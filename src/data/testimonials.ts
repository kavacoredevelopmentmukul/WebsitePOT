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
    content: "Pacific Ocean Tech helped us scale our AI engineering team in weeks instead of months. The quality of talent is exceptional, and they seamlessly integrated into our agile workflows.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "InnovateAI",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 2,
    content: "We reduced our development costs by 60% without sacrificing an ounce of quality. Our dedicated React developers feel like core members of our in-house team.",
    author: "Michael Chang",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 3,
    content: "The vetting process is truly world-class. Out of the 4 candidates presented to us, we ended up hiring 3 because they were all perfectly suited for our specialized backend needs.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "FinTech Solutions",
    rating: 5,
    industry: "FinTech"
  },
  {
    id: 4,
    content: "24/7 IT support was a game changer for our global operations. The DevOps specialists from Pacific Ocean Tech are proactive and highly skilled.",
    author: "David Smith",
    role: "Director of IT",
    company: "Global Logistics Inc.",
    rating: 5,
    industry: "E-commerce"
  },
  {
    id: 5,
    content: "Their digital marketing team completely overhauled our SEO strategy. We saw a 300% increase in organic traffic within 6 months.",
    author: "Amanda Lewis",
    role: "CMO",
    company: "HealthTech Plus",
    rating: 5,
    industry: "Healthcare"
  },
  {
    id: 6,
    content: "The UI/UX design we received for our new mobile app was stunning. They understood our vision perfectly and delivered a modern, spatial interface.",
    author: "James Wilson",
    role: "Product Owner",
    company: "NextGen Finance",
    rating: 5,
    industry: "FinTech"
  },
  {
    id: 7,
    content: "Hiring dedicated Python developers through Pacific Ocean Tech was the best decision for our startup. Fast, reliable, and incredibly smart engineers.",
    author: "Lisa Wong",
    role: "Co-Founder",
    company: "DataSync",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 8,
    content: "We needed a team to build an internal dashboard fast. They delivered a fully functional MVP in under a month using Next.js and Tailwind.",
    author: "Robert Chen",
    role: "Operations Manager",
    company: "Retail Giant",
    rating: 5,
    industry: "E-commerce"
  },
  {
    id: 9,
    content: "The level of communication and transparency is what sets them apart. I always know exactly what my dedicated team is working on.",
    author: "Karen O'Connor",
    role: "Engineering Director",
    company: "Mediview",
    rating: 4,
    industry: "Healthcare"
  },
  {
    id: 10,
    content: "Outstanding technical talent. Our RAG pipeline is now 10x faster thanks to the ML engineers we hired through Pacific Ocean Tech.",
    author: "Tom Baker",
    role: "Lead Data Scientist",
    company: "AI Frontiers",
    rating: 5,
    industry: "SaaS"
  },
  {
    id: 11,
    content: "We use them for all our graphics and web design needs. The turnaround time is incredible, and the quality never drops.",
    author: "Jessica Day",
    role: "Marketing Director",
    company: "StyleStore",
    rating: 5,
    industry: "E-commerce"
  },
  {
    id: 12,
    content: "They migrated our entire legacy monolith to a Go microservices architecture flawlessly, with zero downtime.",
    author: "Kevin Martinez",
    role: "Chief Architect",
    company: "BankSecure",
    rating: 5,
    industry: "FinTech"
  }
];
