import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-current opacity-40" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title mt-4 text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-pretty" style={{ color: 'var(--muted)' }}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
