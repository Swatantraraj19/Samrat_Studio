import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Film, MapPin } from 'lucide-react';
import { playShutterSound } from '../../lib/soundEngine';

export default function Lightbox({
  isOpen,
  currentIndex,
  images,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    // Trigger soft shutter click on open
    playShutterSound();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        playShutterSound();
        onPrev();
      }
      if (e.key === 'ArrowRight') {
        playShutterSound();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Mobile touch swipe gestures
  const touchStartX = React.useRef(null);

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
        playShutterSound();
        onNext();
      } else if (diff < -45) {
        playShutterSound();
        onPrev();
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const exif = currentItem?.exif;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 bg-[#060606]/98 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8 animate-fade-in touch-pan-y"
    >
      {/* Lightbox Top Header with 35mm Analog Negative Contact Sheet Stamp */}
      <div className="flex items-center justify-between text-studio-text border-b border-studio-border/60 pb-4">
        <div className="flex items-center space-x-4">
          <span className="px-2 py-0.5 bg-studio-surface border border-studio-border text-[9px] font-mono tracking-widest text-studio-gold">
            {exif?.frame || `FRAME 0${currentIndex + 1}A // SAMRAT KODAK`}
          </span>
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold block">
              {currentItem?.category || 'EXHIBITION'}
            </span>
            <h2 className="font-editorial text-lg md:text-xl text-studio-text tracking-wider">
              {currentItem?.title || 'Samrat Studio Archive'}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <span className="text-xs font-mono tracking-widest text-studio-muted">
            [{currentIndex + 1} / {images.length}]
          </span>
          <button
            onClick={onClose}
            className="p-2 text-studio-text hover:text-studio-gold transition-colors focus:outline-none"
            aria-label="Close Lightbox"
            data-cursor="CLOSE"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
        {/* Navigation Previous */}
        <button
          onClick={() => {
            playShutterSound();
            onPrev();
          }}
          className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-studio-bg/70 border border-studio-border text-studio-text hover:text-studio-gold hover:border-studio-gold/50 transition-all duration-200"
          aria-label="Previous Image"
          data-cursor="PREV"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image with Film Border Silhouette */}
        <div className="max-h-[72vh] max-w-full flex items-center justify-center p-2 select-none relative group">
          <img
            src={currentItem?.image || currentItem?.url}
            alt={currentItem?.title || currentItem?.caption || 'Samrat Studio Photograph'}
            className="max-h-[70vh] max-w-[90vw] md:max-w-[78vw] object-contain shadow-2xl transition-all duration-500 border border-studio-border/30"
          />

          {/* Floating Optics & EXIF Stamp on Bottom Left of Image */}
          {exif && (
            <div className="hidden sm:flex absolute bottom-4 left-6 items-center space-x-3 bg-studio-bg/90 backdrop-blur-md px-3 py-1.5 border border-studio-border/70 text-[10px] font-mono text-studio-muted">
              <Camera className="w-3 h-3 text-studio-gold" />
              <span>{exif.lens}</span>
              <span>•</span>
              <span className="text-studio-text">{exif.settings}</span>
              <span>•</span>
              <span className="text-studio-gold">{exif.filmSim}</span>
            </div>
          )}
        </div>

        {/* Navigation Next */}
        <button
          onClick={() => {
            playShutterSound();
            onNext();
          }}
          className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-studio-bg/70 border border-studio-border text-studio-text hover:text-studio-gold hover:border-studio-gold/50 transition-all duration-200"
          aria-label="Next Image"
          data-cursor="NEXT"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Footer Details */}
      <div className="pt-3 border-t border-studio-border/60 text-studio-muted text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="font-serif italic text-studio-text/90 max-w-xl">
          "{currentItem?.description || currentItem?.caption || 'Capturing moments that define a lifetime.'}"
        </p>
        <div className="flex items-center space-x-4 text-[10px] font-mono text-studio-gold uppercase">
          <span className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>{exif?.locationCoord || 'Patna, Bihar'}</span>
          </span>
          <span>•</span>
          <span>ARCHIVAL MASTER NEGATIVE</span>
        </div>
      </div>
    </div>
  );
}
