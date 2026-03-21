"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-xs font-medium text-[var(--ink-muted)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
              Disponible pour un stage — Avr–Août 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Économiste &{" "}
              <span className="text-[var(--green)]">Analyste</span>
              <br />
              Territorial
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--ink-muted)] leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--green)] text-white hover:bg-[var(--green-light)] transition-colors"
              >
                Voir mes projets
                <ArrowDown size={16} />
              </a>
              <a
                href="/CV_AWELI_Stage.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-[var(--border-color)] hover:bg-[var(--surface2)] transition-colors"
              >
                <Download size={16} />
                Télécharger CV
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-[var(--border-color)] hover:bg-[var(--surface2)] transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--green)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--ink-muted)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="w-72 h-80 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-2xl">
              <Image
                src="/Photo_de_profil_AWELI.png"
                alt="Mathias AWELI"
                width={288}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 left-4 w-72 h-80 rounded-2xl border border-[var(--green)] opacity-20" />
            <div className="absolute -z-10 top-8 left-8 w-72 h-80 rounded-2xl bg-[var(--green-glow)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
