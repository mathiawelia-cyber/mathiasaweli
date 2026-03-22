"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications, references } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const eduDetails: Record<string, string> = {
  "Master mention Économie appliquée — Expertise statistique pour l'économie et la finance":
    "Économétrie avancée, machine learning, séries temporelles, analyse des données financières et territoriales.",
  "Master en Économie appliquée — Économie et gouvernance des territoires":
    "Aménagement, économie urbaine, diagnostic territorial, méthodes mixtes quantitatives et qualitatives.",
  "Master Planification du développement — Planification territoriale":
    "Économie du développement, planification publique africaine, gestion de projets.",
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-alt" style={{ padding: "clamp(4rem,8vw,6.5rem) 0" }}>
      <div className="max-w-[1080px] mx-auto px-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">05 — Formation & certifications</p>
          <div className="divider" />
          <h2 className="sec-title">
            Parcours<br /><em style={{ color: "var(--green)", fontStyle: "italic" }}>académique</em>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 gap-10 edu-grid"
        >
          {/* Left: Formations */}
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-faint)", marginBottom: "1.1rem" }}>
              Formations
            </p>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <motion.div key={edu.degree} variants={fadeUp} className="edu-item">
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.15rem" }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--green)", fontWeight: 500, marginBottom: "0.4rem" }}>
                    🏛 {edu.school} · {edu.location}
                  </p>
                  {edu.detail && (
                    <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>
                      {edu.detail}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications + References */}
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-faint)", marginBottom: "1.1rem" }}>
              Certifications
            </p>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => {
                const parts = cert.split(" — ");
                return (
                  <motion.div key={cert} variants={fadeUp} className="cert-item">
                    <div className="text-xl shrink-0 mt-0.5">{i === 0 ? "🌿" : "📋"}</div>
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.18rem" }}>{parts[0]}</p>
                      {parts[1] && <p style={{ fontSize: "0.76rem", color: "var(--gold-l)" }}>{parts[1]}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* References */}
            <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-faint)", marginTop: "2.5rem", marginBottom: "1.1rem" }}>
              Références
            </p>
            <div className="flex flex-col gap-4">
              {references.map((r) => (
                <motion.div key={r.name} variants={fadeUp} className="ref-card">
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                    {r.name}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--ink-muted)", lineHeight: 1.55, marginBottom: "0.5rem" }}>
                    {r.role}
                  </p>
                  <a href={`mailto:${r.email}`} style={{ fontSize: "0.78rem", color: "var(--green)", textDecoration: "none" }}>
                    {r.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
