import { skillGroups } from '../data/content';
import Reveal from './Reveal';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Toolkit</span>
          <h2>The stack I work in daily</h2>
          <p className="section-sub">
            Everything here has shipped in something real — not a list of things I read about once.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="skills__card" delay={i * 90}>
              <h3 className="skills__title">
                <span className="skills__title-icon">
                  <i className={group.icon} />
                </span>
                {group.title}
              </h3>

              <ul className="skills__list">
                {group.skills.map((s) => (
                  <li key={s.name} className="skills__pill">
                    <i className={s.icon} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
