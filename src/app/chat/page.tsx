"use client";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { PageTransition } from "@/components/page-transition";
import { Header } from "@/components/header";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputBody,
  PromptInputFooter,
  PromptInputTools,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
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

const Chat = () => {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <PageTransition>
      <div className="flex flex-col h-screen overflow-hidden relative pt-24">
        <Conversation className="relative size-full mb-44 scroll-smooth">
          <ConversationContent className="max-w-4xl mx-auto">
            {messages.length === 0 ? (
              <ConversationEmptyState
                icon={<MessageSquareIcon className="size-6" />}
                title="Start a conversation"
                description="Messages will appear here as the conversation progresses."
              />
            ) : (
              messages.map((message, index) => (
                <Message
                  from={index % 2 === 0 ? "user" : "assistant"}
                  key={message.id}
                >
                  <MessageContent>
                    {message.parts.map((part) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <div key={`${message.id}-${index}`}>
                              {part.text}
                            </div>
                          );
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
        {/* <div className="flex-1 pt-10 pb-44 mx-auto stretch">
          {messages.map((message) => (
            <div key={message.id} className="whitespace-pre-wrap">
              {message.role === "user" ? "User: " : "AI: "}
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return <div key={`${message.id}-${i}`}>{part.text}</div>;
                }
              })}
            </div>
          ))}
        </div> */}
        <PromptInput
          onSubmit={(message, event) => {
            event.preventDefault();
            sendMessage({ text: message.text || "" });
            setInput("");
          }}
          className="mt-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl  p-2 mb-8 shadow-xs bg-background rounded-lg"
        >
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.currentTarget.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input} status={"ready"} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </PageTransition>
  );
};

export default Chat;
