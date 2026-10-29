export const en = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact me \u2192",
    themeLabel: "Switch theme",
    menuLabel: "Menu",
  },
  hero: {
    available: "Available \u00b7 Beauvais, France",
    title1: "Economist",
    title2: "& Territorial",
    title3: "Analyst",
    seeProjects: "See my projects \u2192",
    contactMe: "Contact me",
    linkedin: "LinkedIn \u2197",
    stats: [
      { value: "5+", label: "Professional\nexperiences" },
      { value: "2", label: "Countries &\nfield contexts" },
      { value: "6+", label: "Statistical\n& GIS tools" },
    ],
  },
  about: {
    eyebrow: "01 \u2014 About",
    title1: "Grounded in the",
    titleEm: "field",
    title2: ", armed",
    title3: "with data",
    paragraph1:
      "Trained in territorial and public policy analysis, I use data, socio-economic diagnoses and territorial observation to identify the dynamics, needs and imbalances of a territory.",
    paragraph2:
      "From the DDT de l'Oise to the DREAL Grand Est and the Ministry of Planning in Togo, my career has led me to work on territorial development, employment, land and planning issues. Used to conducting studies, producing decision-support tools and working with diverse stakeholders, I now want to put these skills to work for employment development and support for territories.",
    quote:
      "Making sense of data to inform public decisions and support territories in their sustainable development.",
    labels: {
      currentPosition: "Current position",
      currentPositionValue:
        "Research Officer \u2014 DDT de l'Oise \u2014 Beauvais, France (Apr \u2013 Nov 2026)",
      currentEducation: "Education",
      currentEducationValue:
        "Master\u2019s in Applied Economics \u2014 Statistical Expertise for Economics \u2014 University of Lorraine, Metz",
      email: "Email",
      languages: "Languages",
      mobility: "Mobility",
      linkedin: "LinkedIn",
      downloadCV: "Download CV (PDF) \u2192",
    },
  },
  experience: {
    eyebrow: "02 \u2014 Professional background",
    title: "Experience",
    statusActive: "Ongoing",
    statusDone: "Completed",
    items: [
      {
        role: "Research Officer \u2014 Agricultural Land",
        company:
          "DDT de l'Oise \u00b7 Departmental Directorate of Territories",
        location: "Beauvais, France",
        period: "Apr \u2013 Nov 2026",
        status: "active" as const,
        project:
          "Departmental Agricultural Project (PAD) \u2014 Agricultural land component",
        tasks: [
          "Contribution to the territorial and land diagnosis at departmental level",
          "Structuring, cross-referencing and analysing data to objectively assess land dynamics",
          "Contribution to building a departmental dashboard on changes in agricultural land",
          "Setting up data visualisation tools on land consumption and land-use planning projects",
          "Production of analytical notes and decision-support material for public stakeholders",
          "Participation in meetings with institutional stakeholders on land and territorial issues",
        ],
        tags: [
          "Agricultural land",
          "PAD",
          "Territorial diagnosis",
          "Dashboard",
          "Data visualisation",
        ],
      },
      {
        role: "Research Officer \u2014 Citizen Participation",
        company:
          "DREAL Grand Est \u00b7 Regional Directorate for Environment, Planning and Housing",
        location: "Grand Est",
        period: "Apr \u2013 Aug 2025",
        status: "done" as const,
        project:
          "Assessment of citizen participation in the Grand-Est region",
        tasks: [
          "Design of a survey protocol combining questionnaires and semi-structured interviews",
          "Collection, processing and analysis of the data gathered",
          "Analysis of results and identification of territorial dynamics",
          "Writing an analytical note for decision-makers",
          "Mapping of results in QGIS to visualise territorial dynamics",
        ],
        tags: [
          "QGIS",
          "Surveys",
          "Semi-structured interviews",
          "Statistical analysis",
          "Policy briefs",
        ],
      },
      {
        role: "Research Officer \u2014 Economic Attractiveness",
        company: "Municipality of Ago\u00e8-Nyiv\u00e9 2",
        location: "Togo",
        period: "Apr \u2013 Sep 2024",
        status: "done" as const,
        project:
          "Territorial diagnosis of economic attractiveness factors",
        tasks: [
          "Territorial diagnosis focused on economic attractiveness factors",
          "Design and administration of a questionnaire for businesses and residents",
          "Analysis of economic, social, environmental and demographic dynamics",
          "Identification of levers for attractiveness and territorial development",
          "Writing a strategic report",
          "Presentation of results and proposals to local decision-makers",
        ],
        tags: [
          "Territorial diagnosis",
          "Economic attractiveness",
          "Surveys",
          "Strategic report",
        ],
      },
      {
        role: "Territorial Project Analysis & Monitoring Assistant",
        company:
          "Ministry of Development Planning and Cooperation",
        location: "Lom\u00e9, Togo",
        period: "Mar \u2013 Jun 2024",
        status: "done" as const,
        project:
          "Development of the National Land Use Planning Scheme (SNAT-2045)",
        tasks: [
          "Participation in a national strategic planning and land-use planning process",
          "Contribution to writing territorial diagnoses and analysing territorial dynamics",
          "Participation in drafting and revising the SNAT components: strategy, prospective scenarios, guidelines and programmes",
          "Contribution to the scheme\u2019s monitoring and evaluation framework",
          "Facilitation of consultation workshops with various stakeholders",
          "Production of activity reports and synthesis notes for decision-makers",
        ],
        tags: [
          "SNAT-2045",
          "National planning",
          "Consultation workshops",
          "Territorial foresight",
        ],
      },
      {
        role: "Research Officer \u2014 ZAAP Agricultural Zones",
        company:
          "Presidential Unit for Execution and Monitoring of Priority Projects (CPES)",
        location: "Lom\u00e9, Togo",
        period: "Sep \u2013 Oct 2022",
        status: "done" as const,
        project:
          "Data collection on ZAAP \u2014 Maritime and Plateaux Regions",
        tasks: [
          "Agricultural field surveys in two regions of Togo",
          "Conducting 10 focus groups and 25 individual interviews on production conditions and resource access",
          "Collection, processing and analysis of socio-economic data",
          "Writing the final mission report",
        ],
        tags: [
          "Field surveys",
          "Focus groups",
          "ZAAP",
          "Socio-economic analysis",
          "Mission report",
        ],
      },
      {
        role: "Operations Manager Assistant",
        company:
          "Global Research and Consulting Centre (GR2C)",
        location: "Lom\u00e9, Togo",
        period: "Apr \u2013 Oct 2022",
        status: "done" as const,
        project:
          "Support for consulting and research firm operations",
        tasks: [
          "Planning rural and agricultural development projects",
          "Developing business plans for partners and clients",
          "Supporting research and consulting activities in agriculture and rural development",
          "Operational coordination and monitoring of multi-stakeholder projects",
        ],
        tags: [
          "Project planning",
          "Business plans",
          "Agriculture",
          "Rural development",
          "Consulting",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "03 \u2014 Tools & methods",
    title: "Skills",
    items: [
      {
        icon: "MapPin",
        title: "Territorial diagnosis & development",
        items: [
          "Territorial diagnosis",
          "Territorial observation",
          "Analysis of economic and territorial dynamics",
          "Employment & skills diagnosis",
          "Local authority support",
          "Mapping and spatial analysis",
        ],
        highlight: ["Territorial diagnosis", "Local authority support"],
      },
      {
        icon: "ClipboardCheck",
        title: "Project management & monitoring",
        items: [
          "Multi-stakeholder project management",
          "Design and planning",
          "Territorial project monitoring",
          "Public policy evaluation",
          "Building dashboards",
          "Facilitating meetings and workshops",
        ],
        highlight: [
          "Multi-stakeholder project management",
          "Public policy evaluation",
        ],
      },
      {
        icon: "BarChart3",
        title: "Statistical & GIS tools",
        items: ["R", "Stata", "SPSS", "Eviews", "QGIS", "Python", "Econometrics"],
        highlight: ["R", "Stata", "QGIS"],
      },
      {
        icon: "Database",
        title: "Data collection & analysis",
        items: [
          "SurveyMonkey",
          "KoboCollect",
          "LimeSurvey",
          "Semi-structured interviews",
          "Focus groups",
          "Field surveys",
        ],
        highlight: ["SurveyMonkey", "KoboCollect"],
      },
      {
        icon: "PenTool",
        title: "Writing & communication",
        items: [
          "Analytical notes",
          "Study reports",
          "Summaries",
          "Workshop minutes",
          "Presentations",
        ],
        highlight: ["Analytical notes", "Study reports"],
      },
      {
        icon: "Monitor",
        title: "Office tools",
        items: ["Word", "Excel", "PowerPoint", "LibreOffice", "Grist"],
        highlight: ["Excel", "PowerPoint"],
      },
    ],
  },
  projects: {
    eyebrow: "04 \u2014 Achievements",
    title: "Projects",
    contactLink: "Contact me \u2192",
    githubLink: "GitHub \u2192",
    items: [
      {
        id: 1,
        title: "CAC 40 Prediction \u2014 AlphaEdge",
        description:
          "CAC 40 trend prediction application using XGBoost for classification and K-Means for market regime clustering. Interactive interface via Streamlit.",
        tags: ["Python", "XGBoost", "K-Means", "Streamlit", "Finance"],
        image: "/PRedictionCAC40.png",
        featured: true,
        github: "#",
      },
      {
        id: 2,
        title: "Thermal Hot Spots \u2014 Dijon Agglomeration",
        description:
          "Development of a decision-support tool to identify 'thermal hot spot' housing. Analysis of energy and environmental issues. Design of an interactive QGIS Dashboard for decision support.",
        tags: [
          "QGIS",
          "Dashboard",
          "Energy",
          "Urban planning",
          "Decision support",
        ],
        image: "/1774104538874_Projet_bouilloir_thermique.png",
        featured: false,
        github: "#",
      },
      {
        id: 3,
        title: "Employment & Territory Diagnosis \u2014 Sens Employment Area",
        description:
          "Analysis of the area\u2019s demographic, economic and social characteristics and of employment dynamics. Identification of sectors and occupations with specific needs, analysis of gaps between employers\u2019 needs and jobseekers\u2019 profiles, comparison with the region. Definition of priority issues, courses of action and recommendations.",
        tags: ["Employment diagnosis", "Labour market", "Territorial diagnosis", "Recommendations"],
        image: null,
        featured: false,
      },
    ],
  },
  education: {
    eyebrow: "05 \u2014 Education & certifications",
    title1: "Academic",
    titleEm: "background",
    formationsTitle: "Education",
    certsTitle: "Certifications",
    refsTitle: "References",
    items: [
      {
        degree:
          "Master\u2019s in Applied Economics \u2014 Statistical Expertise for Economics",
        school: "University of Lorraine",
        location: "Metz, France",
        detail:
          "Advanced econometrics, machine learning, time series, financial and territorial data analysis.",
      },
      {
        degree:
          "Master\u2019s in Applied Economics \u2014 Territorial Economics and Governance",
        school: "University of Burgundy Europe",
        location: "Dijon, France",
        detail:
          "Urban planning, urban economics, territorial diagnosis, mixed quantitative and qualitative methods.",
      },
      {
        degree:
          "Master\u2019s in Development Planning \u2014 Territorial Planning",
        school: "University of Kara",
        location: "Togo",
        detail:
          "Development economics, African public planning, project management.",
      },
      {
        degree: "Bachelor\u2019s \u2014 Agricultural Sciences",
        school: "University of Lom\u00e9",
        location: "Togo",
        detail:
          "Specialization in Agroeconomics. Microeconomics, agricultural and rural economics, applied statistics.",
      },
    ],
    certifications: [
      "Territorial attractiveness and place marketing: the fundamentals — National Centre for Local Civil Service (CNFPT)",
      "Design of environmentally and socially responsible projects \u2014 French Development Agency (AFD)",
      "Feasibility study and environmental and social assessment \u2014 French Development Agency (AFD)",
    ],
    references: [
      {
        name: "Nadège CHAMBON",
        email: "nadege.chambon@oise.gouv.fr",
        role: "Deputy Head of the Planning, Urban Development and Energy Department — DDT de l'Oise",
      },
      {
        name: "Katharina SCHONE",
        email: "katharina.schone@u-bourgogne.fr",
        role: "Associate Professor in Economics \u2014 University of Burgundy",
      },
      {
        name: "C\u00e9line JALTIER",
        email: "Celine.JALTIER@bourgognefranchecomte.fr",
        role: "Strategic Relations to Territories Mission Officer \u2014 Burgundy-Franche-Comt\u00e9 Region",
      },
      {
        name: "KULO Abalo",
        email: "kulomathias@yahoo.fr",
        role: "Professor & Director of the School of Agronomy \u2014 University of Lom\u00e9, Togo",
      },
    ],
  },
  contact: {
    eyebrow: "06 \u2014 Contact",
    title1: "Let's work",
    titleEm: "together.",
    subtitle:
      "Open to professional opportunities, academic collaborations and exchanges about territorial economics, territorial diagnosis and data analysis for public policy.",
    rows: [
      { icon: "\u2709\ufe0f", label: "Email", value: "mathiasawli@gmail.com", href: "mailto:mathiasawli@gmail.com" },
      { icon: "\ud83d\udcbc", label: "LinkedIn", value: "@mathiasAWELI", href: "https://www.linkedin.com/in/mathias-aweli/" },
      { icon: "\ud83d\udc19", label: "GitHub", value: "mathiawelia-cyber", href: "https://github.com/mathiawelia-cyber" },
      {
        icon: "\ud83d\udcc4",
        label: "Curriculum Vitae",
        value: "Download my CV (PDF)",
        href: "__CV__",
      },
    ],
    formTitle: "Send me a message",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Message subject",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    send: "Send message \u2192",
    sending: "Sending...",
    sent: "\u2713 Message sent!",
    error: "Error, try again",
  },
  footer: {
    text: "Ewakina Mathias AWELI \u00b7 Economist & Territorial Analyst \u00b7 Beauvais, France",
  },
  personalInfo: {
    name: "Mathias E. AWELI",
    fullName: "Ewakina Mathias AWELI",
    title: "Economist & Territorial Analyst",
    email: "mathiasawli@gmail.com",
    linkedin: "https://www.linkedin.com/in/mathias-aweli/",
    github: "https://github.com/mathiawelia-cyber",
    languages: ["French (native)", "English (intermediate)"],
    mobility: "Driving license (B)",
  },
};
