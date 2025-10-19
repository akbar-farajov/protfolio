"use client";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { PageTransition } from "@/components/page-transition";

import { Messages } from "@/components/chat/messages";
import { ChatComposer } from "@/components/chat/chat-composer";

const Chat = () => {
  const suggestions = [
    "👋 What's your name?",
    "💻 Which technologies do you work with?",
    "🚀 Talk about your work experience",
    "🎓 Show your education",
    "🪪 Do you have a portfolio?",
    "🎯 What are your projects?",
  ];
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, stop } = useChat();

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  return (
    <PageTransition>
      <div
        className="flex flex-col overflow-hidden relative pt-24"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <Messages messages={messages} />
        <ChatComposer
          onSubmit={() => {
            const hasText = Boolean(input.trim());
            if (!hasText) {
              return;
            }

            sendMessage({ text: input });
            setInput("");
          }}
          onStop={stop}
          setInput={setInput}
          input={input}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
          status={status}
        />
      </div>
    </PageTransition>
  );
};

export default Chat;
