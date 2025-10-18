import { tool } from "ai";
import { z } from "zod";

import { getProjects } from "@/actions/projects";

export const getProjectsTool = tool({
  description: "Get all projects",
  inputSchema: z.object({}).describe("Get all projects that I have worked on"),
  outputSchema: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      liveUrl: z.string(),
      githubUrl: z.string().optional(),
    })
  ),
  execute: async () => {
    const data = await getProjects();
    if (!data) return [];

    return data.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      tags: project.tags,
      image: project.image,
      liveUrl: project.live_url,
      githubUrl: project.github_url ?? undefined,
    }));
  },
});
