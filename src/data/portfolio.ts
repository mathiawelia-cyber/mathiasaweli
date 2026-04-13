export const personalInfo = {
  name: "Mathias E. AWELI",
  fullName: "Ewakina Mathias AWELI",
  title: "Économiste & Analyste Territorial",
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
    { value: "5+", label: "Expériences\nprofessionnelles" },
    { value: "2", label: "Pays &\ncontextes terrain" },
    { value: "6+", label: "Outils stat\n& SIG maîtrisés" },
  ],
};

export const experiences = [
  {
    id: 0,
    role: "Chargé d'étude — Diagnostic foncier agricole",
    company: "DDT de l'Oise · Direction Départementale des Territoires",
    location: "Beauvais, France",
    period: "Avr – Août 2026",
    status: "active" as const,
    project: "Projet Agricole Départemental (PAD) — Volet foncier agricole",
    tasks: [
      "Finalisation du diagnostic foncier agricole départemental : mise à jour des données, analyses et rédaction",
      "Réalisation du premier tableau de bord du foncier agricole départemental",
      "Organisation et animation de réunions avec les acteurs institutionnels et bancaires",
      "Expérimentation sur les services écosystémiques des sols et stratégie foncière communale",
      "Actualisation et cartographie des données d'aménagement commercial de l'Oise",
    ],
    description:
      "Diagnostic foncier agricole, tableau de bord départemental, animation de réunions multi-acteurs, expérimentation services écosystémiques des sols.",
    tags: ["Foncier agricole", "PAD", "Diagnostic territorial", "Cartographie", "Services écosystémiques"],
  },
  {
    id: 1,
    role: "Chargé d'étude — Participation citoyenne",
    company: "DREAL Grand Est · Direction Régionale de l'Environnement, de l'Aménagement et du Logement",
    location: "Grand Est",
    period: "Avr – Août 2025",
    status: "done" as const,
    project: "État des lieux de la participation citoyenne dans la région Grand-Est",
    tasks: [
      "Conception et administration d'outils d'enquête : questionnaires structurés et guides d'entretiens semi-directifs",
      "Conduite d'entretiens avec des acteurs institutionnels, associatifs et élus locaux de la région Grand Est",
      "Analyse statistique des données collectées — traitement, synthèse et interprétation des résultats",
      "Rédaction de notes d'analyse à destination des décideurs publics régionaux",
      "Cartographie thématique des résultats avec QGIS",
    ],
    description:
      "Conception et administration d'outils d'enquête. Conduite d'entretiens semi-directifs. Analyse statistique des données collectées. Rédaction de notes d'analyse. Cartographie thématique des résultats avec QGIS.",
    tags: ["QGIS", "Enquêtes", "Entretiens semi-directifs", "Analyse statistique", "Notes décideurs"],
  },
  {
    id: 2,
    role: "Assistant en analyse et suivi de projets territoriaux",
    company: "Ministère de la Planification du Développement et de la Coopération",
    location: "Lomé, Togo",
    period: "Mar – Juin 2024",
    status: "done" as const,
    project: "Élaboration du Schéma National d'Aménagement du Territoire (SNAT-2045)",
    tasks: [
      "Analyse et révision des livrables stratégiques du SNAT : rapport de diagnostic, scénarios de prospective, orientations et dispositif de suivi-évaluation",
      "Animation d'ateliers de concertation multipartites (Ministres, Directeurs de cabinet, élus locaux, partenaires techniques et financiers)",
      "Production de rapports d'activités, comptes rendus et notes de synthèse à haute valeur stratégique",
    ],
    description:
      "Analyse et révision des livrables stratégiques du SNAT. Animation d'ateliers de concertation multipartites. Production de rapports d'activités et notes de synthèse.",
    tags: ["SNAT-2045", "Planification nationale", "Ateliers concertation", "Prospective territoriale"],
  },
  {
    id: 3,
    role: "Chargé d'étude — Zones agricoles ZAAP",
    company: "Cellule Présidentielle d'Exécution et de Suivi des Projets Prioritaires (CPES)",
    location: "Lomé, Togo",
    period: "Sept – Oct 2022",
    status: "done" as const,
    project: "Collecte de données sur les ZAAP — Régions Maritime et Plateaux",
    tasks: [
      "Enquêtes agricoles de terrain dans deux régions du Togo",
      "Conduite de 10 focus groupes et 25 entretiens individuels sur les conditions de production et l'accès aux ressources",
      "Collecte, traitement et analyse des données socio-économiques",
      "Rédaction du rapport de mission final",
    ],
    description:
      "Enquêtes agricoles de terrain. Conduite de 10 focus groupes et 25 entretiens individuels sur les conditions de production et l'accès aux ressources. Collecte et analyse des données socio-économiques. Rédaction du rapport de mission.",
    tags: ["Enquêtes terrain", "Focus groupes", "ZAAP", "Analyse socio-éco", "Rapport de mission"],
  },
  {
    id: 4,
    role: "Assistant au responsable des opérations",
    company: "Global Research and Consulting Centre (GR2C)",
    location: "Lomé, Togo",
    period: "Avr – Oct 2022",
    status: "done" as const,
    project: "Appui aux opérations du cabinet de conseil et de recherche",
    tasks: [
      "Planification de projets de développement rural et agricole",
      "Élaboration de plans d'affaire pour les partenaires et clients",
      "Appui aux activités de recherche et de conseil en agriculture et développement rural",
      "Coordination opérationnelle et suivi des projets multi-acteurs",
    ],
    description:
      "Cabinet de conseil reconnu pour son expertise en agriculture, développement rural, et planification de projets. Planification de projets, élaboration de plans d'affaire et appui opérationnel.",
    tags: ["Planification de projets", "Plans d'affaire", "Agriculture", "Développement rural", "Conseil"],
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
    detail: "Économétrie avancée, machine learning, séries temporelles, analyse des données financières et territoriales.",
  },
  {
    degree: "Master en Économie appliquée — Économie et gouvernance des territoires",
    school: "Université de Bourgogne Europe",
    location: "Dijon, France",
    detail: "Aménagement, économie urbaine, diagnostic territorial, méthodes mixtes quantitatives et qualitatives.",
  },
  {
    degree: "Master Planification du développement — Planification territoriale",
    school: "Université de Kara",
    location: "Togo",
    detail: "Économie du développement, planification publique africaine, gestion de projets.",
  },
  {
    degree: "Licence — Sciences Agronomiques",
    school: "Université de Lomé",
    location: "Togo",
    detail: "Spécialité Agroéconomie. Microéconomie, économie agricole et rurale, statistiques appliquées.",
  },
];

export const certifications = [
  "Conception de projets respectueux de l'environnement et des populations — Agence Française de Développement (AFD)",
  "Étude de faisabilité et évaluation environnementale et sociale — Agence Française de Développement (AFD)",
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
  {
    name: "KULO Abalo",
    email: "kulomathias@yahoo.fr",
    role: "Professeur & Directeur de l'École Supérieure d'Agronomie — Université de Lomé, Togo",
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
