import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = globalThis.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - globalThis.innerHeight;

      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    onScroll();

    globalThis.addEventListener('scroll', onScroll, { passive: true });

    return () => globalThis.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}
