'use client';

import { useEffect, useRef, useState } from 'react';

// Track which counters have already animated (persists across remounts within the same session)
const animatedCounters = new Set<string>();

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  // Use label+end as unique key to track animation state globally
  const counterKey = `${label}-${end}`;
  const alreadyAnimated = animatedCounters.has(counterKey);

  const [count, setCount] = useState(alreadyAnimated ? end : 0);
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // If already animated in a previous mount, show final value immediately
    if (alreadyAnimated) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatedCounters.add(counterKey);
          const startTime = Date.now();
          const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              rafId.current = requestAnimationFrame(step);
            } else {
              setCount(end);
              rafId.current = null;
            }
          };
          rafId.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [end, duration, counterKey, alreadyAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
