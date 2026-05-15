import React from "react";
import Image from "next/image";
import { ChartNoAxesCombined, Rocket } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

type Card = {
  title: string;
  body: string;
  tone: "light" | "dark";
  icon: string;
};

const cards: Card[] = [
  {
    title: "Audit & Competitor\nResearch",
    body: "Analysis of the store page, niche, and competitors based on real data and metric dynamics. We build a strategy that is grounded in the product’s economics.",
    tone: "light",
    icon: "/global.png",
  },
  {
    title: "App Store\nOptimization",
    body: "Our team guarantees your app gets discovered and installed more often by boosting search rankings and conversion rates.",
    tone: "dark",
    icon: "/aso.png",
  },
  {
    title: "Paid User\nAcquisition",
    body: "Aligning paid channels with your product KPIs for efficient launches and management. Strong unit economics guide our efforts, managing spend wisely to avoid waste and achieve optimal returns.",
    tone: "dark",
    icon: "/result.png",
  },
  {
    title: "Full Service App\nPromotion",
    body: "Ongoing, reliable support that unites our expertise into a seamless system for app advancement. A dedicated team manages analytics setup, organic search optimization, and paid traffic channels.",
    tone: "light",
    icon: "/analitics.png",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Core Directions
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={120 * i}>
              <article
                style={{ boxShadow: "0 8px 0 0 #0b0b0f", borderRadius: 45 }}
                className={
                  "relative flex min-h-[260px] flex-col border-1 border-ink p-8 md:min-h-[300px] md:p-10 " +
                  (c.tone === "dark"
                    ? "bg-primary text-white"
                    : "bg-white text-ink")
                }
              >
                <h3 className="whitespace-pre-line pr-24 text-2xl font-bold leading-tight md:pr-28 md:text-[28px]">
                  {c.title}
                </h3>
                <p
                  className={
                    "mt-6 pr-24 text-sm leading-relaxed md:pr-28 md:text-[15px] " +
                    (c.tone === "dark" ? "text-white/90" : "text-ink/80")
                  }
                >
                  {c.body}
                </p>
                {c.icon === "/analitics.png" ? (
                  <ChartNoAxesCombined
                    color="#4262FF"
                    aria-hidden
                    className="absolute bottom-8 right-8 h-12 w-12 md:bottom-10 md:right-10 md:h-14 md:w-14"
                  />
                ) : c.icon === "/aso.png" ? (
                  <Rocket
                    color="#ffffff"
                    aria-hidden
                    className="absolute bottom-8 right-8 h-12 w-12 md:bottom-10 md:right-10 md:h-14 md:w-14"
                  />
                ) : (
                  <Image
                    src={c.icon}
                    alt=""
                    aria-hidden
                    width={80}
                    height={80}
                    className="absolute bottom-8 right-8 h-12 w-12 md:bottom-10 md:right-10 md:h-14 md:w-14"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
