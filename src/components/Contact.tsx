"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { assetPath } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const contactRows = [
  { icon: "✉️", label: "Email", value: "mathiasawli@gmail.com", href: "mailto:mathiasawli@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "@mathiasAWELI", href: "https://www.linkedin.com/in/mathias-aweli/" },
  { icon: "🐙", label: "GitHub", value: "mathiawelia-cyber", href: "https://github.com/mathiawelia-cyber" },
  { icon: "📄", label: "Curriculum Vitae", value: "Télécharger mon CV (PDF)", href: "__CV__" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="contact-section" style={{ padding: "clamp(4rem,8vw,6.5rem) 0" }}>
      <div className="max-w-[1080px] mx-auto px-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 gap-20 contact-grid"
          style={{ alignItems: "start" }}
        >
          {/* Left side */}
          <motion.div variants={fadeUp}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--green-l)", marginBottom: "0.5rem" }}>
              06 — Contact
            </p>
            <div style={{ width: 36, height: 2, background: "var(--green-l)", opacity: 0.5, marginBottom: "1.5rem" }} />
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff" }}>
              Travaillons<br /><em style={{ color: "var(--green-l)", fontStyle: "italic" }}>ensemble.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.93rem", lineHeight: 1.85 }}>
              Ouvert aux opportunités professionnelles, collaborations académiques et échanges autour
              de l&apos;économie territoriale, du diagnostic territorial et de l&apos;analyse de données
              au service des politiques publiques.
            </p>
          </motion.div>

          {/* Right side — contact rows */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3.5">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href === "__CV__" ? assetPath("/CV_AWELI_Stage.pdf") : row.href}
                target={row.href.startsWith("mailto") ? undefined : "_blank"}
                rel={row.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                download={row.href === "__CV__" ? true : undefined}
                className="c-row"
              >
                <span style={{ fontSize: "1.15rem", flexShrink: 0 }}>{row.icon}</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.1rem" }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                    {row.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
