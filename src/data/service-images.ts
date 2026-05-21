/**
 * Self-hosted service category images.
 * Source files live in /public/images/services/.
 * Paths are resolved at build time via import.meta.env.BASE_URL.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const serviceImages: Record<string, string> = {
  'software-development': `${base}/images/services/software-development.jpg`,
  'artificial-intelligence': `${base}/images/services/artificial-intelligence.jpg`,
  'web-development': `${base}/images/services/web-development.jpg`,
  'mobile-app-development': `${base}/images/services/mobile-app-development.jpg`,
  'engineering-architecture': `${base}/images/services/engineering-architecture.jpg`,
  'embedded-development': `${base}/images/services/embedded-development.jpg`,
  'it-support': `${base}/images/services/it-support.jpg`,
  'virtual-assistant': `${base}/images/services/virtual-assistant.jpg`,
  'finance-accounting': `${base}/images/services/finance-accounting.jpg`,
  'legal-process-outsourcing': `${base}/images/services/legal-process-outsourcing.jpg`,
  'medical-process-outsourcing': `${base}/images/services/medical-process-outsourcing.jpg`,
  'digital-marketing': `${base}/images/services/digital-marketing.jpg`,
  'graphic-web-design': `${base}/images/services/graphic-web-design.jpg`,
  'content-writing': `${base}/images/services/content-writing.jpg`,
};

export function getServiceImage(serviceId: string): string {
  return serviceImages[serviceId] ?? serviceImages['software-development'];
}
