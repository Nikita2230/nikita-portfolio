"use client";

import { motion } from "framer-motion";

const particles = [
  { x: "18%", y: "35%", size: 3, delay: 0 },
  { x: "28%", y: "62%", size: 2, delay: 0.8 },
  { x: "42%", y: "24%", size: 2, delay: 1.4 },
  { x: "57%", y: "68%", size: 3, delay: 0.4 },
  { x: "69%", y: "38%", size: 2, delay: 1.1 },
  { x: "78%", y: "58%", size: 2, delay: 1.8 },
];

export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[520px] w-[900px] -translate-x-1/2">
      {/* Main atmosphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[100px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[220px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-fuchsia-400/10"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main glass orb */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[210px]
          w-[210px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/10
          bg-gradient-to-br
          from-purple-400/10
          via-fuchsia-500/5
          to-transparent
          shadow-[0_0_100px_rgba(168,85,247,0.15)]
          backdrop-blur-[2px]
        "
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-[20%] rounded-full bg-purple-500/10 blur-[45px]" />

        {/* Highlight */}
        <div className="absolute left-[22%] top-[18%] h-[45px] w-[45px] rounded-full bg-white/10 blur-[18px]" />
      </motion.div>

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-purple-200"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + index * 0.5,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}