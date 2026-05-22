const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleDescription: string;
  bio: string;
  image: string;
  linkedin: string;
  department: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Daniel Hayes",
    role: "Chief Executive Officer",
    roleDescription: "Sets company strategy, owns client partnerships, and drives the mission of making elite talent accessible to growth-stage companies everywhere.",
    bio: "Spent over a decade building and scaling distributed engineering teams before founding Pacific Ocean Tech. Built the company around the belief that dedicated, embedded teams beat project-based contractors every time. Under his leadership, POT has grown from a small distributed team to a trusted talent partner for 120+ companies across 10+ countries.",
    image: `${base}/images/team/professional-headshot-1.webp`,
    linkedin: "",
    department: "Leadership",
    expertise: ["Strategic Leadership", "Distributed Teams", "Staff Augmentation", "Scaling Operations"],
  },
  {
    id: "2",
    name: "Sophie Tan",
    role: "Chief Technology Officer",
    roleDescription: "Leads technical vetting standards, architecture reviews, and the AI/ML practice.",
    bio: "Brings deep experience in machine-learning systems and cloud architecture, and designed the multi-stage technical screen that keeps the talent bar high. Oversees architecture decisions on the company's most complex enterprise engagements and directs POT's growing AI engineering practice.",
    image: `${base}/images/team/professional-headshot-2.webp`,
    linkedin: "",
    department: "Leadership",
    expertise: ["AI/ML Architecture", "Technical Vetting", "Cloud Infrastructure", "Engineering Standards"],
  },
  {
    id: "3",
    name: "Marcus Bennett",
    role: "Head of Global Sales",
    roleDescription: "Leads client acquisition and relationships across global markets, translating technical capability into business outcomes for engineering and product leaders.",
    bio: "Consultative by default — understands architecture, team culture, and growth plans before recommending a staffing approach. Has personally closed and managed relationships with enterprise and high-growth startup clients alike, and his client retention rate consistently exceeds the company average.",
    image: `${base}/images/team/professional-headshot-3.webp`,
    linkedin: "",
    department: "Sales",
    expertise: ["Enterprise Sales", "Client Success", "Remote Team Strategy", "Solution Architecture"],
  },
  {
    id: "4",
    name: "Claire Donovan",
    role: "VP of Operations",
    roleDescription: "Owns onboarding, cross-jurisdiction compliance, payroll operations, and the infrastructure behind a globally distributed bench.",
    bio: "Built the SOPs and QA processes that let new professionals onboard in under a week while meeting employment rules across 12+ countries. Leads POT's internal culture initiatives, including the mentorship programme and quarterly engineering summits.",
    image: `${base}/images/team/professional-headshot-4.webp`,
    linkedin: "",
    department: "Operations",
    expertise: ["HR Compliance", "Global Payroll", "Onboarding Systems", "Process Optimisation"],
  },
  {
    id: "5",
    name: "Adrian Cole",
    role: "Lead AI Architect",
    roleDescription: "Heads the AI engineering pod and designs production ML pipelines for client engagements.",
    bio: "Specializes in taking AI projects from prototype to production — RAG systems, fine-tuning, and real-time inference — and mentors the growing AI/ML bench. Has architected production systems for clients ranging from Series A startups to enterprise healthcare companies.",
    image: `${base}/images/team/professional-headshot-5.webp`,
    linkedin: "",
    department: "Engineering",
    expertise: ["Large Language Models", "RAG Architecture", "MLOps", "Production ML Systems", "Model Fine-Tuning"],
  },
  {
    id: "6",
    name: "Mia Larsson",
    role: "Head of Design",
    roleDescription: "Leads the design service line and the creative bench, ensuring every engagement meets accessibility and brand-system standards.",
    bio: "Combines aesthetic sense with systems thinking across e-commerce, fintech, and SaaS work. Built the design pod model that allows agencies and startups to scale their creative capacity without sacrificing quality, and personally reviews all Figma deliverables before client handoff.",
    image: `${base}/images/team/professional-headshot-6.webp`,
    linkedin: "",
    department: "Design",
    expertise: ["UI/UX Design", "Design Systems", "Accessibility (WCAG)", "Figma", "Brand Strategy"],
  },
];
