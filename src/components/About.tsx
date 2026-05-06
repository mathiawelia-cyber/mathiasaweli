"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { useTranslation } from "@/i18n";
import { assetPath } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const t = useTranslation();
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
            <p className="eyebrow">{t.about.eyebrow}</p>
            <div className="divider" />
            <h2 className="sec-title">
              {t.about.title1}{" "}
              <br />
              <em style={{ color: "var(--green)", fontStyle: "italic" }}>{t.about.titleEm}</em>{t.about.title2}
              <br />
              {t.about.title3}
            </h2>

            <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              {t.about.paragraph1}
            </p>

            <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              {t.about.paragraph2}
            </p>

            <blockquote className="about-quote">
              &ldquo;{t.about.quote}&rdquo;
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
                <span className="info-key">{t.about.labels.currentPosition}</span>
                <span className="info-val">
                  {t.about.labels.currentPositionValue}
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">{t.about.labels.currentEducation}</span>
                <span className="info-val">
                  {t.about.labels.currentEducationValue}
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">{t.about.labels.email}</span>
                <span className="info-val">
                  <a href={`mailto:${t.personalInfo.email}`} style={{ color: "var(--green)", textDecoration: "none" }}>
                    {t.personalInfo.email}
                  </a>
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">{t.about.labels.languages}</span>
                <span className="info-val">
                  {t.personalInfo.languages.join(" · ")}
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">{t.about.labels.mobility}</span>
                <span className="info-val">{t.personalInfo.mobility}</span>
              </motion.div>

              <motion.div variants={fadeUp} className="info-row">
                <span className="info-key">{t.about.labels.linkedin}</span>
                <span className="info-val">
                  <a
                    href={t.personalInfo.linkedin}
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
                {t.about.labels.downloadCV}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
