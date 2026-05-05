import React from "react";
import { Reveal } from "@/components/common/Reveal";
import { CountUp } from "@/components/common/CountUp";

type Metric = {
  value: React.ReactNode;
  label: string;
};

type Case = {
  tag: string;
  app: string;
  description: string;
  metrics: Metric[];
  accent: string;
};

const cases: Case[] = [
  {
    tag: "Case Study #1",
    app: "Licensed Sportsbook",
    description:
      "Full-funnel ASO + Apple Search Ads relaunch lifted organic installs and stabilized CPI in a regulated category.",
    metrics: [
      { value: <CountUp to={60} prefix="+" suffix="%" />, label: "organic installs" },
      { value: "TOP-3", label: "for 30+ keywords" },
    ],
    accent: "bg-primary text-white",
  },
  {
    tag: "Case Study #2",
    app: "Calm Baby Sleep",
    description:
      "Pre & post-launch ASO sprints unlocked impressions and search installs in just one month after release.",
    metrics: [
      { value: <CountUp to={240} prefix="+" suffix="%" />, label: "App Store impressions" },
      { value: <CountUp to={115} prefix="+" suffix="%" />, label: "organic search installs" },
    ],
    accent: "bg-ink text-white",
  },
  {
    tag: "Case Study #3",
    app: "Calorie Deficit Tracker",
    description:
      "13 months of compounded ASO + paid UA delivered tens of thousands of installs at a fraction of the original CPI.",
    metrics: [
      {
        value: (
          <>
            +<CountUp to={20} />K
          </>
        ),
        label: "installs",
      },
      { value: "x4", label: "cheaper Apple Ads CPI" },
    ],
    accent: "bg-accent-orange text-white",
  },
];

export const Results: React.FC = () => {
  return (
    <section
      id="cases"
      className="bg-surface px-4 py-24 sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1080px]">
        <Reveal as="div" className="text-center">
          <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-border">
            Case Studies
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Proven results in the app market
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {cases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 130} direction="up">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border card-lift hover:shadow-xl">
                <div
                  className={
                    "px-6 py-3 text-xs font-semibold uppercase tracking-wide " +
                    c.accent
                  }
                >
                  {c.tag}
                </div>
                <div className="flex flex-1 flex-col px-7 py-7">
                  <h3 className="text-lg font-semibold leading-snug text-ink">
                    {c.app}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {c.metrics.map((m, mi) => (
                      <div
                        key={mi}
                        className="rounded-xl bg-primary-soft px-3 py-3 text-center"
                      >
                        <div className="text-xl font-bold text-primary">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-primary">
                    Read case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h14m-5-5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
