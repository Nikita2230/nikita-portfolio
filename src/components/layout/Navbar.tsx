"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-[#08060f]/75
          px-5
          py-3
          shadow-[0_8px_40px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Back to home"
          className="
            text-2xl
            font-bold
            tracking-[-0.08em]
            text-white
          "
        >
          NP
          <span className="text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                text-sm
                text-zinc-400
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-full
            bg-purple-600
            px-5
            py-2
            text-sm
            font-medium
            text-white
            shadow-[0_0_25px_rgba(139,92,246,0.25)]
            transition-all
            duration-300
            hover:bg-purple-500
            hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]
            md:block
          "
        >
          Let&apos;s talk
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-zinc-300
            transition
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-white
            md:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="
            mx-auto
            mt-2
            max-w-6xl
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/10
            bg-[#08060f]/95
            p-3
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-zinc-300
                  transition-all
                  duration-200
                  hover:bg-purple-500/[0.08]
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-xl
                bg-purple-600
                px-4
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-purple-500
              "
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}