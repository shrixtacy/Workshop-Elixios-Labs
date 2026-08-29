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
  return (
    <main className="w-full min-h-screen bg-zinc-950 overflow-x-hidden relative text-[#d4c5a9]">
      {/* 1. Floating Expandable Header (Dual Grid Dropdown) */}
      <ExpandableHeader />

      {/* 2. Parallax Hero (Desktop -> One-Way Zoom into Hero) */}
      <ParallaxHero />

      {/* 3. Thick Infinite Horizontal Scroll Marquee */}
      <ThickMarquee />

      {/* 4. Live Workshop Spotlight & OptionWheel Tracks Selector */}
      <LineupSection />

      {/* 5. Our Philosophy / Why Elixios Labs Dual Grid */}
      <PhilosophySection />

      {/* 6. Program Formats (Workshops vs Bootcamps vs Cohorts 1.0) */}
      <TrackDetailsSection />

      {/* 7. Ecosystem & Community Bento Grid */}
      <BentoGridSection />

      {/* 8. Interactive FAQ Accordion */}
      <FaqSection />

      {/* 9. Sticky Reveal Footer with React Bits TextPressure ("WORKSHOPS") */}
      <StickyFooter />
    </main>
  );
}
