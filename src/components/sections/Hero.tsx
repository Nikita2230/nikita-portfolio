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

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.8c.97 0 1.94.13 2.85.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.73.81 1.17 1.84 1.17 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.41 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
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
        <a
  href="https://github.com/Nikita2230"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300 backdrop-blur transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
>
  GH
</a>

<a
  href="#"
  aria-label="LinkedIn"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300 backdrop-blur transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
>
  in
</a>

<a
  href="#contact"
  aria-label="Email"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300 backdrop-blur transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
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
          className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-purple-300 sm:text-sm"
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
          Hi, I'm Nikita. I create fast, scalable, and beautiful web experiences with WordPress and modern web technologies—built with purpose, crafted for today, and ready for what's next.
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
          text-zinc-500
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