"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { CaseModal } from "./CaseModal";
import { cases } from "./cases";
import { featuredCases, type FeaturedCase, type FeaturedStat } from "./featured";

const cardShell =
  "rounded-[32px] border border-black/80 bg-white shadow-[0_6px_0_0_#000] lg:rounded-[40px]";

export const Results: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);

  // Cases without a card stat are the ones promoted to a featured block above.
  const cardCases = useMemo(
    () => cases.map((c, i) => ({ c, i })).filter(({ c }) => c.cardStat),
    []
  );

  const getPeriod = useCallback(() => {
    const set = setRef.current;
    if (!set) return 0;
    return set.offsetWidth + 20; // set width + gap between sets
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

  const resumeTimerRef = useRef<number | null>(null);
  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);
  const resume = useCallback(() => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      const el = scrollerRef.current;
      if (el) offsetRef.current = el.scrollLeft;
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, 1200);
  }, []);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 20;
    const step = (card?.offsetWidth ?? 305) + gap;
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

  const renderCard = (
    { c, i }: (typeof cardCases)[number],
    keyPrefix: string
  ) => (
    <button
      key={`${keyPrefix}-${i}`}
      data-card
      type="button"
      onClick={() => setActiveIdx(i)}
      className={
        cardShell +
        " group flex w-[280px] shrink-0 flex-col justify-between p-[25px] text-left transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_#000] sm:w-[305px] sm:p-[41px]"
      }
      style={{ minHeight: 300 }}
    >
      <div className="flex flex-col gap-2.5">
        <span className="text-[18px] font-bold leading-[1.01] text-ink">
          {c.appName}
        </span>
        <span className="text-[16px] leading-5 text-ink">{c.category}</span>
      </div>

      <div className="mt-8 flex flex-col gap-2.5">
        <span className="text-[44px] font-bold leading-[55px] tracking-[-1.1px] text-ink">
          {c.cardStat?.value}
        </span>
        <span className="text-[18px] font-bold leading-none text-ink">
          {c.cardStat?.label}
        </span>
      </div>
    </button>
  );

  return (
    <section id="cases" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal
          as="h2"
          className="text-center text-[32px] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Proven Results in the App Market
        </Reveal>

        <div className="mt-10 flex flex-col gap-5 md:mt-12">
          {featuredCases.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <FeaturedBlock data={f} />
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className="relative mt-5"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Previous case"
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition md:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Next case"
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition md:flex"
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
          <div className="flex w-max gap-5 py-3">
            <div ref={setRef} className="flex shrink-0 gap-5">
              {cardCases.map((item) => renderCard(item, "a"))}
            </div>
            <div className="flex shrink-0 gap-5" aria-hidden>
              {cardCases.map((item) => renderCard(item, "b"))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .results-scroller {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x;
          overscroll-behavior-x: contain;
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

const FeaturedBlock: React.FC<{ data: FeaturedCase }> = ({ data }) => {
  // On mobile the stats live in their own card(s) below the copy.
  const statCards = data.splitStatsByColumn
    ? data.rows[0].map((_, col) =>
        data.rows.map((row) => row[col]).filter(Boolean)
      )
    : [data.rows.flat()];

  return (
    <div className="flex flex-col gap-5 rounded-[36px] bg-primary p-6 shadow-[0_6px_0_0_#000] lg:grid lg:grid-cols-2 lg:rounded-[48px] lg:p-10">
      <article className={cardShell + " p-[17px] lg:order-2 lg:p-[41px]"}>
        <div className="relative aspect-[507/386] w-full">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 508px"
            className="object-contain"
          />
        </div>
      </article>

      <article
        className={
          cardShell +
          " flex flex-col gap-5 p-[17px] lg:order-1 lg:justify-between lg:p-[41px]"
        }
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-[24px] font-bold leading-[0.9] text-ink lg:text-[40px]">
            {data.title}
          </h3>
          <div className="flex flex-col gap-5 lg:gap-2.5">
            <p className="whitespace-pre-line text-[16px] font-semibold leading-tight text-ink">
              {data.intro}
            </p>
            <ol className="flex flex-col text-[14px] leading-[1.1] text-ink">
              {data.steps.map((s, i) => (
                <li key={s}>
                  {i + 1}. {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hidden flex-col gap-5 lg:flex">
          {data.rows.map((row, ri) => (
            <div key={ri} className="flex flex-wrap gap-x-10 gap-y-5">
              {row.map((stat) => (
                <Stat key={stat.value + (stat.label ?? "")} stat={stat} />
              ))}
            </div>
          ))}
        </div>
      </article>

      {statCards.map((stats, i) => (
        <article
          key={i}
          className={cardShell + " flex flex-col gap-5 p-[17px] lg:hidden"}
        >
          {stats.map((stat) => (
            <Stat key={stat.value + (stat.label ?? "")} stat={stat} />
          ))}
        </article>
      ))}
    </div>
  );
};

const Stat: React.FC<{ stat: FeaturedStat }> = ({ stat }) => (
  <div className="flex min-w-[45%] flex-1 flex-col gap-2.5">
    {stat.label && (
      <span className="text-[12px] font-semibold leading-none text-ink">
        {stat.label}
      </span>
    )}
    <div className="flex items-end gap-1">
      <span
        className={
          "whitespace-pre-line font-bold text-primary " +
          (stat.size === "sm"
            ? "text-[18px] font-semibold leading-tight"
            : "text-[24px] leading-[0.9]")
        }
      >
        {stat.value}
      </span>
      {stat.unit && (
        <span className="text-[14px] leading-4 text-ink">{stat.unit}</span>
      )}
    </div>
    {stat.caption && (
      <p className="whitespace-pre-line text-[14px] font-semibold leading-[1.15] text-ink">
        {stat.caption}
      </p>
    )}
  </div>
);
