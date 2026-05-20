/** Published service detail routes (14) */
export const SERVICE_SLUGS = [
  'software-development',
  'artificial-intelligence',
  'web-development',
  'mobile-app-development',
  'engineering-architecture',
  'embedded-development',
  'it-support',
  'virtual-assistant',
  'finance-accounting',
  'legal-process-outsourcing',
  'medical-process-outsourcing',
  'digital-marketing',
  'graphic-web-design',
  'content-writing',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
