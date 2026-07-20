"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
};

/**
 * Fondo aurora animado por Canvas (funciona igual en localhost y Vercel).
 * No depende de blur CSS ni de utilidades Tailwind.
 */
export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let blobs: Blob[] = [];

    const colors = [
      "rgba(80, 150, 255, 0.55)",
      "rgba(56, 189, 248, 0.5)",
      "rgba(147, 197, 253, 0.55)",
      "rgba(125, 211, 252, 0.45)",
      "rgba(96, 165, 250, 0.5)",
    ];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (blobs.length === 0) {
        blobs = colors.map((color, i) => ({
          x: (width * (i + 1)) / (colors.length + 1),
          y: height * (0.25 + (i % 3) * 0.2),
          r: Math.max(width, height) * (0.28 + (i % 3) * 0.06),
          vx: (0.35 + i * 0.08) * (i % 2 === 0 ? 1 : -1),
          vy: (0.25 + i * 0.05) * (i % 2 === 0 ? -1 : 1),
          color,
        }));
      }
    };

    const paint = () => {
      // Base
      ctx.fillStyle = "#e8eef8";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";
      for (const blob of blobs) {
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.r,
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(232, 238, 248, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft white wash for text readability
      const wash = ctx.createLinearGradient(0, 0, 0, height);
      wash.addColorStop(0, "rgba(255,255,255,0.2)");
      wash.addColorStop(0.45, "rgba(255,255,255,0)");
      wash.addColorStop(1, "rgba(255,255,255,0.28)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = () => {
      for (const blob of blobs) {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.r * 0.2 || blob.x > width + blob.r * 0.2) {
          blob.vx *= -1;
        }
        if (blob.y < -blob.r * 0.2 || blob.y > height + blob.r * 0.2) {
          blob.vy *= -1;
        }
      }
      paint();
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      paint();
    } else {
      raf = window.requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          background: "#e8eef8",
        }}
      />
    </div>
  );
}
