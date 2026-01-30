"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * CheckCircle icon for completed state
 */
function CheckCircleIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/**
 * PreviewCard Component
 * 
 * A form field preview card showing the current state of a form field.
 * Used in the monitor creation flow to show completed vs incomplete fields.
 * 
 * States:
 * - incomplete: Default state with muted styling and placeholder text
 * - complete: Success styling with check indicator and actual value
 * 
 * Design tokens used:
 * - preview-card: default background
 * - preview-card-border: default border
 * - preview-card-complete: completed background
 * - preview-card-complete-border: completed border (success color)
 */

export interface PreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon representing the field type */
  icon: React.ReactNode;
  /** Label for the field (uppercase) */
  label: string;
  /** Current value or placeholder text */
  value: string;
  /** Whether this field is complete */
  complete?: boolean;
  /** Whether to show the value as italic placeholder text */
  isPlaceholder?: boolean;
}

const PreviewCard = React.forwardRef<HTMLDivElement, PreviewCardProps>(
  (
    {
      className,
      icon,
      label,
      value,
      complete = false,
      isPlaceholder = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full flex-col items-start gap-1",
          "rounded-lg",
          "border",
          "px-4 py-4",
          "relative",
          complete
            ? "bg-preview-card-complete border-preview-card-complete-border"
            : "bg-preview-card border-preview-card-border",
          className
        )}
        {...props}
      >
        {/* Complete indicator */}
        {complete && (
          <div className="absolute top-3 right-3">
            <CheckCircleIcon className="h-4 w-4 text-success" />
          </div>
        )}
        
        {/* Label row with icon */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "[&>svg]:h-4 [&>svg]:w-4",
              complete ? "text-success" : "text-foreground-subtle"
            )}
          >
            {icon}
          </span>
          <span
            className={cn(
              "text-caption-bold font-medium uppercase tracking-wide",
              complete ? "text-success" : "text-foreground-subtle"
            )}
          >
            {label}
          </span>
        </div>
        
        {/* Value */}
        <span
          className={cn(
            "text-body",
            isPlaceholder && !complete
              ? "text-foreground-subtle italic"
              : "text-foreground"
          )}
        >
          {value}
        </span>
      </div>
    );
  }
);

PreviewCard.displayName = "PreviewCard";

export { PreviewCard };
