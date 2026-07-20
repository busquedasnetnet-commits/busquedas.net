"use client";

/**
 * Fondo aurora corporativo (inspiración Meta About):
 * mesh gradient suave + drift lento. Sin partículas.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#f4f6fa]" />

      <div className="aurora-blob aurora-blob-a absolute -left-[20%] top-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-[#9ec9ff]/70 blur-[80px]" />
      <div className="aurora-blob aurora-blob-b absolute right-[-15%] top-[5%] h-[60vmax] w-[60vmax] rounded-full bg-[#b8e4f0]/80 blur-[90px]" />
      <div className="aurora-blob aurora-blob-c absolute bottom-[-20%] left-[20%] h-[65vmax] w-[65vmax] rounded-full bg-[#dce7ff]/90 blur-[100px]" />
      <div className="aurora-blob aurora-blob-d absolute left-[35%] top-[30%] h-[40vmax] w-[40vmax] rounded-full bg-[#e8f4ff]/60 blur-[70px]" />

      {/* Veladura para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
    </div>
  );
}
