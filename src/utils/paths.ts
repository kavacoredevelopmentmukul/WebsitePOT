/** Resolve internal routes with Astro base path (e.g. /WebsitePOT) */
export function path(route: string): string {
  // BASE_URL may or may not have a trailing slash depending on Astro version/mode.
  // Normalise defensively: strip trailing slash from base, strip leading slash from
  // route, then always join with an explicit '/'.
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/WebsitePOT"
  const slug = route.replace(/^\//, '');                     // "testimonials"
  return slug ? `${base}/${slug}` : `${base}/`;
}
