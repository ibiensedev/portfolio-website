// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

/**
 * Translations dictionary
 * Add/modify keys here; the page will auto-apply to:
 *  - text nodes via [data-i18n="key"]
 *  - attributes via [data-i18n-attrs="attr:key,attr2:key2"]
 */
const translations = {
  en: {
    // Meta
    "meta.title": "Marcos Fernandez Sanchez — Full Stack Developer",
    "meta.description": "Full Stack Developer | Java, Spring Boot, React, JavaScript, SQL | Building scalable web applications & high-performance solutions.",
    // A11y
    "a11y.skip": "Skip to content",
    "a11y.scrollToExperience": "Scroll to experience",
    // Nav
    "nav.home": "Home",
    "nav.homeTitle": "Home",
    "nav.homeAria": "Home",
    "nav.openMenu": "Open menu",
    "nav.changeLang": "Change language",
    "nav.toggleTheme": "Toggle theme",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.languages": "Languages",
    "nav.education": "Education",
    "nav.contact": "Contact",
    // Hero
    "hero.alt": "Portrait of Marcos Fernandez Sanchez",
    "hero.lead": "Full Stack Developer · Java · Spring Boot · React · JavaScript · SQL",
    "hero.sub": "I build scalable, reliable and high-performance web applications.",
    // Sections
    "sections.experience": "Experience",
    "sections.projects": "Featured Projects",
    "sections.skills": "Skills",
    "sections.languages": "Languages",
    "sections.education": "Education",
    "sections.contact": "Contact",
    // Experience (EN)
    "exp.freelance.roleTitle": "Freelance — Full Stack Developer",
    "exp.freelance.subtitle":  "Jul 2025 – Present · Sion, Switzerland · Remote",
    "exp.freelance.1": "End-to-end development for clients: requirements, implementation, deployment and maintenance.",
    "exp.freelance.2": "Focus on scalable, reliable and user-centric solutions.",
    "exp.ricoh.roleTitle": "Ricoh España — Full Stack Developer",
    "exp.ricoh.subtitle":  "Apr 2024 – Jul 2025 · Asturias, Spain · Remote",
    "exp.ricoh.1": "Built enterprise features across internal and client-facing systems within agile teams.",
    "exp.ricoh.2": "Ensured code quality with best practices, testing and CI.",
    "exp.minsait.roleTitle": "Minsait — Full Stack Developer",
    "exp.minsait.subtitle":  "Mar 2023 – Apr 2024 · A Coruña, Spain · Remote",
    "exp.minsait.1": "Delivered large-scale digital transformation projects integrating back-end services with modern front-end apps.",
    "exp.minsait.2": "Improved performance and UX; participated in sprint planning and code reviews.",
    "exp.cap.roleTitle": "Capgemini — Back End Developer",
    "exp.cap.subtitle":  "Mar 2022 – Mar 2023 · Asturias, Spain · Hybrid",
    "exp.cap.1": "Designed and maintained APIs and database structures for enterprise applications.",
    "exp.cap.2": "Collaborated with international teams using agile methodologies and clean code practices.",
    // Projects
    "proj.one.title": "Project 1",
    "proj.one.desc": "Short description (problem solved, stack, impact).",
    "proj.two.title": "Project 2",
    "proj.two.desc": "Short description (problem solved, stack, impact).",
    "btn.demo": "Live Demo",
    "btn.source": "Source",
    "btn.email": "Email",
    // Languages list
    "lang.spanish": "Spanish",
    "lang.english": "English",
    "lang.french": "French",
    "level.native": "Native",
    "level.b1": "B1",
    "level.a2": "A2",
    // Education
    "edu.cifp": "Higher Level Training Cycle — Web Application Development (Sep 2023 – Jun 2025)",
    "edu.ies":  "Higher Level Training Cycle — Multiplatform Application Development (Sep 2020 – Jun 2022)",
    // Contact
    "contact.pitch": "Open to opportunities. Reach me here:",
    // Footer
    "footer.name": "Marcos Fernandez Sanchez"
  },

  es: {
    "meta.title": "Marcos Fernandez Sanchez — Desarrollador Full Stack",
    "meta.description": "Desarrollador Full Stack | Java, Spring Boot, React, JavaScript, SQL | Desarrollo de aplicaciones web escalables y de alto rendimiento.",
    "a11y.skip": "Saltar al contenido",
    "a11y.scrollToExperience": "Ir a experiencia",
    "nav.home": "Inicio",
    "nav.homeTitle": "Inicio",
    "nav.homeAria": "Inicio",
    "nav.openMenu": "Abrir menú",
    "nav.changeLang": "Cambiar idioma",
    "nav.toggleTheme": "Cambiar tema",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.languages": "Idiomas",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "hero.alt": "Retrato de Marcos Fernandez Sanchez",
    "hero.lead": "Desarrollador Full Stack · Java · Spring Boot · React · JavaScript · SQL",
    "hero.sub": "Construyo aplicaciones web escalables, fiables y de alto rendimiento.",
    "sections.experience": "Experiencia",
    "sections.projects": "Proyectos Destacados",
    "sections.skills": "Habilidades",
    "sections.languages": "Idiomas",
    "sections.education": "Educación",
    "sections.contact": "Contacto",
    "proj.one.title": "Proyecto 1",
    "proj.one.desc": "Breve descripción (problema, stack, impacto).",
    "proj.two.title": "Proyecto 2",
    "proj.two.desc": "Breve descripción (problema, stack, impacto).",
    "btn.demo": "Ver demo",
    "btn.source": "Código",
    "btn.email": "Email",
    "lang.spanish": "Español",
    "lang.english": "Inglés",
    "lang.french": "Francés",
    "level.native": "Nativo",
    "level.b1": "B1",
    "level.a2": "A2",
    "edu.cifp": "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Web (Sep 2023 – Jun 2025)",
    "edu.ies":  "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Multiplataforma (Sep 2020 – Jun 2022)",
    "contact.pitch": "Abierto a oportunidades. Contáctame aquí:",
    "footer.name": "Marcos Fernandez Sanchez",
    // Experiencia (ES)
    "exp.freelance.roleTitle": "Freelance — Desarrollador Full Stack",
    "exp.freelance.subtitle":  "jul 2025 – Presente · Sion, Suiza · Remoto",
    "exp.freelance.1": "Desarrollo de extremo a extremo para clientes: requisitos, implementación, despliegue y mantenimiento.",
    "exp.freelance.2": "Enfoque en soluciones escalables, fiables y centradas en el usuario.",
    "exp.ricoh.roleTitle": "Ricoh España — Desarrollador Full Stack",
    "exp.ricoh.subtitle":  "abr 2024 – jul 2025 · Asturias, España · Remoto",
    "exp.ricoh.1": "Construcción de funcionalidades empresariales en sistemas internos y de cara al cliente dentro de equipos ágiles.",
    "exp.ricoh.2": "Garantía de calidad del código con buenas prácticas, testing e integración continua.",
    "exp.minsait.roleTitle": "Minsait — Desarrollador Full Stack",
    "exp.minsait.subtitle":  "mar 2023 – abr 2024 · A Coruña, España · Remoto",
    "exp.minsait.1": "Entrega de proyectos de transformación digital a gran escala integrando servicios back-end con front-ends modernos.",
    "exp.minsait.2": "Mejora del rendimiento y la UX; participación en planificación de sprints y revisiones de código.",
    "exp.cap.roleTitle": "Capgemini — Desarrollador Back End",
    "exp.cap.subtitle":  "mar 2022 – mar 2023 · Asturias, España · Híbrido",
    "exp.cap.1": "Diseño y mantenimiento de APIs y estructuras de base de datos para aplicaciones empresariales.",
    "exp.cap.2": "Colaboración con equipos internacionales usando metodologías ágiles y buenas prácticas de código limpio.",
  },

  fr: {
    "meta.title": "Marcos Fernandez Sanchez — Développeur Full Stack",
    "meta.description": "Développeur Full Stack | Java, Spring Boot, React, JavaScript, SQL | Création d’applications web évolutives et performantes.",
    "a11y.skip": "Aller au contenu",
    "a11y.scrollToExperience": "Aller à l’expérience",
    "nav.home": "Accueil",
    "nav.homeTitle": "Accueil",
    "nav.homeAria": "Accueil",
    "nav.openMenu": "Ouvrir le menu",
    "nav.changeLang": "Changer de langue",
    "nav.toggleTheme": "Changer le thème",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.languages": "Langues",
    "nav.education": "Éducation",
    "nav.contact": "Contact",
    "hero.alt": "Portrait de Marcos Fernandez Sanchez",
    "hero.lead": "Développeur Full Stack · Java · Spring Boot · React · JavaScript · SQL",
    "hero.sub": "Je crée des applications web évolutives, fiables et performantes.",
    "sections.experience": "Expérience",
    "sections.projects": "Projets phares",
    "sections.skills": "Compétences",
    "sections.languages": "Langues",
    "sections.education": "Éducation",
    "sections.contact": "Contact",
    "proj.one.title": "Projet 1",
    "proj.one.desc": "Brève description (problème, stack, impact).",
    "proj.two.title": "Projet 2",
    "proj.two.desc": "Brève description (problème, stack, impact).",
    "btn.demo": "Démo",
    "btn.source": "Code",
    "btn.email": "Email",
    "lang.spanish": "Espagnol",
    "lang.english": "Anglais",
    "lang.french": "Français",
    "level.native": "Natif",
    "level.b1": "B1",
    "level.a2": "A2",
    "edu.cifp": "Cycle supérieur — Développement d’applications Web (Sep 2023 – Juin 2025)",
    "edu.ies":  "Cycle supérieur — Dév. d’applications multiplateformes (Sep 2020 – Juin 2022)",
    "contact.pitch": "Ouvert aux opportunités. Contactez-moi ici :",
    "footer.name": "Marcos Fernandez Sanchez",
    // Expérience (FR)
    "exp.freelance.roleTitle": "Freelance — Développeur Full Stack",
    "exp.freelance.subtitle":  "juil. 2025 – Présent · Sion, Suisse · Télétravail",
    "exp.freelance.1": "Développement de bout en bout pour des clients : exigences, implémentation, déploiement et maintenance.",
    "exp.freelance.2": "Focalisé sur des solutions évolutives, fiables et centrées utilisateur.",
    "exp.ricoh.roleTitle": "Ricoh Espagne — Développeur Full Stack",
    "exp.ricoh.subtitle":  "avr. 2024 – juil. 2025 · Asturies, Espagne · Télétravail",
    "exp.ricoh.1": "Développement de fonctionnalités d’entreprise sur des systèmes internes et externes au sein d’équipes agiles.",
    "exp.ricoh.2": "Assurance qualité du code avec bonnes pratiques, tests et CI.",
    "exp.minsait.roleTitle": "Minsait — Développeur Full Stack",
    "exp.minsait.subtitle":  "mars 2023 – avr. 2024 · La Corogne, Espagne · Télétravail",
    "exp.minsait.1": "Livraison de projets de transformation numérique à grande échelle intégrant des services back-end et des front-ends modernes.",
    "exp.minsait.2": "Amélioration des performances et de l’UX ; participation aux plannings de sprint et aux revues de code.",
    "exp.cap.roleTitle": "Capgemini — Développeur Back End",
    "exp.cap.subtitle":  "mars 2022 – mars 2023 · Asturies, Espagne · Hybride",
    "exp.cap.1": "Conception et maintenance d’API et de bases de données pour des applications d’entreprise.",
    "exp.cap.2": "Collaboration avec des équipes internationales utilisant des méthodologies agiles et des pratiques de code propre.",
  }
};

