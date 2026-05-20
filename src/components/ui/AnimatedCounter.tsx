'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // If already animated, keep the final value
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setCount(0); // Start from 0 for animation
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
  }, [end, duration]);

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
