"use client";

import { motion } from "framer-motion";

const eras = [
  {
    number: "01",
    label: "BEGINNING",
    title: "Where it started.",
    description:
      "The foundation that shaped how I think, build, and solve problems.",
    skills: ["WordPress", "PHP", "HTML", "CSS"],
  },
  {
    number: "02",
    label: "GROWTH",
    title: "Where I grew.",
    description:
      "Tools and technologies that helped me turn ideas into more capable digital experiences.",
    skills: ["WooCommerce", "Elementor", "Divi", "WPBakery"],
  },
  {
    number: "03",
    label: "EVOLVING",
    title: "Where I'm building next.",
    description:
      "Modern technologies that keep me learning, experimenting, and building what's next.",
    skills: ["React", "Next.js", "REST API", "Headless WordPress"],
  },
];

const skillIcons: Record<string, string> = {
  WordPress: "https://cdn.simpleicons.org/wordpress/ffffff",
  PHP: "https://cdn.simpleicons.org/php/ffffff",
  HTML: "https://cdn.simpleicons.org/html5/ffffff",
  CSS: "https://cdn.simpleicons.org/css/ffffff",
  WooCommerce: "https://cdn.simpleicons.org/woocommerce/ffffff",
  Elementor: "https://cdn.simpleicons.org/elementor/ffffff",
  Divi: "D",
  WPBakery: "W",
  React: "https://cdn.simpleicons.org/react/ffffff",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "REST API": "</>",
  "Headless WordPress": "W",
};

function SkillBadge({ skill }: { skill: string }) {
  const icon = skillIcons[skill];

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/[0.035]
        px-4
        py-2.5
        transition-all
        duration-300
        hover:border-purple-400/35
        hover:bg-purple-500/[0.08]
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.05]
          p-1.5
          text-[10px]
          font-semibold
          text-purple-300
        "
      >
        {icon?.startsWith("http") ? (
          <img
            src={icon}
            alt=""
            className="h-full w-full object-contain opacity-90"
            draggable={false}
          />
        ) : (
          icon
        )}
      </span>

      <span
        className="
          text-sm
          text-white/60
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {skill}
      </span>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[20%]
            top-[25%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-600/[0.04]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-500/[0.03]
            blur-[120px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
            Skills
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Different tools.

            <span className="block text-white/55">
              One journey.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
            Everything I&apos;ve learned along the way becomes part of what
            I build next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="
              pointer-events-none
              absolute
              left-[58px]
              top-12
              hidden
              h-[calc(100%-64px)]
              w-px
              bg-gradient-to-b
              from-purple-400/45
              via-purple-400/15
              to-transparent
              md:block
            "
          />

          <div className="space-y-6">
            {eras.map((era, index) => (
              <motion.article
                key={era.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-6
                  py-8
                  transition-all
                  duration-500
                  hover:border-purple-400/25
                  hover:bg-purple-500/[0.04]
                  md:grid
                  md:grid-cols-[100px_1fr]
                  md:px-10
                  md:py-10
                "
              >
                {/* Number */}
                <div className="relative z-10 flex items-start">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-400/30
                      bg-[#08060f]
                      text-xs
                      tracking-[0.15em]
                      text-purple-300
                      shadow-[0_0_20px_rgba(168,85,247,0.08)]
                    "
                  >
                    {era.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.3em]
                          text-purple-300/75
                        "
                      >
                        {era.label}
                      </p>

                      <h3
                        className="
                          mt-3
                          text-2xl
                          font-medium
                          tracking-tight
                          text-white
                          sm:text-3xl
                        "
                      >
                        {era.title}
                      </h3>
                    </div>

                    <span
                      className="
                        hidden
                        font-editorial-italic
                        text-3xl
                        text-white/10
                        transition-colors
                        duration-300
                        group-hover:text-purple-300/25
                        sm:block
                      "
                    >
                      {era.number}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                    {era.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {era.skills.map((skill) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-purple-500/[0.08]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 text-center"
        >
          <p className="font-editorial-italic text-2xl text-purple-200/70">
            Still growing. Still building. Still becoming.
          </p>
        </motion.div>
      </div>
    </section>
  );
}