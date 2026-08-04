import React from "react";
import { Reveal } from "@/components/common/Reveal";

type Review = {
  /** Each entry is a paragraph of the quote. */
  quote: string[];
  /** Smaller line above the name — company or role. */
  attribution: string;
  /** Bold line: who is speaking. */
  author: string;
  tone: "light" | "dark";
};

const reviews: Review[] = [
  {
    quote: [
      "Promobile took full ownership of our apps’ ASO from day one. Joining at the development stage, they prepared texts and graphic metadata, optimized our App Store product page, and built the growth strategy.",
      "After launch, the focus shifted to keyword indexation, search rankings, and Apple Search Ads. The team works with industry-leading ASO tools and has its own Promobile.app platform. Daily reports and quick adjustments kept us in the loop.",
      "Our account manager was always responsive, and the whole team is clearly results-driven. Thanks, Promobile!",
    ],
    attribution: "NDA",
    author: "CEO of a cool company",
    tone: "light",
  },
  {
    quote: [
      "Working with Promobile, we achieved impressive results. In the first two months, visibility for target keywords grew by more than 35%, driving a 25% increase in organic installs. The team also raised our average App Store rating to 4.7 stars and, through category positioning work, pushed the app into the top 3 of its category.",
      "Their workflow impressed me most: flexible, transparent in communication, lightning-fast on changes.",
      "I can confidently recommend Promobile as a reliable ASO partner!",
    ],
    attribution: "Ex-Head of ASO (Marketing Agency & Top Betting Operator)",
    author: "Alisa",
    tone: "dark",
  },
];

export const Reviews: React.FC = () => (
  <section id="reviews" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1280px]">
      <Reveal
        as="h2"
        className="text-center text-[32px] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
      >
        Reviews from our partners
      </Reveal>

      <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2">
        {reviews.map((r, i) => (
          <Reveal key={r.author} delay={i * 80}>
            <article
              className={
                "flex h-full flex-col justify-between gap-5 rounded-[32px] border border-black/80 p-6 shadow-[0_6px_0_0_#000] lg:rounded-[40px] lg:p-[41px] " +
                (r.tone === "dark" ? "bg-primary text-white" : "bg-white text-ink")
              }
            >
              <div className="flex flex-col gap-4">
                {r.quote.map((p) => (
                  <p
                    key={p}
                    className={
                      "text-[16px] leading-none " +
                      (r.tone === "dark" ? "font-medium" : "")
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex items-start gap-2">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[0.87px] border-black/80 bg-white shadow-[0_3.478px_0_0_#000]">
                  <PersonIcon />
                </span>
                <span className="flex flex-col gap-2.5 leading-none">
                  <span className="text-[12px]">{r.attribution}</span>
                  <span className="text-[16px] font-semibold">{r.author}</span>
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

function PersonIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28.5714 28.5714"
      fill="#4262FF"
      aria-hidden
    >
      <path d="M5.35722 25.0001C5.35722 25.0001 3.5715 25.0001 3.5715 23.2144C3.5715 21.4286 5.35722 16.0715 14.2858 16.0715C23.2144 16.0715 25.0001 21.4286 25.0001 23.2144C25.0001 25.0001 23.2144 25.0001 23.2144 25.0001H5.35722ZM14.2858 14.2858C15.7066 14.2858 17.0692 13.7214 18.0739 12.7167C19.0785 11.7121 19.6429 10.3494 19.6429 8.92864C19.6429 7.50784 19.0785 6.14523 18.0739 5.14057C17.0692 4.13591 15.7066 3.5715 14.2858 3.5715C12.865 3.5715 11.5024 4.13591 10.4977 5.14057C9.49306 6.14523 8.92864 7.50784 8.92864 8.92864C8.92864 10.3494 9.49306 11.7121 10.4977 12.7167C11.5024 13.7214 12.865 14.2858 14.2858 14.2858Z" />
    </svg>
  );
}
