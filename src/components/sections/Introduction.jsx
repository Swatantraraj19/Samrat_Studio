import React from 'react';

export default function Introduction() {
  return (
    <section className="py-24 md:py-36 bg-studio-bg relative border-b border-studio-border/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="space-y-6 md:space-y-8">
          {/* Small label */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-studio-gold" />
            <p className="text-[11px] font-sans tracking-ultra uppercase text-studio-gold">
              EVERY CELEBRATION HAS A STORY.
            </p>
          </div>

          {/* Large headline */}
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-studio-text leading-[1.18] tracking-tight font-normal">
            "We don’t simply photograph moments. <br className="hidden sm:block" />
            <span className="italic text-studio-gold font-light">We preserve how they felt."</span>
          </h2>

          {/* Supporting paragraph */}
          <p className="font-sans text-base sm:text-lg text-studio-muted leading-relaxed max-w-2xl font-light">
            From the quiet anticipation before a ceremony to the laughter, tears, and spontaneous celebrations that follow, every story deserves to be remembered beautifully. Based in Patna, our philosophy is anchored in unforced intimacy, emotional empathy, and timeless editorial elegance.
          </p>

          {/* Minimalist statistics counter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-studio-border/60">
            <div>
              <p className="font-editorial text-3xl sm:text-4xl text-studio-text">4.8 / 5</p>
              <p className="text-[11px] font-sans tracking-widest text-studio-muted uppercase mt-1">
                Client Rating
              </p>
            </div>
            <div>
              <p className="font-editorial text-3xl sm:text-4xl text-studio-text">78+</p>
              <p className="text-[11px] font-sans tracking-widest text-studio-muted uppercase mt-1">
                Verified Reviews
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-editorial text-3xl sm:text-4xl text-studio-gold">Patna</p>
              <p className="text-[11px] font-sans tracking-widest text-studio-muted uppercase mt-1">
                Kankarbagh Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
