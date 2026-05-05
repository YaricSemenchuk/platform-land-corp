import React from "react";
import { Reveal } from "@/components/common/Reveal";

type Card = {
  title: string;
  body: string;
  tone: "light" | "dark";
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Audit & Competitor Research",
    body: "Deep analysis of store pages, keywords, creatives and competitive metrics to surface opportunities you can act on this week.",
    tone: "light",
    icon: <SearchIcon />,
  },
  {
    title: "Full-Service App Promotion",
    body: "Ongoing support that combines analytics, optimization, and creative iteration to compound your growth month over month.",
    tone: "dark",
    icon: <SparklesIcon />,
  },
  {
    title: "App Store Optimization",
    body: "We boost discovery and conversion with metadata, custom product pages, A/B tests and in-app events tuned to your funnel.",
    tone: "dark",
    icon: <ShieldIcon />,
  },
  {
    title: "Paid User Acquisition",
    body: "Channel alignment with product KPIs across Apple Search Ads, Google Ads and beyond — engineered for healthy ROAS.",
    tone: "light",
    icon: <ChartIcon />,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <Reveal as="div" className="text-center">
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Core Directions
          </span>
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="mt-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Where we move the needle
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={120 * i}
              className="card-lift"
            >
              <article
                className={
                  "relative flex min-h-[260px] flex-col rounded-3xl p-8 ring-1 transition-shadow md:min-h-[280px] " +
                  (c.tone === "dark"
                    ? "bg-primary text-white ring-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
                    : "bg-white text-ink ring-border shadow-sm hover:shadow-xl")
                }
              >
                <h3 className="max-w-[80%] text-xl font-semibold leading-snug md:text-[22px]">
                  {c.title}
                </h3>
                <p
                  className={
                    "mt-4 max-w-[42ch] text-sm leading-relaxed md:text-[15px] " +
                    (c.tone === "dark" ? "text-white/85" : "text-muted")
                  }
                >
                  {c.body}
                </p>
                <div
                  className={
                    "absolute bottom-7 right-7 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 " +
                    (c.tone === "dark"
                      ? "bg-white/15 text-white"
                      : "bg-primary-soft text-primary")
                  }
                >
                  {c.icon}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

function SearchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM18 14l1 2.4L21 18l-2.4 1L18 22l-1-2.4L15 18l2.4-1L18 14z"
        fill="currentColor"
      />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19h16M6 16V9m6 7V5m6 11v-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
