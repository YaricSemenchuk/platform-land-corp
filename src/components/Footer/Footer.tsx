import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import MuiLinkedInIcon from "@mui/icons-material/LinkedIn";
import MuiTelegramIcon from "@mui/icons-material/Telegram";

const colA = [
  { label: "About", href: "#about" },
  { label: "Stages", href: "#partnership" },
  { label: "Services", href: "#pricing" },
];

const colB = [
  { label: "Cases", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/promobile-app/",
    icon: <LinkedInIcon />,
  },
  { label: "Telegram", href: "https://t.me/promobile_app", icon: <TelegramIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/61575265504649/about/?_rdr", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/promobile_app/", icon: <InstagramIcon /> },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-auto pt-20 md:pt-28">
      <Reveal>
        <div className="rounded-t-[32px] bg-[#1c1c1f] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-16 md:items-start">
            <div className="flex flex-col gap-10">
              <Link href="/" aria-label="ProMobile" className="inline-block">
                <Image
                  src="/logopromobile.png"
                  alt="ProMobile"
                  width={56}
                  height={56}
                  className="h-12 w-auto md:h-14"
                  priority
                />
              </Link>

              <div className="flex flex-col gap-4 text-sm text-white/85">
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy policy
                </Link>
                <p className="text-white/70">
                  Copyright © ProMobile, {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-x-16 gap-y-5 text-sm text-white/90 md:gap-x-20">
              <ul className="flex flex-col gap-5">
                {colA.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-5">
                {colB.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-start gap-5 md:justify-self-end">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-white transition hover:-translate-y-0.5 hover:text-white/80"
                  >
                    {s.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

function LinkedInIcon() {
  return <MuiLinkedInIcon sx={{ fontSize: 26 }} />;
}

function TelegramIcon() {
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
