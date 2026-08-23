import { getProjects } from "@/lib/wordpress";
import ProjectCard from "./ProjectCard";
import ProjectsGrid from "./Projectsgrid";
import Reveal from "@/components/ui/Reveal";

export default async function ProjectsSection() {
  const projects = await getProjects();

  const featuredProjects = projects.filter(
    (project) => project.meta.project_featured
  );

  const regularProjects = projects
    .filter((project) => !project.meta.project_featured)
    .sort(
      (a, b) =>
        Number(b.meta.project_year || 0) -
        Number(a.meta.project_year || 0)
    );

  const featuredProject = featuredProjects[0];

  return (
    <Reveal>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[#0d0714]
          px-6
          py-32
        "
      >
        {/* Purple atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          {/* Main purple glow */}
          <div
            className="
              absolute
              left-1/2
              top-[38%]
              h-[800px]
              w-[1000px]
              -translate-x-1/2
              rounded-full
              bg-purple-700/[0.10]
              blur-[160px]
            "
          />

          {/* Left violet glow */}
          <div
            className="
              absolute
              -left-[250px]
              top-[12%]
              h-[550px]
              w-[550px]
              rounded-full
              bg-violet-600/[0.08]
              blur-[140px]
            "
          />

          {/* Right fuchsia glow */}
          <div
            className="
              absolute
              -right-[220px]
              bottom-[8%]
              h-[550px]
              w-[550px]
              rounded-full
              bg-fuchsia-600/[0.06]
              blur-[150px]
            "
          />

          {/* Transition from previous section */}
          <div
            className="
              absolute
              left-0
              top-0
              h-48
              w-full
              bg-gradient-to-b
              from-[#08060f]
              via-[#08060f]/60
              to-transparent
            "
          />

          {/* Transition into next section */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-48
              w-full
              bg-gradient-to-t
              from-[#08060f]
              via-[#08060f]/60
              to-transparent
            "
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-20 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built along the way.

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-300
                  via-purple-400
                  to-fuchsia-400
                  bg-clip-text
                  text-transparent
                "
              >
                Made for what&apos;s next.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
              A collection of websites and digital experiences shaped through
              ideas, collaboration, and thoughtful development.
            </p>
          </div>

          {/* Featured project */}
          {featuredProject && (
            <div className="mb-12">
              <ProjectCard
                project={featuredProject}
                featured
              />
            </div>
          )}

          {/* Regular projects */}
          {regularProjects.length > 0 && (
            <ProjectsGrid projects={regularProjects} />
          )}
        </div>
      </section>
    </Reveal>
  );
}