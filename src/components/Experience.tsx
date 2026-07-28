import { Briefcase, FolderGit2, Award, GraduationCap } from 'lucide-react';
import { experiences } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const typeIcon = {
  internship: Briefcase,
  project: FolderGit2,
  certificate: Award,
  achievement: GraduationCap,
} as const;

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Experience & Achievements"
          title="A timeline of building and learning."
          description="Projects, internships, and certifications — each one a step toward production-grade engineering."
        />

        <div className="mt-14">
          <div className="relative">
            <div
              className="absolute left-4 top-0 h-full w-px sm:left-1/2"
              style={{ background: 'var(--border)' }}
            />
            <div className="space-y-10">
              {experiences.map((exp, i) => {
                const Icon = typeIcon[exp.type];
                const left = i % 2 === 0;
                return (
                  <Reveal key={exp.title} delay={i * 80}>
                    <div className={`relative flex items-start gap-6 ${left ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      <div
                        className="absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full sm:left-1/2"
                        style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                      >
                        <Icon size={14} style={{ color: '#D4AF37' }} />
                      </div>
                      <div className="ml-12 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                        <div className="card-soft rounded-xl p-5 transition-shadow hover:shadow-lg" style={{ boxShadow: 'var(--shadow-soft)' }}>
                          <span className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                            {exp.period}
                          </span>
                          <h3 className="mt-1 text-base font-semibold">{exp.title}</h3>
                          <p className="text-sm font-medium" style={{ color: '#00B8FF' }}>
                            {exp.org}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:block sm:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
