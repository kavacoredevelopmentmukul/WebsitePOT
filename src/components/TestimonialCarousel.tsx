import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Pacific Ocean Tech helped us scale our AI engineering team in weeks instead of months. The quality of talent is exceptional, and they seamlessly integrated into our agile workflows. We achieved 2x business growth without worrying about infrastructure.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "InnovateAI",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    content: "We reduced our development costs by 60% without sacrificing an ounce of quality. Our dedicated React developers feel like core members of our in-house team. Communication is flawless.",
    author: "Michael Chang",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    content: "The vetting process is truly world-class. Out of the 4 candidates presented to us, we ended up hiring 3 because they were all perfectly suited for our specialized backend needs.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "FinTech Solutions",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div className="relative h-[400px] md:h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16"
          >
            <Quote className="w-12 h-12 text-[var(--color-accent)]/20 mb-6" />
            
            <p className="text-xl md:text-3xl font-heading font-medium text-[var(--text-primary)] mb-10 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1 mb-1 text-yellow-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-accent)]"
              />
              <div>
                <h4 className="font-heading font-bold text-lg text-[var(--text-primary)]">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-[var(--text-muted)]">{testimonials[currentIndex].role}, <span className="text-[var(--color-accent-secondary)] dark:text-[var(--color-accent)]">{testimonials[currentIndex].company}</span></p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8 absolute top-1/2 -translate-y-1/2 w-full left-0 right-0 pointer-events-none px-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white dark:bg-[#111827] shadow-lg flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all pointer-events-auto border border-gray-100 dark:border-gray-800 absolute left-0 md:-left-8"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white dark:bg-[#111827] shadow-lg flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all pointer-events-auto border border-gray-100 dark:border-gray-800 absolute right-0 md:-right-8"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
