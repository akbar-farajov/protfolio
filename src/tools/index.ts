import { ToolSet } from "ai";
import { getProjectsTool } from "./get-projects";

export const getTools = () => {
  return {
    projects: getProjectsTool,
  } as ToolSet;
};
