'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { markContactSubmitted } from './useContactSubmitted';

type Props = {
  open: boolean;
  onClose: () => void;
};

const initial = {
  fullName: '',
  company: '',
  email: '',
  messenger: '',
  message: '',
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export const ContactModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  if (!open || typeof window === 'undefined') return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? 'Failed to send');
      }
      setStatus('success');
      markContactSubmitted();
      setForm(initial);
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 1500);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send');
    }
  };

  const inputCls =
    'w-full rounded-xl bg-[#ededed] px-4 py-3 text-sm text-ink placeholder:text-[#7a7a7a] outline-none focus:ring-2 focus:ring-primary/40';
  const labelCls = 'mb-2 block text-sm font-semibold text-ink';

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 px-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 md:p-10"
        style={{ boxShadow: "0 10px 0 0 #0b0b0f" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink transition hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelCls}>Full Name</label>
            <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>Company</label>
            <input id="company" name="company" value={form.company} onChange={handleChange} required placeholder="Company" className={inputCls} />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>E-mail</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Enter Your E-mail" className={inputCls} />
          </div>
          <div>
            <label htmlFor="messenger" className={labelCls}>Messenger (Whatsapp/Telegram)</label>
            <input id="messenger" name="messenger" value={form.messenger} onChange={handleChange} required placeholder="Phone number or contact link" className={inputCls} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className={labelCls}>Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={3} placeholder="Enter your message" className={`${inputCls} resize-none`} />
          </div>
          <div className="md:col-span-2 mt-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center border border-[#252525] bg-primary text-sm font-medium text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              style={{ width: 190, height: 55, borderRadius: 100, boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
            {status === 'success' && (
              <span className="text-sm font-medium text-green-600">Thanks! We&rsquo;ll be in touch shortly.</span>
            )}
            {status === 'error' && (
              <span className="text-sm font-medium text-red-600">{errorMsg ?? 'Something went wrong.'}</span>
            )}
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};
