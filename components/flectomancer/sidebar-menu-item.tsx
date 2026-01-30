"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * SidebarMenuItem Component
 * 
 * A navigation item for use within the Sidebar component.
 * Supports active and hover states with proper visual feedback.
 * 
 * Design tokens used:
 * - sidebar-hover: background on hover
 * - sidebar-active: background when active
 * - sidebar-active-foreground: text color when active (brand color)
 * - sidebar-foreground: default text color
 * - sidebar-muted: icon color when inactive
 */

const sidebarMenuItemVariants = cva(
  [
    "flex w-full items-center gap-3",
    "rounded-md",
    "px-3 py-2",
    "cursor-pointer",
    "transition-colors duration-150",
    "text-body",
  ],
  {
    variants: {
      active: {
        true: [
          "bg-sidebar-active",
          "text-sidebar-active-foreground",
          "font-medium",
          "shadow-brand-sm",
        ],
        false: [
          "text-sidebar-foreground",
          "hover:bg-sidebar-hover",
        ],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface SidebarMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarMenuItemVariants> {
  /** If true, renders as a Slot for composition with links */
  asChild?: boolean;
  /** Icon displayed before the label */
  icon?: React.ReactNode;
  /** The menu item label */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Badge or indicator to show on the right */
  badge?: React.ReactNode;
}

const SidebarMenuItem = React.forwardRef<HTMLDivElement, SidebarMenuItemProps>(
  (
    {
      className,
      asChild = false,
      icon,
      label,
      active = false,
      badge,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    
    return (
      <Comp
        ref={ref}
        className={cn(sidebarMenuItemVariants({ active }), className)}
        {...props}
      >
        {icon && (
          <span
            className={cn(
              "flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4",
              active ? "text-sidebar-active-foreground" : "text-sidebar-muted"
            )}
          >
            {icon}
          </span>
        )}
        <span className="flex-1 truncate">{label}</span>
        {badge && (
          <span className="flex-shrink-0">
            {badge}
          </span>
        )}
      </Comp>
    );
  }
);

SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, sidebarMenuItemVariants };
