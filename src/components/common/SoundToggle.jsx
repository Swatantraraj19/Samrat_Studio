import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toggleAmbientSound, playShutterSound } from '../../lib/soundEngine';

export default function SoundToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    const nextState = !isEnabled;
    setIsEnabled(nextState);
    toggleAmbientSound(nextState);
    if (nextState) {
      setTimeout(() => playShutterSound(), 100);
    }
  };

  return (
    <aside
      aria-label="Soundscape toggle"
      className="fixed bottom-8 left-8 z-30 hidden sm:flex items-center space-x-3"
    >
      <button
        onClick={handleToggle}
        className="group flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-studio-dark/90 hover:bg-studio-surface border border-studio-border hover:border-studio-gold/40 text-studio-text hover:text-studio-gold shadow-2xl backdrop-blur-md transition-all duration-300 text-[11px] font-sans tracking-widest uppercase"
        data-cursor={isEnabled ? 'MUTE' : 'AUDIO'}
        title="Toggle Ambient Audio & Shutter Effects"
      >
        {isEnabled ? (
          <>
            {/* Audio equalizing animation bars */}
            <div className="flex items-end space-x-0.5 h-3">
              <span className="w-0.5 bg-studio-gold animate-[pulse_0.8s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-studio-gold animate-[pulse_1.2s_ease-in-out_infinite] h-2" />
              <span className="w-0.5 bg-studio-gold animate-[pulse_0.6s_ease-in-out_infinite] h-3.5" />
            </div>
            <span className="text-studio-gold font-medium">SOUND ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-studio-muted group-hover:text-studio-gold transition-colors" />
            <span className="text-studio-muted group-hover:text-studio-gold">SOUND OFF</span>
          </>
        )}
      </button>
    </aside>
  );
}
