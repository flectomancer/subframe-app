"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge Component
 * 
 * A versatile status indicator used throughout the Flectomancer design system.
 * Supports brand, neutral, success, warning, and error variants with optional icons.
 * 
 * Design tokens used:
 * - Backgrounds: primary-muted, muted, success-muted, warning-muted, error-muted
 * - Borders: primary-muted, border, success-border, warning-border, error-border  
 * - Text: primary, foreground-muted, success-muted-foreground, warning-muted-foreground, error-muted-foreground
 */

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "h-6 px-2",
    "rounded-md",
    "border",
    "text-caption font-medium",
    "whitespace-nowrap",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        brand: [
          "bg-primary-muted border-primary-muted",
          "text-primary",
        ],
        neutral: [
          "bg-muted border-border",
          "text-foreground-muted",
        ],
        success: [
          "bg-success-muted border-success-border",
          "text-success-muted-foreground",
        ],
        warning: [
          "bg-warning-muted border-warning-border", 
          "text-warning-muted-foreground",
        ],
        error: [
          "bg-error-muted border-error-border",
          "text-error-muted-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "brand",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional icon displayed before the text */
  icon?: React.ReactNode;
  /** Optional icon displayed after the text */
  iconRight?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, icon, iconRight, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0 [&>svg]:h-3 [&>svg]:w-3">
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
        {iconRight && (
          <span className="flex-shrink-0 [&>svg]:h-3 [&>svg]:w-3">
            {iconRight}
          </span>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
