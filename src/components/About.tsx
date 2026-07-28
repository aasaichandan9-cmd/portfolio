import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { aboutParagraphs, profile } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="About"
          title="Engineer who ships, designer who cares."
          description="I build full stack web applications end-to-end and sweat the details that make software feel professional."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-pretty" style={{ color: 'var(--text)' }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="card-soft rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                Quick Facts
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--muted)' }} />
                  <div>
                    <dt className="font-medium">Location</dt>
                    <dd style={{ color: 'var(--muted)' }}>{profile.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--muted)' }} />
                  <div>
                    <dt className="font-medium">Email</dt>
                    <dd style={{ color: 'var(--muted)' }}>{profile.email}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Github size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--muted)' }} />
                  <div>
                    <dt className="font-medium">GitHub</dt>
                    <dd style={{ color: 'var(--muted)' }}>Active profile with documented repos</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--muted)' }} />
                  <div>
                    <dt className="font-medium">LinkedIn</dt>
                    <dd style={{ color: 'var(--muted)' }}>Professional profile</dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
