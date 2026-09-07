import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicesList } from '../../data/servicesData';

export default function ServicesIndex() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-studio-border/60">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Scope of Practice
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
              OUR DISCIPLINES
            </h2>
          </div>
          <p className="font-sans text-sm text-studio-muted max-w-sm mt-4 md:mt-0 font-light">
            Comprehensive creative direction, documentary photography, and motion picture storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Agency List */}
          <div className="lg:col-span-8 space-y-1">
            {servicesList.map((service, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`group block py-6 md:py-7 border-b border-studio-border/50 transition-all duration-300 ${isHovered ? 'pl-4 md:pl-6 bg-studio-surface/40 border-studio-gold/40' : ''
                    }`}
                  data-cursor="INQUIRE"
                >
                  <Link to="/services" className="block">
                    <div className="flex items-start md:items-center justify-between">
                      <div className="flex items-start md:items-center space-x-6 md:space-x-8">
                        <span
                          className={`font-sans text-xs md:text-sm tracking-widest transition-colors ${isHovered ? 'text-studio-gold font-bold' : 'text-studio-subtle'
                            }`}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h3
                            className={`font-editorial text-2xl md:text-3xl tracking-wide uppercase transition-colors ${isHovered ? 'text-studio-gold' : 'text-studio-text'
                              }`}
                          >
                            {service.title}
                          </h3>
                          <p className="font-sans text-xs text-studio-muted mt-1 font-light max-w-lg">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="p-2 text-studio-gold opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Floating Live Image Preview following the hovered discipline */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="aspect-[3/4] overflow-hidden bg-studio-surface border border-studio-border/60 relative">
              <img
                src={servicesList[hoveredIndex]?.image}
                alt={servicesList[hoveredIndex]?.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                  {servicesList[hoveredIndex]?.category}
                </span>
                <p className="font-editorial text-2xl text-studio-text mt-1">
                  {servicesList[hoveredIndex]?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
