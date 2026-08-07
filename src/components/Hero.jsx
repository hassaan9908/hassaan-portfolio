import { useEffect, useState } from 'react';
import { profile, stats, marqueeItems } from '../data/content';
import portrait from '../assets/hassaan.jpg';
import './Hero.css';

/** Types one role out, holds, deletes it, moves to the next. */
function useTypedRole(roles) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index];
    const done = text === full;

    let delay = deleting ? 40 : 85;
    if (done && !deleting) delay = 1800;
    if (text === '' && deleting) delay = 260;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (done) setDeleting(true);
        else setText(full.slice(0, text.length + 1));
      } else if (text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(full.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRole(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          {profile.available && (
            <div className="hero__status">
              <span className="hero__pulse" />
              {profile.availabilityNote}
            </div>
          )}

          <h1 className="hero__title">
            Hi, I’m <span className="hero__name">Hassaan</span>
            <br />
            <span className="hero__typed">
              {typed}
              <span className="hero__caret" />
            </span>
          </h1>

          <p className="hero__lead">{profile.headline}</p>

          <p className="hero__meta">
            <i className="fas fa-location-dot" /> {profile.location}
            <span className="hero__meta-sep" />
            <i className="fas fa-graduation-cap" /> BS Computer Science, Air University
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work <i className="fas fa-arrow-right" />
            </a>

            <a href="#contact" className="btn btn--ghost">
              Get in touch <i className="fas fa-arrow-right" />
            </a>
          </div>

          <div className="hero__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                data-tip={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait-wrap">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__blob" aria-hidden="true" />
            <img src={portrait} alt={profile.name} className="hero__portrait" />

            <div className="hero__badge hero__badge--top">
              <i className="fab fa-flutter" />
              <div>
                <strong>Flutter</strong>
                <span>Production apps</span>
              </div>
            </div>

            <div className="hero__badge hero__badge--bottom">
              <i className="fab fa-react" />
              <div>
                <strong>MERN Stack</strong>
                <span>Production web apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee__item">
              {item}
              <i className="fas fa-circle marquee__dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
