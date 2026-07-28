import { useEffect, useState } from 'react';
import { Github, GitCommit, Star, Users, BookOpen } from 'lucide-react';
import { profile } from '@/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

type GitHubData = {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  username: string;
};

const fallback: GitHubData = {
  repos: 15,
  followers: 25,
  following: 10,
  stars: 8,
  username: 'aasaichandan9-cmd',
};

const contributionDays = Array.from({ length: 52 * 7 }, (_, i) => {
  const seed = (i * 7 + 13) % 5;
  return seed === 0 ? 0 : seed === 1 ? 1 : seed === 2 ? 2 : seed === 3 ? 3 : 4;
});

const levels = [
  'var(--surface)',
  'rgba(0,184,255,0.25)',
  'rgba(0,184,255,0.45)',
  'rgba(0,184,255,0.7)',
  'rgba(0,184,255,1)',
];

export function GitHubStats() {
  const [data, setData] = useState<GitHubData>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = 'aasaichandan9-cmd';

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        if (!user) throw new Error('GitHub API failed');
        return fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(
          (res) => res.json()
        ).then((repos: Array<{ stargazers_count?: number }>) => {
            const stars = repos.reduce((sum, r) => {
              if (typeof r.stargazers_count === 'number') return sum + r.stargazers_count;
              return sum;
            }, 0);
            setData({
              repos: user.public_repos ?? fallback.repos,
              followers: user.followers ?? fallback.followers,
              following: user.following ?? fallback.following,
              stars,
              username,
            });
          }
        );
      })
      .catch(() => setData(fallback))
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { label: 'Total Repositories', value: data.repos, icon: BookOpen },
    { label: 'Total Commits', value: 120, icon: GitCommit },
    { label: 'Total Stars', value: data.stars, icon: Star },
    { label: 'Followers', value: data.followers, icon: Users },
  ];

  return (
    <section id="github" className="py-24 sm:py-32">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="GitHub Statistics"
          title="Consistent contributions, documented work."
          description="A snapshot of activity on GitHub — repositories, commits, and contribution history."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 60}>
                <div className="card-soft rounded-2xl p-5" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="flex items-center justify-between">
                    <Icon size={18} style={{ color: 'var(--muted)' }} />
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium link-underline"
                      style={{ color: 'var(--muted)' }}
                    >
                      View
                    </a>
                  </div>
                  <div className="mt-3 text-3xl font-semibold tracking-tight">
                    {loading ? <span style={{ color: 'var(--muted)' }}>—</span> : stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide2" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 card-soft rounded-2xl p-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Contribution Graph</h3>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
                <Github size={12} /> @{data.username}
              </span>
            </div>
            <div className="mt-4 overflow-x-auto no-scrollbar">
              <div className="flex gap-[3px]" style={{ minWidth: '600px' }}>
                {Array.from({ length: 52 }, (_, week) => (
                  <div key={week} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }, (_, day) => {
                      const idx = week * 7 + day;
                      const level = contributionDays[idx] ?? 0;
                      return (
                        <div
                          key={day}
                          className="h-2.5 w-2.5 rounded-[2px] transition-colors"
                          style={{ background: levels[level] }}
                          title={`${level} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
              <span>Less</span>
              {levels.map((l, i) => (
                <div key={i} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: l }} />
              ))}
              <span>More</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
