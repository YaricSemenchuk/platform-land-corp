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
      <div className="mx-auto max-w-[1200px]">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Core Directions
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={120 * i}
              className={
                i === 2 ? "order-4 md:order-none" : i === 3 ? "order-3 md:order-none" : ""
              }
            >
              <article
                style={{ boxShadow: "0 8px 0 0 #0b0b0f", borderRadius: 45 }}
                className={
                  "relative flex h-[260px] max-[380px]:h-[220px] flex-col border-1 border-ink p-6 md:h-[260px] md:p-8 lg:h-[280px] lg:p-10 " +
                  (c.tone === "dark"
                    ? "bg-primary text-white"
                    : "bg-white text-ink")
                }
              >
                <h3
                  className="pr-12 font-bold leading-tight sm:pr-6 md:pr-4"
                  style={{ fontFamily: "'Readex Pro', Arial, sans-serif" }}
                >
                  <span className="hidden whitespace-nowrap text-sm max-[380px]:block">
                    {c.title.replace(/\n/g, " ")}
                  </span>
                  <span
                    className="block whitespace-pre-line text-base sm:text-2xl lg:text-[26px] max-[380px]:hidden"
                    style={c.tone === "light" ? { color: "#252525" } : undefined}
                  >
                    {c.title}
                  </span>
                </h3>
                <p
                  className={
                    "mt-4 pr-16 text-[13px] leading-relaxed sm:mt-6 sm:pr-24 sm:text-sm md:pr-24 lg:pr-28 lg:text-[16px] " +
                    (c.tone === "dark" ? "text-white/90" : "")
                  }
                  style={
                    c.tone === "light"
                      ? { fontFamily: "'Readex Pro', Arial, sans-serif", color: "#252525" }
                      : { fontFamily: "'Readex Pro', Arial, sans-serif" }
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
