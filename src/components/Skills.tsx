import { skillCategories, techStack } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Skills"
          title="Categorized, not percentage bars."
          description="Real proficiency shows in shipped work. Here is what I work with across the stack."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={i * 60}>
                <div className="card-soft group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      <Icon size={18} style={{ color: '#D4AF37' }} />
                    </div>
                    <h3 className="text-base font-semibold">{cat.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
              Tech Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--bg-2)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={14} style={{ color: 'var(--muted)' }} />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
