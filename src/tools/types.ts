import { InferUITools, ToolUIPart } from "ai";
import { getTools } from "./index";

export type ToolTypes = InferUITools<ReturnType<typeof getTools>>;
export type ToolPart = ToolUIPart<ToolTypes>;
