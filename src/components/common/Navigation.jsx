import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { studioData } from '../../data/studioData';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & prevent body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'WORK', to: '/gallery' },
    { label: 'STORIES', to: '/stories' },
    { label: 'SERVICES', to: '/services' },
    { label: 'ABOUT', to: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-studio-bg/90 backdrop-blur-md border-b border-studio-border py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex flex-col items-start focus:outline-none"
            data-cursor="HOME"
          >
            <span className="font-editorial text-xl md:text-2xl tracking-widest text-studio-text group-hover:text-studio-gold transition-colors duration-300">
              SAMRAT STUDIO
            </span>
            <span className="text-[9px] font-sans tracking-ultra uppercase text-studio-muted group-hover:text-studio-gold-light transition-colors">
              Patna, Bihar
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    if (location.pathname === link.to) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`text-[12px] font-sans tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-studio-gold font-medium'
                      : 'text-studio-text/80 hover:text-studio-gold'
                  }`}
                  data-cursor="OPEN"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-studio-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 text-[12px] font-sans tracking-widest uppercase px-5 py-2.5 border border-studio-gold/40 hover:border-studio-gold bg-studio-gold/5 hover:bg-studio-gold text-studio-gold hover:text-studio-bg transition-all duration-300 rounded-none"
              data-cursor="TALK"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-studio-text hover:text-studio-gold transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-studio-bg flex flex-col justify-between px-8 py-20 overflow-y-auto max-h-screen transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="space-y-6 mt-8">
          <p className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Navigation Index
          </p>
          <nav className="space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (location.pathname === link.to) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`block font-editorial text-3xl tracking-wide transition-colors ${
                  location.pathname === link.to ? 'text-studio-gold' : 'text-studio-text hover:text-studio-gold'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-editorial text-3xl text-studio-gold hover:text-studio-gold-light transition-colors tracking-wide pt-4"
            >
              START A CONVERSATION ↗
            </Link>
          </nav>
        </div>

        {/* Mobile menu bottom contact */}
        <div className="border-t border-studio-border pt-6 space-y-3">
          <p className="text-xs text-studio-muted">
            {studioData.location.full}
          </p>
          <div className="flex items-center space-x-6 text-xs text-studio-gold pt-2">
            <a
              href={`tel:${studioData.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{studioData.phoneFormatted}</span>
            </a>
            <a
              href={studioData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
