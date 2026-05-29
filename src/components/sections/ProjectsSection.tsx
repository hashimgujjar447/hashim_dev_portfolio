"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data";

export function ProjectsSection() {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12">
      <SectionHeader
        label="// projects"
        title="Featured Work"
        description="Production systems, backend architectures, and full-stack applications."
      />

      <div className="space-y-4">
        {/* Featured project */}
        {featured && (
          <ProjectCard project={featured} featured />
        )}

        {/* Grid of other projects */}
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
