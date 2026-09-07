import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CouplesSection() {
  const scrollContainerRef = useRef(null);

  const coupleItems = [
    {
      img: '/images/sm-3.jpeg',
      title: 'Highland Serenade',
      desc: 'Flowing cobalt gown against rustic mountain timber',
      location: 'Himachal Retreat'
    },
    {
      img: '/images/sm-2.jpeg',
      title: 'The Shared Gaze',
      desc: 'Hands clasped, unfiltered laughter under amber bokeh',
      location: 'Patna'
    },
    {
      img: '/images/sm-8.jpeg',
      title: 'Evening Solitude',
      desc: 'Delicate lace and quiet contemplation before the reception',
      location: 'Patna'
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-bg relative overflow-hidden border-b border-studio-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Pre-Wedding & Intimacy
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
              TWO PEOPLE. <br />
              <span className="italic text-studio-gold">ONE STORY.</span>
            </h2>
          </div>
          <p className="font-editorial text-xl text-studio-muted italic font-light max-w-md mt-4 md:mt-0">
            "Between the posed portraits are the moments that feel most like you."
          </p>
        </div>
      </div>

      {/* Cinematic Horizontal Gallery Strip */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none px-6 md:px-12 pb-6 overscroll-x-contain touch-pan-x"
      >
        <div className="flex space-x-6 md:space-x-8 min-w-max">
          {coupleItems.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[360px] md:w-[420px] group bg-studio-surface border border-studio-border/60 overflow-hidden"
              data-cursor="DRAG"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-studio-dark/95 border-t border-studio-border/60">
                <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                  {item.location}
                </p>
                <h3 className="font-editorial text-2xl text-studio-text tracking-wide mt-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-studio-muted mt-2 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 flex justify-end">
        <Link
          to="/stories/two-people-one-story"
          className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
          data-cursor="EXPLORE"
        >
          <span>EXPLORE PRE-WEDDING COLLECTIONS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
