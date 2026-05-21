const base = import.meta.env.BASE_URL.replace(/\/$/, '');

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
    image: `${base}/images/team/professional-headshot-1.jpg`,
    linkedin: "#",
    department: "Leadership"
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI researcher turned CTO. Priya leads our internal technical vetting and oversees the delivery of complex AI and enterprise architecture projects.",
    image: `${base}/images/team/professional-headshot-2.jpg`,
    linkedin: "#",
    department: "Leadership"
  },
  {
    id: "3",
    name: "David Chen",
    role: "Head of Global Sales",
    bio: "Based in San Francisco, David helps US and European companies navigate remote team building and design scalable outsourcing strategies.",
    image: `${base}/images/team/professional-headshot-3.jpg`,
    linkedin: "#",
    department: "Sales"
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "VP of Operations",
    bio: "Sneha ensures seamless onboarding, HR compliance, and operational excellence for our globally deployed professionals.", /* TODO:VERIFY-WITH-DEEPAK — removed specific headcount claim */
    image: `${base}/images/team/professional-headshot-4.jpg`,
    linkedin: "#",
    department: "Operations"
  },
  {
    id: "5",
    name: "Rahul Verma",
    role: "Lead AI Architect",
    bio: "Specializing in Large Language Models and MLOps, Rahul heads the AI Engineering pod, helping clients build production-ready AI solutions.",
    image: `${base}/images/team/professional-headshot-5.jpg`,
    linkedin: "#",
    department: "Engineering"
  },
  {
    id: "6",
    name: "Aisha Khan",
    role: "Head of Design",
    bio: "Award-winning UX designer with a passion for accessible and futuristic web interfaces. Aisha leads our Graphics & Web Design service.",
    image: `${base}/images/team/professional-headshot-6.jpg`,
    linkedin: "#",
    department: "Design"
  }
];
