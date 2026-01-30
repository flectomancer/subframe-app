"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";
import { useTheme } from "@/lib/theme-provider";

/**
 * Sun icon for theme toggle
 */
function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

/**
 * Moon icon for theme toggle
 */
function MoonIcon({ className }: { className?: string }) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

/**
 * Settings icon
 */
function SettingsIcon({ className }: { className?: string }) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/**
 * ChevronRight icon for logo area
 */
function ChevronRightIcon({ className }: { className?: string }) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Sidebar Component
 * 
 * A fixed-width navigation sidebar with:
 * - Logo area at top
 * - Navigation menu in the middle
 * - Settings and theme toggles at bottom
 * 
 * Design tokens used:
 * - sidebar: background color
 * - sidebar-border: border color
 * - sidebar-foreground: text color
 */

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image source */
  logoSrc?: string;
  /** Navigation menu items (use SidebarMenuItem components) */
  children?: React.ReactNode;
  /** Additional content at the bottom (before settings) */
  footer?: React.ReactNode;
  /** Whether to show built-in settings and theme toggles */
  showSettings?: boolean;
  /** Callback when settings is clicked */
  onSettingsClick?: () => void;
  /** Width of the sidebar */
  width?: string;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      logoSrc = "https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png",
      children,
      footer,
      showSettings = true,
      onSettingsClick,
      width = "16rem", // 256px / w-64
      ...props
    },
    ref
  ) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    
    return (
      <aside
        ref={ref}
        style={{ width }}
        className={cn(
          "flex flex-col items-start justify-between",
          "h-full flex-shrink-0",
          "bg-sidebar",
          "shadow-lg",
          "backdrop-blur-2xl",
          "z-10",
          className
        )}
        {...props}
      >
        {/* Top section: Logo + Navigation */}
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          {/* Logo */}
          <div className="flex w-full items-center gap-1">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-12 flex-none object-cover"
            />
            <ChevronRightIcon className="h-10 w-10 text-accent font-display" />
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-medium text-sidebar-muted uppercase tracking-wide">
              Menu
            </span>
            <div className="flex w-full flex-col items-start gap-1">
              {children}
            </div>
          </nav>
        </div>
        
        {/* Bottom section: Footer + Settings + Theme */}
        <div className="flex w-full flex-col gap-2 px-6 py-6">
          {footer}
          
          {showSettings && (
            <div className="flex w-full items-center gap-2">
              {/* Settings Button */}
              <div
                onClick={onSettingsClick}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2",
                  "cursor-pointer",
                  "text-sidebar-foreground",
                  "hover:bg-sidebar-hover",
                  "transition-colors"
                )}
              >
                <SettingsIcon className="h-4 w-4 text-sidebar-muted" />
                <span className="text-body">Settings</span>
              </div>
              
              {/* Theme Toggle Buttons */}
              <IconButton
                variant="neutral-tertiary"
                size="medium"
                icon={<SunIcon />}
                onClick={() => setTheme("light")}
                aria-label="Switch to light mode"
                className={cn(
                  resolvedTheme === "light" && "bg-sidebar-active text-sidebar-active-foreground"
                )}
              />
              <IconButton
                variant="neutral-tertiary"
                size="medium"
                icon={<MoonIcon />}
                onClick={() => setTheme("dark")}
                aria-label="Switch to dark mode"
                className={cn(
                  resolvedTheme === "dark" && "bg-sidebar-active text-sidebar-active-foreground"
                )}
              />
            </div>
          )}
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
