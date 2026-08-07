import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import useScrollSpy from '../hooks/useScrollSpy';
import './Navbar.css';

const IDS = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(IDS);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
            <span className="nav__mark">MH</span>
            <span className="nav__brand-text">
              {profile.firstName}
              <span className="nav__brand-dot">.</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button
              className="nav__icon-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} />
            </button>

            <a href="#contact" className="btn btn--primary nav__cta">
              Let’s talk
            </a>

            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="nav__progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav className="mobile-menu__links">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={active === link.id ? 'is-active' : ''}
              style={{ transitionDelay: `${open ? 60 + i * 45 : 0}ms` }}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
