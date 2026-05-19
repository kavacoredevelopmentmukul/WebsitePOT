import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/case-studies';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<'Start-Up' | 'Mid-Size' | 'Enterprise'>('Start-Up');
  
  const activeCaseStudy = caseStudies.find(cs => cs.category === activeTab) || caseStudies[0];

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-6">
              Case Studies That Show Growth
            </h2>
            <p className="text-xl text-[var(--text-muted)]">
              See how companies across different stages scale their engineering output with our talent.
            </p>
          </div>
          
          <div className="flex bg-[var(--bg-surface)] p-1.5 rounded-full border border-[var(--text-muted)]/10">
            {['Start-Up', 'Mid-Size', 'Enterprise'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#111827] dark:bg-[var(--color-accent)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="ve-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 bg-[var(--bg-surface)] relative min-h-[300px] lg:min-h-[500px]">
                {/* Fallback pattern if image is missing, though we'll assume it exists */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <img 
                  src={activeCaseStudy.image} 
                  alt={activeCaseStudy.client} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    (e.target as HTMLImageElement).src = '/images/service_illustration.png';
                  }}
                />
              </div>
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--text-muted)]/20 bg-[var(--bg-surface)] text-[var(--text-muted)] text-xs font-medium mb-8 w-fit">
                  {activeCaseStudy.service}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">
                  {activeCaseStudy.title}
                </h3>
                
                <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
                  {activeCaseStudy.description}
                </p>
                
                <a href="/WebsitePOT/case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium text-[var(--text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors w-fit group">
                  Read The Full Story
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <a href="/WebsitePOT/case-studies" className="text-[var(--color-accent-secondary)] dark:text-[var(--color-accent)] font-medium hover:underline inline-flex items-center gap-1">
            See All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
