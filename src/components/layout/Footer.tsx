"use client";

import { ArrowUp } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "Email",
    href: "mailto:your-email@example.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-white/40">
    <p>© 2026 Nikita Patel</p>

    <div className="flex items-center gap-6">
      <a
        href="https://github.com/Nikita2230"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-white"
      >
        GitHub
      </a>

      <a
        href="#contact"
        className="transition-colors hover:text-white"
      >
        Contact
      </a>

      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-white/30 hover:text-white"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  </div>
</footer>
  );
}