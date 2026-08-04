import React from "react";
import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";

type Stat = {
  display: React.ReactNode;
  label: string;
};

const stats: Stat[] = [
  {
    display: <CountUp to={4} suffix="+ years" duration={1800} />,
    label: "of launching successful apps",
  },
  {
    display: <CountUp to={150} suffix="+" />,
    label: "Mobile apps promoted",
  },
  {
    display: <CountUp to={90} suffix="%" />,
    label: "Average app rating",
  },
];

export const Statistics: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1080px]">
      <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-[28px] border border-black/80 bg-surface shadow-[0_6px_0_0_#000] md:grid-cols-3 md:divide-y-0">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={120 * i}
            className={
              // Figma pins the row at 188px while the copy only needs 164, so
              // the column keeps a min-height and the copy stays top-aligned.
              "relative px-8 py-8 text-center md:min-h-[188px] md:py-10 " +
              (i > 0
                ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[132px] md:before:w-px md:before:bg-black"
                : "")
            }
          >
            <div className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              {s.display}
            </div>
            <p
              className="mx-auto mt-3 max-w-[233px] leading-6"
              style={{ fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: "16px", color: "#252525" }}
            >
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
