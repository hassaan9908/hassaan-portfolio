import { profile, education, certifications } from '../data/content';
import Reveal from './Reveal';
import './About.css';

const highlights = [
  { icon: 'fas fa-rocket', text: 'Full-stack products shipped with auth, dashboards, and workflows' },
  { icon: 'fas fa-object-group', text: 'Figma → pixel-perfect, responsive production UI' },
  { icon: 'fas fa-diagram-project', text: 'Clean state and data layers across web and mobile' },
  { icon: 'fas fa-plug', text: 'REST API integration, RLS, and real-time data sync' },
];

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2>A developer who ships full-stack products, not just prototypes.</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__main">
            {profile.bio.map((para) => (
              <p key={para.slice(0, 24)} className="about__para">
                {para}
              </p>
            ))}

            <ul className="about__highlights">
              {highlights.map((h) => (
                <li key={h.text}>
                  <i className={h.icon} />
                  {h.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="about__side">
            <Reveal className="about__card" delay={80}>
              <h3 className="about__card-title">
                <i className="fas fa-graduation-cap" /> Education
              </h3>
              <ul className="about__list">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="about__list-top">
                      <strong>{e.degree}</strong>
                      <span className="about__year">{e.period}</span>
                    </div>
                    <span className="about__sub">{e.school}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="about__card" delay={160}>
              <h3 className="about__card-title">
                <i className="fas fa-certificate" /> Certifications
              </h3>
              <ul className="about__list">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <div className="about__list-top">
                      <strong>{c.name}</strong>
                      <span className="about__year">{c.date}</span>
                    </div>
                    <span className="about__sub">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
