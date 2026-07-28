import { useEffect, useState } from 'react';
import { Search, ArrowUpRight, Moon, Sun, Home, Mail, Github, Linkedin } from 'lucide-react';
import { navLinks, profile } from '@/content';

type Command = {
  label: string;
  hint: string;
  icon: typeof Home;
  action: () => void;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  theme: 'dark' | 'light';
};

export function CommandPalette({ open, onClose, onToggleTheme, theme }: Props) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);

  const commands: Command[] = [
    ...navLinks.map((l) => ({
      label: l.label,
      hint: 'Navigate',
      icon: Home,
      action: () => {
        document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    {
      label: 'Toggle theme',
      hint: theme === 'dark' ? 'Switch to light' : 'Switch to dark',
      icon: theme === 'dark' ? Sun : Moon,
      action: onToggleTheme,
    },
    {
      label: 'Email me',
      hint: profile.email,
      icon: Mail,
      action: () => window.open(`mailto:${profile.email}`),
    },
    {
      label: 'GitHub',
      hint: 'Open profile',
      icon: Github,
      action: () => window.open(profile.github, '_blank'),
    },
    {
      label: 'LinkedIn',
      hint: 'Open profile',
      icon: Linkedin,
      action: () => window.open(profile.linkedin, '_blank'),
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        filtered[index]?.action();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, index]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center pt-[15vh] px-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div
        className="glass-strong relative w-full max-w-lg overflow-hidden rounded-2xl"
        style={{ boxShadow: 'var(--shadow-lift)' }}
      >
        <div className="flex items-center gap-3 border-b px-4 py-3" style={{ borderColor: 'var(--border)' }}>
          <Search size={18} style={{ color: 'var(--muted)' }} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--text)' }}
          />
          <kbd className="chip text-[10px]">ESC</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.map((cmd, i) => {
            const Icon = cmd.icon;
            return (
              <li key={cmd.label}>
                <button
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors"
                  style={{
                    background: i === index ? 'var(--surface-2)' : 'transparent',
                    color: 'var(--text)',
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--muted)' }} />
                  <span className="flex-1">{cmd.label}</span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>
                    {cmd.hint}
                  </span>
                  <ArrowUpRight size={14} style={{ color: 'var(--muted)' }} />
                </button>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm" style={{ color: 'var(--muted)' }}>
              No results found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
