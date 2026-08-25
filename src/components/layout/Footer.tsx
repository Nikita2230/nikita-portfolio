"use client";

import { ArrowUp } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-[18px] w-[18px]"
  >
    <path d="M12.04 2C6.52 2 2.03 6.48 2.03 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.94 9.94 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.17 8.17 0 0 1 3.86 12c0-4.52 3.67-8.18 8.18-8.18A8.17 8.17 0 0 1 20.18 12c0 4.52-3.63 8.18-8.14 8.18Zm4.49-6.13c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.56.12-.17.25-.65.81-.8.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.02 2.59c.13.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-[18px] w-[18px]"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 .01.77.01 1.73v20.54c0 .96.78 1.73 1.76 1.73h20.45c.97 0 1.76-.77 1.76-1.73V1.73C23.98.77 23.2 0 22.22 0Z" />
  </svg>
);

export default function Footer() {
  const socialButton =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white";

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#08060f]
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          gap-4
          px-6
          py-6
        "
      >
        {/* Copyright */}
        <p className="text-xs text-white/50 sm:text-sm">
          © 2026 Nikita Patel
        </p>

        {/* Subtle theme detail */}
        <p
          className="
            hidden
            font-editorial-italic
            text-base
            text-purple-200/40
            sm:block
          "
        >
          build · learn · grow
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918237782210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className={socialButton}
          >
            <WhatsAppIcon />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nikitapatel2295/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className={socialButton}
          >
            <LinkedInIcon />
          </a>

          {/* Back to top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className={socialButton}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}