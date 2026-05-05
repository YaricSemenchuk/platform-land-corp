"use client";

import { useState } from "react";

type Feature = { text: string; sub?: string };

type Plan = {
  name: string;
  price: string;
  period: string;
  features: Feature[];
  highlighted: boolean;
};

const PLANS: Record<"aso" | "audit", Plan[]> = {
  aso: [
    {
      name: "Express",
      price: "500$",
      period: "/project",
      highlighted: false,
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
      period: "/month",
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
      period: "/month",
      highlighted: false,
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
      period: "/project",
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
      period: "/project",
      highlighted: false,
      features: [
        { text: "Competitor revenue and market assessment" },
        { text: "Evaluation of competitors’ ASO strategies" },
        { text: "UA channel analysis" },
        { text: "12-month app growth strategy" },
      ],
    },
  ],
};

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-md ${
        highlighted ? "bg-white" : "bg-blue-600"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className={`h-3.5 w-3.5 ${highlighted ? "text-blue-600" : "text-white"}`}
      >
        <path
          d="M3 8.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const isH = plan.highlighted;
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 shadow-[0_8px_0_0_rgba(0,0,0,0.95)] ring-1 ring-black/10 ${
        isH
          ? "bg-blue-600 text-white md:-my-8 md:p-10"
          : "bg-white text-zinc-900"
      }`}
    >
      <h3 className="text-2xl font-semibold">{plan.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        <span className="text-lg font-medium opacity-90">{plan.period}</span>
      </div>
      <button
        type="button"
        className={`mt-6 w-full rounded-full px-5 py-3.5 text-base font-medium shadow-[0_4px_0_0_rgba(0,0,0,0.9)] transition active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.9)] ${
          isH
            ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Get Started
      </button>
      <div
        className={`my-6 h-px w-full ${isH ? "bg-white/40" : "bg-zinc-200"}`}
      />
      <ul className="flex flex-col gap-4">
        {plan.features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm leading-snug">
            <CheckIcon highlighted={isH} />
            <span>
              <span className="font-medium">{f.text}</span>
              {f.sub && (
                <span className="block opacity-90">{f.sub}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPricing() {
  const [tab, setTab] = useState<"aso" | "audit">("aso");
  const plans = PLANS[tab];
  const gridCols =
    plans.length === 3
      ? "md:grid-cols-3"
      : plans.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-1";

  const tabBtn = (key: "aso" | "audit", label: string) => {
    const active = tab === key;
    return (
      <button
        type="button"
        onClick={() => setTab(key)}
        aria-pressed={active}
        className={`rounded-full px-7 py-3 text-base font-medium shadow-[0_4px_0_0_rgba(0,0,0,0.9)] transition active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.9)] ${
          active
            ? "bg-blue-600 text-white"
            : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Services &amp; Pricing
        </h2>
        <div className="mt-10 flex justify-center gap-4">
          {tabBtn("aso", "ASO & UA")}
          {tabBtn("audit", "Audit & Research")}
        </div>
        <div
          className={`mt-12 grid grid-cols-1 gap-6 ${gridCols} ${
            plans.length === 2 ? "mx-auto max-w-4xl" : ""
          }`}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
