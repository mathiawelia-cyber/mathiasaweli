"use client";

import { AnimateOnScroll } from "@/lib/motion";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Download, MapPin, Languages, Car } from "lucide-react";
import { personalInfo, strengths } from "@/data/portfolio";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--green)] mb-3">
            À propos
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-12 h-0.5 bg-[var(--green)] mb-10" />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Text */}
          <AnimateOnScroll>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
              Diplômé en économie appliquée et en planification du développement, je me
              spécialise dans l&apos;analyse des dynamiques territoriales à travers les outils
              statistiques, la data science et les systèmes d&apos;information géographique.
            </p>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-8">
              Mes expériences, de la DREAL Grand Est au Ministère de la Planification au Togo,
              m&apos;ont permis de développer une vision globale des enjeux d&apos;aménagement du
              territoire et de politiques publiques, en croisant approches quantitatives et
              qualitatives.
            </p>

            <blockquote className="border-l-2 border-[var(--green)] pl-4 text-[var(--ink-muted)] italic mb-8">
              &ldquo;Comprendre les territoires pour mieux les transformer.&rdquo;
            </blockquote>

            <a
              href="/CV_AWELI_Stage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--green)] text-white hover:bg-[var(--green-light)] transition-colors"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </AnimateOnScroll>

          {/* Info cards */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-4"
          >
            {/* Personal details */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)]"
            >
              <h3 className="text-sm font-semibold mb-3">Informations</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <MapPin size={15} className="text-[var(--green)] shrink-0" />
                  <span>Metz, France</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <Languages size={15} className="text-[var(--green)] shrink-0" />
                  <span>{personalInfo.languages.join(" · ")}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <Car size={15} className="text-[var(--green)] shrink-0" />
                  <span>{personalInfo.mobility}</span>
                </div>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)]"
            >
              <h3 className="text-sm font-semibold mb-3">Atouts</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-full border border-[var(--border-color)] text-[var(--ink-muted)] bg-[var(--surface2)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
