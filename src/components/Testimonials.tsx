import { Quote } from 'lucide-react';
import { testimonials, testimonialsIntro } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say."
          description={testimonialsIntro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <div className="card-soft h-full rounded-2xl p-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <Quote size={24} style={{ color: '#D4AF37' }} />
                <p className="mt-3 text-sm leading-relaxed text-pretty" style={{ color: 'var(--text)' }}>
                  {t.quote}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.role}</p>
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
