import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CelebrationsSection() {
  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Haldi • Mehndi • Sangeet • Rites
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
              THE CELEBRATION
            </h2>
          </div>
          <p className="font-sans text-sm text-studio-muted max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            The vibrant explosion of turmeric, marigolds, and genuine joy. We document the unscripted rhythm of family festivities across Patna.
          </p>
        </div>

        {/* Dynamic 4-Frame Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Hero Card: Haldi Golden Urli (sm-10) */}
          <div className="md:col-span-6 relative group overflow-hidden bg-studio-surface border border-studio-border/60">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/sm-10.jpeg"
                alt="Joyous Haldi Celebration in Golden Urli"
                className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 bg-studio-bg/95 border-t border-studio-border/60">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Haldi Morning
              </span>
              <h3 className="font-editorial text-2xl text-studio-text tracking-wide mt-1">
                Turmeric Radiance & Swagger
              </h3>
              <p className="text-xs font-sans text-studio-muted mt-2 font-light">
                Unfiltered vibrancy, traditional flower decor, and high spirits.
              </p>
            </div>
          </div>

          {/* Right Side: Stack of Mehndi (sm-5) & Haldi Sisters (sm-11) */}
          <div className="md:col-span-6 space-y-6 lg:space-y-8">
            {/* Henna Detail (sm-5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/images/sm-5.jpeg"
                    alt="Intricate Henna Mehndi Hands"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-studio-bg border-t border-studio-border/60">
                  <p className="text-[10px] font-sans tracking-widest text-studio-gold uppercase">
                    Henna Reverie
                  </p>
                </div>
              </div>

              {/* Haldi Floral Arch (sm-6) */}
              <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/images/sm-6.jpeg"
                    alt="Floral Arch Haldi Portrait"
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-studio-bg border-t border-studio-border/60">
                  <p className="text-[10px] font-sans tracking-widest text-studio-gold uppercase">
                    Peach Floral Bliss
                  </p>
                </div>
              </div>
            </div>

            {/* Bridesmaids Haldi Group (sm-11) */}
            <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/sm-11.jpeg"
                  alt="Bridesmaids & Sisters Sharing Haldi Laughter"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-studio-bg/95 border-t border-studio-border/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                    Sisterhood
                  </span>
                  <p className="font-editorial text-lg text-studio-text">
                    Pure Laughter & Haldi Swag
                  </p>
                </div>
                <Link
                  to="/stories/the-celebration"
                  className="inline-flex items-center space-x-1 text-xs font-sans tracking-widest uppercase text-studio-gold hover:text-studio-text"
                  data-cursor="VIEW"
                >
                  <span>Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
