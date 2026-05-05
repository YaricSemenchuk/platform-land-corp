import React from "react";
import Image from "next/image";
import { Statistics } from "@/components/Statistics/Statistics";
import { Reveal } from "@/components/common/Reveal";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <HeroDecoration />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-40 pt-16 text-center text-white sm:px-10 md:pb-56 md:pt-24">
        <Reveal as="h1" delay={120}>
          <span
            className="block text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[88px]"
            style={{ textShadow: "5px 5px 0 #000" }}
          >
            Drive Your
            <br />
            App&rsquo;s Organic
            <br />
            Growth
          </span>
        </Reveal>

        <Reveal as="p" delay={240}>
          <span className="mx-auto mt-8 block max-w-xl text-base font-medium leading-relaxed text-white sm:text-lg">
            We scale your product with a proven organic &amp; paid acquisition
            strategies
          </span>
        </Reveal>
      </div>

      <div className="relative z-10 -mt-24 px-4 pb-16 sm:px-6 md:-mt-28 md:pb-20">
        <Statistics />
      </div>
    </section>
  );
};

const HeroDecoration: React.FC = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(60deg, rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(-60deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
        backgroundSize: "90px 156px",
      }}
    />

    <Image
      src="/appstore.png"
      alt=""
      aria-hidden
      width={175}
      height={155}
      className="pointer-events-none absolute left-[6%] top-[26%] hidden h-[155px] w-[175px] anim-float md:block"
      priority
    />

    <Image
      src="/googleplay.png"
      alt=""
      aria-hidden
      width={175}
      height={155}
      className="pointer-events-none absolute right-[6%] top-[18%] hidden h-[155px] w-[175px] anim-float-slow md:block"
      priority
    />
  </>
);

