import { ArrowUp, Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { footerLinks, profile, socials } from '@/content';
import { Reveal } from './Reveal';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden py-16" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="container-px-wide relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <a href="#hero" className="flex items-center gap-2 text-sm font-semibold">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                  style={{ background: 'var(--text)', color: 'var(--bg)' }}
                >
                  {profile.initials}
                </span>
                {profile.shortName}
              </a>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {profile.tagline}
              </p>
              <div className="mt-4 flex gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      aria-label={s.label}
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm link-underline" style={{ color: 'var(--text)' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                More
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.slice(5).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm link-underline" style={{ color: 'var(--text)' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                Get in touch
              </h3>
              <a href={`mailto:${profile.email}`} className="mt-4 block text-sm link-underline" style={{ color: 'var(--text)' }}>
                {profile.email}
              </a>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
                {profile.location}
              </p>
              <button
                onClick={scrollTop}
                className="mt-4 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                <ArrowUp size={14} /> Back to top
              </button>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
            Designed & built with <Heart size={12} style={{ color: '#D4AF37' }} /> by {profile.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
