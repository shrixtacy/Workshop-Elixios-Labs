"use client";

import React from "react";

export default function PhilosophySection() {
  const pillars = [
    {
      num: "01",
      title: "Production-Ready Code",
      desc: "Zero fluff, zero toy apps. Every workshop and cohort focuses on building real-world, deployable software using Next.js 15, AI Agents, and scalable architecture.",
    },
    {
      num: "02",
      title: "Direct Mentorship",
      desc: "Learn directly from senior engineers, system architects, and active open-source maintainers through live coding sessions and interactive code reviews.",
    },
    {
      num: "03",
      title: "Open-Source Ecosystem",
      desc: "Top cohort projects get published under the Elixios Labs GitHub organization, giving students real open-source contributions and portfolio proof.",
    },
    {
      num: "04",
      title: "Active Global Community",
      desc: "Join a dedicated network of passionate builders. Connect in 24/7 Discord channels, collaborate on hackathons, and form project teams.",
    },
  ];

  return (
    <section id="about" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-zinc-950 text-[#d4c5a9] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            // OUR PHILOSOPHY
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#f3ece0]"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            Built For <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>Builders</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 font-light leading-relaxed">
            We don't teach theory from outdated slides. We build high-caliber software alongside developers who want to push boundaries.
          </p>
        </div>

        {/* Dual Grid 4-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 hover:border-[#d4c5a9]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-emerald-400/90 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    PILLAR {item.num}
                  </span>
                  <span className="text-sm font-mono text-[#71717a]">ELIXIOS LABS</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-light text-[#f3ece0] mb-4 group-hover:text-[#d4c5a9] transition-colors"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#71717a]">LEARN MORE</span>
                <span className="text-[#d4c5a9] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
