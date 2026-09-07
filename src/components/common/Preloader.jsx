import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 400 : 1200;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsClosing(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-studio-bg flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isClosing ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6 max-w-md w-full">
        <p className="text-[11px] font-sans tracking-ultra uppercase text-studio-gold mb-3 animate-fade-in">
          Patna, India
        </p>
        <h1 className="font-editorial text-3xl md:text-5xl tracking-widest text-studio-text mb-6">
          SAMRAT STUDIO
        </h1>
        
        {/* Progress indicator */}
        <div className="w-48 h-[1px] bg-studio-border mx-auto relative overflow-hidden">
          <div
            className="h-full bg-studio-gold transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] font-sans tracking-widest text-studio-muted mt-3">
          {progress}%
        </p>
      </div>
    </div>
  );
}
