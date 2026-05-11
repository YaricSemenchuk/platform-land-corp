"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { CaseModal } from "./CaseModal";
import { cases } from "./cases";

export const Results: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // Auto-scroll loop. Speed in px/sec.
  useEffect(() => {
    const SPEED = 30;
    const el = scrollerRef.current;
    if (!el) return;

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current && el) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + SPEED * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, []);

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);
  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const step = (card?.offsetWidth ?? 300) + gap;
    const half = el.scrollWidth / 2;
    let target = el.scrollLeft + dir * step;
    if (target < 0) target += half;
    if (target >= half) target -= half;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  const renderCard = (c: (typeof cases)[number], i: number, keyPrefix: string) => (
    <button
      key={`${keyPrefix}-${i}`}
      data-card
      type="button"
      onClick={() => setActiveIdx(i)}
      style={{ boxShadow: "0 8px 0 0 #0b0b0f" }}
      className="group relative flex h-[320px] w-[280px] shrink-0 flex-col overflow-hidden rounded-3xl border-2 border-ink bg-[#dcdcdc] text-left transition hover:-translate-y-0.5 sm:w-[300px]"
    >
      <div className="flex items-center gap-2 bg-primary px-5 py-3.5">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffffff]" />
      </div>

      <div className="flex flex-1 flex-col px-6 py-5 md:px-7 md:py-6">
        <h3 className="text-lg font-bold leading-tight text-ink md:text-xl">
          <span aria-hidden className="mr-2">📈</span>
          Case #{i + 1}
        </h3>

        <div className="my-4 h-px w-full bg-ink/40" />

        <div className="text-xs font-semibold uppercase tracking-wide text-ink/70">
          {c.category}
        </div>
        <div className="mt-1 text-base font-bold text-ink">{c.appName}</div>
        {c.highlight.value && (
          <div className="mt-2 text-sm text-ink">
            {c.highlight.value} {c.highlight.label}
          </div>
        )}
      </div>
    </button>
  );

  return (
    <section id="cases" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Proven Results in the App Market
        </Reveal>
      </div>

      <div
        className="relative mt-14"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Previous case"
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-white text-ink shadow-[0_4px_0_0_#0b0b0f] transition hover:-translate-y-[calc(50%+2px)] md:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Next case"
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-white text-ink shadow-[0_4px_0_0_#0b0b0f] transition hover:-translate-y-[calc(50%+2px)] md:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="results-scroller overflow-x-auto"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max gap-6 py-3 pl-6 pr-6">
            {cases.map((c, i) => renderCard(c, i, "a"))}
            {cases.map((c, i) => renderCard(c, i, "b"))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .results-scroller {
          scrollbar-width: none;
        }
        .results-scroller::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <CaseModal
        open={activeIdx !== null}
        onClose={() => setActiveIdx(null)}
        data={activeIdx !== null ? cases[activeIdx] : null}
      />
    </section>
  );
};
