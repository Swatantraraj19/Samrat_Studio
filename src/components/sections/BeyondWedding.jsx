import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function BeyondWedding() {
  const categories = [
    { title: "Maternity & Newborn", desc: "Honouring the quiet miracles of new life in soft studio light." },
    { title: "Family Milestones & Birthdays", desc: "Multi-generational gatherings, first candles, and shared warmth." },
    { title: "Fine Art & Model Portfolios", desc: "Sculpted lighting and high-fashion composure for editorial portfolios." },
    { title: "Corporate & Creative Headshots", desc: "Discerning presence and refined clarity for founders and leaders." },
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-bg relative overflow-hidden border-b border-studio-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Real Family Milestone Photograph (sm-12) */}
          <div className="lg:col-span-6 relative group overflow-hidden bg-studio-surface border border-studio-border/60">
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src="/images/sm-12.jpeg"
                alt="First Birthday & Multi-Generational Family Celebration"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 bg-studio-dark border-t border-studio-border/60">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Milestone Archive
              </span>
              <h3 className="font-editorial text-2xl text-studio-text tracking-wide mt-1">
                Generations of Love & First Candles
              </h3>
              <p className="text-xs font-sans text-studio-muted mt-2 font-light">
                Documenting childhood, birthdays, and the irreplaceable warmth of parents and grandparents.
              </p>
            </div>
          </div>

          {/* Right: Clean Editorial Taxonomy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Studio & Lifestyle
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-studio-text tracking-wide uppercase mt-2">
                BEYOND THE WEDDING.
              </h2>
              <p className="font-sans text-sm text-studio-muted font-light leading-relaxed mt-4">
                Life is an ongoing sequence of milestones. Beyond high-scale wedding celebrations, our Kankarbagh studio is equipped with precision studio strobes, continuous cinema lights, and curated backdrops for intimate family archives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-studio-border/60">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-editorial text-xl text-studio-text tracking-wide">
                    {cat.title}
                  </h4>
                  <p className="text-xs font-sans text-studio-muted font-light leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
                data-cursor="LEARN"
              >
                <span>EXPLORE STUDIO SERVICES & RENTAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
