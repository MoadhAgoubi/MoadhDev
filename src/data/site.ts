// ─────────────────────────────────────────────────────────────────────────────
// Tout le contenu du site vit ici : modifiez ce fichier pour personnaliser
// textes, chiffres, expériences, projets et témoignages sans toucher aux
// composants.
//
// Notes :
// - les " " sont des espaces insécables (typographie française) ;
// - les chiffres (stats), certaines périodes et les témoignages sont des
//   valeurs de départ à remplacer par les vôtres.
// ─────────────────────────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  stack: string[];
};

export type ProjectTone = "stone" | "sage" | "sand" | "slate";

export type Project = {
  title: string;
  description: string;
  period: string;
  href: string;
  linkLabel: string;
  live: boolean;
  tone: ProjectTone;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Social = {
  label: string;
  href: string;
};

export const site = {
  name: "Moadh Agoubi",
  initials: "MA",
  logo: "moadh.",
  role: "Développeur Full-Stack",
  availability: "Disponible pour de nouveaux projets",
  tagline:
    "Je transforme des problèmes complexes en solutions élégantes et évolutives.",
  email: "agoubi.moadh@gmail.com",
  cta: {
    label: "Me contacter",
    href: "mailto:agoubi.moadh@gmail.com",
  },

  nav: [
    { label: "À propos", href: "#a-propos" },
    { label: "Parcours", href: "#parcours" },
    { label: "Projets", href: "#projets" },
  ] as NavItem[],

  trustedBy: ["Mediaphone Discount", "Institut La Plume", "Agence Nile"],

  about: [
    "Je suis un développeur qui fait le pont entre le design et l’ingénierie. J’aime construire des produits sobres et fiables : des sites rapides, des interfaces claires et des automatisations qui font gagner du temps au quotidien.",
    "Je travaille sur l’ensemble du cycle de développement — conception, intégration, mise en production, maintenance — avec une attention particulière au code propre, aux systèmes maintenables et aux détails qui comptent pour l’utilisateur final. Mes terrains de jeu favoris : l’e-commerce, les intégrations (HubSpot, Odoo, Google Workspace) et l’automatisation de processus métier.",
  ],

  stats: [
    { value: "15+", label: "Projets livrés" },
    { value: "10+", label: "Clients accompagnés" },
    { value: "5+", label: "Années de code" },
  ] as Stat[],

  stacks: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "HubSpot CMS",
    "Odoo",
    "Google Apps Script",
    "Git",
    "Vercel",
  ],

  experience: [
    {
      period: "2023 — Aujourd’hui",
      role: "Développeur Full-Stack",
      company: "Freelance",
      bullets: [
        "Conception et exploitation d’un service de synchronisation tarifaire entre Google Sheets, un site e-commerce HubSpot et Odoo : validations métier, disjoncteurs de sécurité et publication automatisée de plus de 2 000 références.",
        "Développement de sites et d’outils sur mesure pour des clients dans la réparation mobile, l’éducation et la communication.",
        "Mise en place d’intégrations API robustes : webhooks, comptes de service, files de synchronisation et déploiement continu.",
      ],
      stack: ["Python", "TypeScript", "HubSpot CMS", "Odoo", "Google Apps Script"],
    },
    {
      period: "2021 — 2023",
      role: "Développeur Web",
      company: "Projets clients & personnels",
      bullets: [
        "Réalisation de sites vitrines et d’applications web de bout en bout : maquette, intégration, mise en ligne.",
        "Automatisation de tâches répétitives : reporting, synchronisation de données, scripts de migration.",
        "Montée en compétence continue sur l’écosystème JavaScript moderne et les bonnes pratiques d’ingénierie.",
      ],
      stack: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      title: "MDD Sync — Synchronisation tarifaire",
      description:
        "Le Google Sheet comme source de vérité : validation des prix, garde-fous métier, puis publication automatique vers le site e-commerce et Odoo.",
      period: "2025 — 2026",
      href: "https://github.com/MoadhAgoubi/mdd-sync",
      linkLabel: "Code",
      live: true,
      tone: "slate",
    },
    {
      title: "Mediaphone Discount — Catalogue de réparation",
      description:
        "Thème HubSpot d’une enseigne de réparation mobile : plus de 2 000 réparations publiées et tenues à jour automatiquement.",
      period: "2024 — 2026",
      href: "https://www.mediaphone-discount.fr",
      linkLabel: "Site web",
      live: true,
      tone: "sage",
    },
    {
      title: "Institut La Plume — Plateforme de formation",
      description:
        "Site et outils d’un institut de formation : présentation des cursus, inscriptions et gestion du contenu par l’équipe pédagogique.",
      period: "2025",
      href: "#projets",
      linkLabel: "Étude de cas à venir",
      live: false,
      tone: "sand",
    },
    {
      title: "MoadhDev — Ce site",
      description:
        "Le site que vous lisez : Next.js 15, Tailwind CSS 4, design minimaliste et architecture par sections, pensée pour accueillir des widgets.",
      period: "2026",
      href: "https://github.com/MoadhAgoubi",
      linkLabel: "Code",
      live: true,
      tone: "stone",
    },
  ] as Project[],

  // Témoignages d'exemple, anonymisés : remplacez-les par de vrais retours
  // clients dès que possible.
  testimonials: [
    {
      quote:
        "Un travail sérieux et carré : les prix partent du tableur et tout le site suit, sans mauvaise surprise. On a gagné des heures chaque semaine.",
      name: "Client e-commerce",
      role: "Réparation mobile",
    },
    {
      quote:
        "Communication claire, délais tenus et un vrai souci du détail. Le site est sobre, rapide et simple à faire évoluer.",
      name: "Client formation",
      role: "Secteur éducatif",
    },
  ] as Testimonial[],

  footer: {
    line: "Je conçois des expériences web utiles, sobres et durables.",
    watermark: "moadh agoubi",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/MoadhAgoubi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ] as Social[],
};
