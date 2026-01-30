"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-provider";
import { Sidebar } from "../sidebar";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { ChatBubble } from "../chat-bubble";
import { ChatInput } from "../chat-input";
import { Avatar } from "../avatar";
import { ProgressBar } from "../progress-bar";
import { PreviewCard } from "../preview-card";
import { SourceCard } from "../source-card";

/**
 * Inline SVG icons
 */
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7M19 12H5" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function NewspaperIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function RssIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * Chat message type
 */
export interface ChatMessage {
  id: string;
  role: "ai" | "user";
  content: string;
  /** Optional sources to select (shown inline in AI messages) */
  sources?: Array<{
    id: string;
    label: string;
    icon: "nasdaq" | "news" | "rss" | "twitter" | "github";
    selected?: boolean;
  }>;
}

/**
 * Preview field type
 */
export interface PreviewField {
  id: string;
  label: string;
  icon: "target" | "globe" | "zap" | "bell";
  value?: string;
  placeholder: string;
  complete: boolean;
}

/**
 * NewMonitorPage Props
 */
export interface NewMonitorPageProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Close modal callback */
  onClose: () => void;
  /** Chat messages */
  messages: ChatMessage[];
  /** Current input value */
  inputValue: string;
  /** Input change handler */
  onInputChange: (value: string) => void;
  /** Send message handler */
  onSendMessage: () => void;
  /** Source selection handler */
  onSourceSelect?: (sourceId: string) => void;
  /** Preview fields */
  previewFields: PreviewField[];
  /** Progress percentage (0-100) */
  progress: number;
  /** Active sidebar menu item */
  activeMenuItem?: "dashboard" | "archived";
  /** Sidebar navigation handler */
  onNavigate?: (item: "dashboard" | "archived" | "settings") => void;
  /** Logo URL */
  logoUrl?: string;
  /** Background monitors (shown behind modal) */
  backgroundMonitors?: Array<{
    id: string;
    name: string;
    description: string;
    status: "active" | "paused" | "error";
  }>;
  /** Custom className */
  className?: string;
}

/**
 * Icon mapping for preview fields
 */
function PreviewFieldIcon({ icon, className }: { icon: PreviewField["icon"]; className?: string }) {
  switch (icon) {
    case "target":
      return <TargetIcon className={className} />;
    case "globe":
      return <GlobeIcon className={className} />;
    case "zap":
      return <ZapIcon className={className} />;
    case "bell":
      return <BellIcon className={className} />;
  }
}

/**
 * Icon mapping for sources
 */
function SourceIconComponent({ icon, className }: { icon: ChatMessage["sources"][0]["icon"]; className?: string }) {
  switch (icon) {
    case "nasdaq":
      return <TrendingUpIcon className={className} />;
    case "news":
      return <NewspaperIcon className={className} />;
    case "rss":
      return <RssIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
  }
}

/**
 * NewMonitorPage Component
 * 
 * A full-page modal for creating new monitors via AI chat, featuring:
 * - Desktop: Split-pane layout with chat on left, preview on right
 * - Mobile: Full-screen with toggle between chat view and preview view
 * - Real-time progress tracking
 * - Source selection cards inline in chat
 * - Theme-aware styling
 */
