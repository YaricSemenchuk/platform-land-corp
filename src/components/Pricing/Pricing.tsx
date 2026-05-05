import React from "react";
import { Reveal } from "@/components/common/Reveal";

type Plan = {
  name: string;
  price: string;
  unit: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Audit",
    price: "$300",
    unit: "/project",
    features: [
      "Reputation assessment",
      "Metrics evaluation",
      "Competitor comparison",
      "Organic traffic evaluation",
      "Recommendations",
    ],
  },
  {
    name: "Express",
    price: "$500",
    unit: "/project",
    features: [
      "1 localization",
      "App release report",
      "Text metadata",
      "Graph metadata",
      "1 platform",
    ],
  },
  {
    name: "Growth",
    price: "$2,000",
    unit: "/month",
    badge: "Most Popular",
    highlighted: true,
    features: [
      "In-app events",
      "Audit & strategy",
      "Graph & text metadata",
      "Competitor analysis",
      "A/B testing",
      "Weekly & monthly reports",
      "Localization",
    ],
  },
  {
    name: "Scale",
    price: "$3,000",
    unit: "/month",
    features: [
      "Apple & Google Ads management",
      "Analytics setup",
      "ASO growth track",
      "Everything in Growth",
      "Dedicated growth manager",
    ],
  },
  {
    name: "Research & Strategy",
    price: "$1,500",
    unit: "/project",
    features: [
      "Competitor ASO evaluation",
      "12-month strategy",
      "UA channel analysis",
      "Competitor revenue assessment",
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="px-4 py-24 sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="div" className="text-center">
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Services &amp; Pricing
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Pick the engagement that fits your stage
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={
                  "relative flex h-full flex-col rounded-3xl p-7 ring-1 transition card-lift " +
                  (p.highlighted
                    ? "bg-primary text-white ring-primary shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 lg:scale-[1.04] lg:-translate-y-1"
                    : "bg-white text-ink ring-border shadow-sm hover:shadow-xl")
                }
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                    {p.badge}
                  </span>
                )}

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
                    "group mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition " +
                    (p.highlighted
                      ? "bg-white text-primary hover:bg-white/95"
                      : "bg-ink text-white hover:bg-ink-soft")
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
                    <li key={f} className="flex items-start gap-3">
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
                        className={p.highlighted ? "text-white/95" : "text-ink-soft"}
                      >
                        {f}
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
