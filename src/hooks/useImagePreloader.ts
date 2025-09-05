import { useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[], priority: boolean = false) => {
  useEffect(() => {
    if (!priority) return;

    const preloadImages = imageUrls.map(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      preloadImages.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [imageUrls, priority]);
};