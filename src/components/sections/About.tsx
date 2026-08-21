"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  Rocket,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "6",
    label: "Years Experience",
    icon: Code2,
  },
  {
    value: "100+",
    label: "Projects Completed",
    icon: Rocket,
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: Sparkles,
  },
  {
    value: "Fast",
    label: "Performance Focused",
    icon: Gauge,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background atmosphere */}
      <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-purple-300">
            About me
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Passionate about building{" "}
            <span className="bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              things for the web.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm a WordPress Developer with 6 years of experience
            building custom websites, themes and plugins. I love
            turning ideas into clean, fast and user-friendly
            digital experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition
                  hover:border-purple-400/30
                  hover:bg-purple-500/[0.05]
                "
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-600/10 blur-2xl transition group-hover:bg-purple-600/20" />

                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="relative text-purple-400"
                />

                <div className="relative mt-8">
                  <div className="text-3xl font-semibold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}