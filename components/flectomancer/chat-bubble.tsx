"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";

/**
 * ChatBubble Component
 * 
 * Message bubble for chat interfaces. Supports AI and user message types
 * with distinct visual styling for each.
 * 
 * AI messages: Left-aligned with optional avatar, neutral background
 * User messages: Right-aligned, brand-colored background
 * 
 * Design tokens used:
 * - chat-ai: muted background for AI messages
 * - chat-ai-foreground: text color for AI messages
 * - chat-user: brand background for user messages
 * - chat-user-foreground: text color for user messages
 */

const chatBubbleVariants = cva(
  [
    "flex flex-col gap-2",
    "px-4 py-3",
    "rounded-lg",
    "text-body",
    "max-w-[80%]",
  ],
  {
    variants: {
      variant: {
        ai: [
          "bg-chat-ai",
          "text-chat-ai-foreground",
        ],
        user: [
          "bg-chat-user",
          "text-chat-user-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "ai",
    },
  }
);

export interface ChatBubbleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof chatBubbleVariants> {
  /** The message content */
  message: React.ReactNode;
  /** Show avatar (typically for AI messages) */
  showAvatar?: boolean;
  /** Icon to display in avatar */
  avatarIcon?: React.ReactNode;
  /** Additional content below the message (e.g., action buttons, selections) */
  children?: React.ReactNode;
  /** Timestamp or metadata to display */
  timestamp?: string;
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  (
    {
      className,
      variant = "ai",
      message,
      showAvatar = false,
      avatarIcon,
      children,
      timestamp,
      ...props
    },
    ref
  ) => {
    const isUser = variant === "user";
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full gap-3",
          isUser ? "justify-end" : "justify-start",
          className
        )}
        {...props}
      >
        {/* AI Avatar - shown on left for AI messages */}
        {!isUser && showAvatar && (
          <Avatar
            variant="gradient"
            size="medium"
            icon={avatarIcon}
            className="flex-shrink-0"
          />
        )}
        
        {/* Spacer for AI messages without avatar */}
        {!isUser && !showAvatar && (
          <div className="h-10 w-10 flex-shrink-0" />
        )}
        
        {/* Message container */}
        <div
          className={cn(
            "flex flex-col gap-2",
            isUser ? "items-end" : "items-start"
          )}
        >
          <div className={chatBubbleVariants({ variant })}>
            <span>{message}</span>
            {children}
          </div>
          
          {timestamp && (
            <span className="text-caption text-foreground-subtle px-1">
              {timestamp}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ChatBubble.displayName = "ChatBubble";

export { ChatBubble, chatBubbleVariants };
