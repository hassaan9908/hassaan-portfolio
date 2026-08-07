import { experience } from '../data/content';
import Reveal from './Reveal';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Career</span>
          <h2>Where I’ve worked</h2>
          <p className="section-sub">
            From weekly intern tasks to owning production features in apps that are live on the
            App Store today.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={`${job.role}-${job.period}`} className="timeline__item" delay={i * 110}>
              <div className="timeline__marker">
                <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} />
              </div>

              <article className="timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3 className="timeline__role">
                      {job.role}
                      {job.current && <span className="timeline__badge">Current</span>}
                    </h3>
                    <p className="timeline__company">
                      <i className="fas fa-building" /> {job.company}
                      <span className="timeline__sep">·</span>
                      <i className="fas fa-location-dot" /> {job.location}
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </header>

                <ul className="timeline__points">
                  {job.points.map((p) => (
                    <li key={p.slice(0, 30)}>{p}</li>
                  ))}
                </ul>

                <div className="chip-row">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
