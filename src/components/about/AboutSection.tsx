"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const stats = [
  {
    value: "06",
    label: "Years experience",
  },
  {
    value: "WP",
    label: "Core expertise",
  },
  {
    value: "∞",
    label: "Curiosity to build",
  },
];

export default function AboutSection() {
  return (
    <Reveal>
      <section
        id="about"
        className="relative overflow-hidden px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
                About me
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Building for the web,
                <span className="block text-white/40">
                  with intention.
                </span>
              </h2>

              {/* Decorative line */}
              <div className="mt-10 h-px w-20 bg-gradient-to-r from-purple-400 to-transparent" />
            </div>

            {/* RIGHT */}
            <div className="space-y-10">
              <p className="max-w-3xl text-xl leading-9 text-white/70">
                I'm Nikita, a WordPress Developer focused on
                creating fast, scalable and thoughtful digital
                experiences.
              </p>

              <p className="max-w-2xl text-base leading-8 text-white/40">
                I work across custom WordPress development,
                theme and plugin customization, REST APIs and
                modern frontend technologies. I enjoy turning
                designs and ideas into reliable products that
                are easy to maintain and built to perform.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 border-t border-white/10 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      group
                      border-r
                      border-white/10
                      px-4
                      first:pl-0
                      last:border-r-0
                    "
                  >
                    <div className="
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-purple-300
                      sm:text-4xl
                    ">
                      {stat.value}
                    </div>

                    <p className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-white/35
                      sm:text-xs
                    ">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Small technology line */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs uppercase tracking-[0.18em] text-white/25">
                <span>WordPress</span>
                <span>PHP</span>
                <span>Laravel</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}