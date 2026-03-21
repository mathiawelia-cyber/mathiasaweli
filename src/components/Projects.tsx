"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-[var(--surface2)]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--green)] mb-3">
            Réalisations
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Projets clés
          </h2>
          <div className="w-12 h-0.5 bg-[var(--green)] mb-12" />
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
                className="grid md:grid-cols-[1fr_1.2fr] gap-6 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] hover:shadow-xl transition-shadow duration-300 group"
              >
                {project.image && (
                  <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface2)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={14} className="text-[var(--gold)]" />
                    <span className="text-xs font-medium text-[var(--gold)]">
                      Projet phare
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-[var(--green-glow)] text-[var(--green)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-[var(--border-color)] hover:bg-[var(--surface2)] transition-colors"
                      >
                        <Github size={14} /> Code source
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--green)] text-white hover:bg-[var(--green-light)] transition-colors"
                      >
                        <ExternalLink size={14} /> Démo live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Other projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--green)] hover:border-opacity-30 transition-all duration-300 group"
                >
                  {project.image && (
                    <div className="rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--surface2)] mb-4 h-40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface2)] text-[var(--ink-muted)]"
                      >
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
