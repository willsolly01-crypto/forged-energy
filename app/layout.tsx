import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forged-energy.vercel.app"),
  title: "FORGED — Caffeine Gummies | Stay Sharp",
  description:
    "40mg of clean caffeine per gummy. Zero sugar, no crash. FORGED Caffeine Gummies are built for late library nights and 8am labs. Join the launch waitlist.",
  openGraph: {
    title: "FORGED — Caffeine Gummies",
    description:
      "40mg of clean caffeine per gummy. Zero sugar, no crash, no cup, no queue.",
    images: ["/pouch-orange.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-white antialiased">
        {children}
      </body>
    </html>
  );
}
