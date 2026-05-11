import React from "react";
import { Reveal } from "@/components/common/Reveal";

type Case = {
  index: number;
  app: string;
  metric: string;
};

const cases: Case[] = [
  { index: 1, app: "Calorie Deficit Tracker", metric: "+20K installs" },
  { index: 2, app: "Calm Baby Sleep", metric: "+240% impressions" },
  { index: 3, app: "Licensed Sportsbook", metric: "+60% organic installs" },
];

export const Results: React.FC = () => {
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

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {cases.map((c, i) => (
            <Reveal key={c.index} delay={i * 130}>
              <article
                style={{ boxShadow: "0 8px 0 0 #0b0b0f" }}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-ink bg-[#EDEDED]"
              >
                <div className="flex items-center gap-2 bg-primary px-5 py-3.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#ffffff]" />
                </div>

                <div className="flex flex-1 flex-col px-6 py-5 md:px-7 md:py-6">
                  <h3 className="text-xl font-bold leading-tight text-ink md:text-2xl">
                    <span aria-hidden className="mr-2">📈</span>
                    Case Study #{c.index}:
                  </h3>

                  <div className="my-4 h-px w-full bg-ink/40" />

                  <div className="text-sm text-ink">
                    {c.app} <span aria-hidden>→</span>
                  </div>
                  <div className="mt-1 text-base font-bold text-ink">
                    {c.metric}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
