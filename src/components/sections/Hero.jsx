import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { playShutterSound } from '../../lib/soundEngine';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/sm-1.jpeg',
    tag: 'THE SACRED VOW',
    title: 'Stories that deserve to be',
    highlight: 'remembered.',
    subtitle: 'Vedic Ceremonies • Regal Grandeur • Ambient Bokeh',
    location: 'Patna, Bihar',
    optics: '85mm f/1.4 Prime • Kodak Portra Tone',
    position: 'object-[center_32%]'
  },
  {
    id: 2,
    image: '/images/sm-4.jpeg',
    tag: 'BRIDAL ARCHITECTURE',
    title: 'Presence that commands every',
    highlight: 'heartbeat.',
    subtitle: 'Couture Swirl • Crystal Chandelier • High Fashion',
    location: 'Grand Ballroom, Patna',
    optics: '24-70mm f/2.8 • Fuchsia Satin Science',
    position: 'object-[center_32%]'
  },
  {
    id: 3,
    image: '/images/sm-3.jpeg',
    tag: 'HIGHLAND SOLITUDE',
    title: 'Two souls written in mountain',
    highlight: 'silence.',
    subtitle: 'Cobalt Gown • Pine Forests • Cinematic Escape',
    location: 'Destination Foothills',
    optics: '35mm f/1.4 Wide • Alpine Daylight',
    position: 'object-[center_32%]'
  },
  {
    id: 4,
    image: '/images/sm-9.jpeg',
    tag: 'HEIRLOOM KUNDAN',
    title: 'Between the quiet anticipation and',
    highlight: 'eternity.',
    subtitle: 'Antique Jewelry • Chiaroscuro Light • Sacred Stillness',
    location: 'Patna Studio',
    optics: '90mm f/2.8 Macro • Kundan Specular',
    position: 'object-[center_30%]'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const slideDuration = 3000; // 3 seconds per slide
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    playShutterSound();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    playShutterSound();
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    playShutterSound();
    setCurrentSlide(index);
  };

  // Strict 3-second auto-advance timer (never pauses on mouse hover)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Subtle desktop mouse parallax
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mobile Touch Swipe Support
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    if (e.changedTouches && e.changedTouches[0]) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-screen min-h-[660px] sm:min-h-[700px] flex items-end justify-start overflow-hidden bg-studio-bg select-none touch-pan-y"
    >
      {/* Background Slides with Slow Ken Burns Scale & Crossfade */}
      {HERO_SLIDES.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
          >
            <div
              className={`w-full h-full will-change-transform transition-transform duration-[3000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'
                }`}
              style={{
                transform: isActive
                  ? `scale(1.08) translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`
                  : 'scale(1)'
              }}
            >
              <img
                src={item.image}
                alt={`Samrat Studio — ${item.tag}`}
                className={`w-full h-full object-cover ${item.position || 'object-[center_32%]'} filter brightness-[0.78] contrast-[1.08]`}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        );
      })}

      {/* Atmospheric Golden Light Flare in Top Right */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-studio-gold/15 rounded-full blur-[140px] pointer-events-none z-10 animate-pulse" />

      {/* Cinematic Vignette & Darkroom Gradients */}
      <div className="absolute inset-0 hero-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 hero-bottom-gradient pointer-events-none z-10" />
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none z-10" />


      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-24 sm:pb-32 md:pb-36 w-full flex flex-col justify-end">
        {/* Dynamic Category Pill with Live Shifting Chapter Tag */}
        <div className="flex items-center space-x-2.5 mb-2.5 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-studio-gold shadow-[0_0_8px_#C7A46A] animate-pulse" />
          <p className="text-[10px] sm:text-[11px] font-sans tracking-ultra uppercase text-studio-gold font-semibold">
            {slide.tag} • {slide.location}
          </p>
        </div>

        {/* Balanced Editorial Headline */}
        <h1
          key={slide.id}
          className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-studio-text max-w-2xl tracking-tight leading-[1.12] mb-2.5 animate-fade-in"
        >
          {slide.title} <br className="hidden sm:block" />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-studio-gold-light via-studio-gold to-studio-gold-dark drop-shadow-[0_2px_12px_rgba(199,164,106,0.25)]">
            {slide.highlight}
          </span>
        </h1>

        {/* Dynamic Chapter Subtitle */}
        <p className="font-sans text-[11px] sm:text-xs tracking-widest text-studio-muted uppercase mb-5 max-w-lg font-light">
          {slide.subtitle}
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4 max-w-md">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-studio-gold text-studio-bg hover:bg-studio-gold-light font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(199,164,106,0.2)] hover:scale-[1.02]"
            data-cursor="EXPLORE"
          >
            <span>EXPLORE THE WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-studio-border hover:border-studio-gold bg-studio-bg/60 backdrop-blur-md text-studio-text hover:text-studio-gold font-sans text-xs tracking-widest uppercase transition-all duration-300"
            data-cursor="TALK"
          >
            <span>START A CONVERSATION</span>
          </Link>
        </div>
      </div>

      {/* Cinematic Slide Reel Indicators & Controls */}
      <div className="absolute bottom-6 sm:bottom-32 md:bottom-36 left-6 sm:left-auto sm:right-12 z-20 flex items-center space-x-6">
        {/* Slide Counter Numbers with Progress Line */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {HERO_SLIDES.map((item, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={item.id}
                onClick={() => goToSlide(idx)}
                className="group flex flex-col items-start focus:outline-none p-1"
                aria-label={`Go to slide ${idx + 1}`}
                data-cursor={`SLIDE ${idx + 1}`}
              >
                <div className="flex items-center space-x-1.5">
                  <span
                    className={`font-mono text-[11px] transition-colors duration-300 ${isCurrent
                        ? 'text-studio-gold font-bold'
                        : 'text-studio-muted/60 group-hover:text-studio-text'
                      }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                {/* Progress bar under active slide */}
                <div className="w-8 sm:w-12 h-[2px] bg-studio-border/60 mt-1 relative overflow-hidden">
                  {isCurrent && (
                    <div
                      className="absolute inset-y-0 left-0 bg-studio-gold animate-[grow_3s_linear_infinite]"
                      style={{
                        animationDuration: '3000ms'
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Manual Prev / Next Arrow Switchers */}
        <div className="hidden sm:flex items-center space-x-2 border-l border-studio-border/70 pl-4">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-studio-bg/60 border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold transition-colors"
            aria-label="Previous Slide"
            data-cursor="PREV"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-studio-bg/60 border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold transition-colors"
            aria-label="Next Slide"
            data-cursor="NEXT"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center space-x-2 text-[9px] font-sans tracking-ultra uppercase text-studio-muted/60 animate-bounce">
        <ArrowDown className="w-3.5 h-3.5 text-studio-gold" />
      </div>
    </section>
  );
}
