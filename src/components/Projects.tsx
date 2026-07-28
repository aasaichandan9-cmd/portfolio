import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, X, FileText, Calendar, User, Lightbulb, Layers, Wrench, Target } from 'lucide-react';
import { projects, type Project } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto px-4 py-8 sm:py-16">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="glass-strong relative w-full max-w-2xl rounded-2xl"
        style={{ boxShadow: 'var(--shadow-lift)' }}
      >
        <div className="relative h-40 overflow-hidden rounded-t-2xl sm:h-48">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}40)` }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="chip" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              Case Study
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            {project.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                <User size={12} /> Role
              </div>
              <p className="mt-1 text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                <Calendar size={12} /> Timeline
              </div>
              <p className="mt-1 text-sm font-medium">{project.timeline}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2" style={{ color: 'var(--muted)' }}>
                <Wrench size={12} /> Stack
              </div>
              <p className="mt-1 text-sm font-medium">{project.tech.length} technologies</p>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <Target size={14} style={{ color: project.accent }} /> Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.problem}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <Lightbulb size={14} style={{ color: project.accent }} /> Solution
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.solution}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <Layers size={14} style={{ color: project.accent }} /> Architecture
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.architecture}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Features</h4>
              <ul className="mt-2 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: project.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <FileText size={14} style={{ color: project.accent }} /> Lessons Learned
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.lessons}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
              <Github size={16} /> GitHub
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                Live Demo <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="flex-1 rounded-full px-6 py-3 text-center text-sm font-medium opacity-50" style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                Demo not deployed
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32" style={{ background: 'var(--bg-2)' }}>
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Built end-to-end. Documented like a pro."
          description="Each project solves a real problem. Click through for a full case study — problem, solution, architecture, and lessons."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}30)` }}
                  />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {project.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {project.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="chip text-[11px]">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="chip text-[11px]">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="flex items-center gap-1.5 text-sm font-semibold link-underline"
                      style={{ color: 'var(--text)' }}
                    >
                      <FileText size={14} /> Case Study
                    </button>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                      <Github size={14} /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                        Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
