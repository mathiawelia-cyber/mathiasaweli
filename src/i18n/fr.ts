export const fr = {
  nav: {
    links: [
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#experience" },
      { label: "Compétences", href: "#skills" },
      { label: "Réalisations", href: "#projects" },
      { label: "Formation", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Me contacter \u2192",
    themeLabel: "Changer de thème",
    menuLabel: "Menu",
  },
  hero: {
    available: "Disponible \u00b7 Beauvais, France",
    title1: "\u00c9conomiste",
    title2: "& Analyste",
    title3: "Territorial",
    seeProjects: "Voir mes projets \u2192",
    contactMe: "Me contacter",
    linkedin: "LinkedIn \u2197",
    stats: [
      { value: "5+", label: "Exp\u00e9riences\nprofessionnelles" },
      { value: "2", label: "Pays &\ncontextes terrain" },
      { value: "6+", label: "Outils stat\n& SIG ma\u00eetris\u00e9s" },
    ],
  },
  about: {
    eyebrow: "01 \u2014 \u00c0 propos",
    title1: "Ancr\u00e9 dans le",
    titleEm: "terrain",
    title2: ", arm\u00e9",
    title3: "des donn\u00e9es",
    paragraph1:
      "Form\u00e9 \u00e0 l\u2019analyse territoriale et des politiques publiques, je mobilise les donn\u00e9es, les diagnostics socio-\u00e9conomiques et l\u2019observation territoriale pour identifier les dynamiques, les besoins et les d\u00e9s\u00e9quilibres d\u2019un territoire.",
    paragraph2:
      "De la DDT de l\u2019Oise \u00e0 la DREAL Grand Est, jusqu\u2019au Minist\u00e8re de la Planification au Togo, mon parcours m\u2019a conduit \u00e0 travailler sur des probl\u00e9matiques de d\u00e9veloppement territorial, d\u2019emploi, de foncier et de planification. Habitu\u00e9 \u00e0 conduire des \u00e9tudes, produire des outils d\u2019aide \u00e0 la d\u00e9cision et travailler avec diff\u00e9rents acteurs, je souhaite aujourd\u2019hui mettre ces comp\u00e9tences au service du d\u00e9veloppement de l\u2019emploi et de l\u2019accompagnement des territoires.",
    quote:
      "Donner du sens aux donn\u00e9es pour \u00e9clairer les d\u00e9cisions publiques et accompagner les territoires dans leur d\u00e9veloppement durable.",
    labels: {
      currentPosition: "Poste actuel",
      currentPositionValue:
        "Charg\u00e9 d\u2019\u00e9tude \u2014 DDT de l\u2019Oise \u2014 Beauvais, France (Avr \u2013 Nov 2026)",
      currentEducation: "Formation",
      currentEducationValue:
        "Master \u00c9conomie appliqu\u00e9e \u2014 Expertise statistique pour l\u2019\u00e9conomie \u2014 Universit\u00e9 de Lorraine, Metz",
      email: "Email",
      languages: "Langues",
      mobility: "Mobilit\u00e9",
      linkedin: "LinkedIn",
      downloadCV: "T\u00e9l\u00e9charger le CV (PDF) \u2192",
    },
  },
  experience: {
    eyebrow: "02 \u2014 Parcours professionnel",
    title: "Exp\u00e9riences",
    statusActive: "En cours",
    statusDone: "Termin\u00e9",
    items: [
      {
        role: "Charg\u00e9 d\u2019\u00e9tude \u2014 Foncier agricole",
        company:
          "DDT de l\u2019Oise \u00b7 Direction D\u00e9partementale des Territoires",
        location: "Beauvais, France",
        period: "Avr \u2013 Nov 2026",
        status: "active" as const,
        project:
          "Projet Agricole D\u00e9partemental (PAD) \u2014 Volet foncier agricole",
        tasks: [
          "Contribution au diagnostic territorial et foncier \u00e0 l\u2019\u00e9chelle d\u00e9partementale",
          "Structuration, croisement et analyse de donn\u00e9es permettant d\u2019objectiver les dynamiques fonci\u00e8res",
          "Contribution \u00e0 la construction d\u2019un tableau de bord d\u00e9partemental sur l\u2019\u00e9volution du foncier agricole",
          "Mise en place d\u2019outils de datavisualisation sur la consommation fonci\u00e8re et les projets li\u00e9s \u00e0 l\u2019am\u00e9nagement du territoire",
          "Production de notes d\u2019analyse et d\u2019\u00e9l\u00e9ments d\u2019aide \u00e0 la d\u00e9cision \u00e0 destination des acteurs publics",
          "Participation \u00e0 des r\u00e9unions avec des acteurs institutionnels autour des enjeux fonciers et territoriaux",
        ],
        tags: [
          "Foncier agricole",
          "PAD",
          "Diagnostic territorial",
          "Tableau de bord",
          "Datavisualisation",
        ],
      },
      {
        role: "Charg\u00e9 d\u2019\u00e9tude \u2014 Participation citoyenne",
        company:
          "DREAL Grand Est \u00b7 Direction R\u00e9gionale de l\u2019Environnement, de l\u2019Am\u00e9nagement et du Logement",
        location: "Grand Est",
        period: "Avr \u2013 Ao\u00fbt 2025",
        status: "done" as const,
        project:
          "\u00c9tat des lieux de la participation citoyenne dans la r\u00e9gion Grand-Est",
        tasks: [
          "Conception d\u2019un protocole d\u2019enqu\u00eate combinant questionnaires et entretiens semi-directifs",
          "Collecte, traitement et analyse des donn\u00e9es recueillies",
          "Analyse des r\u00e9sultats et identification des dynamiques territoriales",
          "R\u00e9daction d\u2019une note d\u2019analyse destin\u00e9e aux d\u00e9cideurs",
          "Cartographie des r\u00e9sultats sous QGIS pour visualiser les dynamiques territoriales",
        ],
        tags: [
          "QGIS",
          "Enqu\u00eates",
          "Entretiens semi-directifs",
          "Analyse statistique",
          "Notes d\u00e9cideurs",
        ],
      },
      {
        role: "Charg\u00e9 d\u2019\u00e9tude \u2014 Attractivit\u00e9 \u00e9conomique",
        company: "Commune d\u2019Ago\u00e8-Nyiv\u00e9 2",
        location: "Togo",
        period: "Avr \u2013 Sept 2024",
        status: "done" as const,
        project:
          "Diagnostic territorial sur les facteurs d\u2019attractivit\u00e9 \u00e9conomique",
        tasks: [
          "R\u00e9alisation d\u2019un diagnostic territorial consacr\u00e9 aux facteurs d\u2019attractivit\u00e9 \u00e9conomique",
          "Conception et administration d\u2019un questionnaire aupr\u00e8s des entreprises et des habitants",
          "Analyse des dynamiques \u00e9conomiques, sociales, environnementales et d\u00e9mographiques",
          "Identification des leviers d\u2019attractivit\u00e9 et de d\u00e9veloppement territorial",
          "\u00c9laboration d\u2019un rapport strat\u00e9gique",
          "Pr\u00e9sentation des r\u00e9sultats et des propositions aux d\u00e9cideurs locaux",
        ],
        tags: [
          "Diagnostic territorial",
          "Attractivit\u00e9 \u00e9conomique",
          "Enqu\u00eates",
          "Rapport strat\u00e9gique",
        ],
      },
      {
        role: "Assistant en analyse et suivi de projets territoriaux",
        company:
          "Minist\u00e8re de la Planification du D\u00e9veloppement et de la Coop\u00e9ration",
        location: "Lom\u00e9, Togo",
        period: "Mar \u2013 Juin 2024",
        status: "done" as const,
        project:
          "\u00c9laboration du Sch\u00e9ma National d\u2019Am\u00e9nagement du Territoire (SNAT-2045)",
        tasks: [
          "Participation \u00e0 une d\u00e9marche de planification strat\u00e9gique et d\u2019am\u00e9nagement du territoire \u00e0 l\u2019\u00e9chelle nationale",
          "Contribution \u00e0 la r\u00e9daction des diagnostics territoriaux et \u00e0 l\u2019analyse des dynamiques territoriales",
          "Participation \u00e0 l\u2019\u00e9laboration et \u00e0 la r\u00e9vision des diff\u00e9rents volets du SNAT : strat\u00e9gie, sc\u00e9narios prospectifs, orientations et programmes",
          "Contribution au dispositif de suivi-\u00e9valuation du sch\u00e9ma",
          "Animation d\u2019ateliers de concertation avec diff\u00e9rentes parties prenantes",
          "Production de rapports d\u2019activit\u00e9 et de notes de synth\u00e8se destin\u00e9es aux d\u00e9cideurs",
        ],
        tags: [
          "SNAT-2045",
          "Planification nationale",
          "Ateliers concertation",
          "Prospective territoriale",
        ],
      },
      {
        role: "Charg\u00e9 d\u2019\u00e9tude \u2014 Zones agricoles ZAAP",
        company:
          "Cellule Pr\u00e9sidentielle d\u2019Ex\u00e9cution et de Suivi des Projets Prioritaires (CPES)",
        location: "Lom\u00e9, Togo",
        period: "Sept \u2013 Oct 2022",
        status: "done" as const,
        project:
          "Collecte de donn\u00e9es sur les ZAAP \u2014 R\u00e9gions Maritime et Plateaux",
        tasks: [
          "Enqu\u00eates agricoles de terrain dans deux r\u00e9gions du Togo",
          "Conduite de 10 focus groupes et 25 entretiens individuels sur les conditions de production et l\u2019acc\u00e8s aux ressources",
          "Collecte, traitement et analyse des donn\u00e9es socio-\u00e9conomiques",
          "R\u00e9daction du rapport de mission final",
        ],
        tags: [
          "Enqu\u00eates terrain",
          "Focus groupes",
          "ZAAP",
          "Analyse socio-\u00e9co",
          "Rapport de mission",
        ],
      },
      {
        role: "Assistant au responsable des op\u00e9rations",
        company: "Global Research and Consulting Centre (GR2C)",
        location: "Lom\u00e9, Togo",
        period: "Avr \u2013 Oct 2022",
        status: "done" as const,
        project:
          "Appui aux op\u00e9rations du cabinet de conseil et de recherche",
        tasks: [
          "Planification de projets de d\u00e9veloppement rural et agricole",
          "\u00c9laboration de plans d\u2019affaire pour les partenaires et clients",
          "Appui aux activit\u00e9s de recherche et de conseil en agriculture et d\u00e9veloppement rural",
          "Coordination op\u00e9rationnelle et suivi des projets multi-acteurs",
        ],
        tags: [
          "Planification de projets",
          "Plans d\u2019affaire",
          "Agriculture",
          "D\u00e9veloppement rural",
          "Conseil",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "03 \u2014 Outils & m\u00e9thodes",
    title: "Comp\u00e9tences",
    items: [
      {
        icon: "MapPin",
        title: "Diagnostic & d\u00e9veloppement territorial",
        items: [
          "Diagnostic territorial",
          "Observation territoriale",
          "Analyse des dynamiques \u00e9conomiques et territoriales",
          "Diagnostic emploi & comp\u00e9tences",
          "Appui aux collectivit\u00e9s",
          "Cartographie et analyse spatiale",
        ],
        highlight: ["Diagnostic territorial", "Appui aux collectivit\u00e9s"],
      },
      {
        icon: "ClipboardCheck",
        title: "Gestion & suivi de projets",
        items: [
          "Gestion de projets multi-acteurs",
          "Conception et planification",
          "Suivi des projets territoriaux",
          "\u00c9valuation de politiques publiques",
          "Construction de tableaux de bord",
          "Animation de r\u00e9unions et ateliers",
        ],
        highlight: [
          "Gestion de projets multi-acteurs",
          "\u00c9valuation de politiques publiques",
        ],
      },
      {
        icon: "BarChart3",
        title: "Outils statistiques & SIG",
        items: ["R", "Stata", "SPSS", "Eviews", "QGIS", "Python", "\u00c9conom\u00e9trie"],
        highlight: ["R", "Stata", "QGIS"],
      },
      {
        icon: "Database",
        title: "Collecte & analyse de donn\u00e9es",
        items: [
          "SurveyMonkey",
          "KoboCollect",
          "LimeSurvey",
          "Entretiens semi-directifs",
          "Focus groupes",
          "Enqu\u00eates terrain",
        ],
        highlight: ["SurveyMonkey", "KoboCollect"],
      },
      {
        icon: "PenTool",
        title: "R\u00e9daction & communication",
        items: [
          "Notes d\u2019analyse",
          "Rapports d\u2019\u00e9tude",
          "Synth\u00e8ses",
          "Comptes rendus d\u2019ateliers",
          "Pr\u00e9sentations",
        ],
        highlight: ["Notes d\u2019analyse", "Rapports d\u2019\u00e9tude"],
      },
      {
        icon: "Monitor",
        title: "Bureautique & outils",
        items: ["Word", "Excel", "PowerPoint", "LibreOffice", "Grist"],
        highlight: ["Excel", "PowerPoint"],
      },
    ],
  },
  projects: {
    eyebrow: "04 \u2014 Projets & outils",
    title: "R\u00e9alisations",
    contactLink: "Me contacter \u2192",
    githubLink: "GitHub \u2192",
    items: [
      {
        id: 1,
        title: "Pr\u00e9diction CAC 40 \u2014 AlphaEdge",
        description:
          "Application de pr\u00e9diction des tendances du CAC 40 utilisant XGBoost pour la classification et K-Means pour le clustering de r\u00e9gimes de march\u00e9. Interface interactive via Streamlit.",
        tags: ["Python", "XGBoost", "K-Means", "Streamlit", "Finance"],
        image: "/PRedictionCAC40.png",
        featured: true,
        github: "#",
      },
      {
        id: 4,
        title: "Suivi de la trajectoire foncière de l’Oise",
        description:
          "Outil de datavisualisation et de suivi de la consommation foncière développé dans le cadre de mon stage à la DDT de l’Oise. Il présente la consommation planifiée par EPCI (zones U, AU et 2AU, documents d’urbanisme) et la consommation passée par SCoT, comparées à l’objectif SRADDET 2030 selon trois scénarios : idéal, conjoncturel et alternatif. Consultable sur ordinateur comme sur téléphone.",
        tags: ["Dataviz", "Consommation foncière", "SRADDET", "Tableau de bord", "DDT de l’Oise"],
        image: "/suivi-foncier-ordinateur.png",
        images: ["/suivi-foncier-ordinateur.png", "/suivi-foncier-mobile.png"],
        featured: true,
        github: "#",
      },
      {
        id: 2,
        title:
          "Bouilloires thermiques \u2014 Agglom\u00e9ration Dijonnaise",
        description:
          "D\u00e9veloppement d\u2019un outil d\u2019aide \u00e0 la d\u00e9cision pour identifier les logements \u00ab bouilloires thermiques \u00bb. Analyse des enjeux \u00e9nerg\u00e9tiques et environnementaux. Conception d\u2019un Dashboard QGIS interactif d\u2019aide \u00e0 la d\u00e9cision.",
        tags: [
          "QGIS",
          "Dashboard",
          "\u00c9nergie",
          "Urbanisme",
          "Aide \u00e0 la d\u00e9cision",
        ],
        image: "/1774104538874_Projet_bouilloir_thermique.png",
        featured: false,
        github: "#",
      },
      {
        id: 3,
        title:
          "Diagnostic emploi & territoire \u2014 Bassin d\u2019emploi de Sens",
        description:
          "Analyse des caract\u00e9ristiques d\u00e9mographiques, \u00e9conomiques et sociales du territoire et des dynamiques de l\u2019emploi. Identification des secteurs et m\u00e9tiers en tension, analyse des \u00e9carts entre besoins des entreprises et profils des demandeurs d\u2019emploi, comparaison avec la r\u00e9gion. Formulation d\u2019enjeux prioritaires, de pistes d\u2019action et de recommandations.",
        tags: [
          "Diagnostic emploi",
          "March\u00e9 du travail",
          "Diagnostic territorial",
          "Recommandations",
        ],
        image: null,
        featured: false,
      },
    ],
  },
  education: {
    eyebrow: "05 \u2014 Formation & certifications",
    title1: "Parcours",
    titleEm: "acad\u00e9mique",
    formationsTitle: "Formations",
    certsTitle: "Certifications",
    refsTitle: "R\u00e9f\u00e9rences",
    items: [
      {
        degree:
          "Master mention \u00c9conomie appliqu\u00e9e \u2014 Expertise statistique pour l\u2019\u00e9conomie",
        school: "Universit\u00e9 de Lorraine",
        location: "Metz, France",
        detail:
          "\u00c9conom\u00e9trie avanc\u00e9e, machine learning, s\u00e9ries temporelles, analyse des donn\u00e9es financi\u00e8res et territoriales.",
      },
      {
        degree:
          "Master en \u00c9conomie appliqu\u00e9e \u2014 \u00c9conomie et gouvernance des territoires",
        school: "Universit\u00e9 de Bourgogne Europe",
        location: "Dijon, France",
        detail:
          "Am\u00e9nagement, \u00e9conomie urbaine, diagnostic territorial, m\u00e9thodes mixtes quantitatives et qualitatives.",
      },
      {
        degree:
          "Master Planification du d\u00e9veloppement \u2014 Planification territoriale",
        school: "Universit\u00e9 de Kara",
        location: "Togo",
        detail:
          "\u00c9conomie du d\u00e9veloppement, planification publique africaine, gestion de projets.",
      },
      {
        degree: "Licence \u2014 Sciences Agronomiques",
        school: "Universit\u00e9 de Lom\u00e9",
        location: "Togo",
        detail:
          "Sp\u00e9cialit\u00e9 Agro\u00e9conomie. Micro\u00e9conomie, \u00e9conomie agricole et rurale, statistiques appliqu\u00e9es.",
      },
    ],
    certifications: [
      "Attractivité territoriale et marketing territorial : les fondamentaux — Centre national de la fonction publique territoriale (CNFPT)",
      "Conception de projets respectueux de l\u2019environnement et des populations \u2014 Agence Fran\u00e7aise de D\u00e9veloppement (AFD)",
      "\u00c9tude de faisabilit\u00e9 et \u00e9valuation environnementale et sociale \u2014 Agence Fran\u00e7aise de D\u00e9veloppement (AFD)",
    ],
    references: [
      {
        name: "Nadège CHAMBON",
        email: "nadege.chambon@oise.gouv.fr",
        role: "Adjointe au responsable du Service de l’Aménagement, de l’Urbanisme et de l’Énergie — DDT de l’Oise",
      },
      {
        name: "Katharina SCHONE",
        email: "katharina.schone@u-bourgogne.fr",
        role: "Ma\u00eetre de conf\u00e9rences en sciences \u00e9conomiques \u2014 Universit\u00e9 de Bourgogne",
      },
      {
        name: "C\u00e9line JALTIER",
        email: "Celine.JALTIER@bourgognefranchecomte.fr",
        role: "Charg\u00e9e de mission Strat\u00e9gique Relations aux Territoires \u2014 R\u00e9gion Bourgogne-Franche-Comt\u00e9",
      },
      {
        name: "KULO Abalo",
        email: "kulomathias@yahoo.fr",
        role: "Professeur & Directeur de l\u2019\u00c9cole Sup\u00e9rieure d\u2019Agronomie \u2014 Universit\u00e9 de Lom\u00e9, Togo",
      },
    ],
  },
  contact: {
    eyebrow: "06 \u2014 Contact",
    title1: "Travaillons",
    titleEm: "ensemble.",
    subtitle:
      "Ouvert aux opportunit\u00e9s professionnelles, collaborations acad\u00e9miques et \u00e9changes autour de l\u2019\u00e9conomie territoriale, du diagnostic territorial et de l\u2019analyse de donn\u00e9es au service des politiques publiques.",
    rows: [
      { icon: "\u2709\ufe0f", label: "Email", value: "mathiasawli@gmail.com", href: "mailto:mathiasawli@gmail.com" },
      { icon: "\ud83d\udcbc", label: "LinkedIn", value: "@mathiasAWELI", href: "https://www.linkedin.com/in/mathias-aweli/" },
      { icon: "\ud83d\udc19", label: "GitHub", value: "mathiawelia-cyber", href: "https://github.com/mathiawelia-cyber" },
      {
        icon: "\ud83d\udcc4",
        label: "Curriculum Vitae",
        value: "T\u00e9l\u00e9charger mon CV (PDF)",
        href: "__CV__",
      },
    ],
    formTitle: "Envoyez-moi un message",
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    subjectLabel: "Objet",
    subjectPlaceholder: "Objet du message",
    messageLabel: "Message",
    messagePlaceholder: "Votre message...",
    send: "Envoyer le message \u2192",
    sending: "Envoi en cours...",
    sent: "\u2713 Message envoy\u00e9 !",
    error: "Erreur, r\u00e9essayez",
  },
  footer: {
    text: "Ewakina Mathias AWELI \u00b7 \u00c9conomiste & Analyste territorial \u00b7 Beauvais, France",
  },
  personalInfo: {
    name: "Mathias E. AWELI",
    fullName: "Ewakina Mathias AWELI",
    title: "\u00c9conomiste & Analyste Territorial",
    email: "mathiasawli@gmail.com",
    linkedin: "https://www.linkedin.com/in/mathias-aweli/",
    github: "https://github.com/mathiawelia-cyber",
    languages: [
      "Fran\u00e7ais (langue maternelle)",
      "Anglais (interm\u00e9diaire)",
    ],
    mobility: "Permis B",
  },
};
