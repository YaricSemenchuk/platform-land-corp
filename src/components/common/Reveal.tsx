"use client";

import React, { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "scale";

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  direction?: Direction;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
};

export const Reveal: React.FC<Props> = ({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  className,
  threshold = 0.15,
  once = true,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOn(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setOn(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-reveal={direction}
      data-reveal-on={on ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
};
