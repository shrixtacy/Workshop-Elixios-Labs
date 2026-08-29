"use client";

import React from "react";
import Image from "next/image";

export default function ZoomedHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-black p-3 sm:p-5 md:p-6 flex items-center justify-center pt-20 sm:pt-24 pb-4 sm:pb-6">
      
      {/* Framed Cinematic Card with Rounded Corners */}
      <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-10 md:p-12">
        
        {/* 1. Framed Landscape Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-new-bg.png"
            alt="Mountain Landscape Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft Vignette Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* 2. TOP-LEFT CORNER: Massive Single-Line Title */}
        <div className="relative z-20 w-full flex items-start justify-start pt-10 sm:pt-14 md:pt-16">
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-tight select-none whitespace-nowrap drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)] flex items-baseline"
            style={{ color: "#d4c5a9" }}
          >
            <span 
              className="font-light tracking-[0.02em] uppercase"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              ELIXIOS
            </span>
            <span 
              className="italic font-normal ml-1 sm:ml-2 text-[#d4c5a9]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              *
            </span>
          </h1>
        </div>

        {/* 3. BOTTOM-RIGHT CORNER: Description & Action Buttons */}
        <div className="relative z-20 w-full flex justify-end mt-auto">
          <div className="flex flex-col items-start space-y-4 sm:space-y-5 text-[#d4c5a9] max-w-lg">
            <p 
              className="text-sm sm:text-base md:text-lg leading-relaxed text-[#e2d8c3] opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-light"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Elixios Labs is a premier learning & open-source ecosystem, inviting developers and enthusiasts to master modern tech through hands-on workshops, bootcamps, and cohorts.
            </p>

            {/* Primary CTA Button */}
            <a
              href="#workshops"
              className="inline-flex items-center gap-3 px-6 py-3 sm:py-3.5 rounded-full bg-[#d4c5a9] text-zinc-950 font-medium text-sm sm:text-base hover:bg-white transition-all shadow-xl group"
            >
              <span>Explore Workshops</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-950 text-[#d4c5a9] flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-xs sm:text-sm">
                →
              </span>
            </a>

            {/* Community Subheader */}
            <div className="w-full pt-1 sm:pt-2">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="h-[1px] w-6 bg-[#d4c5a9]/40" />
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#d4c5a9]/80 font-mono">
                  JOIN OUR GLOBAL COMMUNITY
                </span>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#d4c5a9]/30 text-xs sm:text-sm hover:bg-black/80 hover:border-[#d4c5a9]/60 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-[#7289da]" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span>Join Discord</span>
                </a>

                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#d4c5a9]/30 text-xs sm:text-sm hover:bg-black/80 hover:border-[#d4c5a9]/60 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.253-1.116z"/>
                  </svg>
                  <span>WhatsApp Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
