import { useEffect, useState } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        background: '#0D1117',
        opacity: progress >= 100 ? 0 : 1,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold tracking-tight text-cream" style={{ color: '#F5F5F5' }}>
          Sai Chandan
        </span>
      </div>
      <div className="mt-6 h-px w-48 overflow-hidden rounded-full" style={{ background: 'rgba(245,245,245,0.1)' }}>
        <div
          className="h-full rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #D4AF37, #00B8FF)' }}
        />
      </div>
      <p className="mt-3 font-mono text-xs tracking-widest2" style={{ color: '#7C8594' }}>
        {Math.round(progress)}%
      </p>
    </div>
  );
}
