import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { studioData } from '../../data/studioData';
import { playShutterSound } from '../../lib/soundEngine';

export default function AvailabilityMatrix() {
  const [testDate, setTestDate] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!testDate) return;
    playShutterSound();
    setChecked(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${studioData.whatsapp}?text=${encodeURIComponent(
    `Hi Samrat Studio, I checked availability for my celebration on ${testDate}. Please let me know if the studio team is available.`
  )}`;

  return (
    <section className="py-20 md:py-32 bg-studio-dark relative border-b border-studio-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="bg-studio-surface/80 border border-studio-border/80 p-8 md:p-14 relative">
          {/* Subtle gold badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-studio-border/60 gap-4">
            <div>
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Season 2024 – 2025 Calendar
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-studio-text tracking-wide uppercase mt-1">
                LIMITED TO 24 COMMISSIONS
              </h3>
            </div>

            <div className="flex items-center space-x-3 bg-studio-bg px-5 py-2.5 border border-studio-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sans tracking-widest uppercase text-studio-text">
                Status: <strong>75% Reserved</strong> (6 Dates Open)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
            <div className="lg:col-span-6 space-y-4">
              <p className="font-editorial text-2xl text-studio-text font-normal">
                "We do not mass-produce wedding albums. We accept a strictly capped number of celebrations so every family receives our undivided creative presence."
              </p>
              <p className="font-sans text-xs text-studio-muted leading-relaxed font-light">
                To guarantee director-level attendance and custom color mastering, our team covers only one primary wedding per weekend across Patna and destination venues.
              </p>
            </div>

            {/* Interactive Date Checker Tool */}
            <div className="lg:col-span-6 bg-studio-bg p-6 md:p-8 border border-studio-border/70 space-y-4">
              <p className="text-[11px] font-sans tracking-widest uppercase text-studio-gold font-semibold flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-studio-gold" />
                <span>Check Your Celebration Date</span>
              </p>

              {!checked ? (
                <form onSubmit={handleCheck} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-sans tracking-widest uppercase text-studio-muted block mb-1.5">
                      Select Your Event Date
                    </label>
                    <input
                      type="date"
                      required
                      value={testDate}
                      onChange={(e) => setTestDate(e.target.value)}
                      className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-studio-gold text-studio-bg hover:bg-studio-gold-light text-xs font-sans font-semibold tracking-widest uppercase transition-all shadow-lg flex items-center justify-center space-x-2"
                    data-cursor="CHECK"
                  >
                    <span>CHECK DATE AVAILABILITY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-start space-x-3 p-4 bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="block font-sans text-sm text-emerald-300">
                        Date Tentatively Open: {testDate}
                      </strong>
                      Our lead team has availability for this weekend. We recommend initiating your inquiry today to place a 48-hour priority hold.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-studio-gold text-studio-bg hover:bg-studio-gold-light text-center text-xs font-sans font-bold tracking-widest uppercase transition-colors"
                    >
                      Hold Date on WhatsApp ↗
                    </a>
                    <button
                      onClick={() => setChecked(false)}
                      className="py-3 px-4 border border-studio-border text-studio-muted hover:text-studio-text text-xs font-sans tracking-widest uppercase transition-colors"
                    >
                      Check Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
