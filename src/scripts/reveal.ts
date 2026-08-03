const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
