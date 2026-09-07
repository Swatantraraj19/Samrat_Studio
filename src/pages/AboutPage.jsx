import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, MessageSquare, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { studioData } from '../data/studioData';
import TrustSection from '../components/sections/TrustSection';
import DirectorsSignature from '../components/common/DirectorsSignature';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-studio-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
            About Samrat Studio Patna
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-studio-text tracking-wide uppercase mt-2">
            BEHIND THE LENS
          </h1>
          <p className="font-editorial text-2xl text-studio-gold italic font-light mt-4">
            "We believe that photographs should grow more valuable with every passing decade."
          </p>
        </div>

        {/* Studio Image & Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-6 relative group overflow-hidden bg-studio-surface border border-studio-border/60 aspect-[4/5]">
            <img
              src="/images/sm-1.jpeg"
              alt="The Art of Emotional Storytelling — Samrat Studio"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4 bg-studio-dark/95 border-t border-studio-border/60 text-xs font-sans text-studio-muted">
              Patna, Bihar • Preserving Cultural Heritage
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-studio-text tracking-wide uppercase">
              REVERENCE FOR THE MOMENT
            </h2>
            <p className="font-sans text-sm md:text-base text-studio-muted font-light leading-relaxed">
              Based in the cultural heart of Patna on 90 Feet Road, Kankarbagh, Samrat Studio operates as an editorial photography collective. We approach weddings not as a frantic checklist of poses, but as an unfolding human story that deserves time, patience, and dignity.
            </p>
            <p className="font-sans text-sm md:text-base text-studio-muted font-light leading-relaxed">
              Whether documenting the solemnity of Vedic wedding rituals, the spontaneous laughter of turmeric ceremonies, or intimate couple portraits away from the crowd, our team remains unobtrusive, calm, and deeply attentive to the people in front of our lenses.
            </p>
            <p className="font-sans text-sm md:text-base text-studio-muted font-light leading-relaxed">
              With an average 4.8 / 5 rating across 78+ verified client reviews, our reputation has been forged through uncompromising consistency, reliable timelines, and images that evoke how celebrations truly felt.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-studio-gold text-studio-bg font-sans text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-studio-gold-light"
                data-cursor="TALK"
              >
                <span>CONNECT WITH OUR TEAM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${studioData.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-6 py-3 border border-studio-border text-studio-text hover:border-studio-gold font-sans text-xs tracking-widest uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-studio-gold" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Studio Location & Physical Visit Section */}
        <div className="bg-studio-dark p-8 md:p-14 border border-studio-border/60 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-[10px] font-sans tracking-ultra uppercase text-studio-gold">
                Studio Address
              </span>
              <h3 className="font-editorial text-3xl text-studio-text tracking-wide uppercase">
                VISIT US IN KANKARBAGH
              </h3>
              <p className="font-sans text-sm text-studio-muted font-light leading-relaxed max-w-lg">
                We invite you to visit our physical studio to view our handcrafted fine art print albums, touch the archival papers, and discuss your celebration timeline over coffee.
              </p>
              <div className="flex items-start space-x-3 text-sm text-studio-text pt-2">
                <MapPin className="w-5 h-5 text-studio-gold shrink-0 mt-0.5" />
                <span>{studioData.location.full}</span>
              </div>
              <p className="text-xs text-studio-muted font-sans pt-1">
                Studio Hours: {studioData.hours}
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col space-y-3">
              <a
                href={studioData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-studio-surface border border-studio-gold/40 hover:border-studio-gold text-studio-gold text-xs font-sans tracking-widest uppercase transition-colors"
                data-cursor="MAPS"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={studioData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 border border-studio-border hover:border-studio-gold text-studio-text hover:text-studio-gold text-xs font-sans tracking-widest uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-studio-gold" />
                <span>WHATSAPP STUDIO CONCIERGE</span>
              </a>
            </div>
          </div>
        </div>

        {/* Director's Personal Note & Archival Certification */}
        <DirectorsSignature />

        {/* Real Customer Feedback */}
        <TrustSection />
      </div>
    </div>
  );
}
