const basePath = process.env.NODE_ENV === "production" ? "/mathiasaweli" : "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
