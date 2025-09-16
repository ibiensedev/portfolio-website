// Modo oscuro/claro con preferencia guardada
const btn = document.getElementById('theme-toggle');
const apply = (mode) => {
  document.documentElement.dataset.theme = mode;
  if (mode === 'light') {
    document.documentElement.style.setProperty('--bg', '#ffffff');
    document.documentElement.style.setProperty('--fg', '#0f172a');
  } else {
    document.documentElement.style.setProperty('--bg', '#0b0c0e');
    document.documentElement.style.setProperty('--fg', '#eef2f7');
  }
  localStorage.setItem('theme', mode);
};

const preferred = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
apply(preferred);

btn?.addEventListener('click', () => {
  const next = (localStorage.getItem('theme') === 'light') ? 'dark' : 'light';
  apply(next);
});