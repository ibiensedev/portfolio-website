document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.languages": "Languages",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.lead": "Full Stack Developer · Java · Spring Boot · React · JavaScript · SQL",
    "hero.sub": "I build scalable, reliable and high-performance web applications.",
    "sections.experience": "Experience",
    "sections.projects": "Featured Projects",
    "sections.skills": "Skills",
    "sections.languages": "Languages",
    "sections.education": "Education",
    "sections.contact": "Contact",
    "proj.one.title": "Project 1",
    "proj.one.desc": "Short description (problem solved, stack, impact).",
    "proj.two.title": "Project 2",
    "proj.two.desc": "Short description (problem solved, stack, impact).",
    "btn.demo": "Live Demo",
    "btn.source": "Source",
    "btn.email": "Email",
    "lang.spanish": "Spanish",
    "lang.english": "English",
    "lang.french": "French",
    "level.native": "Native",
    "level.b1": "B1",
    "level.a2": "A2",
    "edu.cifp": "Higher Level Training Cycle — Web Application Development (Sep 2023 – Jun 2025)",
    "edu.ies": "Higher Level Training Cycle — Multiplatform Application Development (Sep 2020 – Jun 2022)",
    "contact.pitch": "Open to opportunities. Reach me here:",
    "exp.freelance.1": "End-to-end development for clients: requirements, implementation, deployment and maintenance.",
    "exp.freelance.2": "Focus on scalable, reliable and user-centric solutions.",
    "exp.ricoh.1": "Built enterprise features across internal and client-facing systems within agile teams.",
    "exp.ricoh.2": "Ensured code quality with best practices, testing and CI.",
    "exp.minsait.1": "Delivered large-scale digital transformation projects integrating back-end services with modern front-end apps.",
    "exp.minsait.2": "Improved performance and UX; participated in sprint planning and code reviews.",
    "exp.cap.1": "Designed and maintained APIs and database structures for enterprise applications.",
    "exp.cap.2": "Collaborated with international teams using agile methodologies and clean code practices."
  },
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Skills",
    "nav.languages": "Idiomas",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "hero.lead": "Desarrollador Full Stack · Java · Spring Boot · React · JavaScript · SQL",
    "hero.sub": "Construyo aplicaciones web escalables, fiables y de alto rendimiento.",
    "sections.experience": "Experiencia",
    "sections.projects": "Proyectos Destacados",
    "sections.skills": "Skills",
    "sections.languages": "Idiomas",
    "sections.education": "Educación",
    "sections.contact": "Contacto",
    "proj.one.title": "Proyecto 1",
    "proj.one.desc": "Breve descripción (problema, stack, impacto).",
    "proj.two.title": "Proyecto 2",
    "proj.two.desc": "Breve descripción (problema, stack, impacto).",
    "btn.demo": "Ver Demo",
    "btn.source": "Código",
    "btn.email": "Email",
    "lang.spanish": "Español",
    "lang.english": "Inglés",
    "lang.french": "Francés",
    "level.native": "Nativo",
    "level.b1": "B1",
    "level.a2": "A2",
    "edu.cifp": "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Web (Sep 2023 – Jun 2025)",
    "edu.ies": "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Multiplataforma (Sep 2020 – Jun 2022)",
    "contact.pitch": "Abierto a oportunidades. Contáctame aquí:",
    "exp.freelance.1": "Desarrollo end-to-end para clientes: requisitos, implementación, despliegue y mantenimiento.",
    "exp.freelance.2": "Enfoque en soluciones escalables, fiables y centradas en el usuario.",
    "exp.ricoh.1": "Implementación de funcionalidades enterprise para sistemas internos y de clientes en equipos ágiles.",
    "exp.ricoh.2": "Calidad de código mediante buenas prácticas, pruebas e integración continua.",
    "exp.minsait.1": "Proyectos de transformación digital a gran escala integrando back-end con apps front-end modernas.",
    "exp.minsait.2": "Mejoras de rendimiento y UX; participación en planificación y code reviews.",
    "exp.cap.1": "Diseño y mantenimiento de APIs y estructuras de base de datos para aplicaciones enterprise.",
    "exp.cap.2": "Colaboración con equipos internacionales aplicando metodologías ágiles y clean code."
  },
  fr: {
    "a11y.skip": "Aller au contenu",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.languages": "Langues",
    "nav.education": "Éducation",
    "nav.contact": "Contact",
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
    "edu.cifp": "Cycle de formation supérieur — Développement d'applications Web (Sep 2023 – Juin 2025)",
    "edu.ies": "Cycle de formation supérieur — Développement d'applications multiplateformes (Sep 2020 – Juin 2022)",
    "contact.pitch": "Ouvert aux opportunités. Contactez-moi ici :",
    "exp.freelance.1": "Développement de bout en bout pour des clients : exigences, implémentation, déploiement et maintenance.",
    "exp.freelance.2": "Accent sur des solutions évolutives, fiables et centrées utilisateur.",
    "exp.ricoh.1": "Fonctionnalités d’entreprise pour des systèmes internes et clients au sein d’équipes agiles.",
    "exp.ricoh.2": "Qualité du code via bonnes pratiques, tests et CI.",
    "exp.minsait.1": "Projets de transformation numérique à grande échelle intégrant back-end et applications front-end modernes.",
    "exp.minsait.2": "Amélioration des performances et de l’UX ; participation à la planification et aux revues de code.",
    "exp.cap.1": "Conception et maintenance d’API et de bases de données pour des applications d’entreprise.",
    "exp.cap.2": "Collaboration avec des équipes internationales en méthodologies agiles et clean code."
  }
};

function applyI18n(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const flag = { en: "fi-gb", es: "fi-es", fr: "fi-fr" }[lang] || "fi-gb";
  const flagEl = document.getElementById("current-lang-flag");
  flagEl?.classList.remove("fi-gb","fi-es","fi-fr");
  flagEl?.classList.add(flag);

  const lbl = document.getElementById("current-lang-label");
  if (lbl) lbl.textContent = lang.toUpperCase();

  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
}

const stored = localStorage.getItem("lang");
const browserLang = (navigator.language || "en").slice(0,2);
const initial = stored || (["en","es","fr"].includes(browserLang) ? browserLang : "en");
applyI18n(initial);

document.querySelectorAll(".lang-option").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    applyI18n(a.dataset.lang);
  });
});