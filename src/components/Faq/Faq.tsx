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
  const [open, setOpen] = useState<number | null>(0);

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

        <div className="mt-12 flex flex-col gap-4">
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
  const max = open ? (contentRef.current?.scrollHeight ?? 0) + 32 : 0;

  return (
    <div
      className={
        "overflow-hidden rounded-2xl bg-surface ring-1 transition-colors duration-300 " +
        (open ? "ring-primary/40" : "ring-border")
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
      >
        <span className="text-sm font-semibold text-ink md:text-base">
          {question}
        </span>
        <span
          className={
            "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 " +
            (open
              ? "bg-primary text-white rotate-45"
              : "bg-white text-ink ring-1 ring-border")
          }
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 12h12M12 6v12"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        style={{ maxHeight: max }}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div
          ref={contentRef}
          className="border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-muted md:px-8"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};
