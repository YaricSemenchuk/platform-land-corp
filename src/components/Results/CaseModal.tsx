'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SiAppstore, SiGoogleplay, SiAppgallery, SiHuawei, SiXiaomi } from 'react-icons/si';
import type { IconType } from 'react-icons';
import ReactCountryFlag from 'react-country-flag';

export type PlatformKey = 'appstore' | 'googleplay' | 'appgallery' | 'huawei' | 'getapps' | 'rustore';

const PLATFORM_META: Record<PlatformKey, { Icon: IconType; bg: string; color: string; label: string }> = {
  appstore: { Icon: SiAppstore, bg: '#1E90FF', color: '#ffffff', label: 'App Store' },
  googleplay: { Icon: SiGoogleplay, bg: '#ffffff', color: '#34A853', label: 'Google Play' },
  appgallery: { Icon: SiAppgallery, bg: '#ffffff', color: '#C8102E', label: 'AppGallery' },
  huawei: { Icon: SiHuawei, bg: '#C8102E', color: '#ffffff', label: 'Huawei' },
  getapps: { Icon: SiXiaomi, bg: '#FF4081', color: '#ffffff', label: 'GetApps' },
  rustore: { Icon: SiGoogleplay, bg: '#0066FF', color: '#ffffff', label: 'RuStore' },
};

export const PlatformIcon: React.FC<{ kind: PlatformKey; size?: number }> = ({ kind, size = 36 }) => {
  const m = PLATFORM_META[kind];
  return (
    <span
      aria-label={m.label}
      className="grid place-items-center rounded-[20%] shadow-sm"
      style={{ background: m.bg, color: m.color, width: size, height: size }}
    >
      <m.Icon size={Math.round(size * 0.6)} />
    </span>
  );
};

export type CaseDetail = {
  category: string;
  appName: string;
  tagline: string;
  platforms: PlatformKey[];
  countries: string[];
  months: number | string;
  tools: string;
  goal: string;
  execution: string[];
  keyResults: { label: string; value: string }[];
  highlight: { value: string; label: string };
  preview?: {
    appName: string;
    publisher: string;
    iconBg?: string;
    iconLabel?: string;
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: CaseDetail | null;
};

export const CaseModal: React.FC<Props> = ({ open, onClose, data }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !data || typeof window === 'undefined') return null;

  const cardCls =
    'border bg-white px-5 py-4';
  const cardShadow = {
    borderRadius: '16px',
    borderColor: '#252525',
    boxShadow: '0px 5px 0px 0px rgba(37, 37, 37, 1)',
  } as const;
  const headerFont = { fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: '12px' } as const;
  const descFont = { fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: '10px', color: '#252525' } as const;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border-2 border-ink bg-white"
        style={{ boxShadow: '0 10px 0 0 #0b0b0f' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 bg-primary px-5 py-3.5">
          <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-3.5 w-3.5 rounded-full bg-white" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto grid h-8 w-8 place-items-center rounded-full text-white transition hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="max-h-[85vh] overflow-y-auto px-6 py-7 sm:px-8 md:px-10 md:py-9">
          <h2 className="text-3xl font-bold text-ink md:text-4xl" style={{ fontFamily: "'Readex Pro', Arial, sans-serif" }}>{data.category}</h2>
          <p className="mt-2 text-base text-ink-soft md:text-lg">{data.appName}</p>
          {data.tagline && <p className="mt-1 text-sm text-ink-soft">{data.tagline}</p>}

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                <div className={`${cardCls} flex flex-col items-center text-center`} style={cardShadow}>
                  <div className="flex flex-nowrap items-center justify-center gap-1.5">
                    {data.platforms.map((p, i) => (
                      <PlatformIcon key={i} kind={p} size={21} />
                    ))}
                  </div>
                  <div className="mt-2 text-xs font-medium text-ink-soft">Platform</div>
                </div>
                <div className={`${cardCls} flex flex-col items-center text-center`} style={cardShadow}>
                  <div className="flex flex-nowrap items-center justify-center gap-1.5">
                    {data.countries.map((code, i) => (
                      <ReactCountryFlag
                        key={i}
                        countryCode={code}
                        svg
                        style={{ width: '30px', height: '21px', objectFit: 'cover', borderRadius: '2px' }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 text-xs font-medium text-ink-soft">{data.countries.length > 1 ? 'Countries' : 'Country'}</div>
                </div>
                <div className={`${cardCls} flex flex-col items-center text-center`} style={cardShadow}>
                  <div className="font-bold text-primary" style={{ fontFamily: "'Readex Pro', Arial, sans-serif", fontSize: '25px' }}>{data.months}</div>
                  <div className="mt-2 text-xs font-medium text-ink-soft">Months</div>
                </div>
              </div>

              <div className={cardCls} style={cardShadow}>
                <div className="text-sm font-bold text-ink" style={headerFont}>Tools</div>
                <p className="mt-1" style={descFont}>{data.tools}</p>
              </div>

              <div className={cardCls} style={cardShadow}>
                <div className="text-sm font-bold text-ink" style={headerFont}>Goal</div>
                <p className="mt-1" style={descFont}>{data.goal}</p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border bg-white" style={cardShadow}>
              {data.preview && (
                <div className="flex items-center gap-3 px-4 py-3">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-xs font-bold text-white"
                    style={{ background: data.preview.iconBg ?? 'var(--primary)' }}
                  >
                    {data.preview.iconLabel ?? data.preview.appName.slice(0, 3)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-ink">{data.preview.appName}</div>
                    <div className="text-xs text-ink-soft">{data.preview.publisher}</div>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white">
                    GET
                  </button>
                </div>
              )}
              <div className="grid flex-1 grid-cols-3 gap-2 bg-gradient-to-br from-primary-soft to-primary-soft-2 p-3">
                <div className="rounded-xl bg-white/70" />
                <div className="rounded-xl bg-white/70" />
                <div className="rounded-xl bg-white/70" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="border bg-primary-soft-2 px-6 py-5" style={cardShadow}>
              <div className="text-sm font-bold text-ink" style={headerFont}>Execution</div>
              <ol className="mt-3 space-y-2 text-sm text-ink-soft">
                {data.execution.map((e, i) => (
                  <li key={i}>
                    <span className="font-semibold text-ink">{i + 1}. </span>
                    {e}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border bg-primary px-6 py-5 text-white" style={cardShadow}>
              <div className="text-sm font-bold" style={headerFont}>Key Results</div>
              <div className="mt-3 grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <ul className="space-y-2 text-sm">
                  {data.keyResults.map((r, i) => (
                    <li key={i}>
                      <b>{r.label}:</b> {r.value}
                    </li>
                  ))}
                </ul>
                <div className="h-full w-px bg-white/40" />
                <div className="text-center">
                  <div className="text-2xl font-bold leading-tight">{data.highlight.value}</div>
                  <div className="mt-1 text-xs leading-snug">{data.highlight.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
