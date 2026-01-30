"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * IconButton Component
 * 
 * A square button designed for icon-only interactions.
 * Matches the Subframe IconButton with all variants and sizes.
 * Default variant is neutral-tertiary (ghost style).
 * 
 * Common uses:
 * - Close buttons
 * - Navigation toggles
 * - Theme switchers
 * - Action buttons in toolbars
 */

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-md",
    "cursor-pointer",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        // Brand variants
        "brand-primary": [
          "bg-primary text-primary-foreground",
          "hover:bg-primary-hover",
          "active:bg-primary",
        ],
        "brand-secondary": [
          "bg-primary-muted text-primary",
          "hover:bg-[color-mix(in_srgb,var(--primary-muted)_80%,var(--primary)_20%)]",
          "active:bg-primary-muted",
        ],
        "brand-tertiary": [
          "bg-transparent text-primary",
          "hover:bg-primary-muted",
          "active:bg-[color-mix(in_srgb,var(--primary-muted)_80%,var(--primary)_20%)]",
        ],
        // Neutral variants
        "neutral-primary": [
          "bg-muted text-foreground-muted",
          "hover:bg-secondary-hover",
          "active:bg-muted",
        ],
        "neutral-secondary": [
          "bg-card text-foreground-muted",
          "border border-border",
          "hover:bg-card-hover",
          "active:bg-card",
        ],
        "neutral-tertiary": [
          "bg-transparent text-foreground-muted",
          "hover:bg-muted",
          "active:bg-secondary",
        ],
        // Destructive variants
        "destructive-primary": [
          "bg-error text-error-foreground",
          "hover:bg-[color-mix(in_srgb,var(--error)_90%,black_10%)]",
          "active:bg-error",
        ],
        "destructive-secondary": [
          "bg-error-muted text-error-muted-foreground",
          "hover:bg-[color-mix(in_srgb,var(--error-muted)_80%,var(--error)_20%)]",
          "active:bg-error-muted",
        ],
        "destructive-tertiary": [
          "bg-transparent text-error-muted-foreground",
          "hover:bg-error-muted",
          "active:bg-[color-mix(in_srgb,var(--error-muted)_80%,var(--error)_20%)]",
        ],
        // Inverse (for dark backgrounds)
        "inverse": [
          "bg-transparent text-foreground-inverse",
          "hover:bg-white/15",
          "active:bg-white/25",
        ],
      },
      size: {
        small: "h-6 w-6",
        medium: "h-8 w-8",
        large: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "neutral-tertiary",
      size: "medium",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** If true, renders as a Slot for composition */
  asChild?: boolean;
  /** The icon to display (required) */
  icon: React.ReactNode;
  /** Shows a loading spinner */
  loading?: boolean;
  /** Accessible label for screen readers */
  "aria-label": string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      loading = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    
    const iconSize = size === "small" ? "h-4 w-4" : size === "large" ? "h-5 w-5" : "h-[18px] w-[18px]";
    
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Spinner className={iconSize} />
        ) : (
          <span className={cn("flex-shrink-0 [&>svg]:h-full [&>svg]:w-full", iconSize)}>
            {icon}
          </span>
        )}
      </Comp>
    );
  }
);

IconButton.displayName = "IconButton";

/**
 * Loading spinner for button loading state
 */
function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export { IconButton, iconButtonVariants };
