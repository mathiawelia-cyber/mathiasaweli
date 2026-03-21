"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Award, UserCheck } from "lucide-react";
import { education, certifications, references } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--neon-purple)] mb-3">
            Formation
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Parcours<span className="text-gradient"> académique</span>
          </h2>
          <div className="section-line mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-12"
        >
          <div className="space-y-8">
            {/* Diplômes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-[var(--neon-cyan)]" />
                <h3 className="font-semibold text-gradient-cyan">Diplômes</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="glass p-4 rounded-xl neon-border"
                  >
                    <h4 className="font-medium text-sm">{edu.degree}</h4>
                    <p className="text-xs text-[var(--ink-muted)] mt-1">
                      {edu.school} · {edu.location}
                      {edu.period && ` · ${edu.period}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-[var(--neon-purple)]" />
                <h3 className="font-semibold text-gradient">Certifications AFD</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="glass p-4 rounded-xl flex items-start gap-3"
                  >
                    <Award size={16} className="text-[var(--neon-purple)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--ink-muted)]">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Références */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UserCheck size={18} className="text-[var(--neon-pink)]" />
              <h3 className="font-semibold" style={{
                background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Références</h3>
            </div>
            <div className="space-y-3">
              {references.map((refItem, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass p-4 rounded-xl neon-border"
                >
                  <h4 className="font-medium text-sm">{refItem.name}</h4>
                  <p className="text-xs text-[var(--ink-muted)] mt-1">{refItem.role}</p>
                  <a
                    href={`mailto:${refItem.email}`}
                    className="text-xs text-[var(--neon-cyan)] hover:underline mt-1 inline-block"
                  >
                    {refItem.email}
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
