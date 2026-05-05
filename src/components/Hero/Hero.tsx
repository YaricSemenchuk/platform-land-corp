import React from "react";
import { Statistics } from "@/components/Statistics/Statistics";
import { Reveal } from "@/components/common/Reveal";

export const Hero: React.FC = () => {
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
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Started
                <span className="grid h-2.5 w-2.5 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Case Studies
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 sm:mt-14">
        <Statistics />
      </div>
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
    <svg
      aria-hidden
      className="pointer-events-none absolute right-4 top-6 hidden h-44 w-44 opacity-90 md:block lg:right-12 lg:top-10 lg:h-60 lg:w-60 anim-spin-slow"
      viewBox="0 0 220 220"
      fill="none"
    >
      <circle cx="110" cy="110" r="98" stroke="white" strokeOpacity="0.25" />
      <circle cx="110" cy="110" r="74" stroke="white" strokeOpacity="0.35" />
      <circle cx="110" cy="110" r="48" stroke="white" strokeOpacity="0.5" />
      <circle cx="110" cy="110" r="24" fill="white" fillOpacity="0.95" />
      <circle cx="180" cy="60" r="10" fill="#ffe43c" />
      <circle cx="40" cy="170" r="8" fill="#ff61b4" />
      <circle cx="190" cy="160" r="6" fill="#fd5200" />
    </svg>
    <svg
      aria-hidden
      className="pointer-events-none absolute left-6 bottom-6 hidden h-28 w-28 opacity-70 md:block anim-float-slow"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="60" r="58" stroke="white" strokeOpacity="0.2" />
      <circle cx="60" cy="60" r="40" stroke="white" strokeOpacity="0.3" />
    </svg>
  </>
);
