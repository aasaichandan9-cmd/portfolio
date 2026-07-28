import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Download, Check } from 'lucide-react';
import { profile, socials } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ResumeModal } from './ResumeModal';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Open to internships and full-time roles. Reach out and I'll respond within 24 hours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="card-soft h-full rounded-2xl p-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-semibold">{profile.status}</span>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 link-underline" style={{ color: 'var(--text)' }}>
                  <Mail size={16} style={{ color: 'var(--muted)' }} />
                  {profile.email}
                </a>
                <div className="flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <MapPin size={16} style={{ color: 'var(--muted)' }} />
                  {profile.location}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                  Socials
                </h3>
                <div className="mt-3 flex gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        aria-label={s.label}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <button onClick={() => setResumeOpen(true)} className="btn-gold mt-6 w-full">
                <Download size={16} /> Download Resume
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card-soft rounded-2xl p-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors focus:border-current"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project…"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>

              {error && <p className="mt-3 text-sm" style={{ color: '#e5484d' }}>{error}</p>}

              <button type="submit" className="btn-primary mt-5 w-full">
                {sent ? (
                  <><Check size={16} /> Opening your email client…</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
