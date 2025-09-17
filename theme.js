const btn = document.getElementById('theme-toggle');
const icon = btn?.querySelector('i');

// navbar shadow on scroll
const nav = document.querySelector('.app-navbar');
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 4);
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

function setIcon(mode) {
  if (!icon) return;
  icon.classList.remove('fa-sun', 'fa-moon', 'fa-regular');
  icon.classList.add('fa-regular', mode === 'light' ? 'fa-sun' : 'fa-moon');
}

function apply(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('theme', mode);
  setIcon(mode);
}

// initial mode (saved or system)
const preferred =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

apply(preferred);

// toggle on click
btn?.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || preferred;
  const next = current === 'light' ? 'dark' : 'light';
  apply(next);
});

// react to OS theme changes (when no saved preference)
window.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', e => {
  const saved = localStorage.getItem('theme');
  if (!saved) apply(e.matches ? 'light' : 'dark');
});

// One-off hero visibility (keeps hero effects lightweight)
(function () {
  const hero = document.querySelector('.hero--fx');
  if (!hero || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      hero.classList.add('is-in');
      io.disconnect();
    }
  }, { threshold: 0.25 });
  io.observe(hero);
})();