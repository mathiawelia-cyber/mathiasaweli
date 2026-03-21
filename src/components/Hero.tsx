"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Local orbs for hero */}
      <div
        className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-[var(--neon-cyan)] mb-6"
            >
              <Sparkles size={14} className="text-[var(--neon-purple)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
              Disponible pour un stage — Avr–Août 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-gradient">Économiste</span> &{" "}
              <br />
              <span className="text-gradient-cyan">Analyste</span>{" "}
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold btn-neon"
              >
                <span className="flex items-center gap-2">
                  Voir mes projets
                  <ArrowDown size={16} />
                </span>
              </a>
              <a
                href={assetPath("/CV_AWELI_Stage.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium btn-ghost-neon"
              >
                <Download size={16} />
                Télécharger CV
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium btn-ghost-neon"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats with neon glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8"
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={stat.label} className="relative group">
                  <div
                    className="font-[family-name:var(--font-heading)] text-3xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i === 0 ? "var(--neon-cyan)" : i === 1 ? "var(--neon-purple)" : "var(--neon-pink)"
                      }, ${
                        i === 0 ? "var(--neon-blue)" : i === 1 ? "var(--neon-pink)" : "var(--neon-purple)"
                      })`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--ink-muted)] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo with neon border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden group">
              {/* Neon glow border */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
                }}
              />
              <div className="absolute inset-[2px] rounded-[14px] overflow-hidden bg-[var(--background)]">
                <Image
                  src={assetPath("/Photo_de_profil_AWELI.png")}
                  alt="Mathias AWELI"
                  width={288}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            {/* Glow behind photo */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-10"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
