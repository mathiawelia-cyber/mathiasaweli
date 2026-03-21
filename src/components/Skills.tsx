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

const neonColors = [
  { from: "var(--neon-cyan)", to: "var(--neon-blue)", glow: "var(--glow-cyan)" },
  { from: "var(--neon-purple)", to: "var(--neon-pink)", glow: "var(--glow-purple)" },
  { from: "var(--neon-pink)", to: "var(--neon-purple)", glow: "var(--glow-pink)" },
  { from: "var(--neon-cyan)", to: "var(--neon-purple)", glow: "var(--glow-cyan)" },
  { from: "var(--neon-purple)", to: "var(--neon-cyan)", glow: "var(--glow-purple)" },
  { from: "var(--neon-pink)", to: "var(--neon-cyan)", glow: "var(--glow-pink)" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--neon-pink)] mb-3">
            Compétences
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Savoir-faire<span className="text-gradient"> technique</span>
          </h2>
          <div className="section-line mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            const color = neonColors[i % neonColors.length];
            return (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass p-5 rounded-xl neon-border group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-400 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${color.from}20, ${color.to}10)`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: color.from }}
                    className="transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={
                        skill.highlight.includes(item)
                          ? "pill-neon font-medium"
                          : "px-2.5 py-1 text-xs rounded-md bg-[var(--surface2)] text-[var(--ink-muted)] border border-[var(--border-color)]"
                      }
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
