"use client";
import { PageTransition } from "@/components/page-transition";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Header } from "@/components/header";
import { Project } from "@/types/project";

export const ProjectsClient: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <PageTransition>
      <div className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <Header
            title="Projects"
            description="A collection of my recent work showcasing modern web development with cutting-edge technologies"
          />
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </PageTransition>
  );
};
