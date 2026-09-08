import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { servicesList, investmentCollections } from '../data/servicesData';
import Investment from '../components/sections/Investment';

export default function ServicesPage() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "Archival Preservation",
      desc: "Every frame is backed up on three redundant offline RAID drives and enterprise cloud cold storage on the night of your event."
    },
    {
      icon: Clock,
      title: "Punctual Delivery",
      desc: "Editorial previews within 72 hours for social celebration, and comprehensive master collections within agreed timelines."
    },
    {
      icon: Award,
      title: "Fine Art Color Science",
      desc: "Bespoke color grading tailored to Indian celebrations, skin tones, vibrant silks, and ambient mandap fire."
    }
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Services & Investment
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            THE DISCIPLINES
          </h1>
          <p className="font-sans text-base text-studio-muted font-light leading-relaxed mt-4">
            From single-day intimate engagements to multi-day wedding celebrations and fine-art studio portraiture, each commission receives director-level dedication.
          </p>
        </div>

        {/* Detailed 8 Disciplines Breakdown */}
        <div className="space-y-16 md:space-y-24 mb-28">
          {servicesList.map((svc) => (
            <div
              key={svc.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-studio-border/50 pb-16"
            >
              <div className="lg:col-span-5 relative group overflow-hidden bg-studio-surface border border-studio-border/60 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] max-h-[540px]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-4 text-xs font-sans tracking-widest text-studio-muted uppercase">
                  <span className="text-studio-gold font-bold">{svc.number}</span>
                  <span>•</span>
                  <span>{svc.category}</span>
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-studio-text tracking-wide uppercase">
                  {svc.title}
                </h2>
                <p className="font-editorial text-xl text-studio-gold italic font-light">
                  {svc.tagline}
                </p>
                <p className="font-sans text-sm text-studio-muted font-light leading-relaxed">
                  {svc.description}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-studio-gold hover:text-studio-text transition-colors border-b border-studio-gold pb-0.5"
                    data-cursor="INQUIRE"
                  >
                    <span>Inquire for {svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Collections */}
        <Investment />

        {/* Studio Guarantees & Commitments */}
        <div className="mt-24 pt-16 border-t border-studio-border/60">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Our Standard
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-studio-text tracking-wide uppercase mt-2">
              THE SAMRAT COMMITMENT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-8 bg-studio-dark/60 border border-studio-border/60 space-y-3">
                  <Icon className="w-6 h-6 text-studio-gold" />
                  <h4 className="font-editorial text-xl text-studio-text tracking-wide">
                    {c.title}
                  </h4>
                  <p className="font-sans text-xs text-studio-muted font-light leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
