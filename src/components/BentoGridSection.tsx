"use client";

import React from "react";

export default function BentoGridSection() {
  return (
    <section id="community" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-zinc-950 text-[#d4c5a9] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            // ECOSYSTEM & COMMUNITY
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#f3ece0]"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            The Elixios <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>Ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 font-light leading-relaxed">
            A vibrant open-source collective of developers, designers, and innovators.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Live Community Stats (Large 8-col) */}
          <div className="md:col-span-8 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-[#71717a] uppercase">COMMUNITY STATS</span>
              <span className="text-xs font-mono text-emerald-400">GLOBAL NETWORK</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 my-auto">
              <div>
                <span className="text-4xl sm:text-6xl font-light text-[#f3ece0] block mb-1">1,200+</span>
                <span className="text-xs font-mono text-[#a1a1aa] uppercase">ACTIVE DEVELOPERS</span>
              </div>
              <div>
                <span className="text-4xl sm:text-6xl font-light text-[#f3ece0] block mb-1">18+</span>
                <span className="text-xs font-mono text-[#a1a1aa] uppercase">OPEN SOURCE PROJS</span>
              </div>
              <div>
                <span className="text-4xl sm:text-6xl font-light text-[#f3ece0] block mb-1">100%</span>
                <span className="text-xs font-mono text-[#a1a1aa] uppercase">HANDS-ON BUILDING</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a]">JOIN DISCORD & WHATSAPP</span>
              <span className="text-xs text-[#d4c5a9]">24/7 ACTIVE DISCUSSIONS →</span>
            </div>
          </div>

          {/* Card 2: Student Project Spotlight (4-col) */}
          <div className="md:col-span-4 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#71717a] block mb-4 uppercase">FEATURED PROJECT</span>
              <h3 className="text-2xl font-light text-[#f3ece0] mb-3">Vanguard AI Engine</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6 font-light">
                An open-source multi-agent orchestration engine built by cohort members in 3 weeks.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#d4c5a9]">
              <span>GITHUB REPO</span>
              <span>⭐ 480+ STARS</span>
            </div>
          </div>

          {/* Card 3: Discord Channel Card (4-col) */}
          <div className="md:col-span-4 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#7289da]/20 text-[#7289da] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z"/>
                </svg>
              </div>
              <h3 className="text-xl font-light text-[#f3ece0] mb-2">Join Discord Server</h3>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-6">
                Get real-time support, participate in weekly voice hangouts, and collaborate with peers.
              </p>
            </div>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="text-xs font-mono text-[#d4c5a9] hover:underline">
              DISCORD INVITE LINK →
            </a>
          </div>

          {/* Card 4: WhatsApp Channel Card (8-col) */}
          <div className="md:col-span-8 rounded-3xl bg-[#09090b] border border-[#d4c5a9]/20 p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#71717a] uppercase">INSTANT ANNOUNCEMENTS</span>
              <span className="text-xs font-mono text-[#25D366]">WHATSAPP CHANNEL</span>
            </div>
            <div>
              <h3 className="text-2xl font-light text-[#f3ece0] mb-2">Never Miss a Workshop Drop</h3>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-6">
                Get direct WhatsApp notifications 15 minutes before registration links go live for new cohorts and live workshops.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a]">OFFICIAL CHANNEL</span>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-mono text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all">
                Join Channel →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
