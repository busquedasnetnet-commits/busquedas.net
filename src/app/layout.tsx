import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "busquedas.net — Ingeniería de Datos & Software de Alto Rendimiento",
  description:
    "Boutique de ingeniería de datos y software en busquedas.net. Infraestructuras robustas, web scraping, algoritmos con IA y aplicaciones escalables. 25 años de trayectoria.",
  metadataBase: new URL("https://busquedas.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
