import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { storiesData } from '../../data/storiesData';

export default function FeaturedStories() {
  const [activeStory, setActiveStory] = useState(storiesData[0]);

  return (
    <section className="py-24 md:py-36 bg-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-studio-border/60">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Curated Portfolio
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-studio-text tracking-wide mt-2">
              SELECTED STORIES
            </h2>
          </div>
          <p className="font-sans text-sm text-studio-muted max-w-sm mt-4 md:mt-0 font-light">
            A collection of unscripted moments, tender intimacies, and cultural celebrations preserved across Bihar.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Dynamic Preview Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-studio-surface border border-studio-border/60 group">
              <img
                src={activeStory.coverImage}
                alt={activeStory.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                    {activeStory.category}
                  </p>
                  <p className="font-editorial text-2xl text-studio-text tracking-wide">
                    {activeStory.subtitle}
                  </p>
                  <p className="text-xs text-studio-muted mt-1">
                    {activeStory.location} • {activeStory.year}
                  </p>
                </div>
                <Link
                  to={`/stories/${activeStory.slug}`}
                  className="p-3 rounded-full bg-studio-gold text-studio-bg hover:scale-110 transition-transform"
                  data-cursor="VIEW"
                  aria-label={`View story ${activeStory.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Numbered Index List */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-2">
            {storiesData.map((story) => {
              const isSelected = activeStory.slug === story.slug;
              return (
                <div
                  key={story.slug}
                  onMouseEnter={() => setActiveStory(story)}
                  className={`group block p-6 md:p-8 border-b border-studio-border/50 transition-all duration-300 cursor-pointer ${isSelected
                      ? 'bg-studio-surface/60 border-studio-gold/40 pl-8 md:pl-10'
                      : 'hover:bg-studio-surface/30'
                    }`}
                  data-cursor="SELECT"
                >
                  <Link
                    to={`/stories/${story.slug}`}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-baseline space-x-6 md:space-x-8">
                      <span
                        className={`font-sans text-xs md:text-sm tracking-widest transition-colors ${isSelected ? 'text-studio-gold font-semibold' : 'text-studio-subtle'
                          }`}
                      >
                        {story.number}
                      </span>
                      <div>
                        <h3
                          className={`font-editorial text-2xl md:text-4xl tracking-wide transition-colors ${isSelected
                              ? 'text-studio-gold'
                              : 'text-studio-text group-hover:text-studio-gold-light'
                            }`}
                        >
                          {story.title}
                        </h3>
                        <p className="text-xs text-studio-muted font-sans tracking-wider uppercase mt-1">
                          {story.category} • {story.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-studio-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[11px] font-sans tracking-widest uppercase hidden md:inline">
                        View Story
                      </span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom index link */}
        <div className="mt-16 text-center">
          <Link
            to="/stories"
            className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors border-b border-studio-gold pb-1"
            data-cursor="VIEW ALL"
          >
            <span>DISCOVER ALL CASE STUDIES & STORIES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
