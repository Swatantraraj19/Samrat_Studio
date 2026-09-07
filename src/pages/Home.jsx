import React from 'react';
import Hero from '../components/sections/Hero';
import KineticCoordinates from '../components/common/KineticCoordinates';
import Introduction from '../components/sections/Introduction';
import FeaturedStories from '../components/sections/FeaturedStories';
import WeddingSection from '../components/sections/WeddingSection';
import BridalSection from '../components/sections/BridalSection';
import ColorScienceSlider from '../components/sections/ColorScienceSlider';
import CouplesSection from '../components/sections/CouplesSection';
import CelebrationsSection from '../components/sections/CelebrationsSection';
import BeyondWedding from '../components/sections/BeyondWedding';
import ServicesIndex from '../components/sections/ServicesIndex';
import AvailabilityMatrix from '../components/sections/AvailabilityMatrix';
import Investment from '../components/sections/Investment';
import TrustSection from '../components/sections/TrustSection';
import AboutSection from '../components/sections/AboutSection';
import DirectorsSignature from '../components/common/DirectorsSignature';
import GalleryPreview from '../components/sections/GalleryPreview';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <Hero />

      {/* KINETIC COORDINATES & TIMELESS LOCATION MARQUEE */}
      <KineticCoordinates />

      {/* 02 — INTRODUCTION / MANIFESTO */}
      <Introduction />

      {/* 03 — FEATURED STORIES */}
      <FeaturedStories />

      {/* 04 — WEDDINGS */}
      <WeddingSection />

      {/* 05 — BRIDAL EDITORIAL */}
      <BridalSection />

      {/* MASTERCLASS UPGRADE: COLOR SCIENCE & LIGHT CRAFT SLIDER */}
      <ColorScienceSlider />

      {/* 06 — COUPLES / PRE-WEDDING */}
      <CouplesSection />

      {/* 07 — CELEBRATIONS (HALDI & MEHNDI) */}
      <CelebrationsSection />

      {/* 08 — BEYOND THE WEDDING (MILESTONES & FAMILY) */}
      <BeyondWedding />

      {/* 09 — NUMBERED SERVICES INDEX */}
      <ServicesIndex />

      {/* MASTERCLASS UPGRADE: SEASON AVAILABILITY MATRIX & DATE CHECK */}
      <AvailabilityMatrix />

      {/* 10 — BESPOKE INVESTMENT */}
      <Investment />

      {/* 11 — TRUST & VERIFIED REVIEWS */}
      <TrustSection />

      {/* 12 — BEHIND THE LENS / PHILOSOPHY */}
      <AboutSection />

      {/* MASTERCLASS UPGRADE: DIRECTOR'S SIGNATURE & ARCHIVAL CERTIFICATE */}
      <DirectorsSignature />

      {/* 13 — CURATED GALLERY PREVIEW & LIGHTBOX */}
      <GalleryPreview showAll={false} />

      {/* 14 — FINAL CINEMATIC CTA */}
      <FinalCTA />
    </>
  );
}
