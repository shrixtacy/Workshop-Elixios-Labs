"use client";

import React from "react";

export default function ThickMarquee() {
  const items = [
    "ELIXIOS LABS",
    "•",
    "LIVE WORKSHOPS",
    "•",
    "FULL-STACK BOOTCAMPS",
    "•",
    "COHORTS 1.0",
    "•",
    "OPEN SOURCE ECOSYSTEM",
    "•",
    "BUILD PRODUCTION SOFTWARE",
    "•",
  ];

  return (
    <div className="w-full py-8 sm:py-12 bg-zinc-950 border-y border-[#d4c5a9]/20 overflow-hidden select-none relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Loop twice for smooth continuous marquee infinite scroll */}
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-8 sm:gap-12 mx-4">
            {items.map((item, idx) => (
              <span
                key={`${loopIdx}-${idx}`}
                className={`text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider ${
                  item === "•" ? "text-emerald-400 opacity-80" : "text-[#d4c5a9]"
                }`}
                style={{
                  fontFamily: item === "•" ? "inherit" : "var(--font-geist-sans), sans-serif",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
