"use client";

import React, { useState } from "react";
import { Statistics } from "@/components/Statistics/Statistics";
import { Reveal } from "@/components/common/Reveal";
import { ContactModal } from "@/components/Contact/ContactModal";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="relative px-4 pt-6 sm:px-6 md:px-10">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-primary px-6 py-20 sm:px-12 md:px-16 md:py-28">
        <HeroDecoration />

        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <Reveal as="div" delay={80}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 ring-1 ring-white/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow anim-pulse-soft" />
              ASO · ASA · Paid UA
            </span>
          </Reveal>

          <Reveal as="h1" delay={160}>
            <span className="mt-7 block text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[64px]">
              Drive Your App&rsquo;s
              <br />
              <span className="relative inline-block">
                Organic Growth
                <span
                  aria-hidden
                  className="absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-accent-yellow/85"
                />
              </span>
            </span>
          </Reveal>

          <Reveal as="p" delay={260}>
            <span className="mx-auto mt-7 block max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              We scale your product with proven organic &amp; paid acquisition
              strategies.
            </span>
          </Reveal>

          <Reveal as="div" delay={360}>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Started
                <span className="grid h-2.5 w-2.5 place-items-center rounded-full bg-accent-pink transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 sm:mt-14">
        <Statistics />
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

const HeroDecoration: React.FC = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl anim-float"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-black/15 blur-3xl anim-float-slow"
    />
    <AppStoreTile className="pointer-events-none absolute left-2 top-16 h-20 w-20 sm:left-6 sm:top-24 sm:h-28 sm:w-28 lg:left-12 lg:top-32 lg:h-36 lg:w-36 anim-float-slow" />
    <PlayStoreTile className="pointer-events-none absolute right-2 top-6 h-20 w-20 sm:right-6 sm:top-10 sm:h-28 sm:w-28 lg:right-12 lg:top-16 lg:h-36 lg:w-36 anim-float" />
  </>
);

const AppStoreTile: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden className={className} viewBox="0 0 160 160" fill="none">
    <rect x="20" y="20" width="120" height="120" rx="28" fill="white" stroke="#0b0b0f" strokeWidth="3" />
    <rect x="20" y="128" width="120" height="12" rx="6" fill="#0b0b0f" opacity="0.85" />
    <circle cx="80" cy="76" r="34" fill="#3b5cff" />
    <text x="80" y="90" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="44" fill="white">A</text>
  </svg>
);

const PlayStoreTile: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden className={className} viewBox="0 0 160 160" fill="none">
    <rect x="20" y="20" width="120" height="120" rx="28" fill="white" stroke="#0b0b0f" strokeWidth="3" />
    <rect x="20" y="128" width="120" height="12" rx="6" fill="#0b0b0f" opacity="0.85" />
    <g transform="translate(60 48)">
      <path d="M2 2 L42 28 L2 54 Z" fill="#34a853" />
      <path d="M2 2 L42 28 L24 36 Z" fill="#fbbc04" />
      <path d="M2 54 L42 28 L24 20 Z" fill="#ea4335" />
      <path d="M2 2 L24 28 L2 54 Z" fill="#4285f4" />
    </g>
  </svg>
);
