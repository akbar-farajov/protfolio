"use client";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { PageTransition } from "@/components/page-transition";

import { Messages } from "@/components/chat/messages";
import { ChatComposer } from "@/components/chat/chat-composer";

const Chat = () => {
  const suggestions = [
    "👋 What’s your name?",
    "💻 Which technologies do you work with?",
    "🚀 Talk about your work experience",
    "🎓 Show your education",
    "🪪 Do you have a portfolio?",
    "🎯 What are your projects?",
  ];
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-screen overflow-hidden relative pt-24">
        <Messages messages={messages} />
        <ChatComposer
          onSubmit={() => {
            sendMessage({ text: input });
            setInput("");
          }}
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
