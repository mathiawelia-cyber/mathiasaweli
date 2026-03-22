"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: 64,
        background: "var(--bg)",
      }}
    >
      {/* Decorative vertical lines */}
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          right: "15%",
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, var(--border), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          right: "30%",
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, var(--border), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div
          className="hero-grid items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "3rem",
          }}
        >
          {/* Left side */}
          <div>
            {/* Pill */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  border: "1px solid var(--border)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--ink-muted)",
                }}
              >
                <span
                  className="animate-pulse"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--green)",
                    display: "inline-block",
                  }}
                />
                Disponible &middot; Metz, France &middot; Avril 2026
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fadeUp(0.2)}
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)",
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "var(--ink-faint)" }}>Économiste</span>
              <br />
              <span style={{ color: "var(--ink)" }}>&amp; Analyste</span>
              <br />
              <span
                style={{
                  color: "var(--green)",
                  fontStyle: "italic",
                }}
              >
                Territorial
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.35)}
              className="mb-8"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                maxWidth: "32rem",
              }}
            >
              <strong style={{ color: "var(--ink)" }}>
                {personalInfo.fullName}
              </strong>{" "}
              — {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md transition-colors"
              >
                Voir mes projets &rarr;
              </a>
              <a
                href="#contact"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors"
              >
                Me contacter
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors"
              >
                LinkedIn &#8599;
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.6)} className="flex gap-10">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-heading), 'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      color: "var(--green)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-1"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--ink-muted)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div
              style={{
                borderRadius: 8,
                overflow: "hidden",
                aspectRatio: "3/4",
                boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={assetPath("/Photo_de_profil_AWELI.png")}
                alt={personalInfo.name}
                width={340}
                height={453}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive style for hero-grid */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
