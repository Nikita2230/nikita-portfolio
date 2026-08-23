"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}

const PROJECTS_PER_PAGE = 2;

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = projects.slice(0, visibleCount);

  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + PROJECTS_PER_PAGE, projects.length)
    );
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={
                index >= visibleCount - PROJECTS_PER_PAGE
                  ? { opacity: 0, y: 25 }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay:
                  index >= visibleCount - PROJECTS_PER_PAGE
                    ? (index % PROJECTS_PER_PAGE) * 0.08
                    : 0,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
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
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:border-purple-400/40
              hover:bg-purple-500/10
            "
          >
            Load more

            <ChevronDown
              size={17}
              className="
                text-purple-300
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          </button>
        </div>
      )}
    </>
  );
}