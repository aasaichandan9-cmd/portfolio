import { useEffect, useState } from 'react';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { heroRoles, heroStats, profile } from '@/content';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { ResumeModal } from './ResumeModal';

function useTyping(
  words: string[],
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1600,
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = globalThis.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = globalThis.setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function AnimatedStat({
  stat,
  delay,
}: {
  stat: { label: string; value: number; suffix: string };
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now() + delay;
    const duration = 1500;

    const tick = (now: number) => {
      const elapsed = now - start;

      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const pct = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - pct, 3);

      setCount(Math.round(stat.value * eased));

      if (pct < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [stat.value, delay]);

  return (
    <div>
      <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {count}
        <span className="text-gradient-sky">{stat.suffix}</span>
      </div>
      <div
        className="mt-1 text-xs font-medium uppercase tracking-wide2"
        style={{ color: 'var(--muted)' }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export function Hero() {
  const typed = useTyping(heroRoles);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
      <div
        className="absolute -top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,184,255,0.3), transparent 70%)',
        }}
      />

      <div className="container-px-wide relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                {profile.status}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
                Full Stack
                <br />
                <span className="text-gradient-sky">Developer</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-4 flex items-center gap-2 font-mono text-sm sm:text-base">
                <span style={{ color: 'var(--muted)' }}>&gt;</span>
                <span style={{ color: 'var(--text)' }}>{typed}</span>
                <span className="animate-blink" style={{ color: '#00B8FF' }}>
                  ▋
                </span>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p
                className="mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
                style={{ color: 'var(--muted)' }}
              >
                {profile.tagline} I design schemas, build APIs, and craft
                responsive frontends — focused on clean architecture and
                shipping features that solve real problems.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact" className="btn-gold">
                  <Sparkles size={16} />
                  Hire Me
                </MagneticButton>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="btn-primary"
                >
                  <Download size={16} />
                  Resume
                </button>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="btn-ghost"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {heroStats.map((stat, i) => (
                  <AnimatedStat
                    key={stat.label}
                    stat={stat}
                    delay={i * 150}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hidden justify-self-center lg:block">
            <Reveal delay={300}>
              <div className="relative">
                <div
                  className="absolute -inset-4 animate-spin-slow rounded-full opacity-30 blur-2xl"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #D4AF37, #00B8FF, #D4AF37)',
                  }}
                />
                <div
                  className="relative flex h-72 w-72 items-center justify-center rounded-full"
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-lift)',
                  }}
                >
                  <span className="text-8xl font-bold tracking-tighter text-gradient-gold">
                    {profile.initials}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={600}>
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest2 sm:flex"
            style={{ color: 'var(--muted)' }}
          >
            Scroll
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </Reveal>
      </div>

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </section>
  );
}
