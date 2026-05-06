"use client";
import { useTranslation } from "@/i18n";

export default function Footer() {
  const t = useTranslation();
  return (
    <footer className="footer-section" style={{ textAlign: "center", padding: "1.75rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.22)" }}>
      © 2026 · <span style={{ color: "var(--green-l)" }}>{t.footer.text}</span>
    </footer>
  );
}
