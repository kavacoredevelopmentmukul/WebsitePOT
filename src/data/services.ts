import { Code, MonitorSmartphone, BrainCircuit, Headphones, Briefcase, Calculator, Scale, HeartPulse, Megaphone, PenTool, FileText, Cpu, HardHat, Cog } from 'lucide-astro';
import { serviceImages } from './service-images';

export type ServiceSubcategory = {
  name: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
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
        image: serviceImages['software-development'],
        description: "Build production-grade applications with dedicated engineers skilled in Python, Java, Node.js, React, and cloud-native architectures. Our teams handle greenfield MVPs, API platforms, and legacy modernization with CI/CD pipelines, code reviews, and sprint-based delivery built in. Clients typically onboard full-stack or specialized squads within 1–2 weeks and ship features faster than fragmented freelance hiring. You retain full IP ownership, direct management, and transparent engagement models.",
        icon: Code,
        subcategories: [{ name: "Full Stack Development" }, { name: "Backend Development" }, { name: "Frontend Development" }, { name: "DevOps Engineering" }, { name: "E-commerce Development" }]
      },
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        image: serviceImages['artificial-intelligence'],
        description: "Deploy AI that drives measurable outcomes—LLM integrations, predictive models, intelligent agents, and workflow automation tailored to your stack. Our specialists work across Python, PyTorch, TensorFlow, LangChain, and cloud ML services with rigorous evaluation, guardrails, and MLOps practices. Teams deliver POCs in weeks and production pipelines that reduce manual work and improve decision quality. From RAG chatbots to computer vision, you get vetted talent who ship safely, not just demos.",
        icon: BrainCircuit,
        subcategories: [{ name: "AI Agent Development" }, { name: "Machine Learning" }, { name: "NLP & Chatbots" }, { name: "Computer Vision" }]
      },
      {
        id: "web-development",
        title: "Web Development",
        image: serviceImages['web-development'],
        description: "Launch fast, accessible websites and web apps with engineers fluent in React, Next.js, WordPress, Shopify, Magento, and Node.js backends. We focus on Core Web Vitals, responsive layouts, SEO-ready structure, and conversion-oriented UX from day one. Dedicated teams integrate with your design system, analytics, and payment flows so launches stay on schedule. Outcomes include lower bounce rates, faster page loads, and maintainable codebases your in-house team can extend.",
        icon: MonitorSmartphone,
        subcategories: [{ name: "React Development" }, { name: "WordPress Development" }, { name: "Magento Development" }, { name: "Shopify Development" }, { name: "Node.js Development" }]
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        image: serviceImages['mobile-app-development'],
        description: "Ship polished iOS, Android, and cross-platform apps with Flutter and React Native developers who understand App Store guidelines, offline modes, and secure API integration. Our teams build onboarding flows, push notifications, in-app payments, and analytics instrumentation aligned to your product roadmap. QA and performance tuning are included so releases stay stable under real-world load. Clients scale user bases with maintainable code and faster release cycles.",
        icon: MonitorSmartphone,
        subcategories: [{ name: "Flutter Development" }, { name: "iOS Development" }, { name: "Android Development" }, { name: "React Native Development" }]
      },
      {
        id: "engineering-architecture",
        title: "Engineering & Architecture",
        image: serviceImages['engineering-architecture'],
        description: "Bring complex builds to life with CAD drafters, civil, mechanical, and electrical engineers plus architectural visualization specialists. Teams deliver accurate drawings, BIM-ready models, structural calculations, and photorealistic renders that speed approvals and stakeholder buy-in. We align outputs to local codes, sustainability goals, and fabrication constraints so designs move from concept to construction with fewer revisions. Ideal for AEC firms, manufacturers, and property developers scaling technical output.",
        icon: HardHat,
        subcategories: [{ name: "CAD Drafting" }, { name: "Civil Engineering" }, { name: "Mechanical Engineering" }, { name: "Electrical Engineering" }, { name: "Architectural Rendering" }]
      },
      {
        id: "embedded-development",
        title: "Embedded Development",
        image: serviceImages['embedded-development'],
        description: "Develop reliable firmware and IoT systems in C, C++, Rust, and RTOS environments with engineers who understand hardware bring-up, sensor integration, and OTA updates. Our teams prototype boards, optimize power consumption, and implement secure device-to-cloud pipelines. You get documentation, test harnesses, and manufacturing-ready releases that reduce field failures. Perfect for hardware startups and industrial IoT scaling connected products.",
        icon: Cpu,
        subcategories: [{ name: "IoT Development" }, { name: "Firmware Development" }, { name: "Hardware Integration" }]
      },
      {
        id: "it-support",
        title: "IT Support",
        image: serviceImages['it-support'],
        description: "Keep infrastructure secure and users productive with L1/L2 helpdesk, network administration, cloud management, and cybersecurity support professionals. Teams monitor tickets, patch systems, manage Microsoft 365 or Google Workspace, and enforce access policies around the clock. SLAs focus on faster resolution times, fewer outages, and clear escalation paths to your internal IT leads. Scale support capacity without hiring full-time headcount in expensive markets.",
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
        image: serviceImages['virtual-assistant'],
        description: "Hire bilingual VAs who manage calendars, inbox triage, CRM updates, travel booking, and executive support in your time zone. Our assistants are trained on tools like HubSpot, Salesforce, Slack, and Notion with documented SOPs and daily reporting. Teams free founders and operators from repetitive work so they can focus on revenue and strategy. Outcomes include faster response times, cleaner pipelines, and consistent back-office execution.",
        icon: Briefcase,
        subcategories: [{ name: "Personal VA" }, { name: "Lead Generation" }, { name: "Executive Assistant" }, { name: "Data Entry" }, { name: "Customer Support" }]
      },
      {
        id: "finance-accounting",
        title: "Finance & Accounting",
        image: serviceImages['finance-accounting'],
        description: "Strengthen financial control with bookkeepers, accountants, and analysts experienced in QuickBooks, Xero, NetSuite, and multi-entity reporting. Specialists handle AP/AR, reconciliations, payroll, tax prep support, and management dashboards your leadership trusts. We reduce month-close delays, improve cash visibility, and flag anomalies early. Dedicated finance talent integrates with your CPA or controller while maintaining audit-ready records.",
        icon: Calculator,
        subcategories: [{ name: "Bookkeeping" }, { name: "Accounting" }, { name: "Tax Preparation" }, { name: "Financial Analysis" }, { name: "Payroll Processing" }]
      },
      {
        id: "legal-process-outsourcing",
        title: "Legal Process Outsourcing",
        image: serviceImages['legal-process-outsourcing'],
        description: "Accelerate legal operations with paralegals and contract specialists who review NDAs, MSAs, employment agreements, and compliance documentation under attorney oversight. Teams organize discovery, maintain clause libraries, and track obligations so nothing slips through renewals. Outputs are consistent redlines, faster turnaround, and lower outside counsel spend on routine work. Ideal for in-house legal teams and law firms scaling throughput.",
        icon: Scale,
        subcategories: [{ name: "Legal Support" }, { name: "Paralegal Specialist" }, { name: "Legal Assistant" }, { name: "Contract Review" }]
      },
      {
        id: "medical-process-outsourcing",
        title: "Medical Process Outsourcing",
        image: serviceImages['medical-process-outsourcing'],
        description: "Improve revenue cycle performance with certified medical billers, coders, and healthcare VAs fluent in ICD-10, CPT, HIPAA, and major EHR platforms. Teams reduce claim denials, accelerate reimbursements, and maintain clean patient scheduling and prior-auth workflows. Dedicated pods integrate with your existing billing rules and compliance policies. Practices and hospitals gain scalable back-office capacity without compromising accuracy.",
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
        image: serviceImages['digital-marketing'],
        description: "Grow qualified traffic and pipeline with SEO, PPC, social, and email marketers who work in GA4, Search Console, Meta Ads, Google Ads, and marketing automation platforms. Campaigns are built around ICP targeting, creative testing, and CAC/LTV reporting your leadership can act on. Teams optimize landing pages, fix tracking gaps, and iterate weekly on performance data. Expect stronger rankings, lower CPL, and consistent lead flow.",
        icon: Megaphone,
        subcategories: [{ name: "SEO Specialists" }, { name: "PPC Management" }, { name: "Social Media Marketing (SMM)" }, { name: "Email Marketing" }]
      },
      {
        id: "graphic-web-design",
        title: "Graphic & Web Design",
        image: serviceImages['graphic-web-design'],
        description: "Elevate brand perception with UI/UX designers, graphic artists, and motion specialists proficient in Figma, Adobe Creative Suite, and design systems. We deliver wireframes, high-fidelity screens, marketing collateral, and design-to-dev handoffs developers can implement cleanly. Consistent visual language across web, mobile, and campaigns improves trust and conversion. Dedicated design pods scale with product launches and seasonal campaigns.",
        icon: PenTool,
        subcategories: [{ name: "UI/UX Design" }, { name: "Graphic Design" }, { name: "Web Design" }, { name: "3D Modeling & Animation" }, { name: "Video Editing" }]
      },
      {
        id: "content-writing",
        title: "Content Writing",
        image: serviceImages['content-writing'],
        description: "Publish authoritative content with writers skilled in SEO briefs, technical documentation, conversion copy, and long-form thought leadership. Every piece is researched, edited, and structured for readability, E-E-A-T signals, and internal linking strategy. Teams support blogs, landing pages, case studies, whitepapers, and transcription with consistent brand voice. Outcomes include higher organic traffic, stronger nurture sequences, and sales-enablement assets that close deals.",
        icon: FileText,
        subcategories: [{ name: "Blog Writing" }, { name: "Copywriting" }, { name: "Technical Writing" }, { name: "Transcription Services" }]
      }
    ]
  }
];

export const allServices = servicePillars.flatMap(pillar => pillar.categories);
