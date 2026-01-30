"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";
import { SidebarMenuItem } from "./sidebar-menu-item";

/**
 * Inline SVG icons
 */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

/**
 * Sidebar Props
 */
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image URL */
  logoUrl?: string;
  /** Active menu item */
  activeItem?: "dashboard" | "archived";
  /** Navigation callback */
  onNavigate?: (item: "dashboard" | "archived" | "settings") => void;
  /** Theme change callback */
  onThemeChange?: (theme: "light" | "dark" | "system") => void;
  /** Current theme */
  currentTheme?: "light" | "dark";
  /** Whether sidebar is in mobile drawer mode */
  isMobileDrawer?: boolean;
  /** Close drawer callback (for mobile) */
  onClose?: () => void;
}

/**
 * Sidebar Component
 * 
 * A fixed-width navigation sidebar featuring:
 * - Logo at top
 * - Navigation menu (Dashboard, Archived)
 * - Settings and theme toggles at bottom
 * - Mobile drawer mode with slide-in animation
 */
const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      logoUrl = "https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png",
      activeItem = "dashboard",
      onNavigate,
      onThemeChange,
      currentTheme = "dark",
      isMobileDrawer = false,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex w-64 flex-none flex-col items-start justify-between self-stretch",
          "bg-sidebar border-r border-sidebar-border",
          "shadow-lg backdrop-blur-2xl z-10",
          // Mobile drawer styles
          isMobileDrawer && [
            "fixed left-0 top-0 bottom-0 z-50",
            "transform transition-transform duration-300 ease-out",
          ],
          className
        )}
        {...props}
      >
        {/* Top section */}
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          {/* Logo + Close button for mobile */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-12 flex-none object-cover"
              />
              <ChevronRightIcon className="h-10 w-10 text-primary font-display" />
            </div>
            {/* Mobile close button */}
            {isMobileDrawer && onClose && (
              <IconButton
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close menu"
              >
                <XIcon className="h-5 w-5" />
              </IconButton>
            )}
          </div>

          {/* Menu */}
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-caption-bold text-sidebar-muted uppercase tracking-wide">
              Menu
            </span>
            <div className="flex w-full flex-col items-start gap-1">
              <SidebarMenuItem
                icon={<HomeIcon className="h-4 w-4" />}
                label="Dashboard"
                active={activeItem === "dashboard"}
                onClick={() => onNavigate?.("dashboard")}
              />
              <SidebarMenuItem
                icon={<ClockIcon className="h-4 w-4" />}
                label="Archived"
                active={activeItem === "archived"}
                onClick={() => onNavigate?.("archived")}
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex w-full items-center gap-2 px-6 py-6">
          <SidebarMenuItem
            icon={<SettingsIcon className="h-4 w-4" />}
            label="Settings"
            active={false}
            onClick={() => onNavigate?.("settings")}
            className="flex-shrink"
          />
          <IconButton
            variant="ghost"
            size="sm"
            onClick={() => onThemeChange?.("light")}
            aria-label="Light mode"
            className={cn(
              currentTheme === "light" && "bg-sidebar-active text-sidebar-active-foreground"
            )}
          >
            <SunIcon className="h-4 w-4" />
          </IconButton>
          <IconButton
            variant="ghost"
            size="sm"
            onClick={() => onThemeChange?.("dark")}
            aria-label="Dark mode"
            className={cn(
              currentTheme === "dark" && "bg-sidebar-active text-sidebar-active-foreground"
            )}
          >
            <MoonIcon className="h-4 w-4" />
          </IconButton>
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
