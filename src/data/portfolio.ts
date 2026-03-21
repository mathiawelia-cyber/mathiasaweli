export const personalInfo = {
  name: "Mathias E. AWELI",
  fullName: "Ewakina Mathias AWELI",
  title: "Économiste & Analyste Territorial",
  email: "mathiasawli@gmail.com",
  linkedin: "https://www.linkedin.com/in/mathias-aweli/",
  github: "https://github.com/mathiawelia-cyber",
  languages: ["Français (natif)", "Anglais (intermédiaire)"],
  mobility: "Permis B",
  description:
    "Passionné par l'analyse de données territoriales et la modélisation économique, je mets mes compétences en statistiques, SIG et data science au service de la compréhension et du développement des territoires.",
  stats: [
    { value: "4+", label: "Expériences" },
    { value: "2", label: "Certifications" },
    { value: "6+", label: "Projets" },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Stagiaire — Diagnostic foncier agricole",
    company: "DDT de l'Oise",
    location: "Beauvais",
    period: "Avr – Août 2026",
    status: "active" as const,
    description:
      "Réalisation d'un diagnostic foncier agricole à l'échelle départementale. Analyse spatiale et traitement de données cadastrales.",
    tags: ["SIG", "Analyse foncière", "Données cadastrales"],
  },
  {
    id: 2,
    role: "Stagiaire — Participation citoyenne Grand Est",
    company: "DREAL Grand Est",
    location: "Grand Est",
    period: "Avr – Août 2025",
    status: "done" as const,
    description:
      "Étude des dispositifs de participation citoyenne dans la région Grand Est. Analyse qualitative et quantitative des retours citoyens.",
    tags: ["Participation citoyenne", "Analyse qualitative", "Politique publique"],
  },
  {
    id: 3,
    role: "Stagiaire — Schéma National d'Aménagement SNAT-2045",
    company: "Ministère de la Planification",
    location: "Lomé, Togo",
    period: "Mar – Juin 2024",
    status: "done" as const,
    description:
      "Contribution à l'élaboration du Schéma National d'Aménagement du Territoire à l'horizon 2045.",
    tags: ["Aménagement", "Planification", "SNAT-2045"],
  },
  {
    id: 4,
    role: "Stagiaire — Zones d'Aménagement Agricole Planifiées (ZAAP)",
    company: "CPES",
    location: "Lomé, Togo",
    period: "Sept – Oct 2022",
    status: "done" as const,
    description:
      "Identification et cartographie des Zones d'Aménagement Agricole Planifiées au Togo.",
    tags: ["Cartographie", "Agriculture", "Aménagement"],
  },
];

export const skills = [
  {
    icon: "BarChart3",
    title: "Analyse Statistique",
    items: ["R", "Stata", "SPSS", "Économétrie", "Séries temporelles"],
    highlight: ["R", "Stata"],
  },
  {
    icon: "Database",
    title: "Data Science & ML",
    items: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    highlight: ["Python", "XGBoost"],
  },
  {
    icon: "Map",
    title: "SIG & Cartographie",
    items: ["QGIS", "ArcGIS", "Analyse spatiale", "Géostatistique"],
    highlight: ["QGIS"],
  },
  {
    icon: "FileSpreadsheet",
    title: "Gestion de Données",
    items: ["Excel avancé", "SQL", "Power BI", "Tableaux de bord"],
    highlight: ["SQL", "Power BI"],
  },
  {
    icon: "BookOpen",
    title: "Analyse Territoriale",
    items: ["Diagnostic territorial", "Politiques publiques", "Évaluation de projets", "Enquêtes terrain"],
    highlight: ["Diagnostic territorial"],
  },
  {
    icon: "PenTool",
    title: "Rédaction & Communication",
    items: ["Rapports d'étude", "Notes de synthèse", "Présentations", "LaTeX"],
    highlight: ["Rapports d'étude"],
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
    title: "Bouilloires Thermiques — Dijon",
    description:
      "Identification des bouilloires thermiques urbaines à Dijon via analyse SIG et modélisation statistique (Ordered Probit + Random Forest).",
    tags: ["QGIS", "R", "Random Forest", "Ordered Probit", "Urbanisme"],
    image: "/1774104538874_Projet_bouilloir_thermique.png",
    featured: false,
    github: "#",
  },
  {
    id: 3,
    title: "Attractivité économique — Agoe-Nyive 2",
    description:
      "Étude de l'attractivité économique de la commune d'Agoe-Nyive 2 au Togo, basée sur des enquêtes terrain et une analyse sous Stata.",
    tags: ["Stata", "Enquêtes terrain", "Économie territoriale", "Togo"],
    image: null,
    featured: false,
  },
];

export const education = [
  {
    degree: "M2 Économie Appliquée — Expertise Statistique (ESEF)",
    school: "Université de Lorraine",
    location: "Metz",
    period: "2024 – 2026",
  },
  {
    degree: "Master Économie Appliquée — Économie et Gouvernance des Territoires",
    school: "Université de Bourgogne",
    location: "Dijon",
    period: "2023 – 2024",
  },
  {
    degree: "Master Planification du Développement",
    school: "Université de Kara",
    location: "Togo",
    period: "",
  },
  {
    degree: "Licence Sciences Agronomiques (Agroéconomie)",
    school: "Université de Lomé",
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
    role: "MCF Université de Bourgogne",
  },
  {
    name: "Céline JALTIER",
    email: "Celine.JALTIER@bourgognefranchecomte.fr",
    role: "Région Bourgogne-Franche-Comté",
  },
  {
    name: "KULO Abalo",
    email: "kulomathias@yahoo.fr",
    role: "Directeur École Supérieure d'Agronomie — Université de Lomé",
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
  "Adaptabilité interculturelle",
  "Esprit d'analyse et de synthèse",
  "Travail en équipe pluridisciplinaire",
  "Rigueur méthodologique",
  "Curiosité intellectuelle",
  "Communication claire et efficace",
];
