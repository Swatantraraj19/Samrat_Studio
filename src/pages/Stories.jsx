import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { storiesData } from '../data/storiesData';

export default function Stories() {
  return (
    <div className="pt-32 pb-28 md:pt-40 md:pb-36 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Editorial Memoirs
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            SELECTED STORIES
          </h1>
          <p className="font-sans text-base text-studio-muted font-light leading-relaxed mt-4">
            A celebration of love, ritual, and family heritage across Patna and destination sanctuaries. Each story is an intentional study in light, intimacy, and unforced emotion.
          </p>
        </div>

        {/* Stories Listing */}
        <div className="space-y-24 md:space-y-36">
          {storiesData.map((story, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <article
                key={story.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-studio-border/50 pb-20 md:pb-28"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <Link
                    to={`/stories/${story.slug}`}
                    className="group block relative overflow-hidden bg-studio-surface border border-studio-border/60 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] max-h-[560px]"
                    data-cursor="READ"
                  >
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-studio-bg/80 backdrop-blur-sm text-[10px] font-sans tracking-widest text-studio-gold uppercase">
                      {story.category}
                    </div>
                  </Link>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <div className="flex items-center space-x-4 text-xs font-sans tracking-widest text-studio-muted uppercase">
                    <span className="text-studio-gold font-bold">{story.number}</span>
                    <span>•</span>
                    <span>{story.location}</span>
                    <span>•</span>
                    <span>{story.year}</span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl text-studio-text tracking-wide uppercase">
                    {story.title}
                  </h2>
                  <p className="font-editorial text-xl text-studio-gold italic font-light">
                    {story.subtitle}
                  </p>

                  <p className="font-sans text-sm text-studio-muted leading-relaxed font-light">
                    {story.excerpt}
                  </p>

                  <blockquote className="font-serif italic text-studio-text/90 text-sm border-l border-studio-gold/60 pl-4 py-1">
                    "{story.quote}"
                  </blockquote>

                  <div>
                    <Link
                      to={`/stories/${story.slug}`}
                      className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors border-b border-studio-gold pb-1"
                      data-cursor="VIEW"
                    >
                      <span>READ FULL CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
