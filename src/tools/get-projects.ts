import { tool } from "ai";
import { z } from "zod";

import { getProjects } from "@/actions/projects";

export const getProjectsTool = tool({
  description:
    "Get Akbar's portfolio projects - software projects, web applications, and coding work. Use this tool ONLY when specifically asked about portfolio projects, GitHub projects, or code/software work. DO NOT use for education, experience, skills, or personal information.",
  inputSchema: z
    .object({})
    .describe(
      "Get all portfolio projects and software work that Akbar has built"
    ),
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
