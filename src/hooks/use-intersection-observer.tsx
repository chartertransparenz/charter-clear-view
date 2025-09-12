import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !(element instanceof Node)) {
      console.debug('IntersectionObserver: Invalid element', element);
      return;
    }

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting;
          
          if (isElementIntersecting && (!triggerOnce || !hasTriggered)) {
            setIsIntersecting(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(isElementIntersecting);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);

      return () => {
        if (element && observer) {
          observer.unobserve(element);
        }
      };
    } catch (error) {
      console.error('IntersectionObserver error:', error);
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
};