'use client';

import { useEffect } from 'react';

/**
 * ScrollReveal — Observes all `.reveal` elements and adds `.active`
 * when they enter the viewport. This is a client component so it can
 * safely use browser APIs.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Fallback for elements already in viewport
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('active');
        }
      });
    }, 200);

    return () => observer.disconnect();
  }, []);

  return null;
}
