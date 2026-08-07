import { useState } from 'react';
import { profile } from '../data/content';
import Reveal from './Reveal';
import './Contact.css';

const CONTACT_CARDS = [
  { icon: 'fas fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'fas fa-phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: 'fas fa-location-dot', label: 'Based in', value: profile.location },
];

const EMPTY = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__shell">
          <Reveal className="contact__aside">
            <span className="eyebrow">Get in touch</span>
            <h2 className="contact__heading">
              Have a project, a role, or just a question?
            </h2>
            <p className="contact__lead">
              I’m currently open to Flutter and full-stack opportunities. Drop a message and I’ll
              get back to you within a day.
            </p>

            <div className="contact__cards">
              {CONTACT_CARDS.map((c) => {
                const Wrapper = c.href ? 'a' : 'div';
                return (
                  <Wrapper key={c.label} href={c.href} className="contact__card">
                    <span className="contact__card-icon">
                      <i className={c.icon} />
                    </span>
                    <span className="contact__card-text">
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                    {c.href && <i className="fas fa-arrow-up-right-from-square contact__card-go" />}
                  </Wrapper>
                );
              })}
            </div>

            <div className="contact__socials">
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
          </Reveal>

          <Reveal className="contact__form-wrap" delay={100}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="c-name">Your name</label>
                <input
                  id="c-name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="c-email">Your email</label>
                <input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me a bit about what you’re building…"
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                {sent ? (
                  <>
                    <i className="fas fa-check" /> Message ready
                  </>
                ) : (
                  <>
                    Send message <i className="fas fa-paper-plane" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
