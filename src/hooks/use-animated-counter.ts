import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number; // in ms
  trigger?: boolean;
}

// Simple animated counter hook used for stats once they enter the viewport
export const useAnimatedCounter = ({
  start = 0,
  end,
  duration = 2000,
  trigger = true,
}: UseAnimatedCounterOptions) => {
  const [value, setValue] = useState<number>(start);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    // Reset when retriggered
    setValue(start);
    startTimeRef.current = null;

    const step = (ts: number) => {
      if (startTimeRef.current === null) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, duration, trigger]);

  return value;
};
