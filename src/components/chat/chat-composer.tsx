import React, { FormEvent } from "react";
import {
  PromptInput,
  PromptInputBody,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from "../ai-elements/prompt-input";
import { Suggestion, Suggestions } from "../ai-elements/suggestion";
import { ChatStatus } from "ai";

type ChatComposerProps = {
  onSubmit: () => void;
  onStop: () => void;
  setInput: (input: string) => void;
  input: string;
  suggestions: string[];
  handleSuggestionClick: (suggestion: string) => void;
  status: ChatStatus;
};
export const ChatComposer = ({
  setInput,
  input,
  suggestions,
  handleSuggestionClick,
  status,
  onSubmit,
  onStop,
}: ChatComposerProps) => {
  return (
    <PromptInput
      onSubmit={onSubmit}
      className="mt-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl p-2 mb-4 md:mb-8 shadow-xs bg-background rounded-lg"
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
              disabled={status === "streaming" || status === "submitted"}
              key={suggestion}
              onClick={handleSuggestionClick}
              suggestion={suggestion}
            />
          ))}
        </Suggestions>
        <PromptInputSubmit
          disabled={!input.trim() && status !== "streaming"}
          status={status}
          onStop={onStop}
        />
      </PromptInputFooter>
    </PromptInput>
  );
};
