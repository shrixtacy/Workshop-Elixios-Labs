"use client";

import React from "react";

export default function TrackDetailsSection() {
  const formats = [
    {
      badge: "INTENSIVE FORMAT",
      title: "Live Workshops",
      duration: "1 to 3 Days",
      status: "1 Live Now",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      description: "Fast-paced deep dives into cutting-edge tech like Full-Stack AI, Parallax Web UI, and Web3 Architecture.",
      features: ["Live interactive coding", "Single project build", "Recorded sessions access", "Q&A with mentors"],
      cta: "Explore Workshops →",
      link: "#workshops",
    },
    {
      badge: "COHORT FORMAT",
      title: "Bootcamps",
      duration: "4 to 6 Weeks",
      status: "Coming Soon",
      statusColor: "text-[#d4c5a9] bg-white/5 border-white/10",
      description: "Comprehensive end-to-end curriculum designed to take developers from intermediate to production-grade engineers.",
      features: ["3 Capstone projects", "Weekly 1-on-1 feedback", "System design modules", "Certificate of Mastery"],
      cta: "Join Bootcamp Waitlist →",
      link: "#waitlist",
    },
    {
      badge: "ELITE FORMAT",
      title: "Cohorts 1.0",
      duration: "8 to 12 Weeks",
      status: "Coming Soon",
      statusColor: "text-[#d4c5a9] bg-white/5 border-white/10",
      description: "Selective, master-level cohort for developers building open-source tools and enterprise-ready products.",
      features: ["Open-source publication", "Direct industry referrals", "Dedicated team sprint", "Lifetime alumni network"],
      cta: "Apply for Cohort 1.0 →",
      link: "#apply",
    },
  ];

  return (
    <section id="cohorts" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-zinc-950 text-[#d4c5a9] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            // PROGRAM FORMATS
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#f3ece0]"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            How We <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>Learn</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 font-light leading-relaxed">
            Choose the format that fits your schedule — from weekend live workshops to immersive multi-week cohorts.
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-8 flex flex-col justify-between hover:border-[#d4c5a9]/50 transition-all shadow-xl"
            >
              <div>
                {/* Status Badges */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a]">
                    {card.badge}
                  </span>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${card.statusColor}`}>
                    {card.status}
                  </span>
                </div>

                {/* Title & Duration */}
                <h3 
                  className="text-3xl font-light text-[#f3ece0] mb-2"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  {card.title}
                </h3>
                <span className="text-xs font-mono text-[#d4c5a9] block mb-4">
                  DURATION: {card.duration}
                </span>

                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-light">
                  {card.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 pt-6 border-t border-white/10">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#e2d8c3]">
                      <span className="text-emerald-400">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={card.link}
                className="w-full text-center py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-medium text-[#d4c5a9] hover:bg-[#d4c5a9] hover:text-zinc-950 transition-all"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
