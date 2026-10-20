"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MouseEvent } from "react";
import Reveal from "@/components/ui/Reveal";

const stars = [
  { left: "8%", top: "20%", size: 2 },
  { left: "17%", top: "62%", size: 1 },
  { left: "25%", top: "30%", size: 2 },
  { left: "35%", top: "15%", size: 1 },
  { left: "45%", top: "74%", size: 2 },
  { left: "56%", top: "22%", size: 1 },
  { left: "66%", top: "69%", size: 2 },
  { left: "76%", top: "17%", size: 1 },
  { left: "87%", top: "38%", size: 2 },
  { left: "93%", top: "70%", size: 1 },
  { left: "13%", top: "43%", size: 1 },
  { left: "79%", top: "82%", size: 1 },
];

export default function ContactSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const orbY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <Reveal>
      <section
        id="contact"
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden px-6 py-36"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
              h-[450px]
              w-[650px]
              rotate-[-25deg]
              rounded-[50%]
              bg-purple-700/[0.08]
              blur-[110px]
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
              bg-fuchsia-600/[0.08]
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
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Bottom atmosphere */}
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

        {/* Cursor glow */}
        <motion.div
          style={{
            x: orbX,
            y: orbY,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-40
            w-40
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/[0.07]
            blur-[55px]
          "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-purple-400/40" />

            <p className="text-xs uppercase tracking-[0.4em] text-purple-300/90">
              Let&apos;s work together
            </p>

            <span className="h-px w-8 bg-purple-400/40" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              mt-8
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Let&apos;s create

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
              what&apos;s next.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-8
              max-w-xl
              text-base
              leading-8
              text-zinc-400
            "
          >
            I&apos;m always open to interesting projects, creative collaborations,
            and opportunities to turn good ideas into meaningful digital
            experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            {/* Primary */}
            <a
              href="mailto:nikitabaraiya22@gmail.com"
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
              Get in touch

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Secondary */}
            <a
              href="https://drive.google.com/file/d/1ykMFBFcNMvBQ0KIxvMIXFARP59beCpCQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.06]
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
              View Resume

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Editorial closing detail */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              mt-14
              font-editorial-italic
              text-xl
              text-purple-200/55
              sm:text-2xl
            "
          >
            together, into what&apos;s next.
          </motion.p>
        </div>
      </section>
    </Reveal>
  );
}