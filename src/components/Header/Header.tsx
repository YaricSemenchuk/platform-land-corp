"use client";

import React from "react";
import Image from "next/image";
import {
  TELEGRAM_URL,
  TelegramIcon,
  WHATSAPP_URL,
  WhatsAppIcon,
} from "@/components/common/messengers";

const PLATFORM_URL = "https://client.promobile.app/login";

const iconButtonCls =
  "grid h-10 w-10 place-items-center rounded-full border border-black/80 bg-white text-ink shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] md:h-[46px] md:w-[46px]";

const messengers = [
  { label: "Contact us on WhatsApp", href: WHATSAPP_URL, icon: <WhatsAppIcon /> },
  { label: "Contact us on Telegram", href: TELEGRAM_URL, icon: <TelegramIcon /> },
];

export const Header: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-primary text-white">
      <div className="relative mx-auto flex h-16 max-w-[1280px] items-center px-6 md:h-20 md:px-10">
        <div className="flex items-center gap-3 md:gap-5">
          {messengers.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.label}
              title={m.label}
              className={iconButtonCls}
            >
              {m.icon}
            </a>
          ))}
        </div>

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

        <a
          href={PLATFORM_URL}
          className="ml-auto inline-flex h-9 items-center rounded-full border border-black/80 bg-white px-5 text-sm font-semibold text-ink shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] md:h-10 md:px-6 md:text-lg md:shadow-[0_6px_0_0_#000] md:hover:shadow-[0_6px_0_0_#000] md:active:shadow-[0_3px_0_0_#000]"
        >
          Platform
        </a>
      </div>
    </header>
  );
};
