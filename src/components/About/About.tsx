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
    title: "Audit & Competitor Research",
    body: "Analysis of the store page, niche, and competitors based on real data and metric dynamics. We build a strategy that is grounded in the product’s economics.",
    tone: "light",
    icon: "/global.png",
  },
  {
    title: "App Store Optimization",
    body: "Our team guarantees your app gets discovered and installed more often by boosting search rankings and conversion rates.",
    tone: "dark",
    icon: "/aso.png",
  },
  {
    title: "Paid User Acquisition",
    body: "Aligning paid channels with your product KPIs for efficient launches and management. Strong unit economics guide our efforts, managing spend wisely to avoid waste and achieve optimal returns.",
    tone: "dark",
    icon: "/result.png",
  },
  {
    title: "Full Service App Promotion",
    body: "Ongoing, reliable support that unites our expertise into a seamless system for app advancement. A dedicated team manages analytics setup, organic search optimization, and paid traffic channels.",
    tone: "light",
    icon: "/analitics.png",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1200px] lg:max-w-[1280px]">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl"
        >
          Core Directions
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[repeat(2,304px)] md:justify-center md:gap-10 lg:grid-cols-2 lg:justify-normal">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={120 * i}
              className={
                i === 2 ? "order-4 md:order-none" : i === 3 ? "order-3 md:order-none" : ""
              }
            >
              <article
                style={{ boxShadow: "0 6px 0 0 #0b0b0f" }}
                className={
                  "relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[32px] border-1 border-ink p-6 md:min-h-[240px] md:p-6 lg:min-h-[280px] lg:rounded-[45px] lg:p-10 " +
                  (c.tone === "dark"
                    ? "bg-primary text-white"
                    : "bg-white text-ink")
                }
              >
                <h3
                  className="text-[18px] font-bold leading-[20px] sm:text-xl sm:leading-tight md:text-[19px] lg:text-[26px] lg:leading-[36.4px]"
                  style={{ fontFamily: "'Readex Pro', Arial, sans-serif" }}
                >
                  {c.title}
                </h3>
                <p
                  className={
                    "mt-2.5 mb-12 text-base leading-none sm:mt-4 sm:text-sm sm:leading-relaxed md:mt-3 md:mb-0 md:pr-12 md:text-[12px] md:leading-snug lg:mt-6 lg:pr-28 lg:text-[16px] lg:leading-relaxed " +
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
                    className="absolute bottom-6 right-10 h-12 w-12 md:h-10 md:w-10 lg:bottom-10 lg:right-10 lg:h-14 lg:w-14"
                  />
                ) : c.icon === "/aso.png" ? (
                  <Rocket
                    color="#ffffff"
                    aria-hidden
                    className="absolute bottom-6 right-10 h-12 w-12 md:h-10 md:w-10 lg:bottom-10 lg:right-10 lg:h-14 lg:w-14"
                  />
                ) : (
                  <Image
                    src={c.icon}
                    alt=""
                    aria-hidden
                    width={80}
                    height={80}
                    className="absolute bottom-6 right-10 h-12 w-12 md:h-10 md:w-10 lg:bottom-10 lg:right-10 lg:h-14 lg:w-14"
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
