"use client";

import React, { useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";

const items = [
  {
    q: "How fast will we see results?",
    a: "Most clients see meaningful keyword movement within 3–6 weeks. Paid UA usually returns measurable signal in the first 1–2 weeks once campaigns leave learning.",
  },
  {
    q: "How much does ASO & Paid UA cost?",
    a: "Engagements start from $1,000 per month and scale with the scope of your goals. After our initial audit we deliver a tailored plan with clear pricing.",
  },
  {
    q: "Do I need both ASO and ASA?",
    a: "They reinforce each other — strong ASO lifts conversion on paid traffic, and ASA traffic feeds App Store ranking. Most apps see the best ROI with both running in concert.",
  },
  {
    q: "Do you offer one-time ASO optimization?",
    a: "Yes. We run a one-time deep-dive audit and metadata refresh for teams who want to validate the opportunity before committing to a retainer — and a maintenance track once you're ready.",
  },
];

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[920px]">
        <Reveal as="div" className="text-center">
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Frequently Asked Questions
        </Reveal>

        <div className="mt-12 flex flex-col border-t border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={60 * i}>
                <FaqItem
                  question={it.q}
                  answer={it.a}
                  open={isOpen}
                  onToggle={() => setOpen(isOpen ? null : i)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

const FaqItem: React.FC<ItemProps> = ({ question, answer, open, onToggle }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [measured, setMeasured] = React.useState(0);
  React.useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const update = () => setMeasured(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const max = open ? measured + 32 : 0;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left md:py-7"
      >
        <span className="text-base font-semibold text-ink md:text-lg">
          {question}
        </span>
        <span
          style={{
            transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            transitionDuration: "500ms",
            transitionProperty: "transform, background-color",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
          className={
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/80 text-white shadow-[3px_3px_0_0_#000] group-hover:bg-ink " +
            (open ? "bg-ink" : "bg-primary")
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12h16M12 4v16"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        style={{ maxHeight: max }}
        className="overflow-hidden transition-[max-height] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div
          ref={contentRef}
          className={
            "pb-6 pr-12 text-sm leading-relaxed text-muted transition-opacity duration-[700ms] ease-out md:text-base " +
            (open ? "opacity-100 delay-150" : "opacity-0")
          }
        >
          {answer}
        </div>
      </div>
    </div>
  );
};
