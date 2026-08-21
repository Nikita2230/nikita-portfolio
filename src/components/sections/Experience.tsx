"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "WordPress & CMS",
    skills: [
      "WordPress",
      "Custom Themes",
      "Custom Plugins",
      "WooCommerce",
      "Elementor",
      "ACF",
      "Gutenberg",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    skills: [
      "PHP",
      "Laravel",
      "REST API",
      "MySQL",
      "Custom Integrations",
    ],
  },
  {
    number: "03",
    title: "Frontend & Tools",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
    ],
  },
];

const experience = [
  {
    year: "01",
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, CPTs, taxonomies, WooCommerce and complex WordPress integrations.",
  },
  {
    year: "02",
    title: "Backend & APIs",
    description:
      "PHP, Laravel, REST APIs and custom integrations designed for maintainability and performance.",
  },
  {
    year: "03",
    title: "Modern Frontend",
    description:
      "React, Next.js, JavaScript and headless WordPress architectures for modern web experiences.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
            Experience
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built across
            <span className="block text-white/40">
              the modern web.
            </span>
          </h2>
        </motion.div>

        {/* Experience List */}
        <div className="border-t border-white/10">
          {experience.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                grid gap-6
                border-b border-white/10
                py-10
                transition-colors duration-300
                hover:bg-white/[0.015]
                md:grid-cols-[100px_1fr]
                md:px-4
              "
            >
              {/* Number */}
              <div>
                <span className="text-sm tracking-[0.2em] text-purple-300/70">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200">
                    {item.title}
                  </h3>

                  <span
                    className="
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/40
                      transition-all
                      duration-300
                      group-hover:border-purple-400/40
                      group-hover:text-purple-300
                      sm:flex
                    "
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/55">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Skills
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Tools I use to build.
            </h3>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  group
                  bg-black
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-white/[0.025]
                  sm:p-9
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.25em] text-purple-300/60">
                    {group.number}
                  </span>

                  <span className="text-xs text-white/20">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-10 text-xl font-medium text-white">
                  {group.title}
                </h4>

                <div className="mt-7 space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/45
                        transition-colors
                        duration-200
                        hover:text-white
                      "
                    >
                      <span className="h-1 w-1 rounded-full bg-purple-400/70" />

                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}