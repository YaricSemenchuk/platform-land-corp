import React from "react";
import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";

type Stat = {
  display: React.ReactNode;
  label: string;
};

const stats: Stat[] = [
  {
    display: <CountUp to={2022} useGrouping={false} duration={1800} />,
    label: "Founded in",
  },
  {
    display: <CountUp to={150} suffix="+" />,
    label: "Commercial mobile apps promoted",
  },
  {
    display: <CountUp to={90} suffix="%" />,
    label: "Client retention",
  },
];

export const Statistics: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1080px]">
      <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-[28px] border border-black/80 bg-surface shadow-[0_8px_0_0_#000] md:grid-cols-3 md:divide-y-0">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={120 * i}
            className={
              "relative px-8 py-8 text-center md:py-10 " +
              (i > 0
                ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[70%] md:before:w-px md:before:bg-black"
                : "")
            }
          >
            <div className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              {s.display}
            </div>
            <p className="mx-auto mt-3 max-w-[24ch] text-sm text-muted md:text-base">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
