import React from 'react';

export default function KineticCoordinates() {
  const items = [
    "25.5941° N, 85.1376° E",
    "KANKARBAGH, PATNA",
    "BY COMMISSION ONLY",
    "ARCHIVAL PRESERVATION",
    "KODAK TONE MAPPING",
    "VEDIC STORYTELLING",
    "FINE ART MONOCHROME & GOLD"
  ];

  return (
    <div className="w-full bg-studio-dark/80 border-y border-studio-border/50 py-3 overflow-hidden select-none">
      <div className="flex space-x-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center space-x-8 text-[10px] font-sans tracking-ultra uppercase text-studio-muted/70">
            <span className="hover:text-studio-gold transition-colors">{text}</span>
            <span className="text-studio-gold/60 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
