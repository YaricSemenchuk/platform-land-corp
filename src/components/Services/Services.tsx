import React from "react";

type Service = {
  title: string;
  bullets: string[];
};

const services: Service[] = [
  {
    title: "ASO Optimization",
    bullets: [
      "Title & description",
      "Metadata",
      "A/B testing",
      "In-app events",
      "Custom product pages",
      "Page localization",
      "Reputation management",
    ],
  },
  {
    title: "ASA / Google Ads",
    bullets: [
      "Campaign setup",
      "CPA optimization",
      "Scaling",
      "Retargeting",
      "Budget automation",
    ],
  },
  {
    title: "ASO Maintenance & Growth",
    bullets: [
      "Position growth",
      "A/B test adaptation",
      "Store algorithm tracking",
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="px-4 py-24 sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          ASO, ASA &amp; Paid UA Services
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border"
            >
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <div className="mt-4 h-px w-full bg-border" />
              <ul className="mt-6 flex flex-col gap-3 text-sm text-ink-soft">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
