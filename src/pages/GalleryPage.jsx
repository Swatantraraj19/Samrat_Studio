import React from 'react';
import GalleryPreview from '../components/sections/GalleryPreview';

export default function GalleryPage() {
  return (
    <div className="pt-24 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-4">
        <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
          The Complete Archive
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
          CURATED EXHIBITION
        </h1>
        <p className="font-sans text-base text-studio-muted font-light leading-relaxed mt-4 max-w-2xl">
          An intentional selection of wedding, bridal, couple, and milestone photographs captured with precision lighting, artistic composition, and emotional resonance.
        </p>
      </div>

      {/* Renders all photographs with full interactive filters and full-screen lightbox */}
      <GalleryPreview showAll={true} />
    </div>
  );
}
