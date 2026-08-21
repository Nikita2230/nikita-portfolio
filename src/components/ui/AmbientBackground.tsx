"use client";

import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "18%", size: 2 },
  { left: "18%", top: "72%", size: 1 },
  { left: "32%", top: "28%", size: 2 },
  { left: "47%", top: "12%", size: 1 },
  { left: "61%", top: "76%", size: 2 },
  { left: "74%", top: "34%", size: 1 },
  { left: "86%", top: "18%", size: 2 },
  { left: "92%", top: "68%", size: 1 },
  { left: "38%", top: "88%", size: 1 },
  { left: "12%", top: "42%", size: 1 },
];

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Purple glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[-15%]
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/10
          blur-[140px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="
          absolute
          right-[-15%]
          top-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-600/5
          blur-[120px]
        "
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}