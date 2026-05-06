"use client";
import { useLanguage } from "@/lib/language-provider";
import { fr } from "./fr";
import { en } from "./en";

const translations = { fr, en } as const;

export function useTranslation() {
  const { lang } = useLanguage();
  return translations[lang];
}

export type Translations = typeof fr;
