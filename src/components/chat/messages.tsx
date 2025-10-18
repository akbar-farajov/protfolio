import React from "react";
import { Conversation } from "../ai-elements/conversation";
import { UIMessage } from "@ai-sdk/react";
import { ConversationContent } from "../ai-elements/conversation";
import { ConversationEmptyState } from "../ai-elements/conversation";
import { MessageSquareIcon } from "lucide-react";
import { Message } from "../ai-elements/message";
import { MessageContent } from "../ai-elements/message";
import { Response } from "../ai-elements/response";
import { ProjectsTool } from "@/components/chat/tools/projects-tool";
import { cn } from "@/lib/utils";
import { MessageAvatar } from "../ai-elements/message";
import { ConversationScrollButton } from "../ai-elements/conversation";

export const Messages = ({ messages }: { messages: UIMessage[] }) => {
  return (
    <Conversation className="relative size-full mb-44 scroll-smooth">
      <ConversationContent className="max-w-5xl mx-auto">
        {messages.length === 0 ? (
          <ConversationEmptyState
            icon={<MessageSquareIcon className="size-6" />}
            title="Start a chat with Akbar"
            description="Messages will appear here as the chat progresses."
          />
        ) : (
          messages.map((message, index) => (
            <Message key={message.id} from={message.role}>
              <MessageContent variant="flat">
                {message.parts.map((part) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <Response
                          className={cn(
                            message.role === "assistant" ? "pl-1" : "pr-1"
                          )}
                          key={`${message.id}-${index}`}
                        >
                          {part.type === "text" ? part.text : ""}
                        </Response>
                      );

                    case "tool-projects":
                      return <ProjectsTool part={part} />;
                  }
                })}
              </MessageContent>
              <MessageAvatar
                name={message.role === "user" ? "User" : "Assistant"}
                src={
                  message.role === "user"
                    ? "https://github.com/shadcn.png"
                    : "/images/ai.png"
                }
              />
            </Message>
          ))
        )}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
};
