import { useMemo, useState } from 'react';
import { projects, projectFilters } from '../data/content';
import Reveal from './Reveal';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Selected work</span>
          <h2>Projects I’ve designed, built and shipped</h2>
          <p className="section-sub">
            AI-powered mobile apps, full-stack web platforms, and a final year project — filter by
            what you’re hiring for.
          </p>
        </Reveal>

        <Reveal className="projects__filters">
          {projectFilters.map((f) => {
            const count =
              f === 'All' ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
            return (
              <button
                key={f}
                className={`projects__filter ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="projects__count">{count}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="projects__grid">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className={`project ${p.featured ? 'project--featured' : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="project__top">
                <div className="project__icon">
                  <i className={p.icon} />
                </div>
                <div className="project__flags">
                  {p.featured && <span className="project__flag project__flag--star">Featured</span>}
                  {p.appStore && (
                    <span className="project__flag">
                      <i className="fab fa-apple" /> Live
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project__title">{p.title}</h3>

              <p className="project__org">
                {p.org} <span className="project__dot">·</span> {p.period}
              </p>

              <p className="project__summary">{p.summary}</p>

              <ul className="project__points">
                {p.points.map((pt) => (
                  <li key={pt.slice(0, 26)}>{pt}</li>
                ))}
              </ul>

              <div className="chip-row project__stack">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
