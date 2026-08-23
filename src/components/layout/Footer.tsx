"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-white/40">
        <p>© 2026 Nikita Patel</p>

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/918237782210"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/nikitapatel2295/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}