import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moadh Agoubi — Développeur Full-Stack",
  description:
    "Développeur full-stack : e-commerce, intégrations (HubSpot, Odoo, Google Workspace) et automatisation. Parcours, projets et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
