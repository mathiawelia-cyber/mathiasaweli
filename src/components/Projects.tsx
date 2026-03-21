"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Star, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      {/* Orb */}
      <div
        className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--neon-cyan)] mb-3">
            Réalisations
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Projets<span className="text-gradient"> clés</span>
          </h2>
          <div className="section-line mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-6"
        >
          {/* Featured project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="relative grid md:grid-cols-[1fr_1.2fr] gap-6 p-6 rounded-2xl glass group overflow-hidden"
              >
                {/* Gradient border */}
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 -z-10"
                  style={{
                    background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-[var(--background)] -z-[5]" />

                {project.image && (
                  <div className="rounded-xl overflow-hidden border border-[var(--border-color)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-[var(--neon-purple)]" />
                    <span className="text-xs font-semibold text-gradient">Projet phare</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill-neon font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium btn-ghost-neon"
                      >
                        <Github size={14} /> Code source
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold btn-neon"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={14} /> Démo live
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass p-5 rounded-xl neon-border group cursor-default"
                >
                  {project.image && (
                    <div className="rounded-lg overflow-hidden border border-[var(--border-color)] mb-4 h-40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className={i % 2 === 0 ? "pill-neon" : "pill-purple"}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
