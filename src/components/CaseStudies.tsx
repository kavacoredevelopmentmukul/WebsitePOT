import { caseStudies } from '../data/case-studies';
import { ArrowRight, Check } from 'lucide-react';

// Ensure BASE always has a trailing slash regardless of Astro version/mode.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';
const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];
const secondaries = caseStudies.filter((c) => c.id !== featured.id).slice(0, 3);

export default function CaseStudies() {
  return (
    <section className="pot-section bg-[var(--paper)] dark:bg-[var(--bg-primary)]" aria-labelledby="case-studies-heading">
      <div className="pot-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Case studies</p>
            <h2 id="case-studies-heading" className="h-section text-[var(--ink)] dark:text-[var(--text-primary)] mb-3">
              Growth our clients measure
            </h2>
            <p className="lede">Featured outcome plus recent wins across e-commerce, fintech, and healthcare.</p>
          </div>
          <a
            href={`${BASE}case-studies`}
            className="mono-label text-[var(--navy)] hover:text-[var(--coral)] transition-colors inline-flex items-center gap-2 shrink-0"
            aria-label="View all case studies"
          >
            View all <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Featured — horizontal editorial card */}
        {featured && (
          <article className="card overflow-hidden flex flex-col lg:flex-row mb-8">
            <div className="lg:w-[48%] min-h-[240px] bg-[var(--cream)]">
              <img
                src={featured.image}
                alt={`${featured.client} case study — ${featured.industry}`}
                className="w-full h-full object-cover min-h-[240px]"
                loading="lazy"
              />
            </div>
            <div className="lg:w-[52%] p-8 md:p-10 flex flex-col justify-center">
              <p className="eyebrow text-[var(--coral)] mb-2">{featured.industry}</p>
              <h3 className="h-section text-[1.5rem] text-[var(--ink)] dark:text-[var(--text-primary)] mb-4 leading-snug">
                {featured.title}
              </h3>
              <p className="body-md mb-6">{featured.challenge}</p>
              <ul className="space-y-2 mb-6">
                {featured.results.slice(0, 3).map((r) => (
                  <li key={r} className="flex items-start gap-2 body-sm">
                    <Check className="w-4 h-4 shrink-0 text-[var(--coral)] mt-0.5" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
              <a href={`${BASE}case-studies`} className="mono-label text-[var(--navy)] hover:text-[var(--coral)]">
                Read full story →
              </a>
            </div>
          </article>
        )}

        {/* Three secondaries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaries.map((study) => (
            <article key={study.id} className="card overflow-hidden flex flex-col h-full">
              <div className="h-44 bg-[var(--cream)]">
                <img
                  src={study.image}
                  alt={`${study.client} — ${study.industry}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="eyebrow text-[var(--coral)] mb-2">{study.industry}</p>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--ink)] dark:text-[var(--text-primary)] mb-3 leading-snug">
                  {study.title}
                </h3>
                <ul className="space-y-2 flex-grow mb-4">
                  {study.results.slice(0, 2).map((r) => (
                    <li key={r} className="flex items-start gap-2 body-sm">
                      <Check className="w-4 h-4 shrink-0 text-[var(--coral)] mt-0.5" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <a href={`${BASE}case-studies`} className="mono-label text-[var(--navy)] hover:text-[var(--coral)]">
                  Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
