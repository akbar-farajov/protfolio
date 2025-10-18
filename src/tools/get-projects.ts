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
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getProjects();
    return data;
  },
});
