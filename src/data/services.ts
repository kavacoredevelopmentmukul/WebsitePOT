import { Code, MonitorSmartphone, BrainCircuit, Headphones, Briefcase, Calculator, Scale, HeartPulse, Megaphone, PenTool, FileText, Cpu, HardHat, Cog } from 'lucide-astro';

export type ServiceSubcategory = {
  name: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: any; // Using any for Lucide icon components to avoid complex typing issues here
  subcategories: ServiceSubcategory[];
};

export type ServicePillar = {
  id: string;
  title: string;
  description: string;
  categories: ServiceCategory[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: "technology-development",
    title: "Technology & Development",
    description: "Build, scale, and maintain your digital products with our top-tier engineering talent.",
    categories: [
      {
        id: "software-development",
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs, built by experienced engineers.",
        icon: Code,
        subcategories: [{ name: "Full Stack Development" }, { name: "Backend Development" }, { name: "Frontend Development" }, { name: "DevOps Engineering" }, { name: "E-commerce Development" }]
      },
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        description: "AI that works where it matters—automating processes, analyzing data, and scaling decisions.",
        icon: BrainCircuit,
        subcategories: [{ name: "AI Agent Development" }, { name: "Machine Learning" }, { name: "NLP & Chatbots" }, { name: "Computer Vision" }]
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Deliver lightning-fast, mobile-ready websites with clear user journeys and seamless checkouts.",
        icon: MonitorSmartphone,
        subcategories: [{ name: "React Development" }, { name: "WordPress Development" }, { name: "Magento Development" }, { name: "Shopify Development" }, { name: "Node.js Development" }]
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Build fast, user-friendly mobile apps for iOS, Android, and cross-platform.",
        icon: MonitorSmartphone,
        subcategories: [{ name: "Flutter Development" }, { name: "iOS Development" }, { name: "Android Development" }, { name: "React Native Development" }]
      },
      {
        id: "engineering-architecture",
        title: "Engineering & Architecture",
        description: "Create lifelike renders, accurate 3D models, and net-zero structures.",
        icon: HardHat,
        subcategories: [{ name: "CAD Drafting" }, { name: "Civil Engineering" }, { name: "Mechanical Engineering" }, { name: "Electrical Engineering" }, { name: "Architectural Rendering" }]
      },
      {
        id: "embedded-development",
        title: "Embedded Development",
        description: "Develop reliable embedded systems that integrate seamlessly with hardware.",
        icon: Cpu,
        subcategories: [{ name: "IoT Development" }, { name: "Firmware Development" }, { name: "Hardware Integration" }]
      },
      {
        id: "it-support",
        title: "IT Support",
        description: "Deliver responsive IT support that keeps systems secure and minimizes downtime.",
        icon: Cog,
        subcategories: [{ name: "L1/L2 Helpdesk" }, { name: "Network Administration" }, { name: "Cloud Management" }, { name: "Cybersecurity Support" }]
      }
    ]
  },
  {
    id: "business-support",
    title: "Virtual Assistants & Business Support",
    description: "Scale your operations seamlessly with dedicated professionals handling your daily workflows.",
    categories: [
      {
        id: "virtual-assistant",
        title: "Virtual Assistants",
        description: "Hire a VA who speaks your language, works in your time zone, and manages energy-zapping tasks.",
        icon: Briefcase,
        subcategories: [{ name: "Personal VA" }, { name: "Lead Generation" }, { name: "Executive Assistant" }, { name: "Data Entry" }, { name: "Customer Support" }]
      },
      {
        id: "finance-accounting",
        title: "Finance & Accounting",
        description: "Track down top debtors, bring down reconciliation errors to zero, and gain clear reporting.",
        icon: Calculator,
        subcategories: [{ name: "Bookkeeping" }, { name: "Accounting" }, { name: "Tax Preparation" }, { name: "Financial Analysis" }, { name: "Payroll Processing" }]
      },
      {
        id: "legal-process-outsourcing",
        title: "Legal Process Outsourcing",
        description: "Legal support where it matters—contract review, compliance checks, and documentation delivered with accuracy.",
        icon: Scale,
        subcategories: [{ name: "Legal Support" }, { name: "Paralegal Specialist" }, { name: "Legal Assistant" }, { name: "Contract Review" }]
      },
      {
        id: "medical-process-outsourcing",
        title: "Medical Process Outsourcing",
        description: "Deliver accurate medical billing and coding that reduces claim denials and speeds up reimbursements.",
        icon: HeartPulse,
        subcategories: [{ name: "Medical Billing" }, { name: "Medical Coding" }, { name: "Revenue Cycle Management (RCM)" }, { name: "Healthcare Virtual Assistant" }]
      }
    ]
  },
  {
    id: "marketing-design",
    title: "Marketing, Design & Content",
    description: "Amplify your brand voice and visual identity with creative experts.",
    categories: [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Optimize your website, fix shadowbans, or reactivate suspended accounts.",
        icon: Megaphone,
        subcategories: [{ name: "SEO Specialists" }, { name: "PPC Management" }, { name: "Social Media Marketing (SMM)" }, { name: "Email Marketing" }]
      },
      {
        id: "graphic-web-design",
        title: "Graphic & Web Design",
        description: "Create pixel-perfect designs, brand identities, and stunning marketing materials.",
        icon: PenTool,
        subcategories: [{ name: "UI/UX Design" }, { name: "Graphic Design" }, { name: "Web Design" }, { name: "3D Modeling & Animation" }, { name: "Video Editing" }]
      },
      {
        id: "content-writing",
        title: "Content Writing",
        description: "Write original, research-backed content that engages your audience and boosts SEO.",
        icon: FileText,
        subcategories: [{ name: "Blog Writing" }, { name: "Copywriting" }, { name: "Technical Writing" }, { name: "Transcription Services" }]
      }
    ]
  }
];

// Helper to get all categories flat
export const allServices = servicePillars.flatMap(pillar => pillar.categories);
