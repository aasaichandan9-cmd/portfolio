import { achievements } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones worth noting."
          description="A summary of the work and recognition that define my journey so far."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="card-soft h-full rounded-2xl p-5" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="text-3xl font-semibold tracking-tight text-gradient-sky">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-sm font-semibold">{a.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
