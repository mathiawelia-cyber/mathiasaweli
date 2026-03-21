"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--ink-muted)]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gradient font-medium">{personalInfo.fullName}</span>
          . Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "var(--neon-cyan)" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "var(--neon-blue)" },
            { icon: Github, href: personalInfo.github, label: "GitHub", color: "var(--neon-purple)" },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-[var(--ink-muted)] hover:text-[var(--foreground)] transition-all duration-300"
              style={{ ["--hover-color" as string]: color }}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
