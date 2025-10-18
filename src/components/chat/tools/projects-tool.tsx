import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolOutput,
} from "@/components/ai-elements/tool";
import React from "react";
import { ToolPart } from "@/tools/types";

import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/types/project";

type ProjectsToolProps = {
  part: ToolPart;
};

export const ProjectsTool: React.FC<ProjectsToolProps> = ({ part }) => {
  return (
    <>
      <Tool>
        <ToolHeader type={part.type} state={part.state} />
        <ToolContent>
          <ToolOutput
            output={part.output
              .map((project: Project) => project.title)
              .join(", ")}
            errorText={part.errorText}
          />
        </ToolContent>
      </Tool>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {part.output?.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};
