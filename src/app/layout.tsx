import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}