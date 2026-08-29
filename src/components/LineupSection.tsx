"use client";

import React, { useState } from "react";
import OptionWheel from "./OptionWheel/OptionWheel";
import LineSidebar from "./LineSidebar/LineSidebar";

export default function LineupSection() {
  const tracks = [
    "Full-Stack AI",
    "Web3 Systems",
    "System Design",
    "DevOps & Cloud",
    "UI/UX Architecture",
    "Spatial Computing",
  ];

  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  return (
    <section id="workshops" className="w-full py-20 px-4 sm:px-8 md:px-12 bg-zinc-950 text-[#d4c5a9] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with LineSidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              // UPCOMING LINEUP & TRACKS
            </span>
            <h2 
              className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#f3ece0]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Featured <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>Workshop</span> & Tracks
            </h2>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <LineSidebar
              items={["Live Workshop", "Tracks Explorer", "Cohorts 1.0", "Community"]}
              accentColor="#d4c5a9"
              textColor="#71717a"
              markerColor="#3f3f46"
            />
          </div>
        </div>

        {/* Dual Grid Layout: Featured Live Workshop Left + OptionWheel Tracks Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Featured Live Workshop Card (The 1 Live Workshop Lined Up) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>REGISTRATIONS OPEN</span>
                </div>
                <span className="text-xs font-mono text-[#a1a1aa]">3 WEEKS LIVE • SEPT 2026</span>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl sm:text-4xl font-light text-[#f3ece0] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                Full-Stack AI Agents & <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>Parallax Web Apps</span>
              </h3>

              <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
                Master production-grade AI agent orchestrations, 3D parallax web interactions, and modern Next.js 15 architecture through hands-on building.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js 15", "TailwindCSS", "AI Agents", "Three.js", "TypeScript"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#d4c5a9] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Action */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#71717a] block font-mono">LIMITED SLOTS</span>
                <span className="text-lg font-semibold text-[#f3ece0]">Early Bird Open</span>
              </div>

              <a
                href="#register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4c5a9] text-zinc-950 font-medium text-sm hover:bg-white transition-all shadow-lg group-hover:scale-105"
              >
                <span>Register Now</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: React Bits OptionWheel Track Selector (Minimalism + Maximalism) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-6 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">
                EXPLORE FUTURE TRACKS
              </span>
              <span className="text-xs font-mono text-emerald-400">COMING SOON</span>
            </div>

            {/* OptionWheel Component */}
            <div className="w-full h-64 relative my-auto">
              <OptionWheel
                items={tracks}
                defaultSelected={activeTrackIndex}
                onChange={(idx) => setActiveTrackIndex(idx)}
                textColor="#71717a"
                activeColor="#d4c5a9"
                fontSize={2.2}
                spacing={1.3}
                curve={1.2}
                tilt={7}
                blur={1.5}
              />
            </div>

            {/* Selected Track Teaser Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between mt-4">
              <div>
                <span className="text-xs font-mono text-[#a1a1aa] block">ACTIVE SELECTION</span>
                <h4 className="text-base font-medium text-[#f3ece0]">{tracks[activeTrackIndex]}</h4>
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => alert(`Subscribed for ${tracks[activeTrackIndex]} launch updates!`)}
                className="px-4 py-2 rounded-xl bg-white/10 text-xs text-[#d4c5a9] hover:bg-white/20 transition-colors"
              >
                Notify Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
