import { getTools } from "@/tools";
import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages, ToolSet } from "ai";
import { readFileSync } from "fs";
import { join } from "path";

const systemPrompt = readFileSync(
  join(process.cwd(), "src/app/api/chat/prompt.md"),
  "utf-8"
);

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const tools = getTools();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system: systemPrompt,
    tools,
  });

  return result.toUIMessageStreamResponse();
}
