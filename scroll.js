(function () {
    const els = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(el => el.classList.add('reveal-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const d = +e.target.getAttribute('data-delay') || 0;
          setTimeout(() => e.target.classList.add('reveal-in'), d);
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    els.forEach(el => io.observe(el));
  })();

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();