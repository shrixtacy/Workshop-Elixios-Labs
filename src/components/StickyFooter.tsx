"use client";

import React from "react";
import TextPressure from "./TextPressure";

export default function StickyFooter() {
  return (
    <footer className="w-full bg-black text-[#d4c5a9] pt-16 pb-8 px-4 sm:px-8 md:px-12 relative overflow-hidden z-10 border-t border-[#d4c5a9]/20">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[500px]">
        
        {/* Top Section: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span 
                  className="text-3xl font-light uppercase tracking-wider text-[#f3ece0]"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  Elixios
                </span>
                <span 
                  className="text-3xl italic text-[#d4c5a9]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Labs
                </span>
              </div>
              <p className="text-sm text-[#a1a1aa] max-w-sm leading-relaxed mb-6">
                Official ecosystem for hands-on workshops, bootcamps, and cohorts. Building production-grade software together.
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="w-full max-w-md">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4c5a9]/80 block mb-2">
                JOIN THE LAUNCH WAITLIST
              </span>
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
                <input
                  type="email"
                  suppressHydrationWarning
                  placeholder="enter your email..."
                  className="bg-transparent px-4 py-2 text-sm text-[#f3ece0] focus:outline-none w-full font-mono placeholder:text-[#71717a]"
                />
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => alert("Subscribed for upcoming workshops!")}
                  className="px-5 py-2 rounded-full bg-[#d4c5a9] text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white transition-colors whitespace-nowrap"
                >
                  Join Waitlist →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#f3ece0] mb-4 tracking-wider">Programs</h4>
              <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                <li><a href="#workshops" className="hover:text-[#d4c5a9] transition-colors">Live Workshops</a></li>
                <li><a href="#bootcamps" className="hover:text-[#d4c5a9] transition-colors">Bootcamps</a></li>
                <li><a href="#cohorts" className="hover:text-[#d4c5a9] transition-colors">Cohorts 1.0</a></li>
                <li><a href="#tracks" className="hover:text-[#d4c5a9] transition-colors">Learning Tracks</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#f3ece0] mb-4 tracking-wider">Community</h4>
              <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                <li><a href="https://discord.gg" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors">Discord Server</a></li>
                <li><a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors">WhatsApp Channel</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors">GitHub Org</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#d4c5a9] transition-colors">X / Twitter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#f3ece0] mb-4 tracking-wider">Platform</h4>
              <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
                <li><a href="#about" className="hover:text-[#d4c5a9] transition-colors">About Us</a></li>
                <li><a href="#portal" className="hover:text-[#d4c5a9] transition-colors">Student Portal</a></li>
                <li><a href="#privacy" className="hover:text-[#d4c5a9] transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[#d4c5a9] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section: React Bits TextPressure Component for "WORKSHOPS" */}
        <div className="pt-10 pb-4 w-full flex flex-col items-center justify-center">
          <div className="w-full h-32 sm:h-44 md:h-52 relative flex items-center justify-center">
            <TextPressure
              text="WORKSHOPS"
              textColor="#d4c5a9"
              strokeColor="#d4c5a9"
              minFontSize={36}
              flex
              width
              weight
              italic
            />
          </div>
          
          <div className="w-full flex items-center justify-between text-xs font-mono text-[#71717a] pt-6 border-t border-white/5">
            <span>© 2026 ELIXIOS LABS. ALL RIGHTS RESERVED.</span>
            <span>HOVER OVER TEXT FOR PRESSURE ANIMATION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
