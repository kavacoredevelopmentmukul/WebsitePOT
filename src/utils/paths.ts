/** Resolve internal routes with Astro base path (e.g. /WebsitePOT) */
export function path(route: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = route.startsWith('/') ? route.slice(1) : route;
  return `${base}${normalized}`;
}
