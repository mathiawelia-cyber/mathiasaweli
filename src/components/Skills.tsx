"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/lib/language-provider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillsDataFR = [
  {
    icon: "📊",
    title: "Statistiques & Économétrie",
    pills: [
      { label: "R / RStudio", hi: true },
      { label: "Stata", hi: true },
      { label: "EViews", hi: true },
      { label: "Probit / Logit" },
      { label: "Ordered Probit" },
      { label: "Séries temporelles" },
      { label: "Analyse descriptive" },
    ],
  },
  {
    icon: "🗺️",
    title: "SIG & Cartographie",
    pills: [
      { label: "QGIS", hi: true },
      { label: "Analyse spatiale" },
      { label: "Cartographie thématique" },
      { label: "Dashboard QGIS" },
      { label: "OpenLayers" },
    ],
  },
  {
    icon: "🤖",
    title: "Data Science & ML",
    pills: [
      { label: "Python", hi: true },
      { label: "XGBoost", hi: true },
      { label: "Random Forest" },
      { label: "K-Means" },
      { label: "Streamlit" },
      { label: "Pandas" },
    ],
  },
  {
    icon: "🔍",
    title: "Méthodes de recherche",
    pills: [
      { label: "Diagnostic territorial", hi: true },
      { label: "Enquêtes quantitatives" },
      { label: "Entretiens semi-directifs" },
      { label: "Focus groupes" },
      { label: "Évaluation politiques publiques" },
      { label: "LimeSurvey · KoBoToolbox" },
    ],
  },
  {
    icon: "✍️",
    title: "Production & Communication",
    pills: [
      { label: "Rapports décideurs", hi: true },
      { label: "Notes de synthèse", hi: true },
      { label: "Comptes rendus d'ateliers" },
      { label: "Pack Office avancé" },
      { label: "Aisance écrite & orale" },
    ],
  },
  {
    icon: "🌍",
    title: "Développement territorial",
    pills: [
      { label: "Foncier agricole", hi: true },
      { label: "Attractivité économique" },
      { label: "Gestion multi-acteurs" },
      { label: "Animation d'ateliers" },
      { label: "Appui aux collectivités" },
    ],
  },
];

const skillsDataEN = [
  {
    icon: "📊",
    title: "Statistics & Econometrics",
    pills: [
      { label: "R / RStudio", hi: true },
      { label: "Stata", hi: true },
      { label: "EViews", hi: true },
      { label: "Probit / Logit" },
      { label: "Ordered Probit" },
      { label: "Time series" },
      { label: "Descriptive analysis" },
    ],
  },
  {
    icon: "🗺️",
    title: "GIS & Mapping",
    pills: [
      { label: "QGIS", hi: true },
      { label: "Spatial analysis" },
      { label: "Thematic mapping" },
      { label: "QGIS Dashboard" },
      { label: "OpenLayers" },
    ],
  },
  {
    icon: "🤖",
    title: "Data Science & ML",
    pills: [
      { label: "Python", hi: true },
      { label: "XGBoost", hi: true },
      { label: "Random Forest" },
      { label: "K-Means" },
      { label: "Streamlit" },
      { label: "Pandas" },
    ],
  },
  {
    icon: "🔍",
    title: "Research Methods",
    pills: [
      { label: "Territorial diagnosis", hi: true },
      { label: "Quantitative surveys" },
      { label: "Semi-structured interviews" },
      { label: "Focus groups" },
      { label: "Public policy evaluation" },
      { label: "LimeSurvey · KoBoToolbox" },
    ],
  },
  {
    icon: "✍️",
    title: "Writing & Communication",
    pills: [
      { label: "Policy reports", hi: true },
      { label: "Synthesis notes", hi: true },
      { label: "Workshop reports" },
      { label: "Advanced Office Suite" },
      { label: "Written & oral fluency" },
    ],
  },
  {
    icon: "🌍",
    title: "Territorial Development",
    pills: [
      { label: "Agricultural land", hi: true },
      { label: "Economic attractiveness" },
      { label: "Multi-stakeholder management" },
      { label: "Workshop facilitation" },
      { label: "Local authority support" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();
  const { lang } = useLanguage();
  const skillsData = lang === "en" ? skillsDataEN : skillsDataFR;

  return (
    <section id="skills" className="section-alt" style={{ padding: "clamp(4rem,8vw,6.5rem) 0" }}>
      <div className="max-w-[1080px] mx-auto px-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <div className="divider" />
          <h2 className="sec-title">{t.skills.title}</h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-3 gap-6 skills-grid-custom"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.title}
              variants={fadeUp}
              className="card p-7"
            >
              <div className="text-2xl mb-3">{skill.icon}</div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--green)] mb-4">
                {skill.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.pills.map((p) => (
                  <span key={p.label} className={`pill ${p.hi ? "hi" : ""}`}>
                    {p.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
