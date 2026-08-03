const toggle = document.querySelector<HTMLButtonElement>('[data-rush-toggle]');
const page = document.querySelector<HTMLElement>('[data-rush-target]');

if (toggle && page) {
  toggle.addEventListener('click', () => {
    const isRushMode = page.classList.toggle('rush-mode');
    toggle.textContent = isRushMode ? 'Show full CV' : '⚡ Rush Mode';
    toggle.setAttribute('aria-pressed', String(isRushMode));
  });
}
