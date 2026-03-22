"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{ background: "var(--bg)", padding: "clamp(4rem,8vw,6.5rem) 0" }}>
      <div className="max-w-[1080px] mx-auto px-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">04 — Réalisations</p>
          <div className="divider" />
          <h2 className="sec-title">Projets</h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 gap-6 proj-grid-custom"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className={`proj-card ${project.featured ? "col-span-2" : ""}`}
              style={project.featured ? { display: "grid", gridTemplateColumns: "1.1fr 1fr" } : {}}
            >
              {project.image ? (
                <Image
                  src={assetPath(project.image)}
                  alt={project.title}
                  width={600}
                  height={280}
                  className="object-cover w-full"
                  style={{ height: project.featured ? "100%" : 210, minHeight: project.featured ? 280 : undefined, background: "var(--surface2)" }}
                />
              ) : (
                <div className="flex items-center justify-center" style={{ height: 210, fontSize: "3.5rem", background: "var(--surface2)" }}>
                  🌍
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-l)", marginBottom: "0.5rem" }}>
                  {project.tags.slice(0, 3).join(" · ")}
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.7rem", lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", lineHeight: 1.75, flex: 1, marginBottom: "1.2rem" }}>
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.74rem", color: "var(--ink-faint)" }}>{project.tags.join(" · ")}</span>
                  <a href={project.github || "#contact"} target={project.github ? "_blank" : undefined} rel={project.github ? "noopener noreferrer" : undefined} style={{ fontSize: "0.8rem", color: "var(--green)", fontWeight: 600, textDecoration: "none" }}>
                    {project.github && project.github !== "#" ? "GitHub →" : "Me contacter →"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
