import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, Check } from 'lucide-react';
import { playShutterSound } from '../../lib/soundEngine';

export default function ColorScienceSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 md:py-36 bg-studio-bg relative border-b border-studio-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-studio-border/60">
          <div>
            <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold flex items-center space-x-2">
              <Sliders className="w-3.5 h-3.5 text-studio-gold" />
              <span>Proprietary Color Science</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
              THE ART OF THE GRADE
            </h2>
          </div>
          <p className="font-sans text-sm text-studio-muted max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Weddings in Bihar feature rich vermilion, antique gold zardozi, and complex ambient incandescent light. We calibrate every frame to protect natural skin tones and heirloom jewelry luster.
          </p>
        </div>

        {/* Interactive Before / After Split Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => {
                setIsDragging(true);
                playShutterSound();
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => {
                setIsDragging(true);
                playShutterSound();
                if (e.touches && e.touches[0]) {
                  handleMove(e.touches[0].clientX);
                }
              }}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] max-h-[560px] overflow-hidden select-none cursor-ew-resize border border-studio-border/80 bg-studio-surface touch-none"
              data-cursor="DRAG"
            >
              {/* After: Signature Grade Image */}
              <img
                src="/images/sm-9.jpeg"
                alt="Samrat Studio Calibrated Color Grade"
                className="absolute inset-0 w-full h-full object-cover object-[center_38%] filter contrast-[1.04] brightness-100"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-studio-bg/85 backdrop-blur-md text-[10px] font-sans tracking-widest text-studio-gold uppercase border border-studio-gold/30">
                Samrat Signature Grade
              </div>

              {/* Before: Raw Sensor Simulation (clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/sm-9.jpeg"
                  alt="Standard Raw Capture"
                  className="absolute inset-0 w-full h-full object-cover object-[center_38%] filter grayscale-[40%] contrast-[0.88] brightness-[0.92]"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none'
                  }}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-studio-bg/85 backdrop-blur-md text-[10px] font-sans tracking-widest text-studio-muted uppercase border border-studio-border">
                  Raw Flat Sensor
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-[2px] bg-studio-gold z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-studio-bg border-2 border-studio-gold flex items-center justify-center shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-studio-gold" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs font-sans tracking-widest text-studio-muted uppercase mt-4">
              ← Drag slider to reveal tone mapping & jewelry highlight separation →
            </p>
          </div>

          {/* Technical Color Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-editorial text-2xl md:text-3xl text-studio-text tracking-wide">
              Documentary Truth Meets Editorial Polish
            </h3>
            <p className="font-sans text-xs md:text-sm text-studio-muted font-light leading-relaxed">
              Most wedding photography suffers from inconsistent skin casts and blown-out highlights under mandap lighting. Our proprietary processing workflow guarantees:
            </p>

            <ul className="space-y-4 text-xs font-sans text-studio-text/90">
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                <span><strong>Natural Skin Tones:</strong> Preserves warmth without unnatural orange or yellow color pollution.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                <span><strong>Heirloom Jewelry Luster:</strong> Kundan, polki and gold embroidery retain their crisp metallic texture.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                <span><strong>Chiaroscuro Shadow Preservation:</strong> Deep black levels without muddy noise or lost fabric grain.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
