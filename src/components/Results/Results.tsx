"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { CaseModal } from "./CaseModal";
import { cases } from "./cases";

export const Results: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);

  const getPeriod = useCallback(() => {
    const set = setRef.current;
    if (!set) return 0;
    return set.offsetWidth + 24; // set width + gap between sets
  }, []);

  // Auto-scroll loop. Speed in px/sec.
  useEffect(() => {
    const SPEED = 30;
    const el = scrollerRef.current;
    if (!el) return;

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const period = getPeriod();
      if (!pausedRef.current && el && period > 0) {
        offsetRef.current += SPEED * dt;
        if (offsetRef.current >= period) offsetRef.current -= period;
        el.scrollLeft = offsetRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [getPeriod]);

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
    const period = getPeriod();
    if (period <= 0) return;
    if (dir === -1 && el.scrollLeft - step < 0) {
      el.scrollLeft += period;
      offsetRef.current = el.scrollLeft;
    }
    const target = el.scrollLeft + dir * step;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [getPeriod]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScrollEnd = () => {
      const period = getPeriod();
      if (period <= 0) return;
      if (el.scrollLeft >= period) el.scrollLeft -= period;
      else if (el.scrollLeft < 0) el.scrollLeft += period;
      offsetRef.current = el.scrollLeft;
    };
    el.addEventListener("scrollend", onScrollEnd);
    return () => el.removeEventListener("scrollend", onScrollEnd);
  }, [getPeriod]);

  const renderCard = (c: (typeof cases)[number], i: number, keyPrefix: string) => (
    <button
      key={`${keyPrefix}-${i}`}
      data-card
      type="button"
      onClick={() => setActiveIdx(i)}
      style={{ boxShadow: "0 8px 0 0 #0b0b0f", borderRadius: 36 }}
      className="group relative flex h-[330px] w-[270px] shrink-0 flex-col overflow-hidden border border-ink bg-[#ededed] text-left transition hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2 bg-primary px-5 py-3.5">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffffff]" />
      </div>

      <div className="flex flex-1 flex-col justify-center p-8">
        <h3 className="text-2xl font-bold leading-tight text-ink">
          <span aria-hidden className="mr-2">📈</span>
          Case
          <br />
          Study #{i + 1}:
        </h3>

        <div className="mt-6 h-px w-full bg-ink/40" />

        <div className="mt-8 text-sm text-ink">
          {c.appName} →
        </div>
        {c.previewMetric && (
          <div className="mt-1 text-sm font-bold text-ink">{c.previewMetric}</div>
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
          <div className="flex w-max gap-6 py-3">
            <div ref={setRef} className="flex shrink-0 gap-6">
              {cases.map((c, i) => renderCard(c, i, "a"))}
            </div>
            <div className="flex shrink-0 gap-6" aria-hidden>
              {cases.map((c, i) => renderCard(c, i, "b"))}
            </div>
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
