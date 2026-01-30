"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";

/**
 * ChatInput Component
 * 
 * A text input field designed for chat interfaces.
 * Features a clean, bordered container with an integrated send button.
 * 
 * Design tokens used:
 * - input: background color
 * - input-border: border color
 * - input-placeholder: placeholder text color
 * - primary: send button background
 */

/**
 * Send icon for the chat input
 */
function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export interface ChatInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Current input value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Submit handler - called when send button is clicked or Enter is pressed */
  onSubmit?: () => void;
  /** Placeholder text */
  placeholder?: string;
  /** Disable the input and button */
  disabled?: boolean;
  /** Show loading state on send button */
  loading?: boolean;
  /** Custom send button icon */
  sendIcon?: React.ReactNode;
  /** Additional class for the container */
  containerClassName?: string;
}

const ChatInput = React.forwardRef<HTMLInputElement, ChatInputProps>(
  (
    {
      className,
      containerClassName,
      value,
      onChange,
      onSubmit,
      placeholder = "Type a message...",
      disabled = false,
      loading = false,
      sendIcon,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey && onSubmit && value.trim()) {
        e.preventDefault();
        onSubmit();
      }
    };
    
    const handleSubmit = () => {
      if (onSubmit && value.trim() && !disabled && !loading) {
        onSubmit();
      }
    };
    
    return (
      <div
        className={cn(
          "flex w-full items-center gap-2",
          "rounded-lg",
          "border border-input-border",
          "bg-input",
          "px-4 py-3",
          "transition-colors",
          "focus-within:border-input-focus",
          disabled && "opacity-50 cursor-not-allowed",
          containerClassName
        )}
      >
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "h-full w-full flex-1",
            "border-none bg-transparent",
            "text-body text-foreground",
            "placeholder:text-input-placeholder",
            "outline-none",
            "disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        
        <IconButton
          variant="brand-primary"
          size="medium"
          icon={sendIcon || <SendIcon />}
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          loading={loading}
          aria-label="Send message"
          className="flex-shrink-0"
        />
      </div>
    );
  }
);

ChatInput.displayName = "ChatInput";

export { ChatInput };
