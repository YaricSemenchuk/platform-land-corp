"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { CaseModal } from "./CaseModal";
import { cases } from "./cases";

export const Results: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="cases"
      className="px-4 py-24 sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Proven Results in the App Market
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          {cases.map((c, i) => (
            <Reveal key={i} delay={(i % 4) * 130}>
              <button
                type="button"
                onClick={() => setActiveIdx(i)}
                style={{ boxShadow: "0 8px 0 0 #0b0b0f" }}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-[#dcdcdc] text-left transition hover:-translate-y-0.5"
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
                  <div className="mt-1 text-base font-bold text-ink">
                    {c.appName}
                  </div>
                  {c.highlight.value && (
                    <div className="mt-2 text-sm text-ink">{c.highlight.value} {c.highlight.label}</div>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <CaseModal
        open={activeIdx !== null}
        onClose={() => setActiveIdx(null)}
        data={activeIdx !== null ? cases[activeIdx] : null}
      />
    </section>
  );
};
