"use client";

import { AnimateOnScroll } from "@/lib/motion";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Download, MapPin, Languages, Car, Quote } from "lucide-react";
import { personalInfo, strengths } from "@/data/portfolio";
import { assetPath } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--neon-cyan)] mb-3">
            À propos
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Qui suis-je<span className="text-gradient"> ?</span>
          </h2>
          <div className="section-line mb-10" />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <AnimateOnScroll>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
              Passionné par le développement local, je dispose de compétences solides dans la collecte,
              le traitement et l&apos;analyse de données, l&apos;évaluation de politiques publiques
              et la coordination de projets de développement.
            </p>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-8">
              De la DREAL Grand Est au Ministère de la Planification au Togo, en passant par
              la CPES, mes expériences m&apos;ont permis d&apos;animer des ateliers collaboratifs,
              de conduire des enquêtes terrain et de contribuer à l&apos;accompagnement des
              collectivités dans leurs démarches de planification et d&apos;attractivité territoriale.
            </p>

            <div className="glass p-5 rounded-xl mb-8 relative overflow-hidden">
              <Quote size={28} className="text-[var(--neon-purple)] opacity-30 absolute top-3 right-3" />
              <p className="text-[var(--ink-muted)] italic relative z-10">
                &ldquo;Comprendre les territoires pour mieux les transformer.&rdquo;
              </p>
            </div>

            <a
              href={assetPath("/CV_AWELI_Stage.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold btn-neon"
            >
              <span className="flex items-center gap-2">
                <Download size={16} />
                Télécharger mon CV
              </span>
            </a>
          </AnimateOnScroll>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="glass p-5 rounded-xl neon-border">
              <h3 className="text-sm font-semibold mb-3 text-gradient-cyan">Informations</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <MapPin size={15} className="text-[var(--neon-cyan)] shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <Languages size={15} className="text-[var(--neon-purple)] shrink-0" />
                  <span>{personalInfo.languages.join(" · ")}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                  <Car size={15} className="text-[var(--neon-pink)] shrink-0" />
                  <span>{personalInfo.mobility}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass p-5 rounded-xl neon-border">
              <h3 className="text-sm font-semibold mb-3 text-gradient">Atouts</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s, i) => (
                  <span
                    key={s}
                    className={i % 2 === 0 ? "pill-neon" : "pill-purple"}
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
