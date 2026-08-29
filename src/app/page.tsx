"use client";

import React, { useState, useEffect } from "react";
import ParallaxHero from "@/components/ParallaxHero";
import ExpandableHeader from "@/components/ExpandableHeader";
import ThickMarquee from "@/components/ThickMarquee";
import LineupSection from "@/components/LineupSection";
import PhilosophySection from "@/components/PhilosophySection";
import TrackDetailsSection from "@/components/TrackDetailsSection";
import BentoGridSection from "@/components/BentoGridSection";
import FaqSection from "@/components/FaqSection";
import StickyFooter from "@/components/StickyFooter";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Mobile screens (< 768px) display all sections immediately
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsZoomed(true);
      return;
    }

    const handleZoomStatus = (e: Event) => {
      const customEvt = e as CustomEvent<{ isZoomed: boolean }>;
      if (customEvt.detail !== undefined) {
        setIsZoomed(customEvt.detail.isZoomed);
      }
    };

    window.addEventListener("hero-zoom-status", handleZoomStatus);

    if (window.scrollY > 50) {
      setIsZoomed(true);
    }

    return () => {
      window.removeEventListener("hero-zoom-status", handleZoomStatus);
    };
  }, []);

  return (
    <main className={`w-full bg-zinc-950 text-[#d4c5a9] relative ${isZoomed ? "min-h-screen overflow-x-hidden" : "h-screen overflow-hidden"}`}>
      {/* 1. Floating Expandable Header */}
      <ExpandableHeader />

      {/* 2. Parallax Hero */}
      <ParallaxHero />

      {/* 3-9. Remaining Page Sections (Revealed smoothly after CRT zoom on desktop) */}
      <div className={isZoomed ? "block" : "hidden md:hidden"}>
        <ThickMarquee />
        <LineupSection />
        <PhilosophySection />
        <TrackDetailsSection />
        <BentoGridSection />
        <FaqSection />
        <StickyFooter />
      </div>
    </main>
  );
}
