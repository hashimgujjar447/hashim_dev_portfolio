import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Hashim — Backend Engineer",
  description:
    "Backend-Strong Full-Stack Developer specializing in MERN + Django, real-time systems, and scalable SaaS architectures.",
  keywords: [
    "backend developer",
    "full-stack engineer",
    "Django",
    "React",
    "Node.js",
    "WebSocket",
    "real-time",
    "SaaS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
