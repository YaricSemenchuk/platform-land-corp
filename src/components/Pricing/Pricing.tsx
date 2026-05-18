"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { ContactModal } from "@/components/Contact/ContactModal";
import { trackPixelEvent } from "@/components/MetaPixel/MetaPixel";

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
      price: "500$",
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
      price: "2000$",
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
      price: "3000$",
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
      price: "300$",
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
      price: "1500$",
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
            "mx-auto mt-12 grid gap-5 md:gap-6 " +
            (plans.length === 3
              ? "max-w-[1080px] md:max-w-[460px] lg:max-w-[1080px] lg:grid-cols-3"
              : "max-w-3xl md:max-w-[460px] lg:max-w-3xl lg:grid-cols-2")
          }
        >
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                style={{ borderRadius: 45 }}
                className={
                  "relative flex h-full flex-col border border-black/80 p-10 shadow-[0_8px_0_0_#000] transition " +
                  (p.highlighted ? "bg-primary text-white" : "bg-white text-ink")
                }
              >
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: "'Readex Pro', Arial, sans-serif",
                    fontSize: "26px",
                    color: p.highlighted ? "#ffffff" : "#252525",
                  }}
                >
                  {p.name}
                </h3>
                <div className="mt-2 flex items-end gap-1">
                  <span
                    className="font-bold tracking-tight"
                    style={{
                      fontFamily: "'Readex Pro', Arial, sans-serif",
                      fontSize: "48px",
                      color: p.highlighted ? "#ffffff" : "#252525",
                      lineHeight: 1,
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="pb-1.5"
                    style={{
                      fontFamily: "'Readex Pro', Arial, sans-serif",
                      fontSize: "18px",
                      color: p.highlighted ? "rgba(255,255,255,0.85)" : "#252525",
                    }}
                  >
                    {p.unit}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackPixelEvent("InitiateCheckout");
                    setModalOpen(true);
                  }}
                  style={{ height: 55, borderRadius: 30 }}
                  className={
                    "group mt-6 inline-flex w-full items-center justify-center gap-2 border border-black/80 text-base font-semibold shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] " +
                    (p.highlighted
                      ? "bg-white text-ink hover:bg-white/95"
                      : "bg-primary text-white hover:bg-primary/90")
                  }
                >
                  Get Started
                </button>

                <div
                  className={
                    "my-6 h-px w-full " + (p.highlighted ? "bg-white" : "bg-black")
                  }
                />

                <ul
                  className="flex flex-1 flex-col gap-3"
                  style={{ fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: "14px" }}
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
