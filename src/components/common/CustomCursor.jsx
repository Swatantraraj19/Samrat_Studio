import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setLabel(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const link = e.target.closest('a, button, [role="button"]');
        if (link) {
          setLabel('');
          setIsHovered(true);
        } else {
          setLabel('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
          label
            ? 'w-12 h-12 bg-studio-gold text-studio-bg font-sans text-[8.5px] font-bold tracking-wider text-center p-1 uppercase shadow-[0_4px_16px_rgba(199,164,106,0.35)]'
            : isHovered
            ? 'w-6 h-6 border border-studio-gold/70 bg-studio-gold/15'
            : 'w-2.5 h-2.5 bg-studio-text/50'
        }`}
      >
        {label && <span className="leading-none">{label}</span>}
      </div>
    </div>
  );
}
