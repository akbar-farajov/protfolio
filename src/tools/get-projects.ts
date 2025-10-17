import { tool } from "ai";
import { z } from "zod";
import { projects } from "@/app/projects/projects";

export const getProjectsTool = tool({
  description: "Get all projects",
  inputSchema: z.object({}).describe("Get all projects"),
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
    return projects;
  },
});
