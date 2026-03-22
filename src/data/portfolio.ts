export const personalInfo = {
  name: "Mathias E. AWELI",
  fullName: "Ewakina Mathias AWELI",
  title: "Chargé de planification",
  email: "mathiasawli@gmail.com",
  phone: "06 27 09 18 40",
  location: "57000 Metz",
  linkedin: "https://www.linkedin.com/in/mathias-aweli/",
  github: "https://github.com/mathiawelia-cyber",
  languages: ["Français (langue maternelle)", "Anglais (intermédiaire)"],
  mobility: "Permis B",
  description:
    "Passionné par le développement local, je dispose de compétences solides dans la collecte, le traitement et l'analyse de données, l'évaluation de politiques publiques et la coordination de projets de développement. Je souhaite contribuer à l'accompagnement des collectivités dans leurs démarches de planification, d'attractivité et de développement des territoires.",
  stats: [
    { value: "3", label: "Expériences" },
    { value: "2", label: "Certifications" },
    { value: "3+", label: "Projets" },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Chargé d'étude — Participation citoyenne",
    company: "DREAL Grand Est",
    location: "Grand Est",
    period: "Avr – Août 2025",
    status: "done" as const,
    project: "État des lieux de la participation citoyenne dans la région Grand-Est",
    description:
      "Conception et administration d'outils d'enquête (questionnaires, guides d'entretien). Conduite d'entretiens semi-directifs avec des acteurs institutionnels et associatifs. Analyse statistique des données collectées. Rédaction de notes d'analyse à destination des décideurs publics. Cartographie des résultats (QGIS).",
    tags: ["Enquêtes", "Entretiens semi-directifs", "Analyse statistique", "QGIS", "Notes d'analyse"],
  },
  {
    id: 2,
    role: "Assistant en analyse et suivi de projets territoriaux",
    company: "Ministère de la Planification du Développement et de la Coopération",
    location: "Lomé, Togo",
    period: "Mar – Juin 2024",
    status: "done" as const,
    project: "Élaboration du Schéma National d'Aménagement du territoire (SNAT-2045)",
    description:
      "Analyse et révision des livrables du SNAT (Rapport du diagnostic, Stratégie, scénarios de prospective, orientations et programmes, Dispositif de suivi-évaluation). Participation et animation des ateliers de concertation (Ministres, Directeurs des cabinets, élus locaux, Partenaires techniques et financiers). Production de rapports d'activités et de notes de synthèses.",
    tags: ["SNAT-2045", "Concertation", "Prospective", "Suivi-évaluation", "Rapports"],
  },
  {
    id: 3,
    role: "Chargé d'étude",
    company: "Cellule Présidentielle d'Exécution et de Suivi des Projets Prioritaires (CPES)",
    location: "Lomé, Togo",
    period: "Sept – Oct 2022",
    status: "done" as const,
    project: "Collecte de données sur les Zones d'aménagement Agricoles Planifiées (ZAAP) — Région Maritime et Région Plateaux",
    description:
      "Enquêtes agricoles de terrain. Conduite de 10 focus groupes et 25 entretiens individuels sur les conditions de production et l'accès aux ressources. Collecte et analyse des données socio-économiques. Rédaction du rapport de mission.",
    tags: ["Enquêtes terrain", "Focus groupes", "Données socio-économiques", "Agriculture"],
  },
];

