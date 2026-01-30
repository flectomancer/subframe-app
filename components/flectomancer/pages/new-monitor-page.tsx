"use client";

import React from "react";
import { useTheme } from "@/lib/theme-provider";
import {
  Sidebar,
  Button,
  IconButton,
  ChatBubble,
  ChatInput,
  Avatar,
  ProgressBar,
  PreviewCard,
  SourceCard,
  ModalOverlay,
} from "@/components/flectomancer";

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

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
    icon: "nasdaq" | "news" | "rss" | "twitter";
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
      return <FileTextIcon className={className} />;
    case "rss":
      return <RssIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
  }
}

/**
 * NewMonitorPage Component
 * 
 * A full-page modal for creating new monitors via AI chat, featuring:
 * - Split-pane layout: chat on left, preview on right
 * - Real-time progress tracking
 * - Source selection cards
 * - Responsive design (stacks on mobile)
 * - Theme-aware styling
 * 
 * @example
 * ```tsx
 * <NewMonitorPage
 *   isOpen={true}
 *   onClose={() => setModalOpen(false)}
 *   messages={chatMessages}
 *   inputValue={input}
 *   onInputChange={setInput}
 *   onSendMessage={handleSend}
 *   previewFields={fields}
 *   progress={40}
 * />
 * ```
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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`flex h-full w-full items-start bg-background ${className || ""}`}>
      {/* Desktop Sidebar */}
      <Sidebar
        logoUrl={logoUrl}
        activeItem={activeMenuItem}
        onNavigate={(item) => onNavigate?.(item as "dashboard" | "archived" | "settings")}
        onThemeChange={setTheme}
        currentTheme={resolvedTheme as "light" | "dark"}
        className="hidden md:flex"
      />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-overlay md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Sidebar
              logoUrl={logoUrl}
              activeItem={activeMenuItem}
              onNavigate={(item) => {
                onNavigate?.(item as "dashboard" | "archived" | "settings");
                setSidebarOpen(false);
              }}
              onThemeChange={setTheme}
              currentTheme={resolvedTheme as "light" | "dark"}
              className="absolute left-0 top-0 h-full"
            />
          </div>
        </div>
      )}

      {/* Main Content (Background - dimmed when modal open) */}
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-y-auto">
        {/* Header */}
        <div className="flex w-full items-center justify-between px-8 py-6 max-md:px-4 max-md:py-4">
          <div className="flex items-center gap-3">
            <IconButton
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-5 w-5" />
            </IconButton>
            <h1 className="text-heading-1 font-heading-1 text-foreground max-md:text-heading-2 max-md:font-heading-2">
              Dashboard
            </h1>
          </div>
          <Button variant="secondary">
            <PlusIcon className="h-4 w-4" />
            <span className="max-md:hidden">New Monitor</span>
          </Button>
        </div>

        {/* Background Monitor Cards (dimmed) */}
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8 max-md:px-4 max-md:py-4 opacity-50 pointer-events-none">
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
      {isOpen && (
        <ModalOverlay
          isOpen={isOpen}
          onClose={onClose}
          variant="fullscreen"
          showCloseButton={false}
          className="z-50"
        >
          <div className="flex h-full w-full flex-col items-start bg-background">
            {/* Modal Header */}
            <div className="flex w-full items-center justify-between px-6 py-4 border-b border-border">
              <IconButton
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close"
              >
                <XIcon className="h-5 w-5" />
              </IconButton>
              <span className="text-heading-3 font-heading-3 text-foreground">
                New Monitor
              </span>
              <div className="h-8 w-8" /> {/* Spacer for centering */}
            </div>

            {/* Split Content */}
            <div className="flex w-full grow shrink-0 basis-0 items-stretch max-md:flex-col">
              {/* Left Panel - Chat */}
              <div className="flex flex-col items-start w-1/2 max-md:w-full max-md:h-1/2">
                {/* Chat Messages */}
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-6 py-6 overflow-y-auto">
                  {messages.map((message) => (
                    <React.Fragment key={message.id}>
                      <ChatBubble
                        role={message.role}
                        avatar={
                          message.role === "ai" ? (
                            <Avatar variant="brand" size="md">
                              <ZapIcon className="h-5 w-5" />
                            </Avatar>
                          ) : undefined
                        }
                      >
                        {message.content}
                      </ChatBubble>

                      {/* Inline source selection */}
                      {message.sources && message.sources.length > 0 && (
                        <div className="flex w-full items-center justify-center gap-4 px-12 flex-wrap">
                          {message.sources.map((source) => (
                            <SourceCard
                              key={source.id}
                              label={source.label}
                              icon={<SourceIconComponent icon={source.icon} className="h-5 w-5" />}
                              selected={source.selected}
                              onClick={() => onSourceSelect?.(source.id)}
                            />
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="w-full px-6 py-6">
                  <ChatInput
                    value={inputValue}
                    onChange={onInputChange}
                    onSend={onSendMessage}
                    placeholder="Describe what you want to monitor..."
                  />
                </div>
              </div>

              {/* Right Panel - Preview */}
              <div className="flex flex-col items-start gap-6 px-6 py-6 w-1/2 max-md:w-full max-md:h-1/2 overflow-y-auto border-l border-border max-md:border-l-0 max-md:border-t">
                {/* Progress Section */}
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-muted-foreground">
                    MONITOR PREVIEW
                  </span>
                  <ProgressBar 
                    value={progress} 
                    showLabel 
                    size="sm"
                  />
                </div>

                {/* Preview Cards */}
                <div className="flex w-full flex-col items-start gap-3">
                  {previewFields.map((field) => (
                    <PreviewCard
                      key={field.id}
                      label={field.label}
                      icon={<PreviewFieldIcon icon={field.icon} className="h-4 w-4" />}
                      value={field.value}
                      placeholder={field.placeholder}
                      complete={field.complete}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ModalOverlay>
      )}
    </div>
  );
}

export default NewMonitorPage;
