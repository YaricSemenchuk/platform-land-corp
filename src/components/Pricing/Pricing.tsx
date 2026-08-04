"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { ContactModal } from "@/components/Contact/ContactModal";
import { trackPixelEvent } from "@/components/MetaPixel/MetaPixel";

type Plan = {
  name: string;
  price: string;
  /** Struck-through previous price shown next to the current one. */
  oldPrice?: string;
  unit: string;
  features: { text: string; sub?: string }[];
  highlighted?: boolean;
};

type TabKey = "aso" | "audit";

const TABS: { key: TabKey; label: string }[] = [
  { key: "aso", label: "ASO & UA" },
  { key: "audit", label: "Audit & Research" },
];

/**
 * The two tabs use different card metrics in the design: ASO cards are 400px
 * wide with a narrower 262px inner column, Audit cards are 372px wide and fill
 * their content width.
 */
const LAYOUT: Record<TabKey, { grid: string; column: string }> = {
  aso: { grid: "max-w-[820px] gap-5 lg:max-w-[820px]", column: "lg:w-[262px]" },
  audit: { grid: "max-w-[768px] gap-6 lg:max-w-[768px]", column: "" },
};

const PLANS: Record<TabKey, Plan[]> = {
  aso: [
    {
      name: "Growth",
      price: "$1,999",
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
      price: "$2,999",
      oldPrice: "$3,999",
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
      price: "$299",
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
      price: "$1,499",
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
  const [modalOpen, setModalOpen] = useState(false);
  const plans = PLANS[tab];
  const layout = LAYOUT[tab];

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal
          as="h2"
          className="text-center text-[32px] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Services &amp; Pricing
        </Reveal>

        <Reveal as="div" delay={120} className="mt-5 flex justify-center gap-4 md:mt-10">
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                aria-pressed={active}
                className={
                  "rounded-full border border-black/80 px-[25px] py-[13px] text-base font-semibold leading-none shadow-[0_4px_0_0_#000] transition duration-200 ease-out active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] md:leading-6 " +
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
            "mx-auto mt-10 grid md:mt-12 md:max-w-[460px] lg:grid-cols-2 " +
            layout.grid
          }
        >
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={
                  "relative flex h-full flex-col rounded-[32px] border border-black/80 p-[25px] shadow-[0_6px_0_0_#000] transition lg:rounded-[45px] lg:p-10 " +
                  (p.highlighted ? "bg-primary text-white" : "bg-white text-ink")
                }
              >
                <h3
                  className="text-[18px] font-semibold leading-none lg:text-[24px]"
                  style={{
                    fontFamily: "'Readex Pro', Arial, sans-serif",
                    color: p.highlighted ? "#ffffff" : "#252525",
                  }}
                >
                  {p.name}
                </h3>
                <div className="mt-2.5 flex w-full flex-wrap items-end justify-between gap-x-5 gap-y-1 lg:w-auto lg:flex-nowrap lg:justify-start">
                  <div className="flex shrink-0 items-end gap-1 whitespace-nowrap">
                    <span
                      className="text-[32px] font-bold leading-none tracking-normal lg:text-[40px] lg:tracking-[-1.2px]"
                      style={{
                        fontFamily: "'Readex Pro', Arial, sans-serif",
                        color: p.highlighted ? "#ffffff" : "#252525",
                      }}
                    >
                      {p.price}
                    </span>
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "'Readex Pro', Arial, sans-serif",
                        fontSize: "16px",
                        color: p.highlighted ? "rgba(255,255,255,0.85)" : "#252525",
                      }}
                    >
                      {p.unit}
                    </span>
                  </div>
                  {p.oldPrice && (
                    <span
                      className="shrink-0 whitespace-nowrap text-[32px] font-bold leading-none tracking-normal line-through lg:text-[40px] lg:tracking-[-1.2px]"
                      style={{
                        fontFamily: "'Readex Pro', Arial, sans-serif",
                        color: "#a6c6ff",
                      }}
                    >
                      {p.oldPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackPixelEvent("InitiateCheckout");
                    setModalOpen(true);
                  }}
                  style={{ height: 55, borderRadius: 30 }}
                  className={
                    "group mt-5 inline-flex w-full items-center justify-center gap-2 border border-black/80 text-base font-semibold shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] lg:mt-6 " +
                    layout.column +
                    " " +
                    (p.highlighted
                      ? "bg-white text-ink hover:bg-white/95"
                      : "bg-primary text-white hover:bg-primary/90")
                  }
                >
                  Get Started
                </button>

                <div
                  className={
                    "my-6 h-px w-full " +
                    layout.column +
                    " " +
                    (p.highlighted ? "bg-white" : "bg-black")
                  }
                />

                <ul
                  className={"flex flex-1 flex-col gap-3 " + layout.column}
                  style={{
                    fontFamily: "'Readex Pro', Arial, sans-serif",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <span
                        className={
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md " +
                          (p.highlighted
                            ? "bg-white text-primary"
                            : "bg-primary text-white")
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
                      <span style={{ color: p.highlighted ? "#ffffff" : "#000000" }}>
                        <span className="font-medium">{f.text}</span>
                        {f.sub && (
                          <span
                            className="block"
                            style={{ color: p.highlighted ? "rgba(255,255,255,0.85)" : "#000000" }}
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
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
