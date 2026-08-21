"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const {
    title,
    meta,
  } = project;

  // WordPress featured image
  const image =
    project._embedded?.["wp:featuredmedia"]?.[0];

  const imageUrl =
    image?.media_details?.sizes?.large?.source_url ||
    image?.source_url;

  const imageAlt =
    image?.alt_text || title.rendered;

  return (
    <motion.article
      className={`
        group relative overflow-hidden rounded-[2rem]
        border border-white/10
        bg-white/[0.03]
        ${featured ? "lg:grid lg:grid-cols-[1.35fr_1fr]" : ""}
      `}
      initial={{ y: 0 }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================
          IMAGE
      ========================== */}
      <motion.div
        className={`
          relative overflow-hidden
          bg-gradient-to-br from-purple-950 via-black to-black
          ${
            featured
              ? "aspect-[16/10] lg:aspect-auto lg:min-h-[520px]"
              : "aspect-[16/10]"
          }
        `}
        initial="initial"
        whileHover="hover"
      >
        {/* Featured Image */}
        {imageUrl ? (
          <motion.div
            className="absolute inset-0"
            variants={{
              initial: {
                scale: 1,
              },
              hover: {
                scale: 1.06,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 65vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              unoptimized
              className="object-cover"
            />
          </motion.div>
        ) : (
          /* Fallback when no image exists */
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              initial: {
                scale: 1,
              },
              hover: {
                scale: 1.08,
              },
            }}
          >
            <span className="text-7xl font-bold text-white/10">
              {title.rendered.charAt(0)}
            </span>
          </motion.div>
        )}

        {/* Purple hover atmosphere */}
        <motion.div
          className="
            pointer-events-none
            absolute inset-0
            bg-purple-600/20
            mix-blend-screen
          "
          variants={{
            initial: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Dark image overlay */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Project number */}
        <div
          className="
            absolute left-6 top-6
            text-xs font-medium
            tracking-[0.25em]
            text-white/60
          "
        >
          {featured ? "01" : "PROJECT"}
        </div>

        {/* External link */}
        {meta.project_url && (
          <motion.a
            href={meta.project_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title.rendered}`}
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="
              absolute right-6 top-6
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
            "
            variants={{
              initial: {
                scale: 1,
                rotate: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
              },
              hover: {
                scale: 1.08,
                rotate: 5,
                backgroundColor: "rgba(255,255,255,0.95)",
                color: "#000000",
              },
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ArrowUpRight size={19} />
          </motion.a>
        )}
      </motion.div>

      {/* =========================
          CONTENT
      ========================== */}
      <div
        className={`
          flex flex-col justify-center
          p-7 sm:p-9
          ${featured ? "lg:p-12" : ""}
        `}
      >
        {/* Metadata */}
        <div
          className="
            mb-4 flex items-center gap-3
            text-xs uppercase
            tracking-[0.2em]
            text-purple-300/70
          "
        >
          <span>{meta.project_year}</span>

          {meta.project_client && (
            <>
              <span className="h-1 w-1 rounded-full bg-purple-400/50" />
              <span>{meta.project_client}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className={`
            font-semibold
            tracking-tight
            text-white
            ${
              featured
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl"
            }
          `}
        >
          {title.rendered}
        </h3>

        {/* Description */}
        <p
          className={`
            mt-4
            leading-7
            text-white/50
            ${
              featured
                ? "max-w-lg text-base"
                : "text-sm"
            }
          `}
        >
          {meta.project_short_description}
        </p>

        {/* Technologies */}
        {meta.project_technologies?.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {meta.project_technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-3 py-1.5
                    text-xs
                    text-white/60
                    transition-colors
                    duration-300
                    group-hover:border-purple-400/20
                    group-hover:text-white/75
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>
        )}

        {/* =========================
            EXPAND BUTTON
        ========================== */}
        {meta.project_work && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="
              mt-8
              flex w-fit items-center gap-3
              text-sm font-medium
              text-white/70
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>
              {expanded ? "Hide details" : "What I did"}
            </span>

            <motion.span
              animate={{
                rotate: expanded ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </button>
        )}

        {/* =========================
            EXPANDED CONTENT
        ========================== */}
        <AnimatePresence initial={false}>
          {expanded && meta.project_work && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="mt-6 border-t border-white/10 pt-6">
                <p
                  className="
                    mb-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-purple-300/70
                  "
                >
                  What I did
                </p>

                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  {meta.project_work}
                </p>

                {/* Visit Project */}
                {meta.project_url && (
                  <motion.a
                    href={meta.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-white
                    "
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    Visit project
                    <ArrowUpRight size={17} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured CTA */}
        {featured && meta.project_url && !expanded && (
          <div className="mt-10">
            <motion.a
              href={meta.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                font-medium
                text-white
              "
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              View project
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        )}
      </div>
    </motion.article>
  );
}