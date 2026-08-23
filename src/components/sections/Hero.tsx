"use client";

import { motion } from "framer-motion";
import HeroVisual from "@/components/ui/HeroVisual";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Mouse,
} from "lucide-react";

const stars = [
  { left: "8%", top: "18%", size: 2 },
  { left: "18%", top: "72%", size: 1 },
  { left: "27%", top: "31%", size: 2 },
  { left: "38%", top: "14%", size: 1 },
  { left: "48%", top: "76%", size: 2 },
  { left: "58%", top: "24%", size: 1 },
  { left: "67%", top: "65%", size: 2 },
  { left: "77%", top: "18%", size: 1 },
  { left: "86%", top: "42%", size: 2 },
  { left: "94%", top: "72%", size: 1 },
  { left: "12%", top: "45%", size: 1 },
  { left: "73%", top: "83%", size: 1 },
];

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-[19px] w-[19px]"
  >
    <path d="M12.04 2C6.52 2 2.03 6.48 2.03 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.94 9.94 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.17 8.17 0 0 1 3.86 12c0-4.52 3.67-8.18 8.18-8.18A8.17 8.17 0 0 1 20.18 12c0 4.52-3.63 8.18-8.14 8.18Zm4.49-6.13c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.56.12-.17.25-.65.81-.8.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.02 2.59c.13.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 .01.77.01 1.73v20.54c0 .96.78 1.73 1.76 1.73h20.45c.97 0 1.76-.77 1.76-1.73V1.73C23.98.77 23.2 0 22.22 0Z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <HeroVisual />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Main purple glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[140px]
          "
        />

        {/* Left nebula */}
        <div
          className="
            absolute
            -left-40
            top-[15%]
            h-[500px]
            w-[700px]
            rotate-[-25deg]
            rounded-[50%]
            bg-purple-700/10
            blur-[100px]
          "
        />

        {/* Right nebula */}
        <div
          className="
            absolute
            -right-40
            top-[25%]
            h-[400px]
            w-[500px]
            rounded-full
            bg-fuchsia-600/10
            blur-[120px]
          "
        />

        {/* Stars */}
        {stars.map((star, index) => (
          <motion.span
            key={index}
            className="absolute bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size * 3}px`,
              height: `${star.size * 3}px`,
              clipPath:
                "polygon(50% 0%, 62% 35%, 100% 50%, 62% 65%, 50% 100%, 38% 65%, 0% 50%, 38% 35%)",
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + (index % 3),
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}

        {/* Bottom atmospheric glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[360px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            left-1/2
            h-[220px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-fuchsia-500/5
            blur-[90px]
          "
        />
      </div>

      {/* Social rail */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="
          fixed
          bottom-10
          left-6
          z-20
          hidden
          flex-col
          items-center
          gap-3
          lg:flex
        "
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/918237782210"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-zinc-300
            backdrop-blur
            transition
            hover:border-purple-400/40
            hover:bg-purple-500/10
            hover:text-white
          "
        >
          <WhatsAppIcon />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nikitapatel2295/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-sm
            font-semibold
            text-zinc-300
            backdrop-blur
            transition
            hover:border-purple-400/40
            hover:bg-purple-500/10
            hover:text-white
          "
        >
          in
        </a>

        {/* Email */}
        <a
          href="#contact"
          aria-label="Email"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-sm
            font-semibold
            text-zinc-300
            backdrop-blur
            transition
            hover:border-purple-400/40
            hover:bg-purple-500/10
            hover:text-white
          "
        >
          <Mail size={18} />
        </a>

        <div className="mt-2 h-16 w-px bg-gradient-to-b from-purple-400 to-transparent" />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-purple-300/90 sm:text-sm"
        >
          WordPress Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            text-5xl
            font-semibold
            leading-[0.95]
            tracking-[-0.04em]
            sm:text-7xl
            lg:text-8xl
          "
        >
          Creating

          <span
            className="
              block
              bg-gradient-to-r
              from-purple-300
              via-purple-500
              to-fuchsia-400
              bg-clip-text
              text-transparent
            "
          >
            what's next.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-7
            text-zinc-400
            sm:text-lg
            sm:leading-8
          "
        >
          Hi, I'm Nikita. I create fast, scalable, and beautiful web
          experiences with WordPress and modern web technologies—built with
          purpose, crafted for today, and ready for what's next.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-purple-600
              px-7
              py-3.5
              font-medium
              text-white
              shadow-[0_0_35px_rgba(139,92,246,0.25)]
              transition
              hover:bg-purple-500
              hover:shadow-[0_0_45px_rgba(139,92,246,0.4)]
            "
          >
            Explore my work

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-7
              py-3.5
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:border-purple-400/40
              hover:bg-purple-500/10
            "
          >
            Let's connect

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          text-zinc-400
          transition
          hover:text-purple-300
          sm:flex
        "
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/20">
          <Mouse size={14} />
        </div>

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll down
        </span>

        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}