export function NewMonitorPage({
  isOpen,
  onClose,
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  onSourceSelect,
  previewFields,
  progress,
  activeMenuItem = "dashboard",
  onNavigate,
  logoUrl = "https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png",
  backgroundMonitors = [],
  className,
}: NewMonitorPageProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const chatEndRef = React.useRef<HTMLDivElement>(null);
  
  // Mobile view state: "chat" or "preview"
  const [mobileView, setMobileView] = React.useState<"chat" | "preview">("chat");
  
  // Animation state
  const [isVisible, setIsVisible] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(false);

  // Handle open/close animations
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setMobileView("chat"); // Reset mobile view on close
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-scroll chat to bottom
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (shouldRender) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={cn("flex h-full w-full items-start bg-background", className)}>
      {/* Desktop Sidebar - visible behind modal overlay */}
      <div className="hidden md:flex">
        <Sidebar
          logoUrl={logoUrl}
          activeItem={activeMenuItem}
          onNavigate={onNavigate}
          onThemeChange={setTheme}
          currentTheme={resolvedTheme as "light" | "dark"}
        />
      </div>

      {/* Main Content (dimmed background) */}
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-hidden">
        {/* Header (dimmed) */}
        <div className="flex w-full items-center justify-between px-8 py-6 max-md:px-4 max-md:py-4 opacity-50 pointer-events-none">
          <h1 className="text-heading-1 font-heading-1 text-foreground max-md:text-heading-2">
            Dashboard
          </h1>
          <Button variant="secondary" disabled>
            <PlusIcon className="h-4 w-4" />
            <span className="max-md:hidden">New Monitor</span>
          </Button>
        </div>

        {/* Background Monitor Cards (dimmed) */}
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8 max-md:px-4 max-md:py-4 opacity-30 pointer-events-none">
          {backgroundMonitors.map((monitor) => (
            <div
              key={monitor.id}
              className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-border bg-card p-6"
            >
              <span className="text-heading-3 font-heading-3 text-card-foreground">
                {monitor.name}
              </span>
              <span className="text-body font-body text-muted-foreground">
                {monitor.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center",
          "transition-all duration-300 ease-out",
          isVisible
            ? "bg-overlay-heavy backdrop-blur-sm"
            : "bg-transparent backdrop-blur-none"
        )}
      >
        {/* Modal Content */}
        <div
          className={cn(
            "flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-hidden bg-background",
            "transition-all duration-300 ease-out",
            isVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.98] translate-y-4"
          )}
        >
          {/* === MOBILE HEADER === */}
          <div className="flex w-full items-center justify-between px-4 py-4 md:hidden">
            {/* Left: X (chat view) or Back Arrow (preview view) */}
            <div
              onClick={mobileView === "chat" ? onClose : () => setMobileView("chat")}
              className={cn(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md",
                "cursor-pointer hover:bg-secondary transition-colors"
              )}
            >
              {mobileView === "chat" ? (
                <XIcon className="h-5 w-5 text-foreground" />
              ) : (
                <ArrowLeftIcon className="h-5 w-5 text-foreground" />
              )}
            </div>

            {/* Center: Title */}
            <span className="text-body-bold font-body-bold text-foreground">
              New Monitor
            </span>

            {/* Right: Eye button (chat view) or spacer (preview view) */}
            {mobileView === "chat" ? (
              <div
                onClick={() => setMobileView("preview")}
                className={cn(
                  "flex h-8 w-8 flex-none items-center justify-center rounded-md",
                  "border border-border bg-card",
                  "cursor-pointer hover:bg-secondary transition-colors"
                )}
              >
                <EyeIcon className="h-4 w-4 text-foreground" />
              </div>
            ) : (
              <div className="h-8 w-8 flex-none" />
            )}
          </div>

          {/* === DESKTOP HEADER === */}
          <div className="hidden md:flex w-full items-center justify-between px-6 py-4 border-b border-border">
            <div
              onClick={onClose}
              className={cn(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md",
                "cursor-pointer hover:bg-secondary hover:border-primary border border-transparent transition-colors"
              )}
            >
              <XIcon className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-body-bold font-body-bold text-foreground">
              New Monitor
            </span>
            <div className="h-8 w-8" />
          </div>

          {/* === MOBILE PROGRESS BAR (visible in both views) === */}
          <div className="flex w-full flex-col items-start gap-2 px-4 pb-4 md:hidden">
            {mobileView === "preview" && (
              <span className="text-caption-bold font-caption-bold text-foreground uppercase">
                Monitor Preview
              </span>
            )}
            <div className="flex w-full items-center gap-3">
              <div className="flex h-1 grow shrink-0 basis-0 flex-col items-start rounded-full bg-progress-track overflow-hidden">
                <div
                  className="h-1 rounded-full bg-progress-fill transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-caption font-caption text-foreground">
                {progress}% complete
              </span>
            </div>
          </div>

          {/* === CONTENT AREA === */}
          <div className="flex w-full grow shrink-0 basis-0 items-stretch max-md:flex-col">
            
            {/* LEFT PANEL - Chat (hidden on mobile when showing preview) */}
            <div className={cn(
              "flex flex-col items-start w-1/2 border-r border-border",
              // Mobile: full width, hidden when preview view
              "max-md:w-full max-md:border-r-0 max-md:flex-1",
              mobileView === "preview" && "max-md:hidden"
            )}>
              {/* Chat Messages */}
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-6 py-6 max-md:px-4 max-md:py-4 overflow-y-auto">
                {messages.map((message) => (
                  <React.Fragment key={message.id}>
                    <div className={cn(
                      "flex w-full items-start gap-3",
                      message.role === "user" && "justify-end"
                    )}>
                      {/* AI Avatar */}
                      {message.role === "ai" && (
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <ZapIcon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      )}

                      {/* Message Bubble */}
                      <div className={cn(
                        "flex grow shrink-0 basis-0 flex-col items-start gap-2 px-4 py-3 rounded-lg",
                        message.role === "ai" 
                          ? "bg-transparent" 
                          : "bg-primary max-w-[80%] grow-0"
                      )}>
                        <span className={cn(
                          "text-body font-body",
                          message.role === "ai" ? "text-foreground" : "text-primary-foreground"
                        )}>
                          {message.content}
                        </span>
                      </div>
                    </div>

                    {/* Inline source selection */}
                    {message.sources && message.sources.length > 0 && (
                      <div className="flex w-full items-start gap-3">
                        <div className="h-10 w-10 flex-none" />
                        <div className="flex grow shrink-0 basis-0 items-center gap-3 flex-wrap">
                          {message.sources.map((source) => (
                            <div
                              key={source.id}
                              onClick={() => onSourceSelect?.(source.id)}
                              className={cn(
                                "flex grow shrink-0 basis-0 flex-col items-center gap-2 rounded-lg",
                                "border bg-card px-6 py-4",
                                "cursor-pointer transition-all",
                                source.selected
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary hover:bg-secondary"
                              )}
                            >
                              <SourceIconComponent 
                                icon={source.icon} 
                                className="h-6 w-6 text-primary" 
                              />
                              <span className="text-body-bold font-body-bold text-card-foreground">
                                {source.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <div className="w-full px-6 py-4 max-md:px-4 max-md:py-4">
                <div className={cn(
                  "flex w-full items-center gap-2 rounded-lg border border-border bg-input px-4 py-3 max-md:px-3 max-md:py-2"
                )}>
                  <input
                    type="text"
                    placeholder="Describe what you want to monitor..."
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSendMessage();
                      }
                    }}
                    className="flex-1 bg-transparent text-body font-body text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <div
                    onClick={onSendMessage}
                    className={cn(
                      "flex h-10 w-10 max-md:h-8 max-md:w-8 flex-none items-center justify-center rounded-md bg-primary",
                      "cursor-pointer hover:bg-primary-hover transition-colors"
                    )}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 max-md:h-4 max-md:w-4 text-primary-foreground">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Preview (hidden on mobile when showing chat) */}
            <div className={cn(
              "flex flex-col items-start gap-6 px-6 py-6 w-1/2 overflow-y-auto",
              // Mobile: full width, hidden when chat view
              "max-md:w-full max-md:px-4 max-md:py-4 max-md:flex-1",
              mobileView === "chat" && "max-md:hidden"
            )}>
              {/* Progress Section (desktop only - mobile shows in header) */}
              <div className="hidden md:flex w-full flex-col items-start gap-2">
                <span className="text-caption-bold font-caption-bold text-muted-foreground uppercase">
                  Monitor Preview
                </span>
                <ProgressBar value={progress} showLabel size="sm" />
              </div>

              {/* Preview Cards */}
              <div className="flex w-full flex-col items-start gap-4 max-md:gap-3">
                {previewFields.map((field) => (
                  <div
                    key={field.id}
                    className={cn(
                      "flex w-full flex-col items-start gap-3 rounded-lg border px-4 py-3",
                      field.complete
                        ? "border-success bg-card"
                        : "border-border bg-secondary"
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PreviewFieldIcon
                          icon={field.icon}
                          className={cn(
                            "h-4 w-4",
                            field.complete ? "text-success" : "text-muted-foreground"
                          )}
                        />
                        <span className={cn(
                          "text-caption-bold font-caption-bold uppercase",
                          field.complete ? "text-success" : "text-muted-foreground"
                        )}>
                          {field.label}
                        </span>
                      </div>
                      {field.complete && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-success">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      )}
                    </div>
                    <span className={cn(
                      "text-body font-body",
                      field.value ? "text-foreground" : "text-foreground italic"
                    )}>
                      {field.value || field.placeholder}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMonitorPage;
