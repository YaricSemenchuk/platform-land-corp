"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "promobile:contactSubmitted";
const EVENT_NAME = "promobile:contactSubmitted";

export function markContactSubmitted() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {}
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function useContactSubmitted() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setSubmitted(window.localStorage.getItem(STORAGE_KEY) === "1");
      } catch {
        setSubmitted(false);
      }
    };
    read();
    window.addEventListener(EVENT_NAME, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(EVENT_NAME, read);
      window.removeEventListener("storage", read);
    };
  }, []);

  return submitted;
}
