import { getProjects } from "@/lib/wordpress";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default async function ProjectsSection() {
  const projects = await getProjects();

  const featuredProjects = projects.filter(
    (project) => project.meta.project_featured
  );

  const regularProjects = projects.filter(
    (project) => !project.meta.project_featured
  );

  const featuredProject = featuredProjects[0];

  return (
    <Reveal>
    <section
      id="projects"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects I've built with
            <span className="block text-white/40">
              purpose & precision.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50">
            A selection of websites and digital experiences
            I've designed, developed and brought to life.
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
          <div className="grid gap-8 md:grid-cols-2">
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}

      </div>
    </section>
    </Reveal>
  );
}