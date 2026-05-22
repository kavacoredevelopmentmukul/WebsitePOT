import { companyStats } from '../data/company-stats';

export type BreadcrumbItem = { name: string; path: string };

const SITE = 'https://kavacoredevelopmentmukul.github.io/WebsitePOT';

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE}${clean}`.replace(/([^:]\/)\/+/g, '$1');
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pacific Ocean Tech',
    url: SITE,
    logo: absoluteUrl('/favicon.svg'),
    description:
      'Pacific Ocean Tech helps global companies hire dedicated remote professionals across the Pacific region.',
    foundingDate: String(companyStats.establishedYear),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: companyStats.email,
      areaServed: ['US', 'AU', 'NZ', 'GB', 'SG'],
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: 'Pacific Ocean Tech' },
    areaServed: 'Worldwide',
    url: absoluteUrl(url),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(url),
    isPartOf: { '@type': 'WebSite', name: 'Pacific Ocean Tech', url: SITE },
  };
}
