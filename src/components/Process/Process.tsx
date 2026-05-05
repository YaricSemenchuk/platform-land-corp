import React from "react";
import { Reveal } from "@/components/common/Reveal";

const steps = [
  {
    n: "01",
    title: "Client Discovery",
    body: "Stakeholder interviews and a thorough data audit so we understand the product, the funnel and the competitive context.",
  },
  {
    n: "02",
    title: "Custom Roadmap Design",
    body: "A personalized promotion blueprint with measurable KPIs, channel mix, milestones and review cadence.",
  },
  {
    n: "03",
    title: "Tactics Launch",
    body: "Targeted campaigns and ASO optimizations go live — metadata, creatives, paid media, and in-app events synced together.",
  },
  {
    n: "04",
    title: "Experiment Scaling",
    body: "A/B tests, creative iterations, and metric refinement compound results across stores and paid channels.",
  },
];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="bg-surface px-4 py-24 sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[820px]">
        <Reveal as="div" className="text-center">
          <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-border">
            Partnership Stages
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          From kickoff to compounding growth
        </Reveal>

        <ol className="mt-14 flex flex-col gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} direction="left">
              <li className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border md:p-10 card-lift hover:shadow-xl">
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="relative shrink-0">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-primary-soft transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
                      <span className="text-2xl font-bold text-primary md:text-3xl">
                        {s.n}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-1/2 top-full hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 to-transparent md:block"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-ink md:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                      {s.body}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-125"
                />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
