import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function WeddingSection() {
  return (
    <section className="py-24 md:py-36 bg-studio-bg relative overflow-hidden border-b border-studio-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Signature Weddings
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase leading-[1.08] mt-3">
            THE MOMENTS. <br />
            THE PEOPLE. <br />
            <span className="italic text-studio-gold">THE STORY.</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-studio-muted font-light leading-relaxed mt-6 max-w-xl">
            "Wedding photography should feel less like a collection of photographs and more like a memory you can step back into."
          </p>
        </div>

        {/* Asymmetrical Horizontal Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Primary Image - Couple Intimacy (sm-2) */}
          <div className="md:col-span-7 relative group overflow-hidden bg-studio-surface border border-studio-border/60">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/sm-2.jpeg"
                alt="Intimate Wedding Moment — Samrat Studio"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 left-6 text-xs font-sans tracking-widest text-studio-text/90 uppercase bg-studio-bg/70 px-3 py-1.5 backdrop-blur-sm">
              The Sacred Vow • Patna
            </div>
          </div>

          {/* Secondary Stack: Grandeur & Twirl (sm-4) + Text Narrative */}
          <div className="md:col-span-5 space-y-8">
            <div className="relative group overflow-hidden bg-studio-surface border border-studio-border/60">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/sm-4.jpeg"
                  alt="Grand Bridal Twirl under Chandelier"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-6 text-xs font-sans tracking-widest text-studio-text/90 uppercase bg-studio-bg/70 px-3 py-1.5 backdrop-blur-sm">
                Architectural Twirl
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-studio-border/60">
              <h3 className="font-editorial text-2xl text-studio-text tracking-wide">
                Documentary Cadence & High Glamour
              </h3>
              <p className="font-sans text-xs md:text-sm text-studio-muted leading-relaxed font-light">
                We navigate the vibrant symphony of Baraat drums, Vedic chants, and subtle emotional tears without orchestrating or disturbing the authenticity of your celebration.
              </p>
              <Link
                to="/stories/the-wedding-story"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
                data-cursor="READ"
              >
                <span>EXPLORE THE WEDDING ARCHIVE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
