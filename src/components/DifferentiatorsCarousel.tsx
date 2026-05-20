import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const differentiators = [
  {
    title: "Niche Skills",
    description: "Whether it's rare tech, compliance-critical roles, or domain expertise—POT finds niche talent faster than local markets ever could.",
    watermark: "Specialized Talent"
  },
  {
    title: "AI-Powered Screening",
    description: "Our proprietary AI matching engine screens thousands of candidates to find the perfect technical and cultural fit for your team.",
    watermark: "Smart Matching"
  },
  {
    title: "Zero Setup Cost",
    description: "We handle all HR, IT infrastructure, legal, and compliance overhead. You only pay for the talent you hire.",
    watermark: "Turnkey Solution"
  },
  {
    title: "Enterprise Grade Security",
    description: "ISO certified facilities, secure networks, and strict data protection policies ensure your intellectual property remains safe.",
    watermark: "100% Secure"
  }
];

export default function DifferentiatorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pot-section bg-[var(--white)] dark:bg-[var(--bg-surface)] overflow-hidden" aria-labelledby="diff-heading">
      <div className="pot-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Why us</p>
            <h2 id="diff-heading" className="h-section text-[var(--ink)] dark:text-[var(--text-primary)]">
              What Makes Pacific Ocean Tech the Better Choice
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[var(--hairline-strong)] flex items-center justify-center hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[var(--hairline-strong)] flex items-center justify-center hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[420px] flex-shrink-0 snap-start rounded-[18px] bg-[var(--navy)] p-8 md:p-10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="eyebrow eyebrow-cream mb-4">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--cream)] mb-4 font-medium">
                  {diff.title}
                </h3>
                <p className="body-md text-[rgba(244,239,230,0.75)] max-w-md leading-relaxed">
                  {diff.description}
                </p>
              </div>
              <span className="absolute -bottom-4 right-4 font-[family-name:var(--font-display)] text-[4rem] md:text-[5rem] font-medium text-white/[0.06] whitespace-nowrap leading-none pointer-events-none select-none">
                {diff.watermark}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
