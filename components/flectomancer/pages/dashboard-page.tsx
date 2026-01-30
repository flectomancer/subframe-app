"use client";

import React from "react";
import { useTheme } from "@/lib/theme-provider";
import {
  Sidebar,
  PageHeader,
  MonitorCard,
  Button,
  IconButton,
} from "@/components/flectomancer";

/**
 * Inline SVG icons to avoid external dependencies
 */
function PlusIcon({ className }: { className?: string }) {
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
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function RssIcon({ className }: { className?: string }) {
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
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * Monitor data type
 */
export interface Monitor {
  id: string;
  name: string;
  description: string;
  status: "active" | "paused" | "error";
  sources: Array<"rss" | "twitter" | "github" | "news" | "nasdaq">;
  alertCount: number;
  lastUpdated: string;
}

/**
 * DashboardPage Props
 */
export interface DashboardPageProps {
  /** List of monitors to display */
  monitors: Monitor[];
  /** Active sidebar menu item */
  activeMenuItem?: "dashboard" | "archived";
  /** Called when New Monitor button is clicked */
  onNewMonitor?: () => void;
  /** Called when a monitor card is clicked */
  onMonitorClick?: (monitor: Monitor) => void;
  /** Called when sidebar navigation changes */
  onNavigate?: (item: "dashboard" | "archived" | "settings") => void;
  /** Logo URL */
  logoUrl?: string;
  /** Custom className */
  className?: string;
}

/**
 * Source icon mapping
 */
function SourceIcon({ source, className }: { source: Monitor["sources"][number]; className?: string }) {
  switch (source) {
    case "rss":
      return <RssIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    default:
      return null;
  }
}

/**
 * DashboardPage Component
 * 
 * A full-page layout for the monitor dashboard, featuring:
 * - Responsive sidebar (hidden on mobile with hamburger menu)
 * - Monitor cards grid
 * - Theme-aware styling (automatic light/dark mode)
 * 
 * @example
 * ```tsx
 * <DashboardPage
 *   monitors={[
 *     { id: "1", name: "AI News", description: "...", status: "active", sources: ["rss", "twitter"], alertCount: 12, lastUpdated: "2 hours ago" }
 *   ]}
 *   onNewMonitor={() => openNewMonitorModal()}
 *   onMonitorClick={(monitor) => router.push(`/monitor/${monitor.id}`)}
 * />
 * ```
 */
export function DashboardPage({
  monitors,
  activeMenuItem = "dashboard",
  onNewMonitor,
  onMonitorClick,
  onNavigate,
  logoUrl = "https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png",
  className,
}: DashboardPageProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

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

      {/* Main Content */}
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-y-auto">
        {/* Header */}
        <div className="flex w-full items-center justify-between px-8 py-6 md:px-8 md:py-6 bg-background md:bg-transparent sticky top-0 z-20 max-md:px-4 max-md:py-4">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
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
          <Button
            variant="secondary"
            onClick={onNewMonitor}
            className="transition-all duration-200 hover:shadow-md"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="max-md:hidden">New Monitor</span>
          </Button>
        </div>

        {/* Monitor Cards Grid */}
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8 max-md:px-4 max-md:py-4">
          {monitors.map((monitor) => (
            <MonitorCard
              key={monitor.id}
              name={monitor.name}
              description={monitor.description}
              status={monitor.status}
              alertCount={monitor.alertCount}
              lastUpdated={monitor.lastUpdated}
              onClick={() => onMonitorClick?.(monitor)}
              sources={
                <div className="flex items-center gap-3">
                  {monitor.sources.map((source) => (
                    <SourceIcon
                      key={source}
                      source={source}
                      className="h-4 w-4 text-foreground-subtle"
                    />
                  ))}
                </div>
              }
              className="min-w-[320px] max-w-[384px] grow shrink-0 basis-0"
            />
          ))}

          {/* Empty State */}
          {monitors.length === 0 && (
            <div className="flex w-full flex-col items-center justify-center gap-4 py-16">
              <span className="text-body font-body text-muted-foreground">
                No monitors yet. Create your first one!
              </span>
              <Button variant="primary" onClick={onNewMonitor}>
                <PlusIcon className="h-4 w-4" />
                Create Monitor
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
