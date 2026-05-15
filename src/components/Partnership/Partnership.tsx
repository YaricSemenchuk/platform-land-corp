'use client';

import React, { useEffect, useRef } from 'react';
import { Section } from '@/components/common';

type Stage = { n: number; title: string; description: string };

const stages: Stage[] = [
  {
    n: 1,
    title: 'Client Discovery',
    description:
      'Gathering your insights through interviews and data audits to identify unique app potential. Unlock hidden opportunities for rapid advancement.',
  },
  {
    n: 2,
    title: 'Custom Roadmap Design',
    description:
      'Developing personalized mobile promotion blueprints with innovative ASO and acquisition paths to explore.',
  },
  {
    n: 3,
    title: 'Tactics Launch',
    description:
      'Deploying targeted campaigns and optimizations to boost visibility and conversions swiftly.',
  },
  {
    n: 4,
    title: 'Experiment Scaling',
    description:
      'Iterating with A/B tests and metrics reviews to refine and amplify results continuously.',
  },
];

export const Partnership: React.FC = () => {
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const items = itemsRef.current.filter((el): el is HTMLLIElement => !!el);
    if (!items.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      items.forEach((el) => el.setAttribute('data-active', 'true'));
      return;
    }

    const states: boolean[] = items.map(() => false);
    let raf = 0;

    const compute = () => {
      raf = 0;
      const triggerY = window.innerHeight * 0.6;
      items.forEach((el, i) => {
        const next = el.getBoundingClientRect().top < triggerY;
        if (states[i] !== next) {
          states[i] = next;
          el.setAttribute('data-touched', 'true');
          el.setAttribute('data-active', next ? 'true' : 'false');
        }
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Section id="partnership" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-16">
          Partnership Stages
        </h2>

        <ol className="flex flex-col items-center gap-10">
          {stages.map((stage, i) => (
            <li
              key={stage.n}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              data-active="false"
              data-variant={i % 2 === 0 ? 'light' : 'dark'}
              className="ps-item group relative w-[580px] max-w-full h-[275px] rounded-full border border-black/80 shadow-[0_6px_0_0_#000] overflow-hidden data-[variant=light]:bg-white data-[variant=light]:text-ink data-[variant=dark]:bg-primary data-[variant=dark]:text-white"
            >
              <span style={{ width: '40%' }} className="absolute inset-y-0 right-4 flex flex-col items-center justify-center text-center text-2xl md:text-3xl font-extrabold leading-tight transition-opacity duration-200 ease-out group-data-[active=true]:opacity-0 group-data-[active=true]:duration-150">
                {stage.title.split(' ').map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </span>

              <span style={{ width: '40%' }} className="absolute inset-y-0 left-12 flex items-center text-center justify-center text-sm md:text-base font-semibold leading-snug opacity-0 transition-opacity duration-[250ms] ease-out delay-150 group-data-[active=true]:opacity-100">
                {stage.description}
              </span>

              <span style={{ fontSize: '100px' }} className="ps-circle absolute top-1/2 -translate-y-1/2 left-4 w-56 h-56 rounded-full flex items-center justify-center font-extrabold shadow-md transition-[left,background-color,color] duration-[400ms] ease-in-out group-data-[active=true]:left-[calc(100%-14rem-1rem)] group-data-[variant=light]:bg-primary group-data-[variant=light]:text-white group-data-[variant=dark]:bg-white group-data-[variant=dark]:text-primary">
                {stage.n}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};
