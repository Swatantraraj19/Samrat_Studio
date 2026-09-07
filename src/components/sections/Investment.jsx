import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { investmentCollections } from '../../data/servicesData';

export default function Investment() {
  return (
    <section className="py-24 md:py-36 bg-studio-bg relative overflow-hidden border-b border-studio-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Bespoke Commissions
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            INVESTMENT
          </h2>
          <p className="font-editorial text-xl sm:text-2xl text-studio-muted italic font-light mt-4">
            "Every celebration is different. Our collections are designed to give your story the attention it deserves."
          </p>
        </div>

        {/* Editorial Investment Columns - NOT generic SaaS pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {investmentCollections.map((col) => (
            <div
              key={col.id}
              className={`p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                col.highlight
                  ? 'bg-studio-surface/80 border border-studio-gold/40 shadow-2xl relative'
                  : 'bg-studio-dark/60 border border-studio-border/60 hover:border-studio-border'
              }`}
            >
              {col.badge && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-studio-gold text-studio-bg text-[9px] font-sans font-bold tracking-widest uppercase">
                  {col.badge}
                </div>
              )}

              <div>
                <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                  Collection
                </span>
                <h3 className="font-editorial text-2xl md:text-3xl text-studio-text tracking-wide uppercase mt-2">
                  {col.title}
                </h3>
                <p className="font-sans text-xs text-studio-muted mt-2 font-light leading-relaxed">
                  {col.description}
                </p>

                {/* Subtle Starting Price */}
                <div className="my-8 pb-6 border-b border-studio-border/50">
                  <p className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                    Collections begin at
                  </p>
                  <p className="font-editorial text-3xl text-studio-gold mt-1">
                    {col.startingAt}
                  </p>
                </div>

                {/* Deliverables List */}
                <ul className="space-y-3 mb-8">
                  {col.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs text-studio-muted font-sans font-light">
                      <span className="text-studio-gold text-sm leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center space-x-2 py-3.5 text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
                  col.highlight
                    ? 'bg-studio-gold text-studio-bg hover:bg-studio-gold-light font-semibold'
                    : 'border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold'
                }`}
                data-cursor="INQUIRE"
              >
                <span>DISCUSS YOUR STORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note on Custom Dates */}
        <div className="mt-16 text-center text-xs font-sans text-studio-muted tracking-wider">
          <p>
            Custom destination commissions, multi-day celebrations and studio portrait sessions are tailored upon consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
