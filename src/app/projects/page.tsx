"use client";
import { PageTransition } from "@/components/page-transition";
import { ProjectsHeader } from "@/components/projects/projects-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectsHeader />
          <ProjectsGrid />
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
