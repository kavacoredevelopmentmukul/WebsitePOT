export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  department: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    bio: "Former VP of Engineering at a Fortune 500 tech firm. Arjun founded Pacific Ocean Tech to bridge the global talent gap with India's top engineering minds.",
    image: "https://picsum.photos/seed/arjun/400/400",
    linkedin: "#",
    department: "Leadership"
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI researcher turned CTO. Priya leads our internal technical vetting and oversees the delivery of complex AI and enterprise architecture projects.",
    image: "https://picsum.photos/seed/priya/400/400",
    linkedin: "#",
    department: "Leadership"
  },
  {
    id: "3",
    name: "David Chen",
    role: "Head of Global Sales",
    bio: "Based in San Francisco, David helps US and European companies navigate remote team building and design scalable outsourcing strategies.",
    image: "https://picsum.photos/seed/david/400/400",
    linkedin: "#",
    department: "Sales"
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "VP of Operations",
    bio: "Sneha ensures seamless onboarding, HR compliance, and operational excellence for our 5,000+ deployed engineers globally.",
    image: "https://picsum.photos/seed/sneha/400/400",
    linkedin: "#",
    department: "Operations"
  },
  {
    id: "5",
    name: "Rahul Verma",
    role: "Lead AI Architect",
    bio: "Specializing in Large Language Models and MLOps, Rahul heads the AI Engineering pod, helping clients build production-ready AI solutions.",
    image: "https://picsum.photos/seed/rahul/400/400",
    linkedin: "#",
    department: "Engineering"
  },
  {
    id: "6",
    name: "Aisha Khan",
    role: "Head of Design",
    bio: "Award-winning UX designer with a passion for accessible and futuristic web interfaces. Aisha leads our Graphics & Web Design service.",
    image: "https://picsum.photos/seed/aisha/400/400",
    linkedin: "#",
    department: "Design"
  }
];
