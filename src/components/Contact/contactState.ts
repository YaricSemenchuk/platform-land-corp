'use client';

import { useSyncExternalStore } from 'react';

let submitted = false;
const listeners = new Set<() => void>();

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

const getSnapshot = () => submitted;
const getServerSnapshot = () => false;

export const markContactSubmitted = () => {
  if (submitted) return;
  submitted = true;
  listeners.forEach((fn) => fn());
};

export const useContactSubmitted = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
