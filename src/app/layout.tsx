import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-provider";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathias E. AWELI — Économiste & Analyste Territorial",
  description:
    "Portfolio de Ewakina Mathias AWELI, économiste et analyste territorial. Expertise en statistiques, SIG, data science et développement territorial.",
  keywords: [
    "économiste",
    "analyste territorial",
    "data science",
    "SIG",
    "QGIS",
    "statistiques",
    "Mathias AWELI",
  ],
  authors: [{ name: "Ewakina Mathias AWELI" }],
  openGraph: {
    title: "Mathias E. AWELI — Économiste & Analyste Territorial",
    description:
      "Portfolio de Ewakina Mathias AWELI. Expertise en statistiques, SIG et data science.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias E. AWELI — Économiste & Analyste Territorial",
    description:
      "Portfolio de Ewakina Mathias AWELI. Expertise en statistiques, SIG et data science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        {/* Sans JavaScript (ex. aperçu iPhone depuis WhatsApp), les animations au défilement ne se lancent pas : on affiche tout */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"]{opacity:1!important}[style*="transform:translate"],[style*="transform:scale"]{transform:none!important}</style>`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
