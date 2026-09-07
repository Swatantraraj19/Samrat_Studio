import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Camera, Heart, Sparkles } from 'lucide-react';
import { studioData } from '../../data/studioData';

export default function AboutSection() {
  const pillars = [
    {
      icon: Camera,
      title: "Documentary Empathy",
      desc: "We prioritize genuine observation over stiff choreography, capturing true emotional cadence."
    },
    {
      icon: Sparkles,
      title: "Sculpted Natural Light",
      desc: "Directional light, chiaroscuro, and careful exposure that honors Indian skin tones and embroidery."
    },
    {
      icon: Heart,
      title: "Human Connection",
      desc: "We ensure families, couples, and elders feel completely comfortable and unhurried."
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-bg relative overflow-hidden border-b border-studio-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Studio Image (Chiaroscuro Craft sm-7) */}
          <div className="lg:col-span-5 relative group overflow-hidden bg-studio-surface border border-studio-border/60">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/sm-7.jpeg"
                alt="Behind the Lens — Art of Sculpted Light"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 bg-studio-dark border-t border-studio-border/60">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                The Philosophy
              </span>
              <p className="font-editorial text-xl text-studio-text tracking-wide mt-1">
                Precision in Shadow & Illumination
              </p>
            </div>
          </div>

          {/* Right: Authentic Studio Story & Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Behind The Lens
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-studio-text tracking-wide uppercase mt-2">
                CRAFT, EMOTION & PATNA SOIL.
              </h2>
              <p className="font-sans text-base text-studio-muted font-light leading-relaxed mt-4">
                Samrat Studio was born out of a deep reverence for weddings and cultural milestones in Bihar. While wedding trends come and go, the way two people look at each other during their sacred vows remains timeless.
              </p>
              <p className="font-sans text-sm text-studio-muted font-light leading-relaxed mt-3">
                Located on 90 Feet Road in Kankarbagh, our studio combines high-end digital imaging with an unobtrusive presence. We never turn your sacred day into a chaotic film set; instead, we preserve the unrepeatable truth of your celebration.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-studio-border/60">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <Icon className="w-5 h-5 text-studio-gold" />
                    <h4 className="font-editorial text-lg text-studio-text tracking-wide">
                      {p.title}
                    </h4>
                    <p className="text-xs font-sans text-studio-muted font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center space-x-6">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
                data-cursor="LEARN"
              >
                <span>READ OUR FULL MANIFESTO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={studioData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-sans tracking-widest uppercase text-studio-muted hover:text-studio-gold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-studio-gold" />
                <span>Visit Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
