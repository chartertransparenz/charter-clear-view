import { useEffect, useRef, useState } from "react";

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  triggerOnce = false,
}: Options = {}) => {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current as Element | null;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback: if unsupported, treat as intersecting to avoid blocking UI
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (triggerOnce) observer.unobserve(entry.target);
          } else if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, isIntersecting } as const;
};
