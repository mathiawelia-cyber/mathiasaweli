"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-provider";
import { useTranslation } from "@/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useTranslation();

  useEffect(() => setMounted(true), []);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    t.nav.links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t.nav.links]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-heading), 'Outfit', sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            Mathias E. AWELI
          </a>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {t.nav.links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  position: "relative",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.85rem",
                  fontWeight: 450,
                  color: activeSection === href ? "var(--green)" : "var(--ink-muted)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                  borderRadius: 6,
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== href) e.currentTarget.style.color = "var(--green)";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== href) e.currentTarget.style.color = "var(--ink-muted)";
                }}
              >
                {label}
                {activeSection === href && (
                  <motion.span
                    layoutId="activeNav"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 2,
                      borderRadius: 1,
                      background: "var(--green)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Language toggle — FR | EN */}
            {mounted && (
              <div
                style={{
                  display: "flex",
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1.5px solid var(--border)",
                }}
              >
                <button
                  onClick={() => setLang("fr")}
                  style={{
                    padding: "0.3rem 0.55rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    fontFamily: "var(--font-body)",
                    background: lang === "fr" ? "var(--green)" : "transparent",
                    color: lang === "fr" ? "#fff" : "var(--ink-muted)",
                  }}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en")}
                  style={{
                    padding: "0.3rem 0.55rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    border: "none",
                    borderLeft: "1px solid var(--border)",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    fontFamily: "var(--font-body)",
                    background: lang === "en" ? "var(--green)" : "transparent",
                    color: lang === "en" ? "#fff" : "var(--ink-muted)",
                  }}
                >
                  EN
                </button>
              </div>
            )}

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="theme-toggle-btn"
                aria-label={t.nav.themeLabel}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            )}

            {/* CTA */}
            <a
              href="mailto:mathiasawli@gmail.com"
              className="nav-cta nav-cta-desktop"
            >
              {t.nav.cta}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              aria-label={t.nav.menuLabel}
              style={{
                display: "none",
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "var(--surface2)",
                color: "var(--ink-muted)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                transition: "border-color 0.2s",
              }}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 40,
              background: "var(--nav-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: 4 }}>
              {t.nav.links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "color 0.25s, background 0.25s",
                    color: activeSection === href ? "var(--green)" : "var(--ink-muted)",
                    background: activeSection === href ? "var(--green-glow)" : "transparent",
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:mathiasawli@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="nav-cta"
                style={{ marginTop: 8, textAlign: "center" }}
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style jsx global>{`
        .nav-links-desktop,
        .nav-cta-desktop {
          display: flex;
        }
        .nav-hamburger {
          display: none !important;
        }
        @media (max-width: 900px) {
          .nav-links-desktop,
          .nav-cta-desktop {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
