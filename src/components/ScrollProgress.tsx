import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[80] h-0.5 w-full" style={{ background: 'var(--border)' }}>
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #D4AF37, #00B8FF)',
        }}
      />
    </div>
  );
}
