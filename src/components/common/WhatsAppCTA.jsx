import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { studioData } from '../../data/studioData';

export default function WhatsAppCTA() {
  const whatsappUrl = `https://wa.me/${studioData.whatsapp}?text=${encodeURIComponent(
    studioData.whatsappDefaultMsg
  )}`;

  return (
    <aside
      aria-label="Contact quick actions"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-studio-dark/90 hover:bg-studio-gold text-studio-gold hover:text-studio-bg border border-studio-gold/40 hover:border-studio-gold shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 text-[11px] font-sans tracking-widest font-semibold"
        data-cursor="CHAT"
        title="Inquire on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform text-studio-gold group-hover:text-studio-bg" />
        <span>WHATSAPP</span>
      </a>
    </aside>
  );
}
