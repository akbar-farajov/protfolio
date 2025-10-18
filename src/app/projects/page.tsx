import { getProjects } from "@/actions/projects";
import { ProjectsClient } from "@/components/projects/projects-client";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const Projects = async () => {
  const projects = await getProjects();
  if (!projects) {
    return <div>No projects found</div>;
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      }
    >
      <ProjectsClient projects={projects} />
    </Suspense>
  );
};

export default Projects;
