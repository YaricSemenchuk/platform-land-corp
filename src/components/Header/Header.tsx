"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "https://promobile.app/platform", external: true },
  { label: "Contacts", href: "#contact" },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 " +
        (scrolled
          ? "bg-white/85 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.04)] supports-[backdrop-filter]:bg-white/70"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white font-bold transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-105">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink">
            Promobile
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="nav-link text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
            <span className="grid h-2 w-2 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-all"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          "md:hidden overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-300 " +
          (open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft hover:bg-surface"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
