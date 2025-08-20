import { useState, useEffect } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  start?: number;
  trigger?: boolean;
}

export const useAnimatedCounter = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  trigger = false 
}: UseAnimatedCounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now();
    const difference = end - start;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + difference * easeOutQuart);
      
      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [trigger, end, start, duration]);

  return count;
};