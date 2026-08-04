"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import MuiLinkedInIcon from "@mui/icons-material/LinkedIn";
import MuiTelegramIcon from "@mui/icons-material/Telegram";
import {
  TELEGRAM_URL,
  TelegramIcon,
  WHATSAPP_URL,
  WhatsAppIcon,
} from "@/components/common/messengers";

const colA = [
  { label: "About", href: "/#about" },
  { label: "Stages", href: "/#partnership" },
  { label: "Services", href: "/#pricing" },
];

const colB = [
  { label: "Cases", href: "/#cases" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pricing", href: "/#pricing" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/promobile-app/",
    icon: <LinkedInIcon />,
  },
  { label: "Telegram", href: TELEGRAM_URL, icon: <SocialTelegramIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/61575265504649/about/?_rdr", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/promobile_app/", icon: <InstagramIcon /> },
];

const contactButtons = [
  {
    label: "Contact us on WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <span className="text-primary">
        <WhatsAppIcon />
      </span>
    ),
  },
  {
    label: "Contact us on Telegram",
    href: TELEGRAM_URL,
    icon: (
      <span className="text-primary">
        <TelegramIcon />
      </span>
    ),
  },
];

const navLinkCls = "text-[14px] font-medium leading-[21px] text-white hover:text-white/80";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-auto pt-20 md:pt-28">
      <Reveal>
        <div className="rounded-t-[32px] bg-[#1c1c1f] px-4 py-6 text-white md:px-14 md:py-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 md:grid-cols-4">
              {/* Logo shares its row with the socials on phones. */}
              <div className="flex items-start justify-between gap-4">
                <a
                  href="#top"
                  aria-label="ProMobile"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-block"
                >
                  <Image
                    src="/logopromobile.png"
                    alt="ProMobile"
                    width={62}
                    height={79}
                    className="h-12 w-auto md:h-20"
                    priority
                  />
                </a>
                <Socials className="gap-2.5 md:hidden" />
              </div>

              {/* Paired on small screens, individual grid cells from md up. */}
              <div className="grid grid-cols-2 gap-5 md:contents">
                <div className="order-2 flex flex-col gap-10 md:order-none">
                  <ul className="flex flex-col gap-2.5">
                    {colA.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className={navLinkCls}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Socials className="hidden gap-5 md:flex" />
                </div>

                <ul className="order-1 flex flex-col gap-2.5 self-start md:order-none">
                  {colB.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={navLinkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-10">
                <p className="max-w-[275px] text-[32px] font-bold leading-none tracking-[-1.1px] text-white">
                  Let&rsquo;s build your next growth story
                </p>
                <div className="flex w-full max-w-[257px] flex-col gap-5">
                  {contactButtons.map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-black/80 bg-white px-[29px] py-[15px] text-[14px] font-semibold leading-none text-ink shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000]"
                    >
                      {b.icon}
                      {b.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy sits above the copyright on phones, beside it from md up. */}
            <div className="mt-10 flex flex-col-reverse gap-5 text-[14px] leading-5 md:grid md:grid-cols-4 md:gap-2.5">
              <p className="text-white/70">
                Copyright © ProMobile, {new Date().getFullYear()}
              </p>
              <Link href="/privacy-policy" className="text-white/85 hover:text-white">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

const Socials: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={"flex items-center " + className}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        aria-label={s.label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition hover:-translate-y-0.5 hover:text-white/80"
      >
        {s.icon}
      </a>
    ))}
  </div>
);

function LinkedInIcon() {
  return <MuiLinkedInIcon sx={{ fontSize: 26 }} />;
}

function SocialTelegramIcon() {
  return <MuiTelegramIcon sx={{ fontSize: 26 }} />;
}

function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93V14.9H7.9v-2.83h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.83h-2.33v7.1C18.34 21.25 22 17.09 22 12.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
