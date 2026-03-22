"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" style={{ background: "var(--bg)" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <p className="eyebrow">02 — Parcours professionnel</p>
          <div className="divider mb-4" />
          <h2 className="sec-title mb-12">Exp&eacute;riences</h2>
        </AnimateOnScroll>

        {/* Experience list */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {experiences.map((xp) => (
            <motion.div
              key={xp.id}
              variants={fadeUp}
              className="grid gap-10 py-10 border-b border-[var(--border)]"
              style={{ gridTemplateColumns: "170px 1fr" }}
            >
              {/* Left column: date + status */}
              <div>
                <p className="xp-date">{xp.period}</p>
                <span
                  className={`xp-status ${
                    (xp.status as string) === "active" ? "s-active" : "s-done"
                  }`}
                >
                  {(xp.status as string) === "active" ? "En cours" : "Termin\u00e9"}
                </span>
              </div>

              {/* Right column */}
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                  }}
                >
                  {xp.role}
                </h3>

                <p
                  className="mb-1"
                  style={{ color: "var(--green)", fontSize: "0.83rem" }}
                >
                  {xp.company} &middot; {xp.location}
                </p>

                {xp.project && (
                  <p
                    className="italic mb-3"
                    style={{ color: "var(--ink-faint)", fontSize: "0.85rem" }}
                  >
                    {xp.project}
                  </p>
                )}

                {/* Task list */}
                {(xp as { tasks?: string[] }).tasks && (
                  <ul className="mb-3 space-y-1" style={{ fontSize: "0.85rem", color: "var(--ink-muted)" }}>
                    {((xp as { tasks?: string[] }).tasks as string[]).map(
                      (task, idx) => (
                        <li key={idx}>
                          <span style={{ color: "var(--green)", marginRight: "0.4rem" }}>&rarr;</span>
                          {task}
                        </li>
                      )
                    )}
                  </ul>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {xp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