export const skills = [
  {
    icon: "MapPin",
    title: "Diagnostic & développement territorial",
    items: [
      "Diagnostic territorial",
      "Diagnostic emploi & compétences",
      "Appui aux collectivités",
      "Animation territoriale",
      "Veille stratégique",
    ],
    highlight: ["Diagnostic territorial", "Appui aux collectivités"],
  },
  {
    icon: "ClipboardCheck",
    title: "Gestion & suivi de projets",
    items: [
      "Gestion de projets multi-acteurs",
      "Conception et planification",
      "Suivi des projets territoriaux",
      "Évaluation de politiques publiques",
    ],
    highlight: ["Gestion de projets multi-acteurs", "Évaluation de politiques publiques"],
  },
  {
    icon: "BarChart3",
    title: "Outils statistiques & SIG",
    items: ["Stata", "R", "QGIS", "Eviews", "Python"],
    highlight: ["Stata", "R", "QGIS"],
  },
  {
    icon: "Database",
    title: "Collecte & analyse de données",
    items: ["LimeSurvey", "KoboToolbox", "Entretiens semi-directifs", "Focus groupes", "Enquêtes terrain"],
    highlight: ["LimeSurvey", "KoboToolbox"],
  },
  {
    icon: "PenTool",
    title: "Rédaction & communication",
    items: [
      "Notes d'analyse",
      "Rapports d'étude",
      "Synthèses",
      "Comptes rendus d'ateliers",
      "Présentations",
    ],
    highlight: ["Notes d'analyse", "Rapports d'étude"],
  },
  {
    icon: "Monitor",
    title: "Bureautique & outils",
    items: ["Word", "Excel", "PowerPoint", "Pack Office"],
    highlight: ["Excel", "PowerPoint"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Prédiction CAC 40 — AlphaEdge",
    description:
      "Application de prédiction des tendances du CAC 40 utilisant XGBoost pour la classification et K-Means pour le clustering de régimes de marché. Interface interactive via Streamlit.",
    tags: ["Python", "XGBoost", "K-Means", "Streamlit", "Finance"],
    image: "/PRedictionCAC40.png",
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Bouilloires thermiques — Agglomération Dijonnaise",
    description:
      "Développement d'un outil d'aide à la décision pour identifier les logements « bouilloires thermiques ». Analyse des enjeux énergétiques et environnementaux. Conception d'un Dashboard QGIS interactif d'aide à la décision.",
    period: "Sept 2024 – Avril 2025",
    tags: ["QGIS", "Dashboard", "Énergie", "Urbanisme", "Aide à la décision"],
    image: "/1774104538874_Projet_bouilloir_thermique.png",
    featured: false,
    github: "#",
  },
  {
    id: 3,
    title: "Attractivité économique — Agoe-Nyive 2, Togo",
    description:
      "Réalisation d'un diagnostic territorial sur les facteurs d'attractivité économique. Conception et administration d'un questionnaire à grande échelle. Collecte, traitement et analyse de données socio-économiques, environnementales et démographiques. Rédaction d'un rapport stratégique et présentation des résultats aux décideurs locaux.",
    period: "Avril 2024 – Août 2024",
    tags: ["Stata", "Enquêtes terrain", "Diagnostic territorial", "Togo"],
    image: null,
    featured: false,
  },
];

export const education = [
  {
    degree: "Master mention Économie appliquée — Expertise statistique pour l'économie et la finance",
    school: "Université de Lorraine",
    location: "Metz, France",
    period: "2024 – 2026",
  },
  {
    degree: "Master en Économie appliquée — Économie et gouvernance des territoires",
    school: "Université de Bourgogne Europe",
    location: "Dijon, France",
    period: "2023 – 2024",
  },
  {
    degree: "Master Planification du développement — Planification territoriale",
    school: "Université de Kara",
    location: "Togo",
    period: "",
  },
];

export const certifications = [
  "Conception de projets respectueux de l'environnement et des populations — AFD",
  "Étude de faisabilité et évaluation environnementale et sociale — AFD",
];

export const references = [
  {
    name: "Katharina SCHONE",
    email: "katharina.schone@u-bourgogne.fr",
    role: "Maître de conférences en sciences économiques — Université de Bourgogne",
  },
  {
    name: "Céline JALTIER",
    email: "Celine.JALTIER@bourgognefranchecomte.fr",
    role: "Chargée de mission Stratégique Relations aux Territoires — Région Bourgogne-Franche-Comté",
  },
];

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const strengths = [
  "Capacité d'analyse et de synthèse",
  "Aisance orale et écrite",
  "Dynamique et autonome",
  "Adaptabilité et organisation",
  "Travail en équipe",
  "Sens de l'écoute",
];
