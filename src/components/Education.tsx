import { GraduationCap } from 'lucide-react';
import { education } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Education"
          title="Foundations in computer science."
          description="Building strong fundamentals alongside practical engineering work."
        />

        <div className="mt-12 max-w-2xl">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 80}>
              <div className="card-soft rounded-2xl p-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <GraduationCap size={20} style={{ color: '#00B8FF' }} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                      {edu.period}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-sm font-medium" style={{ color: '#00B8FF' }}>
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {edu.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
