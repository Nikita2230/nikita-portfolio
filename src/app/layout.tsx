import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import {
  Manrope,
  Cormorant_Garamond,
} from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Nikita Patel | WordPress Developer",
    template: "%s | Nikita Patel",
  },
  description:
    "Nikita Patel is a WordPress Developer specializing in custom WordPress development, headless WordPress, REST APIs, and modern web technologies.",
  keywords: [
    "Nikita Patel",
    "WordPress Developer",
    "WordPress Development",
    "Custom WordPress",
    "Headless WordPress",
    "Next.js",
    "REST API",
  ],
  authors: [{ name: "Nikita Patel" }],
  creator: "Nikita Patel",
  openGraph: {
    title: "Nikita Patel | WordPress Developer",
    description:
      "WordPress Developer building fast, scalable and thoughtful digital experiences.",
    type: "website",
    siteName: "Nikita Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita Patel | WordPress Developer",
    description:
      "WordPress Developer building fast, scalable and thoughtful digital experiences.",
  },
};
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable}`}>{children}<Analytics/></body>
    </html>
  );
}