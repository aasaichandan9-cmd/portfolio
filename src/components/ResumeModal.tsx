import { useEffect, useState } from 'react';
import { FileText, Download, X, AlertCircle } from 'lucide-react';
import { profile } from '@/content';

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    fetch(profile.resumePath, { method: 'HEAD' })
      .then((res) => setExists(res.ok))
      .catch(() => setExists(false));

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="glass-strong relative w-full max-w-md rounded-2xl p-6"
        style={{ boxShadow: 'var(--shadow-lift)' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          style={{ color: 'var(--muted)' }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <FileText size={20} style={{ color: '#D4AF37' }} />
          </div>
          <h2 id="resume-modal-title" className="text-lg font-semibold">
            Download Resume
          </h2>
        </div>

        {exists === null ? (
          <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
            Checking for resume file…
          </p>
        ) : exists ? (
          <>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              My resume is available as a PDF. Click below to download it.
            </p>
            <a href={profile.resumePath} download className="btn-gold mt-5 w-full">
              <Download size={16} /> Download PDF
            </a>
          </>
        ) : (
          <>
            <div className="mt-4 flex items-start gap-2 rounded-lg p-3" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <AlertCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#D4AF37' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Resume file not found. To add it, place a file named{' '}
                <code className="rounded px-1 py-0.5 text-xs" style={{ background: 'var(--surface-2)' }}>resume.pdf</code>{' '}
                in the <code className="rounded px-1 py-0.5 text-xs" style={{ background: 'var(--surface-2)' }}>public/</code>{' '}
                folder of the project.
              </p>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
              You can also reach me directly at{' '}
              <a href={`mailto:${profile.email}`} className="link-underline font-medium" style={{ color: 'var(--text)' }}>
                {profile.email}
              </a>{' '}
              to request it.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
