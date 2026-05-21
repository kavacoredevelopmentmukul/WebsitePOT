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
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    roleDescription: "Sets the company's strategic direction, oversees client partnerships, and drives the vision of making elite engineering talent accessible to every growth-stage company globally.",
    bio: "Former VP of Engineering at a Fortune 500 tech firm, Arjun spent 12 years building and scaling distributed engineering teams across three continents before founding Pacific Ocean Tech in 2015. He saw first-hand how the traditional outsourcing model failed both clients and engineers, and built POT around the principle that dedicated, embedded teams outperform project-based contractors every time. Under his leadership, POT has grown from a five-person agency in Chandigarh to a trusted talent partner serving 200+ companies worldwide.",
    image: `${base}/images/team/professional-headshot-1.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Leadership",
    expertise: ["Strategic Leadership", "Distributed Teams", "Staff Augmentation", "Scaling Operations", "Enterprise Sales", "Global Expansion"],
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    roleDescription: "Leads technical vetting standards, oversees architecture reviews for enterprise engagements, and directs POT's AI/ML engineering practice.",
    bio: "An AI researcher turned technology executive, Priya brings deep expertise in machine learning systems, cloud architecture, and engineering team development. Before joining POT, she led ML infrastructure at a Series C fintech startup and published research on production RAG systems. At POT, she designed the five-stage technical vetting process that ensures only the top 3% of applicants join the talent network, and she personally oversees architecture decisions on the company's most complex enterprise engagements.",
    image: `${base}/images/team/professional-headshot-2.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Leadership",
    expertise: ["AI/ML Architecture", "Technical Vetting", "Cloud Infrastructure", "RAG Systems", "Engineering Standards", "MLOps"],
  },
  {
    id: "3",
    name: "David Chen",
    role: "Head of Global Sales",
    roleDescription: "Manages client acquisition and relationship building across the US, Europe, and APAC markets, translating technical capabilities into business solutions for CTOs and VPs of Engineering.",
    bio: "Based in San Francisco, David has spent the last decade helping technology companies build remote engineering teams across time zones. His consultative approach focuses on understanding each client's technical architecture, team culture, and growth trajectory before recommending a staffing strategy. He has personally closed and managed relationships with Fortune 500 enterprises and high-growth Series A–C startups alike, and his client retention rate consistently exceeds the company average.",
    image: `${base}/images/team/professional-headshot-3.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Sales",
    expertise: ["Enterprise Sales", "Client Success", "Remote Team Strategy", "SaaS Partnerships", "Cross-Cultural Communication", "Solution Architecture"],
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "VP of Operations",
    roleDescription: "Oversees onboarding workflows, HR compliance across jurisdictions, payroll operations, and the operational infrastructure that supports POT's globally distributed talent network.",
    bio: "Sneha is the operational backbone of Pacific Ocean Tech, responsible for ensuring that every professional placement runs smoothly from contract signing through long-term engagement. With a background in HR operations at a multinational BPO and an MBA from ISB, she has built the SOPs, compliance frameworks, and quality-assurance processes that allow POT to onboard engineers in under a week while meeting employment regulations across 12+ countries. She also leads POT's internal culture initiatives, including the mentorship programme and quarterly engineering summits.",
    image: `${base}/images/team/professional-headshot-4.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Operations",
    expertise: ["HR Compliance", "Global Payroll", "Onboarding Systems", "Process Optimisation", "Vendor Management", "Employee Retention"],
  },
  {
    id: "5",
    name: "Rahul Verma",
    role: "Lead AI Architect",
    roleDescription: "Heads the AI Engineering pod, designs production ML pipelines for client engagements, and mentors POT's growing bench of AI/ML engineers.",
    bio: "Rahul specialises in taking AI projects from prototype to production — the gap where most companies struggle. With 8 years of experience spanning NLP, computer vision, and generative AI, he has architected RAG systems, fine-tuning pipelines, and real-time inference platforms for clients ranging from Series A startups to public healthcare companies. Before POT, he was a senior ML engineer at a leading Indian AI lab, where he contributed to open-source tooling for LLM evaluation that is now used by thousands of developers.",
    image: `${base}/images/team/professional-headshot-5.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Engineering",
    expertise: ["Large Language Models", "RAG Architecture", "MLOps", "Production ML Systems", "NLP", "Model Fine-Tuning"],
  },
  {
    id: "6",
    name: "Aisha Khan",
    role: "Head of Design",
    roleDescription: "Leads the Graphics & Web Design service line, manages POT's design talent bench, and ensures every design engagement meets accessibility and brand-system standards.",
    bio: "An award-winning UX designer with a background in both agency and product environments, Aisha brings a rare combination of aesthetic sensibility and systems thinking to her work. She has led design teams serving clients across e-commerce, fintech, and SaaS, with a particular focus on accessible, conversion-optimised interfaces. At POT, she built the design pod model that allows agencies and startups to scale their creative capacity without sacrificing quality, and she personally reviews all Figma deliverables before client handoff.",
    image: `${base}/images/team/professional-headshot-6.jpg`,
    linkedin: "https://linkedin.com/in/",
    department: "Design",
    expertise: ["UI/UX Design", "Design Systems", "Accessibility (WCAG)", "Figma", "Motion Design", "Brand Strategy"],
  },
];
