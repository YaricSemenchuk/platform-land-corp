"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/common/Reveal";

type Plan = {
  name: string;
  price: string;
  unit: string;
  features: { text: string; sub?: string }[];
  highlighted?: boolean;
};

type TabKey = "aso" | "audit";

const TABS: { key: TabKey; label: string }[] = [
  { key: "aso", label: "ASO & UA" },
  { key: "audit", label: "Audit & Research" },
];

const PLANS: Record<TabKey, Plan[]> = {
  aso: [
    {
      name: "Express",
      price: "$500",
      unit: "/project",
      features: [
        { text: "1 platform" },
        { text: "1 localization" },
        {
          text: "Text metadata",
          sub: "(semantic core, tittle, subtitle, full description, other key fields)",
        },
        { text: "Graph metadata", sub: "(icons, screens, banners etc.)" },
        { text: "App release report, KPI analysis" },
      ],
    },
    {
      name: "Growth",
      price: "$2,000",
      unit: "/month",
      highlighted: true,
      features: [
        { text: "Competitor Analysis" },
        { text: "Audit & Strategy" },
        {
          text: "Text metadata",
          sub: "(semantic core, tittle, subtitle, full description, other key fields)",
        },
        { text: "Graph metadata", sub: "(icons, screens, banners etc.)" },
        { text: "In-app events, promotional content" },
        { text: "Product pages" },
        { text: "Reputation management" },
        { text: "A/B/C.. tests" },
        { text: "Product page localization expanding" },
        { text: "Reports and KPI analysis every week/month/quarter." },
      ],
    },
    {
      name: "Scale",
      price: "$3,000",
      unit: "/month",
      features: [
        { text: "ASO Growth included" },
        { text: "Apple & Google Ads management & scaling" },
        { text: "Analytics setup support" },
      ],
    },
  ],
  audit: [
    {
      name: "Audit",
      price: "$300",
      unit: "/project",
      highlighted: true,
      features: [
        { text: "Text metadata" },
        { text: "Graphic metadata" },
        { text: "Evaluation of organic traffic and keywords" },
        { text: "Reputation management assessment" },
        { text: "Competitor comparison" },
        { text: "Metrics evaluation" },
        { text: "Hypotheses and recommendations" },
      ],
    },
    {
      name: "Research & Strategy",
      price: "$1,500",
      unit: "/project",
      features: [
        { text: "Competitor revenue and market assessment" },
        { text: "Evaluation of competitors’ ASO strategies" },
        { text: "UA channel analysis" },
        { text: "12-month app growth strategy" },
      ],
    },
  ],
};

export const Pricing: React.FC = () => {
  const [tab, setTab] = useState<TabKey>("aso");
  const plans = PLANS[tab];

  return (
    <section id="pricing" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal
          as="h2"
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Services &amp; Pricing
        </Reveal>

        <Reveal as="div" delay={120} className="mt-10 flex justify-center gap-3 sm:gap-4">
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                aria-pressed={active}
                className={
                  "rounded-full border border-black/80 px-6 py-3 text-sm font-semibold shadow-[0_4px_0_0_#000] transition duration-200 ease-out active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] sm:text-base " +
                  (active
                    ? "bg-primary text-white"
                    : "bg-white text-ink hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000]")
                }
              >
                {t.label}
              </button>
            );
          })}
        </Reveal>

        <div
          className={
            "mt-12 grid gap-5 md:gap-6 " +
            (plans.length === 3
              ? "md:grid-cols-3"
              : "mx-auto max-w-3xl md:grid-cols-2")
          }
        >
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={
                  "relative flex h-full flex-col rounded-3xl border border-black/80 p-7 shadow-[0_8px_0_0_#000] transition " +
                  (p.highlighted ? "bg-primary text-white" : "bg-white text-ink")
                }
              >
                <h3
                  className={
                    "text-base font-semibold " +
                    (p.highlighted ? "text-white/90" : "text-muted")
                  }
                >
                  {p.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-bold tracking-tight md:text-4xl">
                    {p.price}
                  </span>
                  <span
                    className={
                      "pb-1.5 text-sm " +
                      (p.highlighted ? "text-white/80" : "text-muted")
                    }
                  >
                    {p.unit}
                  </span>
                </div>

                <a
                  href="#contact"
                  className={
                    "group mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-black/80 px-5 py-3 text-sm font-semibold shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] " +
                    (p.highlighted
                      ? "bg-white text-primary hover:bg-white/95"
                      : "bg-primary text-white hover:bg-primary/90")
                  }
                >
                  Get Started
                  <span
                    className={
                      "h-2 w-2 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 " +
                      (p.highlighted ? "bg-primary" : "bg-white")
                    }
                  />
                </a>

                <div
                  className={
                    "my-6 h-px w-full " +
                    (p.highlighted ? "bg-white/25" : "bg-border")
                  }
                />

                <ul className="flex flex-1 flex-col gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <span
                        className={
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full " +
                          (p.highlighted
                            ? "bg-white/20 text-white"
                            : "bg-primary-soft text-primary")
                        }
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M5 12.5l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className={
                          p.highlighted ? "text-white/95" : "text-ink-soft"
                        }
                      >
                        <span className="font-medium">{f.text}</span>
                        {f.sub && (
                          <span
                            className={
                              "block text-xs " +
                              (p.highlighted ? "text-white/80" : "text-muted")
                            }
                          >
                            {f.sub}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
