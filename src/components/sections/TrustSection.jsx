import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export default function TrustSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

  const t = testimonialsData[current];

  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Metric Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 mb-16 border-b border-studio-border/60">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Client Trust & Heritage
            </span>
            <div className="flex items-center space-x-3 mt-2">
              <span className="font-editorial text-4xl sm:text-5xl text-studio-text">4.8</span>
              <div className="flex text-studio-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-studio-gold" />
                ))}
              </div>
              <span className="font-sans text-xs tracking-widest text-studio-muted uppercase">
                (78+ Google Reviews)
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <button
              onClick={prev}
              className="p-3 border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold transition-colors"
              aria-label="Previous Review"
              data-cursor="PREV"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-3 border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold transition-colors"
              aria-label="Next Review"
              data-cursor="NEXT"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Quote Stage */}
        <div className="relative min-h-[220px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-studio-gold/20 mb-6" />

          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-studio-text leading-snug font-light italic">
            "{t.quote}"
          </p>

          <div className="mt-8 pt-6 border-t border-studio-border/40 flex items-center justify-between">
            <div>
              <p className="font-sans text-sm font-semibold tracking-wider text-studio-text">
                {t.author}
              </p>
              <p className="font-sans text-xs text-studio-muted mt-0.5">
                {t.event}
              </p>
            </div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold px-3 py-1 bg-studio-surface border border-studio-border">
              {t.tag}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
