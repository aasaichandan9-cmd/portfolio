import { ExternalLink, Code2 } from 'lucide-react';
import { codingProfiles } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function CodingProfiles() {
  const visible = codingProfiles.filter((p) => p.href !== null);

  if (visible.length === 0) return null;

  return (
    <section id="coding-profiles" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Where I practice and ship."
          description="Active on coding platforms to sharpen problem-solving and on GitHub to document my work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={p.href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${p.accent}15`, border: '1px solid var(--border)' }}
                >
                  <Code2 size={20} style={{ color: p.accent }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{p.handle}</p>
                </div>
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--muted)' }} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
