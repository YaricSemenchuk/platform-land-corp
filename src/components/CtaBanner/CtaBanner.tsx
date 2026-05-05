import React from "react";
import { Reveal } from "@/components/common/Reveal";

type Props = {
  title: string;
  body?: string;
  primary?: { label: string; href?: string };
  secondary?: { label: string; href?: string };
  variant?: "light" | "dark";
};

export const CtaBanner: React.FC<Props> = ({
  title,
  body,
  primary,
  secondary,
  variant = "light",
}) => {
  const dark = variant === "dark";

  return (
    <section className="px-4 sm:px-6 md:px-10">
      <Reveal as="div" direction="scale">
        <div
          className={
            "relative mx-auto max-w-[1080px] overflow-hidden rounded-[28px] px-8 py-14 text-center sm:px-12 md:py-20 " +
            (dark
              ? "bg-primary text-white"
              : "bg-white text-ink ring-1 ring-border shadow-sm")
          }
        >
          {dark && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl anim-float"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-black/15 blur-3xl anim-float-slow"
              />
            </>
          )}

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]">
              {title}
            </h2>
            {body && (
              <p
                className={
                  "mx-auto mt-5 max-w-xl text-sm leading-relaxed sm:text-base " +
                  (dark ? "text-white/85" : "text-muted")
                }
              >
                {body}
              </p>
            )}

            {(primary || secondary) && (
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                {primary && (
                  <a
                    href={primary.href ?? "#contact"}
                    className={
                      "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 " +
                      (dark
                        ? "bg-white text-ink shadow-black/10 hover:bg-white/95 hover:shadow-xl"
                        : "bg-primary text-white shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/35")
                    }
                  >
                    {primary.label}
                    <span
                      className={
                        "h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 " +
                        (dark ? "bg-primary" : "bg-white")
                      }
                    />
                  </a>
                )}
                {secondary && (
                  <a
                    href={secondary.href ?? "#contact"}
                    className={
                      "inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-semibold transition " +
                      (dark
                        ? "border-white/40 text-white hover:bg-white/10"
                        : "border-border text-ink hover:bg-surface")
                    }
                  >
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
