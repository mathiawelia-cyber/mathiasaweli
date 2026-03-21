"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-[var(--surface2)]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--green)] mb-3">
            Parcours
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Expériences professionnelles
          </h2>
          <div className="w-12 h-0.5 bg-[var(--green)] mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--border-color)] hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((xp) => (
              <motion.div
                key={xp.id}
                variants={fadeUp}
                className="relative flex gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border-2 border-[var(--border-color)] bg-[var(--surface)] items-center justify-center z-10 group-hover:border-[var(--green)] transition-colors">
                  <Briefcase
                    size={16}
                    className={
                      xp.status === "active"
                        ? "text-[var(--green)]"
                        : "text-[var(--ink-faint)]"
                    }
                  />
                </div>

                {/* Card */}
                <div className="flex-1 p-5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--green)] hover:border-opacity-30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">{xp.role}</h3>
                      <p className="text-[var(--ink-muted)] text-sm">
                        {xp.company} · {xp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--ink-faint)]">
                        {xp.period}
                      </span>
                      {xp.status === "active" && (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--green-glow)] text-[var(--green)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                          En cours
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--ink-muted)] mb-3">
                    {xp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {xp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface2)] text-[var(--ink-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
