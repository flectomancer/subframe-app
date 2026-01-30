"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SourceCard Component
 * 
 * A selectable card for choosing data sources during monitor creation.
 * Features a centered icon and label with hover and selected states.
 * 
 * Design tokens used:
 * - source-card: background color
 * - source-card-border: default border color
 * - source-card-hover-border: border color on hover (brand color)
 * - source-card-selected: background when selected
 * - source-card-selected-border: border when selected
 */

export interface SourceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon representing the data source */
  icon: React.ReactNode;
  /** Label for the source */
  label: string;
  /** Whether this source is selected */
  selected?: boolean;
  /** Change handler for selection */
  onSelect?: (selected: boolean) => void;
  /** Size variant */
  size?: "small" | "medium" | "large";
}

const SourceCard = React.forwardRef<HTMLDivElement, SourceCardProps>(
  (
    {
      className,
      icon,
      label,
      selected = false,
      onSelect,
      size = "medium",
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      onSelect?.(!selected);
    };
    
    const sizeClasses = {
      small: "h-20 w-20 gap-2",
      medium: "h-24 w-24 gap-2",
      large: "h-32 w-32 gap-3",
    };
    
    const iconSizeClasses = {
      small: "[&>svg]:h-4 [&>svg]:w-4",
      medium: "[&>svg]:h-5 [&>svg]:w-5",
      large: "[&>svg]:h-6 [&>svg]:w-6",
    };
    
    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          "flex flex-col items-center justify-center",
          "flex-none",
          "rounded-lg",
          "border",
          "cursor-pointer",
          "transition-colors duration-150",
          sizeClasses[size],
          selected
            ? "bg-source-card-selected border-source-card-selected-border"
            : "bg-source-card border-source-card-border hover:border-source-card-hover-border hover:bg-primary-muted",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "flex-shrink-0",
            iconSizeClasses[size],
            selected ? "text-primary" : "text-foreground-muted"
          )}
        >
          {icon}
        </span>
        <span
          className={cn(
            "text-caption-bold font-medium text-center",
            selected ? "text-foreground" : "text-foreground"
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);

SourceCard.displayName = "SourceCard";

export { SourceCard };
