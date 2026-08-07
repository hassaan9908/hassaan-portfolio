import { services } from '../data/content';
import Reveal from './Reveal';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">What I do</span>
          <h2>Services built around shipping real products</h2>
          <p className="section-sub">
            Four things I do end-to-end — from the first Figma frame to a build that survives
            store review and real users.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal key={s.title} className="service" delay={i * 90}>
              <span className="service__num">0{i + 1}</span>
              <div className="service__icon">
                <i className={s.icon} />
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
              <div className="chip-row service__tags">
                {s.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
