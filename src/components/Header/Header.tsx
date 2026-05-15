"use client";

import React from "react";
import Image from "next/image";

export const Header: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-primary text-white">
      <div className="relative mx-auto flex h-16 max-w-[1280px] items-center px-6 md:h-20 md:px-10">
        <a
          href="#top"
          aria-label="ProMobile"
          onClick={scrollToTop}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Image
            src="/logowhite.png"
            alt="ProMobile"
            width={56}
            height={56}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        <nav className="ml-auto">
          <a
            href="https://client.promobile.app/"
            className="text-sm font-semibold text-white transition hover:text-white/80 md:text-base"
          >
            Platform
          </a>
        </nav>
      </div>
    </header>
  );
};
