import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function BridalSection() {
  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Editorial Portraiture
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            THE BRIDE
          </h2>
          <p className="font-editorial text-xl sm:text-2xl text-studio-gold italic font-light mt-3 max-w-xl">
            "Every bride has a presence that deserves more than a photograph."
          </p>
        </div>

        {/* Asymmetrical High-Fashion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Large Portrait - sm-9 (Kundan close-up & serene presence) */}
          <div className="lg:col-span-6 relative group overflow-hidden bg-studio-surface border border-studio-border/60">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/sm-9.jpeg"
                alt="Editorial Bridal Portrait with Kundan Jewelry"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div>
                <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                  Editorial Session
                </p>
                <p className="font-editorial text-2xl text-studio-text">
                  Kundan Reverie & Grace
                </p>
              </div>
            </div>
          </div>

          {/* Right Supporting Composition: Chiaroscuro (sm-7) & Blush Evening (sm-8) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Low-Key Chiaroscuro Portrait (sm-7) */}
              <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden">
                  <img
                    src="/images/sm-7.jpeg"
                    alt="Low Key Chiaroscuro Bridal Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-studio-surface/90 border-t border-studio-border/60">
                  <p className="text-[10px] font-sans tracking-widest text-studio-gold uppercase">
                    Chiaroscuro Study
                  </p>
                </div>
              </div>

              {/* Pastel Ruffle Engagement Gown (sm-8) */}
              <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden">
                  <img
                    src="/images/sm-8.jpeg"
                    alt="Pastel Blush Engagement Bride"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-studio-surface/90 border-t border-studio-border/60">
                  <p className="text-[10px] font-sans tracking-widest text-studio-gold uppercase">
                    Pastel Dawn & Pearls
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Statement */}
            <div className="space-y-4 pt-4 border-t border-studio-border/60">
              <p className="font-sans text-sm text-studio-muted leading-relaxed font-light">
                We craft bridal imagery that belongs on the pages of an international luxury publication. Through intentional, sculpted natural light and an eye for the delicate craftsmanship of your lehenga, nath, and maang tikka, we honor both your sovereignty and vulnerability.
              </p>
              <Link
                to="/stories/the-bride-editorial"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
                data-cursor="VIEW"
              >
                <span>VIEW THE FULL BRIDAL EDITORIAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
