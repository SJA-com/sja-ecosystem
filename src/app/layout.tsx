import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SJA | Empowering Innovation Across Industries",
  description:
    "SJA is a multi-industry conglomerate founded by Syeda Juveria Afreen, driving innovation across robotics, healthcare, education, technology, finance, and more.",
  keywords: [
    "SJA",
    "Syeda Juveria Afreen",
    "SJA Robotics",
    "SJA Hospitals",
    "SJA Education",
    "SJA Tech",
    "sja.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
