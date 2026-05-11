'use client';

import { useEffect, useState } from 'react';

let submitted = false;
const listeners = new Set<(v: boolean) => void>();

export const markContactSubmitted = () => {
  submitted = true;
  listeners.forEach((fn) => fn(true));
};

export const useContactSubmitted = () => {
  const [value, setValue] = useState(submitted);
  useEffect(() => {
    listeners.add(setValue);
    setValue(submitted);
    return () => {
      listeners.delete(setValue);
    };
  }, []);
  return value;
};
