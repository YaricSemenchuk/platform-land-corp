"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { CaseModal } from "./CaseModal";
import { cases } from "./cases";

export const Results: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const renderCard = (c: (typeof cases)[number], i: number) => (
    <button
      key={`card-${i}`}
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
        className="mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="results-marquee flex w-max gap-6 py-3 pl-6">
          {cases.map((c, i) => renderCard(c, i))}
          {cases.map((c, i) => (
            <React.Fragment key={`dup-${i}`}>{renderCard(c, i)}</React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes results-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .results-marquee {
          animation: results-scroll 60s linear infinite;
          will-change: transform;
        }
        .results-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .results-marquee {
            animation: none;
          }
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
