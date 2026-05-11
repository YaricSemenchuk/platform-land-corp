'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { markContactSubmitted, useContactSubmitted } from './contactState';

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

export const ContactModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState(initial);
  const submitted = useContactSubmitted();

  useEffect(() => {
    if (!open) {
      setForm(initial);
      return;
    }
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
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error('Contact submit failed:', err);
    }
    markContactSubmitted();
  };

  const inputCls =
    'w-full rounded-xl bg-[#dcdcdc] px-4 py-3 text-sm text-ink placeholder:text-[#7a7a7a] outline-none focus:ring-2 focus:ring-primary/40';
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

        {submitted ? (
          <div className="py-12 text-center">
            <h3 className="text-2xl font-bold text-ink md:text-3xl">
              Спасибо!
            </h3>
            <p className="mt-3 text-base text-ink/80">
              Данные успешно отправлены
            </p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelCls}>Full Name</label>
            <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>Company</label>
            <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company" className={inputCls} />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>E-mail</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Enter Your E-mail" className={inputCls} />
          </div>
          <div>
            <label htmlFor="messenger" className={labelCls}>Messenger (Whatsapp/Telegram)</label>
            <input id="messenger" name="messenger" value={form.messenger} onChange={handleChange} placeholder="Phone number or contact link" className={inputCls} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className={labelCls}>Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Enter your message" className={`${inputCls} resize-none`} />
          </div>
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send
            </button>
          </div>
        </form>
        )}
      </div>
    </div>,
    document.body,
  );
};
