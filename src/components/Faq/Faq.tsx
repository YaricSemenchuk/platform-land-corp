"use client";

import React, { useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";

const items = [
  {
    q: "How fast will we see results?",
    a: "~3-6 weeks for the first improvements.",
  },
  {
    q: "How much does ASO & Paid UA cost?",
    a: "Starts from $1,000 per month, depending on the scope.",
  },
  {
    q: "Do I need both ASO and ASA?",
    a: "ASO improves organic visibility, while ASA accelerates paid growth. Using both together maximizes results, but we can tailor our approach based on your goals.",
  },
  {
    q: "Do you offer one-time ASO optimization?",
    a: "Yes, depending on your needs, we provide both one-time ASO audits and ongoing ASO maintenance.",
  },
];

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[920px]">
        <Reveal
          as="h2"
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Frequently Asked Questions
        </Reveal>

        <div className="mt-12 flex flex-col" style={{ borderTop: "1px solid #bababa" }}>
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
    <div style={{ borderBottom: "1px solid #bababa" }}>
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
            "grid h-11 w-11 shrink-0 place-items-center rounded-full text-white group-hover:bg-ink " +
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
          style={{
            fontFamily: "'Readex Pro', Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "#252525",
          }}
          className={
            "pb-6 pr-12 leading-relaxed transition-opacity duration-[700ms] ease-out " +
            (open ? "opacity-100 delay-150" : "opacity-0")
          }
        >
          {answer}
        </div>
      </div>
    </div>
  );
};
