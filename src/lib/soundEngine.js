/**
 * Web Audio API based procedural sound engine for Samrat Studio.
 * Zero external audio files required - instant, lightweight, ultra-crisp.
 */

let audioCtx = null;
let ambientOsc1 = null;
let ambientOsc2 = null;
let ambientGain = null;
let isSoundEnabled = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Procedural mechanical camera shutter sound (smooth, tactile, vintage)
 */
export function playShutterSound() {
  if (!isSoundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Shutter click 1 (curtain opens)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(320, now);
    osc1.frequency.exponentialRampToValueAtTime(80, now + 0.04);

    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.05);

    // Shutter click 2 (curtain closes after short delay)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(440, now + 0.06);
    osc2.frequency.exponentialRampToValueAtTime(60, now + 0.12);

    gain2.gain.setValueAtTime(0.15, now + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.06);
    osc2.stop(now + 0.13);
  } catch (e) {
    // Graceful fallback
  }
}

/**
 * Procedural warm cello/tanpura-inspired ambient drone
 */
export function toggleAmbientSound(enable) {
  isSoundEnabled = enable;
  const ctx = getAudioContext();
  if (!ctx) return;

  if (enable) {
    try {
      if (ambientGain) {
        ambientGain.gain.setTargetAtTime(0.04, ctx.currentTime, 0.5);
        return;
      }

      const now = ctx.currentTime;
      ambientGain = ctx.createGain();
      ambientGain.gain.setValueAtTime(0.001, now);
      ambientGain.gain.linearRampToValueAtTime(0.035, now + 1.5);

      // Low fundamental warm drone (C2 - 65.41 Hz)
      ambientOsc1 = ctx.createOscillator();
      ambientOsc1.type = 'sine';
      ambientOsc1.frequency.setValueAtTime(65.41, now);

      // Warm overtone fifth (G2 - 98 Hz)
      ambientOsc2 = ctx.createOscillator();
      ambientOsc2.type = 'sine';
      ambientOsc2.frequency.setValueAtTime(98.0, now);

      // Subtle low pass filter for warm analog feel
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, now);

      ambientOsc1.connect(filter);
      ambientOsc2.connect(filter);
      filter.connect(ambientGain);
      ambientGain.connect(ctx.destination);

      ambientOsc1.start(now);
      ambientOsc2.start(now);
    } catch (e) {
      // Audio context policy fallback
    }
  } else {
    if (ambientGain && ctx) {
      try {
        ambientGain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.4);
      } catch (e) {}
    }
  }
}

export function getSoundStatus() {
  return isSoundEnabled;
}
