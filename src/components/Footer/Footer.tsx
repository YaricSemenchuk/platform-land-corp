import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";

const navLinks = [
  { label: "Core Directions", href: "#about" },
  { label: "Partnership Stages", href: "#process" },
  { label: "Case Studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-16 bg-ink text-white">
      <Reveal>
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-10 md:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white font-bold transition-transform duration-300 group-hover:rotate-[8deg]">
                P
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Promobile
              </span>
            </Link>

            <nav className="flex flex-wrap gap-x-7 gap-y-3 md:max-w-xl md:justify-end">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-white/60">Contact us:</p>
              <a
                href="mailto:info@promobile.app"
                className="mt-2 block text-lg font-semibold transition-colors hover:text-accent-yellow md:text-xl"
              >
                info@promobile.app
              </a>
            </div>

            <div className="flex gap-3 md:justify-end">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright © {new Date().getFullYear()} Promobile</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l8.4 11.2L3.6 21h2.6l6.5-7.1L18 21h3l-8.7-11.6L20.4 3h-2.6l-6 6.6L6 3H3z"
        fill="currentColor"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.32 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.29V22H7.54V8z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93V14.9H7.9v-2.83h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.83h-2.33v7.1C18.34 21.25 22 17.09 22 12.07z" />
    </svg>
  );
}
