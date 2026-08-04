"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { markContactSubmitted } from "@/components/Contact/useContactSubmitted";
import { trackPixelEvent } from "@/components/MetaPixel/MetaPixel";

type Props = {
  title: string;
};

const initial = {
  fullName: "",
  company: "",
  email: "",
  messenger: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

const fieldCls =
  "w-full rounded-[16px] border border-black/80 bg-white p-[15px] text-[14px] font-semibold leading-none text-ink outline-none placeholder:font-semibold placeholder:text-ink focus:ring-2 focus:ring-primary/40";

export const CtaBanner: React.FC<Props> = ({ title }) => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to send");
      }
      setStatus("success");
      trackPixelEvent("Lead");
      markContactSubmitted();
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  };

  return (
    <section id="contact-form" className="px-4 sm:px-6 md:px-10">
      <Reveal as="div" direction="scale">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-8 rounded-[32px] bg-primary px-4 py-8 shadow-[6px_6px_0_0_#000] md:gap-10 md:py-10 lg:rounded-[40px] lg:shadow-[12px_12px_0_0_#000]">
          <h2 className="text-balance text-center text-[32px] font-bold leading-tight tracking-[-1.1px] text-white md:text-[48px] md:leading-[55px]">
            {title}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[602px] flex-col gap-5 rounded-[32px] border border-black/80 bg-white p-6 shadow-[0_6px_0_0_#000] lg:rounded-[40px] lg:p-[41px]"
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-10">
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                aria-label="Full name"
                placeholder="Full name"
                className={fieldCls}
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                aria-label="Company"
                placeholder="Company"
                className={fieldCls}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-label="E-mail"
                placeholder="E-mail"
                className={fieldCls}
              />
              <input
                name="messenger"
                value={form.messenger}
                onChange={handleChange}
                required
                aria-label="Phone number"
                placeholder="Phone number"
                className={fieldCls}
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              aria-label="Tell us about your project"
              placeholder="Tell us about your project"
              className={fieldCls + " h-[120px] resize-none"}
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full border border-black/80 bg-primary px-[29px] py-[15px] text-[14px] font-semibold leading-none text-white shadow-[0_4px_0_0_#000] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_6px_0_0_#000] active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "success" && (
                <span className="text-sm font-medium text-green-600">
                  Thanks! We&rsquo;ll be in touch shortly.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm font-medium text-red-600">
                  {errorMsg ?? "Something went wrong."}
                </span>
              )}
            </div>

            <p className="text-[12px] leading-[1.2] text-ink">
              By submitting this form you agree to our{" "}
              <Link href="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </Link>{" "}
              and consent to Promobile collecting and processing your personal
              data in accordance with it.
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
};
