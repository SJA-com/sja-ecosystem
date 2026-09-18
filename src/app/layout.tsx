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
  title: "SJA Inc. | 3 Companies. Real Products. Global Reach.",
  description:
    "SJA Inc. is founded by Syeda Juveria Afreen \u2014 home to SJA Pathway (AI career platform), SJA Verse (browser game studio), and SJA Robotics (coming soon).",
  keywords: [
    "SJA",
    "SJA Inc",
    "Syeda Juveria Afreen",
    "SJA Pathway",
    "SJA Verse",
    "SJA Robotics",
    "sjapathway.com",
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
