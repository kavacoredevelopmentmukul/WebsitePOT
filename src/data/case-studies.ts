export type CaseStudy = {
  id: string;
  category: 'Start-Up' | 'Mid-Size' | 'Enterprise';
  title: string;
  client: string;
  service: string;
  description: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'ngx-startup',
    category: 'Start-Up',
    client: 'NGX',
    service: 'Web Development',
    title: 'NGX achieved 2x business growth with a stable, high-speed website — no downtime, no rewrites, 18 months and counting.',
    description: 'We provided a dedicated web development team to overhaul their e-commerce platform, optimizing load times and streamlining the checkout process.',
    image: '/images/case-studies/ngx-startup.jpg'
  },
  {
    id: 'fintech-midsize',
    category: 'Mid-Size',
    client: 'FinTech Solutions',
    service: 'Mobile App Development',
    title: 'FinTech Solutions scaled their mobile user base by 300% after our Flutter team delivered their cross-platform app 2 months ahead of schedule.',
    description: 'A dedicated team of 4 Flutter developers and 1 QA engineer built their secure, high-performance mobile application from scratch.',
    image: '/images/case-studies/fintech-midsize.jpg'
  },
  {
    id: 'healthcorp-enterprise',
    category: 'Enterprise',
    client: 'HealthCorp Plus',
    service: 'Medical Process Outsourcing',
    title: 'HealthCorp Plus reduced claim denials by 40% and improved RCM efficiency with our dedicated medical billing and coding specialists.',
    description: 'We deployed a team of 15 certified medical coders and billers who integrated seamlessly into their existing workflows and EHR systems.',
    image: '/images/case-studies/healthcorp-enterprise.jpg'
  }
];
