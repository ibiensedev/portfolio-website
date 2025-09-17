const btn = document.getElementById('theme-toggle');
const icon = btn?.querySelector('i');

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

// (optional) react if user changes OS theme while page is open
window.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', e => {
  const saved = localStorage.getItem('theme');
  if (!saved) apply(e.matches ? 'light' : 'dark');
});