"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Statistics } from "@/components/Statistics/Statistics";
import { Reveal } from "@/components/common/Reveal";
import { ContactModal } from "@/components/Contact/ContactModal";
import { trackPixelEvent } from "@/components/MetaPixel/MetaPixel";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-primary">
      <HeroDecoration />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-40 pt-16 text-center text-white sm:px-10 md:pb-56 md:pt-24">
        <Reveal as="h1" delay={120}>
          <span
            className="block text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[70px]"
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
          <span
            className="mx-auto mt-8 block max-w-xl font-medium leading-relaxed md:max-w-none md:whitespace-nowrap"
            style={{ fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: "18px", color: "#FFFFFF" }}
          >
            We scale your product with a proven organic &amp; paid acquisition strategies
          </span>
        </Reveal>

        <Reveal as="div" delay={360}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                trackPixelEvent("InitiateCheckout");
                setModalOpen(true);
              }}
              className="group inline-flex items-center gap-3 rounded-full border border-black/80 bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_#000] active:translate-y-0.5 active:shadow-[0_3px_0_0_#000]"
            >
              Get Started
              <span className="grid h-2.5 w-2.5 place-items-center rounded-full bg-accent-pink transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 -mt-24 px-4 pb-16 sm:px-6 md:-mt-28 md:pb-20">
        <Statistics />
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

const HeroDecoration: React.FC = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(30deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 270px), repeating-linear-gradient(-30deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 270px)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 15%, #000 35%, #000 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 15%, #000 35%, #000 100%)",
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
