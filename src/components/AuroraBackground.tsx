"use client";

/**
 * Fondo aurora corporativo — CSS puro, sin dependencias de utilidades
 * Tailwind arbitrarias (más fiable en build de Vercel).
 */
export default function AuroraBackground() {
  return (
    <div className="aurora-root" aria-hidden="true">
      <div className="aurora-base" />
      <div className="aurora-mesh" />
      <div className="aurora-blob aurora-blob-a" />
      <div className="aurora-blob aurora-blob-b" />
      <div className="aurora-blob aurora-blob-c" />
      <div className="aurora-veil" />
    </div>
  );
}
