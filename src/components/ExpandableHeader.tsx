"use client";

import React, { useState, useEffect } from "react";

export default function ExpandableHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // On mobile view (< 768px), display header immediately
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const handleZoomStatus = (e: Event) => {
      const customEvt = e as CustomEvent<{ isZoomed: boolean }>;
      if (customEvt.detail !== undefined) {
        setIsVisible(customEvt.detail.isZoomed);
      }
    };

    window.addEventListener("hero-zoom-status", handleZoomStatus);

    if (window.scrollY > 50) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("hero-zoom-status", handleZoomStatus);
    };
  }, []);

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
      {/* Outer Floating Bar */}
      <div className="relative rounded-2xl bg-[#09090b]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 shadow-2xl transition-all duration-300">
        
        {/* Main Bar Content */}
        <div className="flex items-center justify-between">
          {/* Left: Hamburger Toggle */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#d4c5a9] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16" />
              </svg>
            )}
          </button>

          {/* Center: Brand Logo */}
          <div className="flex items-baseline gap-2">
            <span 
              className="text-lg sm:text-xl font-light uppercase tracking-wider text-[#f3ece0]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Elixios
            </span>
            <span 
              className="text-lg sm:text-xl italic text-[#d4c5a9]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Labs
            </span>
          </div>

          {/* Right: Primary Button */}
          <a
            href="#workshops"
            className="px-4 sm:px-5 py-2 rounded-xl bg-[#d4c5a9] text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Expandable Dual Grid Dropdown Card */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
            {/* Column 1: About */}
            <div className="rounded-xl bg-white/[0.03] p-5 border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-medium text-[#f3ece0] mb-4">About</h3>
                <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                  <li>
                    <a href="#about" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Ecosystem & Mission
                    </a>
                  </li>
                  <li>
                    <a href="#philosophy" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Learning Philosophy
                    </a>
                  </li>
                  <li>
                    <a href="#mentors" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Mentors & Leads
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Programs & Workshops */}
            <div className="rounded-xl bg-white/[0.03] p-5 border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-medium text-[#f3ece0] mb-4">Programs</h3>
                <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                  <li>
                    <a href="#workshops" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5 font-medium text-[#d4c5a9]">
                      <span>●</span> Live AI Workshop (Open)
                    </a>
                  </li>
                  <li>
                    <a href="#bootcamps" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Bootcamps (Coming Soon)
                    </a>
                  </li>
                  <li>
                    <a href="#cohorts" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Cohorts 1.0 (Waitlist)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Community */}
            <div className="rounded-xl bg-white/[0.03] p-5 border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-medium text-[#f3ece0] mb-4">Community</h3>
                <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                  <li>
                    <a href="https://discord.gg" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Discord Server
                    </a>
                  </li>
                  <li>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> WhatsApp Channel
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@elixioslabs.com" className="hover:text-[#d4c5a9] transition-colors flex items-center gap-1.5">
                      <span>↗</span> Email Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
