const basePath = process.env.NODE_ENV === "production" ? "/mathiasaweli" : "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

// Statistiques de visite (GoatCounter, sans cookies) : tableau de bord sur https://<code>.goatcounter.com
export const GOATCOUNTER_CODE = "mathiasaweli";

declare global {
  interface Window {
    goatcounter?: { count: (vars: { path: string; title?: string; event?: boolean }) => void };
  }
}

// Compte un téléchargement du CV comme un événement dans GoatCounter
export function trackCvDownload(cv: string) {
  window.goatcounter?.count({ path: `cv${cv}`, title: "Téléchargement du CV", event: true });
}
