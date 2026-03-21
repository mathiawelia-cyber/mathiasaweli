"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--ink-muted)]">
          &copy; {new Date().getFullYear()} {personalInfo.fullName}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--ink-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
