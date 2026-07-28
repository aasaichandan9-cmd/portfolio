import { useEffect, useState } from 'react';
import { Moon, Sun, Command, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/content';
import { useActiveSection } from '@/hooks/useActiveSection';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCommand: () => void;
};

export function Header({ theme, onToggleTheme, onOpenCommand }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 z-[70] w-full transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container-px-wide flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            style={{ background: 'var(--text)', color: 'var(--bg)' }}
          >
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  background: isActive ? 'var(--surface)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:flex"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            <Command size={14} />
            <kbd className="text-[10px]">⌘K</kbd>
          </button>
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="container-px-wide flex flex-col gap-1 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium"
              style={{ color: 'var(--text)', background: 'var(--surface)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
