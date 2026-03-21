"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  BarChart3,
  Database,
  Map,
  FileSpreadsheet,
  BookOpen,
  PenTool,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Database,
  Map,
  FileSpreadsheet,
  BookOpen,
  PenTool,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--green)] mb-3">
            Compétences
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Savoir-faire technique
          </h2>
          <div className="w-12 h-0.5 bg-[var(--green)] mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--green)] hover:border-opacity-30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--green-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--green)] transition-colors">
                  <Icon
                    size={20}
                    className="text-[var(--green)] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                        skill.highlight.includes(item)
                          ? "bg-[var(--green-glow)] text-[var(--green)] font-medium"
                          : "bg-[var(--surface2)] text-[var(--ink-muted)]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
