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
    <section id="experience" className="py-24 relative">
      {/* Subtle orb */}
      <div
        className="absolute top-[50%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--neon-purple)] mb-3">
            Parcours
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Expériences<span className="text-gradient"> professionnelles</span>
          </h2>
          <div className="section-line mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline line with gradient */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px hidden sm:block"
            style={{
              background: "linear-gradient(180deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink), transparent)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((xp, i) => (
              <motion.div key={xp.id} variants={fadeUp} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full glass items-center justify-center z-10 group-hover:shadow-[var(--glow-cyan)] transition-all duration-500">
                  <Briefcase
                    size={16}
                    className={
                      xp.status === "active"
                        ? "text-[var(--neon-cyan)]"
                        : "text-[var(--ink-faint)]"
                    }
                  />
                </div>

                {/* Card */}
                <div className="flex-1 glass p-5 rounded-xl neon-border transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">{xp.role}</h3>
                      <p className="text-[var(--ink-muted)] text-sm">
                        {xp.company} · {xp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--ink-faint)]">{xp.period}</span>
                      {xp.status === "active" && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-[rgba(0,240,255,0.08)] text-[var(--neon-cyan)] border border-[rgba(0,240,255,0.2)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
                          En cours
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--ink-muted)] mb-3">{xp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {xp.tags.map((tag, j) => (
                      <span key={tag} className={j % 2 === 0 ? "pill-neon" : "pill-purple"}>
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
