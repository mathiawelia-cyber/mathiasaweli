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
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--green)] mb-3">
            Formation
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Parcours académique
          </h2>
          <div className="w-12 h-0.5 bg-[var(--green)] mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-12"
        >
          {/* Education + Certifications */}
          <div className="space-y-8">
            {/* Diplômes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-[var(--green)]" />
                <h3 className="font-semibold">Diplômes</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:border-[var(--green)] hover:border-opacity-30 transition-colors"
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
                <Award size={18} className="text-[var(--gold)]" />
                <h3 className="font-semibold">Certifications AFD</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] flex items-start gap-3"
                  >
                    <Award
                      size={16}
                      className="text-[var(--gold)] shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-[var(--ink-muted)]">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Références */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UserCheck size={18} className="text-[var(--green)]" />
              <h3 className="font-semibold">Références</h3>
            </div>
            <div className="space-y-3">
              {references.map((ref, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:border-[var(--green)] hover:border-opacity-30 transition-colors"
                >
                  <h4 className="font-medium text-sm">{ref.name}</h4>
                  <p className="text-xs text-[var(--ink-muted)] mt-1">
                    {ref.role}
                  </p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-xs text-[var(--green)] hover:underline mt-1 inline-block"
                  >
                    {ref.email}
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
