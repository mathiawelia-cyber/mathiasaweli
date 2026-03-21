"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
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

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-xl shadow-[0_1px_0_var(--border-color)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight"
          >
            Mathias<span className="text-[var(--green)]">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === href
                    ? "text-[var(--green)] bg-[var(--green-glow)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-color)] hover:bg-[var(--surface2)] transition-colors"
                aria-label="Changer de thème"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-[var(--green)] text-white hover:bg-[var(--green-light)] transition-colors"
            >
              Me contacter
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-color)] hover:bg-[var(--surface2)] transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border-color)] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                    activeSection === href
                      ? "text-[var(--green)] bg-[var(--green-glow)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface2)]"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium text-center rounded-lg bg-[var(--green)] text-white hover:bg-[var(--green-light)] transition-colors"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
