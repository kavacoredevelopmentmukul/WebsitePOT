/**
 * Self-hosted service category images.
 * Source files live in /public/images/services/.
 * Paths are resolved at build time via import.meta.env.BASE_URL.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const serviceImages: Record<string, string> = {
  'software-development': `${base}/images/services/software-development.webp`,
  'artificial-intelligence': `${base}/images/services/artificial-intelligence.webp`,
  'web-development': `${base}/images/services/web-development.webp`,
  'mobile-app-development': `${base}/images/services/mobile-app-development.webp`,
  'engineering-architecture': `${base}/images/services/engineering-architecture.webp`,
  'embedded-development': `${base}/images/services/embedded-development.webp`,
  'it-support': `${base}/images/services/it-support.webp`,
  'virtual-assistant': `${base}/images/services/virtual-assistant.webp`,
  'finance-accounting': `${base}/images/services/finance-accounting.webp`,
  'legal-process-outsourcing': `${base}/images/services/legal-process-outsourcing.webp`,
  'medical-process-outsourcing': `${base}/images/services/medical-process-outsourcing.webp`,
  'digital-marketing': `${base}/images/services/digital-marketing.webp`,
  'graphic-web-design': `${base}/images/services/graphic-web-design.webp`,
  'content-writing': `${base}/images/services/content-writing.webp`,
};

export function getServiceImage(serviceId: string): string {
  return serviceImages[serviceId] ?? serviceImages['software-development'];
}
