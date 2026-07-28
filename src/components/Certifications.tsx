import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified skills, continuously sharpened."
          description="Professional certifications across security, cloud, AI, and databases."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="card-soft group h-full rounded-xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <Award size={18} style={{ color: '#D4AF37' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-1 text-xs font-medium" style={{ color: 'var(--muted)' }}>
                      {cert.issuer} · {cert.year}
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
