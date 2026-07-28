import { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);
    const el = ref.current;
    if (!el) return;

    let raf: number;
    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      if (el) el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[400px] w-[400px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(0,184,255,0.06) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)',
      }}
    />
  );
}
