import { services, servicesIntro } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description={servicesIntro}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 8) * 50}>
                <div className="card-soft group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={18} style={{ color: '#D4AF37' }} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug">{service.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
