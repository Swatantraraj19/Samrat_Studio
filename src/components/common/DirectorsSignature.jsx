import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function DirectorsSignature() {
  return (
    <section className="py-20 md:py-28 bg-studio-dark relative border-b border-studio-border/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
          Curator's Manifesto
        </span>

        <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-studio-text leading-snug font-light italic mt-4 max-w-2xl mx-auto">
          "A photograph is the only tangible thing that remains when the flowers have faded and the music has quieted down. Treat it as your family’s foremost heirloom."
        </p>

        {/* Elegant Handwritten Signature Graphic */}
        <div className="my-8 flex flex-col items-center justify-center">
          <svg
            className="w-48 sm:w-64 h-20 text-studio-gold/80"
            viewBox="0 0 300 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 70 C 40 20, 60 90, 80 40 C 95 10, 110 80, 130 50 C 145 30, 160 70, 180 45 C 200 25, 215 65, 240 40 C 260 20, 280 80, 290 50"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 85 L 260 75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
          <p className="text-xs font-sans tracking-widest uppercase text-studio-text font-semibold mt-1">
            Samrat Studio • Creative Direction
          </p>
          <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-muted mt-0.5">
            Kankarbagh, Patna
          </p>
        </div>

        {/* Archival Print Certificate Badge */}
        <div className="mt-8 pt-8 border-t border-studio-border/60 inline-flex flex-wrap items-center justify-center gap-6 text-xs text-studio-muted font-sans">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-studio-gold" />
            <span>100% Acid-Free Cotton Rag</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-studio-gold" />
            <span>200-Year Lightfast Guarantee</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-studio-gold" />
            <span>Handcrafted in India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
