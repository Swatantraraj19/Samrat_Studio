import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import CustomCursor from '../common/CustomCursor';
import Preloader from '../common/Preloader';
import WebGLAtmosphere from '../common/WebGLAtmosphere';
import WhatsAppCTA from '../common/WhatsAppCTA';

export default function Layout({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lenis smooth scroll initialization
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-studio-bg text-studio-text selection:bg-studio-gold selection:text-studio-bg">
      {/* Cinematic Brand Preloader on First Visit */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Subtle WebGL golden particle depth */}
      <WebGLAtmosphere />

      {/* Bespoke Desktop Cursor */}
      <CustomCursor />

      {/* Primary Header */}
      <Navigation />

      {/* Main Routed Page Content */}
      <main className="relative z-20 focus:outline-none" id="main-content">
        {children}
      </main>

      {/* Floating & Mobile Sticky WhatsApp Actions */}
      <WhatsAppCTA />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
