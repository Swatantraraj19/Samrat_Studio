import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2, Camera } from 'lucide-react';
import { galleryData, galleryCategories } from '../../data/galleryData';
import Lightbox from '../common/Lightbox';
import { playShutterSound } from '../../lib/soundEngine';

export default function GalleryPreview({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === 'ALL'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const displayImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const handleOpenLightbox = (index) => {
    playShutterSound();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 pb-8 border-b border-studio-border/60">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Visual Archive & EXIF
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
              CURATED GALLERY
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 lg:mt-0">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playShutterSound();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 text-[11px] font-sans tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                    ? 'bg-studio-gold text-studio-bg font-bold'
                    : 'bg-studio-surface/80 text-studio-muted hover:text-studio-text hover:bg-studio-surface border border-studio-border'
                  }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {displayImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative overflow-hidden bg-studio-surface border border-studio-border/60 cursor-pointer ${item.aspect === 'horizontal' ? 'sm:col-span-2' : 'col-span-1'
                }`}
              data-cursor="EXPAND"
            >
              <div
                className={`overflow-hidden ${item.aspect === 'horizontal' ? 'aspect-[16/10]' : 'aspect-[3/4]'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
              </div>

              {/* Hover metadata reveal with analog EXIF optics */}
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/95 via-studio-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 bg-studio-dark/90 border border-studio-border text-[9px] font-mono tracking-widest text-studio-gold">
                    {item.exif?.frame || 'FRAME 01A'}
                  </span>
                  <span className="p-2 rounded-full bg-studio-gold/80 text-studio-bg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-[9px] font-mono text-studio-gold mb-1">
                    <Camera className="w-3 h-3" />
                    <span>{item.exif?.lens}</span>
                  </div>
                  <h4 className="font-editorial text-xl text-studio-text tracking-wide mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-sans text-studio-muted/90 line-clamp-1 mt-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        {!showAll && (
          <div className="mt-16 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors border-b border-studio-gold pb-1"
              data-cursor="VIEW ALL"
            >
              <span>EXPLORE COMPLETE 12-PIECE ARCHIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={displayImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))}
      />
    </section>
  );
}
