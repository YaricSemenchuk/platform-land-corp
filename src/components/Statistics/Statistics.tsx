import React from "react";
import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";

type Stat = {
  display: React.ReactNode;
  label: string;
};

const stats: Stat[] = [
  {
    display: <CountUp to={90} suffix="%" />,
    label: "Client retention rate",
  },
  {
    display: <CountUp to={150} suffix="+" />,
    label: "Commercial mobile apps promoted",
  },
  {
    display: <CountUp to={2022} useGrouping={false} duration={1800} />,
    label: "Year we started driving success",
  },
];

export const Statistics: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border shadow-xl shadow-black/5 ring-1 ring-border md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={120 * i}
            className="bg-white px-8 py-9 text-center md:py-11"
          >
            <div className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {s.display}
            </div>
            <p className="mx-auto mt-3 max-w-[22ch] text-sm text-muted">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
