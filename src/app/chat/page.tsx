"use client";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { PageTransition } from "@/components/page-transition";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import {
  Conversation,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  ConversationContent,
  ConversationEmptyState,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ai-elements/message";
import { MessageSquareIcon } from "lucide-react";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { Response } from "@/components/ai-elements/response";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";
import { ProjectsTool } from "./tools/projects-tool";
import { cn } from "@/lib/utils";

const Chat = () => {
  const suggestions = [
    "What is your name?",
    "What is your skills?",
    "What is your experience?",
    "What is your education?",
    "What is your portfolio?",
    "What are your projects?",
  ];
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-screen overflow-hidden relative pt-24">
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

        <PromptInput
          onSubmit={(message, event) => {
            event.preventDefault();
            sendMessage({ text: message.text || "" });
            setInput("");
          }}
          className="mt-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl p-2 mb-8 shadow-xs bg-background rounded-lg"
        >
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.currentTarget.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <Suggestions>
              {suggestions.map((suggestion) => (
                <Suggestion
                  key={suggestion}
                  onClick={handleSuggestionClick}
                  suggestion={suggestion}
                />
              ))}
            </Suggestions>
            <PromptInputSubmit
              disabled={!input.trim()}
              status={status === "streaming" ? "streaming" : "ready"}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </PageTransition>
  );
};

export default Chat;
