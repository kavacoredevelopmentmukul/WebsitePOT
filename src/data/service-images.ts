/** Unsplash hero/card images per service category (?w=800&q=80) */
export const serviceImages: Record<string, string> = {
  'software-development': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
  'artificial-intelligence': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  'web-development': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'mobile-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  'engineering-architecture': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  'embedded-development': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'it-support': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  'virtual-assistant': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  'finance-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  'legal-process-outsourcing': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  'medical-process-outsourcing': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
  'graphic-web-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80',
  'content-writing': 'https://images.unsplash.com/photo-1455390582260-044601ddfc0d?w=800&q=80',
};

export function getServiceImage(serviceId: string): string {
  return serviceImages[serviceId] ?? serviceImages['software-development'];
}
