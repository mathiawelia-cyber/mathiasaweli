"use client";

import { AnimateOnScroll, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwdjqgb", {
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
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mathias AWELI",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mathiawelia-cyber",
      href: personalInfo.github,
    },
    {
      icon: Download,
      label: "CV",
      value: "Télécharger le CV",
      href: "/CV_AWELI_Stage.pdf",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#111110] text-[#EDE9E1]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#4A8C5C] mb-3">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[#EDE9E1]">
            Travaillons ensemble
          </h2>
          <div className="w-12 h-0.5 bg-[#4A8C5C] mb-12" />
        </AnimateOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact links */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-[rgba(237,233,225,0.55)] leading-relaxed mb-6">
              N&apos;hésitez pas à me contacter pour discuter d&apos;opportunités de
              collaboration, de stages ou de projets liés à l&apos;analyse territoriale
              et la data science.
            </p>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(255,255,255,0.07)] hover:border-[#4A8C5C] hover:border-opacity-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(74,140,92,0.15)] flex items-center justify-center group-hover:bg-[#4A8C5C] transition-colors">
                  <link.icon
                    size={18}
                    className="text-[#4A8C5C] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-[rgba(237,233,225,0.55)]">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-[#EDE9E1]">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[rgba(237,233,225,0.55)] mb-1.5"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#161A17] text-[#EDE9E1] placeholder:text-[rgba(237,233,225,0.25)] focus:border-[#4A8C5C] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[rgba(237,233,225,0.55)] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#161A17] text-[#EDE9E1] placeholder:text-[rgba(237,233,225,0.25)] focus:border-[#4A8C5C] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs text-[rgba(237,233,225,0.55)] mb-1.5"
                >
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#161A17] text-[#EDE9E1] placeholder:text-[rgba(237,233,225,0.25)] focus:border-[#4A8C5C] focus:outline-none transition-colors"
                  placeholder="Objet du message"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-[rgba(237,233,225,0.55)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#161A17] text-[#EDE9E1] placeholder:text-[rgba(237,233,225,0.25)] focus:border-[#4A8C5C] focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-lg bg-[#4A8C5C] text-white hover:bg-[#6BB880] disabled:opacity-50 transition-colors"
              >
                {status === "sending" ? (
                  "Envoi en cours..."
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={16} /> Message envoyé !
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={16} /> Erreur, réessayez
                  </>
                ) : (
                  <>
                    <Send size={16} /> Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
