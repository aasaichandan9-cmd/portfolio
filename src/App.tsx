import { useEffect, useState } from 'react';
import { Loader } from '@/components/Loader';
import { CursorGlow } from '@/components/CursorGlow';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Header } from '@/components/Header';
import { CommandPalette } from '@/components/CommandPalette';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { GitHubStats } from '@/components/GitHubStats';
import { CodingProfiles } from '@/components/CodingProfiles';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <Loader />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        style={{ background: 'var(--text)', color: 'var(--bg)' }}
      >
        Skip to content
      </a>
      <CursorGlow />
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggle} onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} onToggleTheme={toggle} theme={theme} />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <GitHubStats />
        <CodingProfiles />
        <Services />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
