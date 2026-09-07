import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { studioData } from '../../data/studioData';

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${studioData.whatsapp}?text=${encodeURIComponent(
    studioData.whatsappDefaultMsg
  )}`;

  return (
    <section className="py-28 md:py-44 bg-studio-bg relative overflow-hidden border-t border-studio-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-studio-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="text-[11px] font-sans tracking-ultra uppercase text-studio-gold">
          Your Celebration • Our Craft
        </span>

        {/* Dramatic Typography */}
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-studio-text tracking-tight uppercase leading-[1.05] mt-4 mb-6">
          YOUR STORY <br />
          DESERVES TO BE <br />
          <span className="italic text-studio-gold font-light">REMEMBERED.</span>
        </h2>

        <p className="font-editorial text-xl sm:text-2xl text-studio-muted italic font-light max-w-xl mx-auto mb-10">
          "Let’s create something you’ll want to relive for decades to come."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-10 py-4 bg-studio-gold text-studio-bg hover:bg-studio-gold-light font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-2xl"
            data-cursor="CONVERSE"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-studio-border hover:border-studio-gold bg-studio-dark/60 backdrop-blur-sm text-studio-text hover:text-studio-gold font-sans text-xs tracking-widest uppercase transition-all duration-300"
            data-cursor="WHATSAPP"
          >
            <MessageCircle className="w-4 h-4 text-studio-gold" />
            <span>DISCUSS ON WHATSAPP</span>
          </a>
        </div>

        {/* Studio Contact Quick Footnote */}
        <div className="mt-14 pt-8 border-t border-studio-border/40 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs font-sans text-studio-muted">
          <span>Studio Phone: {studioData.phoneFormatted}</span>
          <span className="hidden sm:inline">•</span>
          <span>90 Feet Rd, Kankarbagh, Patna</span>
        </div>
      </div>
    </section>
  );
}
