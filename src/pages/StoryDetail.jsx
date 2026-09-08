import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { storiesData } from '../data/storiesData';
import Lightbox from '../components/common/Lightbox';

export default function StoryDetail() {
  const { slug } = useParams();
  const storyIndex = storiesData.findIndex((s) => s.slug === slug);
  const story = storiesData[storyIndex];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const prevStory = storyIndex > 0 ? storiesData[storyIndex - 1] : storiesData[storiesData.length - 1];
  const nextStory = storyIndex < storiesData.length - 1 ? storiesData[storyIndex + 1] : storiesData[0];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="bg-studio-bg text-studio-text min-h-screen">
      {/* 1. Full-Screen Cinematic Hero */}
      <header className="relative w-full h-[85vh] min-h-[600px] flex items-end justify-start overflow-hidden bg-studio-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover object-[center_30%] filter brightness-85 contrast-[1.05]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-16 w-full">
          <Link
            to="/stories"
            className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors mb-6"
            data-cursor="BACK"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO STORIES</span>
          </Link>

          <div className="flex items-center space-x-4 text-xs font-sans tracking-widest text-studio-muted uppercase mb-3">
            <span>{story.category}</span>
            <span>•</span>
            <span>{story.location}</span>
            <span>•</span>
            <span>{story.year}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase leading-tight">
            {story.title}
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-studio-gold italic font-light mt-2">
            {story.subtitle}
          </p>
        </div>
      </header>

      {/* 2. Magazine Editorial Narrative & Details Bar */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-studio-border/60 pb-16">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-editorial text-2xl sm:text-3xl text-studio-text leading-snug font-normal">
              {story.introText}
            </p>
            {story.narrative.map((para, i) => (
              <p key={i} className="font-sans text-sm md:text-base text-studio-muted leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>

          {/* Metadata Specifications */}
          <div className="lg:col-span-4 bg-studio-dark/70 border border-studio-border/60 p-6 space-y-4 text-xs font-sans">
            <p className="text-[10px] tracking-ultra uppercase text-studio-gold font-semibold">
              Archive Details
            </p>
            {Object.entries(story.details).map(([key, val]) => (
              <div key={key} className="border-b border-studio-border/40 pb-2">
                <span className="text-studio-muted/70 uppercase text-[9px] tracking-widest block">
                  {key}
                </span>
                <span className="text-studio-text font-medium mt-0.5 block">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Emotional Pull-Quote */}
      <section className="py-12 md:py-20 bg-studio-dark border-y border-studio-border/50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-editorial text-3xl sm:text-5xl text-studio-text italic leading-tight">
            "{story.quote}"
          </p>
          <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold mt-6">
            Samrat Studio Patna • Visual Memoirs
          </p>
        </div>
      </section>

      {/* 4. Editorial Gallery Spread */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-16">
          {story.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-studio-surface border border-studio-border/60 overflow-hidden"
              data-cursor="EXPAND"
            >
              <div className="w-full max-h-[85vh] overflow-hidden flex items-center justify-center bg-studio-dark/60">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="max-h-[85vh] w-auto max-w-full object-contain mx-auto transition-transform duration-1000 ease-out group-hover:scale-102"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6 bg-studio-dark/90 flex items-center justify-between border-t border-studio-border/60 text-xs">
                <p className="font-serif italic text-studio-muted text-sm">
                  {item.caption}
                </p>
                <span className="text-[10px] font-sans tracking-widest uppercase text-studio-gold hidden sm:inline">
                  Click to View in Lightbox
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closing Statement & CTA */}
      <section className="py-24 md:py-32 bg-studio-dark border-t border-studio-border/60 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-editorial text-4xl sm:text-5xl text-studio-text tracking-wide uppercase mb-4">
            LET'S CREATE YOUR STORY
          </h2>
          <p className="font-sans text-sm text-studio-muted font-light leading-relaxed max-w-lg mx-auto mb-8">
            Whether in the historic courtyards of Patna or a mountain sanctuary, we would be honoured to preserve your celebration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-studio-gold text-studio-bg hover:bg-studio-gold-light font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-xl"
            data-cursor="INQUIRE"
          >
            <span>DISCUSS YOUR DATE & STORY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Story Navigation Footer: Previous & Next */}
      <nav aria-label="Story pagination" className="border-t border-studio-border/60 bg-studio-bg py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to={`/stories/${prevStory.slug}`}
            className="group flex items-center space-x-3 text-left"
            data-cursor="PREV"
          >
            <ChevronLeft className="w-5 h-5 text-studio-gold group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[9px] font-sans tracking-ultra uppercase text-studio-muted block">
                Previous Story
              </span>
              <span className="font-editorial text-lg text-studio-text group-hover:text-studio-gold transition-colors">
                {prevStory.title}
              </span>
            </div>
          </Link>

          <Link
            to="/stories"
            className="text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text hidden sm:inline"
          >
            All Stories
          </Link>

          <Link
            to={`/stories/${nextStory.slug}`}
            className="group flex items-center space-x-3 text-right"
            data-cursor="NEXT"
          >
            <div>
              <span className="text-[9px] font-sans tracking-ultra uppercase text-studio-muted block">
                Next Story
              </span>
              <span className="font-editorial text-lg text-studio-text group-hover:text-studio-gold transition-colors">
                {nextStory.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-studio-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* Full-Screen Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={story.gallery}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? story.gallery.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === story.gallery.length - 1 ? 0 : prev + 1))}
      />
    </article>
  );
}
