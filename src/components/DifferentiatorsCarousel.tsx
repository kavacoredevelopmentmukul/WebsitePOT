import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const differentiators = [
  {
    title: "Niche Skills",
    description: "Whether it's rare tech, compliance-critical roles, or domain expertise—VE finds niche talent faster than local markets ever could.",
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
    <section className="py-24 bg-[var(--bg-surface)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] max-w-2xl">
            What Makes Pacific Ocean Tech the Better Choice
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[var(--text-muted)]/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[var(--text-muted)]/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {differentiators.map((diff, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-[600px] flex-shrink-0 snap-start bg-[#111827] rounded-[32px] p-10 md:p-14 relative overflow-hidden group"
            >
              {/* Subtle gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {diff.title}
                </h3>
                <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Large Watermark Text */}
              <div className="absolute -bottom-6 md:-bottom-10 left-10 right-0 z-0">
                <span className="text-[60px] md:text-[100px] font-bold text-white/5 whitespace-nowrap leading-none tracking-tight">
                  {diff.watermark}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
