import { useEffect, useState } from 'react';
import { profile, navLinks } from '../data/content';
import './Footer.css';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="footer__mark">MH</span>
            <div>
              <strong>{profile.name}</strong>
              <span>Flutter & MERN Stack Developer</span>
            </div>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="footer__built">
            Built with <i className="fab fa-react" /> React &amp; Vite
          </span>
        </div>
      </footer>

      <button
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </>
  );
}
