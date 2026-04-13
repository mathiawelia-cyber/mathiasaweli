"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { personalInfo, strengths } from "@/data/portfolio";
import { assetPath } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-alt" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}
        >
          {/* ── Left: About Text ── */}
          <AnimateOnScroll className="about-text">
            <p className="eyebrow">01 — À propos</p>
            <div className="divider" />
            <h2 className="sec-title">
              Ancré dans le{" "}
              <br />
              <em style={{ color: "var(--green)", fontStyle: "italic" }}>terrain</em>, armé
              <br />
              des données
            </h2>

            <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Passionné par le développement local, je dispose de compétences solides dans la
              collecte, le traitement et l&apos;analyse de données, l&apos;évaluation de
              politiques publiques et la coordination de projets de développement.
            </p>

            <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Du Ministère de la Planification au Togo, en passant par la Cellule Présidentielle
              d&apos;Exécution et de Suivi des Projets Prioritaires (CPES) toujours au Togo,
              à la DREAL Grand Est, France — mes expériences m&apos;ont permis d&apos;animer
              des ateliers collaboratifs, de conduire des enquêtes terrain et de contribuer à
              l&apos;accompagnement des collectivités dans leurs démarches de planification et
              d&apos;attractivité territoriale.
            </p>

            <blockquote className="about-quote">
              &ldquo;Donner du sens aux données pour éclairer les décisions publiques et
              accompagner les territoires dans leur développement durable.&rdquo;
            </blockquote>
          </AnimateOnScroll>

          {/* ── Right: Info Table + CV Button ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">Poste actuel</span>
                <span className="info-val">
                  DDT de l&apos;Oise — Beauvais, France (Avr – Août 2026)
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">Formation actuelle</span>
                <span className="info-val">
                  Master Expertise Statistique pour l&apos;Économie et la Finance — Université de Lorraine, Metz
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">Email</span>
                <span className="info-val">
                  <a href={`mailto:${personalInfo.email}`} style={{ color: "var(--green)", textDecoration: "none" }}>
                    {personalInfo.email}
                  </a>
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">Langues</span>
                <span className="info-val">
                  {personalInfo.languages.join(" · ")}
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">Mobilité</span>
                <span className="info-val">{personalInfo.mobility}</span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">LinkedIn</span>
                <span className="info-val">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--green)", textDecoration: "none" }}
                  >
                    linkedin.com/in/mathias-aweli
                  </a>
                </span>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} style={{ marginTop: "2.5rem" }}>
              <a
                href={assetPath("/CV_AWELI_Stage.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Télécharger le CV (PDF) →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
