"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      q: "Who are these workshops and bootcamps designed for?",
      a: "Elixios Labs programs are designed for developers, computer science students, and tech enthusiasts who already know basic coding and want to master production-grade software engineering, AI Agents, and scalable web architectures.",
    },
    {
      q: "Will I get recordings if I miss a live workshop session?",
      a: "Yes! Every registered participant receives lifetime access to high-definition video recordings, complete source code repositories, slide decks, and Discord discussion threads.",
    },
    {
      q: "What is the application process for Cohorts 1.0?",
      a: "Cohorts are selective to ensure small group sizes. You submit a brief application outlining your technical background and goals, followed by a short 15-minute technical check-in.",
    },
    {
      q: "Do I receive a certificate upon completion?",
      a: "Yes! Completing a workshop or bootcamp earns you a verified digital certificate of completion backed by Elixios Labs, suitable for LinkedIn and GitHub portfolios.",
    },
    {
      q: "How do I get notified when new workshops drop?",
      a: "You can join our launch waitlist via the footer email box, or follow our official Discord server and WhatsApp Channel for instant launch alerts.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-zinc-950 text-[#d4c5a9] border-t border-white/10 relative z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            // FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#f3ece0]"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            Everything You Need <span className="italic text-[#d4c5a9]" style={{ fontFamily: "var(--font-playfair), serif" }}>To Know</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#09090b] border border-[#d4c5a9]/20 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg sm:text-xl font-light text-[#f3ece0]" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
                    {faq.q}
                  </span>
                  <span className="text-[#d4c5a9] text-xl font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#a1a1aa] font-light leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
