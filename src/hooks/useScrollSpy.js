import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently under the navbar.
 * Returns the active id so the nav can highlight it.
 */
export default function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      // Bottom of page always resolves to the last section.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}
