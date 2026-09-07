import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { studioData } from '../../data/studioData';

export default function Footer() {
  return (
    <footer className="bg-studio-dark border-t border-studio-border pt-20 pb-28 md:pb-16 text-studio-text relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Branding & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-studio-border/60">
          <div className="md:col-span-6 space-y-4">
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
              Editorial Studio
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl tracking-wide text-studio-text">
              SAMRAT STUDIO
            </h2>
            <p className="font-sans text-sm text-studio-muted max-w-md leading-relaxed">
              We preserve the cadence of sacred rituals, quiet glances, and emotional heritage for discerning couples and families in Patna and beyond.
            </p>
            <div className="flex items-start space-x-2.5 text-xs text-studio-muted pt-2">
              <MapPin className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
              <span>{studioData.location.full}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-sans tracking-ultra uppercase text-studio-gold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/gallery" className="text-studio-muted hover:text-studio-gold transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-studio-muted hover:text-studio-gold transition-colors">
                  Featured Stories
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-studio-muted hover:text-studio-gold transition-colors">
                  Services & Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-studio-muted hover:text-studio-gold transition-colors">
                  Behind The Lens
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-studio-muted hover:text-studio-gold transition-colors">
                  Check Availability
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Inquire */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-sans tracking-ultra uppercase text-studio-gold mb-4">
              Direct Inquiries
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${studioData.phoneRaw}`}
                className="group flex items-center justify-between py-2 border-b border-studio-border/50 text-studio-text hover:text-studio-gold transition-colors"
              >
                <span>Call Studio</span>
                <Phone className="w-3.5 h-3.5 text-studio-gold group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={studioData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 border-b border-studio-border/50 text-studio-text hover:text-studio-gold transition-colors"
              >
                <span>WhatsApp Concierge</span>
                <MessageSquare className="w-3.5 h-3.5 text-studio-gold group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={studioData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 border-b border-studio-border/50 text-studio-text hover:text-studio-gold transition-colors"
              >
                <span>Google Maps Location</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with signature quote & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-studio-subtle space-y-4 md:space-y-0">
          <p className="font-editorial italic text-studio-muted text-sm">
            "Stories that deserve to be remembered."
          </p>
          <div className="flex items-center space-x-6">
            <span>PATNA, INDIA</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} SAMRAT STUDIO. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
