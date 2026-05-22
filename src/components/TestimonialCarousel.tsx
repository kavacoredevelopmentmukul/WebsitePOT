import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { allTestimonials } from '../data/testimonials';

const testimonials = allTestimonials;

/** Derive up-to-two-letter initials from a name for the placeholder avatar. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="card p-10 md:p-14 min-h-[320px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6 text-[var(--coral)]" aria-label={`${t.rating} out of 5 stars`}>
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
              ))}
            </div>

            <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-[var(--ink)] dark:text-[var(--text-primary)] mb-8 leading-relaxed italic font-normal max-w-2xl mx-auto">
              &ldquo;{t.content}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--navy)] text-[var(--cream)] font-semibold text-lg border-2 border-[var(--hairline)] select-none"
                role="img"
                aria-label={`${t.author} — placeholder avatar`}
              >
                {initials(t.author)}
              </div>
              <div>
                <h4 className="font-medium text-[var(--ink)] dark:text-[var(--text-primary)]">{t.author}</h4>
                <p className="body-sm">
                  {t.role}{t.company && (
                    <>
                      , <span className="text-[var(--navy)] dark:text-[var(--coral)]">{t.company}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button
          type="button"
          onClick={prevSlide}
          className="w-11 h-11 rounded-full border border-[var(--hairline-strong)] bg-[var(--white)] dark:bg-[var(--bg-surface)] flex items-center justify-center hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-11 h-11 rounded-full border border-[var(--hairline-strong)] bg-[var(--white)] dark:bg-[var(--bg-surface)] flex items-center justify-center hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
