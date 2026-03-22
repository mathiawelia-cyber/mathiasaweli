"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { assetPath } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const contactRows = [
  { icon: "✉️", label: "Email", value: "mathiasawli@gmail.com", href: "mailto:mathiasawli@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "@mathiasAWELI", href: "https://www.linkedin.com/in/mathias-aweli/" },
  { icon: "🐙", label: "GitHub", value: "mathiawelia-cyber", href: "https://github.com/mathiawelia-cyber" },
  { icon: "📄", label: "Curriculum Vitae", value: "Télécharger mon CV (PDF)", href: "__CV__" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mkoqankl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.88rem",
    borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  };

  return (
    <section id="contact" className="contact-section" style={{ padding: "clamp(4rem,8vw,6.5rem) 0" }}>
      <div className="max-w-[1080px] mx-auto px-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 gap-16 contact-grid"
          style={{ alignItems: "start" }}
        >
          {/* Left side — info + contact rows */}
          <motion.div variants={fadeUp}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--green-l)", marginBottom: "0.5rem" }}>
              06 — Contact
            </p>
            <div style={{ width: 36, height: 2, background: "var(--green-l)", opacity: 0.5, marginBottom: "1.5rem" }} />
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff" }}>
              Travaillons<br /><em style={{ color: "var(--green-l)", fontStyle: "italic" }}>ensemble.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.93rem", lineHeight: 1.85, marginBottom: "2rem" }}>
              Ouvert aux opportunités professionnelles, collaborations académiques et échanges autour
              de l&apos;économie territoriale, du diagnostic territorial et de l&apos;analyse de données
              au service des politiques publiques.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href === "__CV__" ? assetPath("/CV_AWELI_Stage.pdf") : row.href}
                  target={row.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={row.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  download={row.href === "__CV__" ? true : undefined}
                  className="c-row"
                >
                  <span style={{ fontSize: "1.15rem", flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.1rem" }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                      {row.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side — Contact form */}
          <motion.div variants={fadeUp}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
                Envoyez-moi un message
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 4, display: "block" }}>
                      Nom complet
                    </label>
                    <input type="text" name="name" required placeholder="Votre nom" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 4, display: "block" }}>
                      Email
                    </label>
                    <input type="email" name="email" required placeholder="votre@email.com" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 4, display: "block" }}>
                    Objet
                  </label>
                  <input type="text" name="subject" required placeholder="Objet du message" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 4, display: "block" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Votre message..."
                    style={{ ...inputStyle, resize: "none" as const }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: 4,
                    border: "none",
                    background: status === "sent" ? "var(--green)" : "var(--green-l)",
                    color: "#fff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "background 0.2s, transform 0.2s",
                    fontFamily: "var(--font-body)",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                >
                  {status === "sending"
                    ? "Envoi en cours..."
                    : status === "sent"
                    ? "✓ Message envoyé !"
                    : status === "error"
                    ? "Erreur, réessayez"
                    : "Envoyer le message →"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