/**
 * Apply i18n to:
 *  - text nodes with [data-i18n="key"]
 *  - attributes with [data-i18n-attrs="attr:key,attr2:key2"]
 */
function applyI18n(lang) {
  const dict = translations[lang] || translations.en;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  // Attributes: data-i18n-attrs="title:key,aria-label:key2"
  document.querySelectorAll("[data-i18n-attrs]").forEach(el => {
    const pairs = el.getAttribute("data-i18n-attrs").split(",");
    pairs.forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (!attr || !key) return;
      if (dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });

  // Update language flag + label
  const flag = { en: "fi-gb", es: "fi-es", fr: "fi-fr" }[lang] || "fi-gb";
  const flagEl = document.getElementById("current-lang-flag");
  flagEl?.classList.remove("fi-gb","fi-es","fi-fr");
  flagEl?.classList.add(flag);

  const lbl = document.getElementById("current-lang-label");
  if (lbl) lbl.textContent = lang.toUpperCase();

  // Persist + <html lang="">
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
}

// Initial language (saved → browser → default)
const stored = localStorage.getItem("lang");
const browserLang = (navigator.language || "en").slice(0,2);
const initial = stored || (["en","es","fr"].includes(browserLang) ? browserLang : "en");
applyI18n(initial);

// Language menu
document.querySelectorAll(".lang-option").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    applyI18n(a.dataset.lang);
  });
});