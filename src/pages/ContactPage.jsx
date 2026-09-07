import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { studioData } from '../data/studioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Photography',
    eventDate: '',
    location: 'Patna, Bihar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message with user's specific answers
    const message = `Hi Samrat Studio, I would like to inquire about ${formData.eventType}.\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate || 'Not fixed yet'}\nLocation: ${formData.location}\nDetails: ${formData.message}`;

    const waUrl = `https://wa.me/${studioData.whatsapp}?text=${encodeURIComponent(message)}`;
    // Open in new window
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            Inquire & Check Availability
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            START A CONVERSATION
          </h1>
          <p className="font-sans text-base text-studio-muted font-light leading-relaxed mt-4">
            Tell us about your celebration, your date and what matters most to you. We take on a limited number of commissions each season to ensure thorough creative attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Editorial Inquiry Form */}
          <div className="lg:col-span-7 bg-studio-dark p-8 md:p-12 border border-studio-border/60">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-studio-gold mx-auto" />
                <h3 className="font-editorial text-3xl text-studio-text tracking-wide">
                  Thank You, {formData.name}
                </h3>
                <p className="font-sans text-sm text-studio-muted max-w-md mx-auto font-light leading-relaxed">
                  Your inquiry details have been composed and opened in WhatsApp. Our studio director will review your event date and get back to you promptly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-sans tracking-widest uppercase text-studio-gold hover:underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text placeholder:text-studio-muted/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text placeholder:text-studio-muted/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                      Type of Celebration *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text focus:outline-none transition-colors"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Wedding Films">Wedding Films & Videography</option>
                      <option value="Engagement Shoot">Engagement Shoot</option>
                      <option value="Pre-Wedding Story">Pre-Wedding Story</option>
                      <option value="Bridal Editorial">Bridal Editorial Session</option>
                      <option value="Haldi & Mehndi Festivities">Haldi & Mehndi Festivities</option>
                      <option value="Milestones & Family Portrait">Milestones & Family Portrait</option>
                      <option value="Studio Rental">Studio Rental & Portraits</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                      Anticipated Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                    Event Venue / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Patna, Rajgir, Bodh Gaya or Destination"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text placeholder:text-studio-muted/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] font-sans tracking-widest uppercase text-studio-muted">
                    Tell Us About Your Story & Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share any details about your events, specific rituals, or what is most important to you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-studio-surface border border-studio-border focus:border-studio-gold px-4 py-3 text-sm text-studio-text placeholder:text-studio-muted/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-studio-gold text-studio-bg hover:bg-studio-gold-light font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
                  data-cursor="SUBMIT"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY & CONNECT ON WHATSAPP</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Studio Contact & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-studio-dark border border-studio-border/60 space-y-6">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Direct Contact
              </span>

              <div className="space-y-4">
                <a
                  href={`tel:${studioData.phoneRaw}`}
                  className="group flex items-start space-x-4 p-4 bg-studio-surface border border-studio-border hover:border-studio-gold transition-colors"
                  data-cursor="CALL"
                >
                  <Phone className="w-5 h-5 text-studio-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-studio-muted block">
                      Direct Studio Line
                    </span>
                    <span className="font-sans text-base text-studio-text group-hover:text-studio-gold font-medium">
                      {studioData.phoneFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={studioData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4 p-4 bg-studio-surface border border-studio-border hover:border-studio-gold transition-colors"
                  data-cursor="CHAT"
                >
                  <MessageCircle className="w-5 h-5 text-studio-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-studio-muted block">
                      WhatsApp Studio Concierge
                    </span>
                    <span className="font-sans text-base text-studio-text group-hover:text-studio-gold font-medium">
                      +91 82073 45548
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Studio Physical Location */}
            <div className="p-8 bg-studio-dark border border-studio-border/60 space-y-4">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Studio Address
              </span>
              <div className="flex items-start space-x-3 text-sm text-studio-text">
                <MapPin className="w-5 h-5 text-studio-gold shrink-0 mt-0.5" />
                <p className="font-sans font-light leading-relaxed">
                  {studioData.location.full}
                </p>
              </div>

              <p className="text-xs font-sans text-studio-muted pt-1">
                Studio Hours: {studioData.hours}
              </p>

              <div className="pt-2">
                <a
                  href={studioData.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-ultra uppercase text-studio-gold hover:text-studio-text transition-colors"
                  data-cursor="MAPS"
                >
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
