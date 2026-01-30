"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button Component
 * 
 * A comprehensive button system supporting multiple variants, sizes, and states.
 * Matches the Subframe Button component exactly with all 10 variants and 3 sizes.
 * 
 * Variants:
 * - brand-primary: Solid brand color (primary action)
 * - brand-secondary: Light brand background
 * - brand-tertiary: Transparent with brand text
 * - neutral-primary: Solid neutral background
 * - neutral-secondary: Bordered neutral button
 * - neutral-tertiary: Transparent neutral (ghost)
 * - destructive-primary: Solid error color
 * - destructive-secondary: Light error background
 * - destructive-tertiary: Transparent with error text
 * - inverse: For use on dark backgrounds
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md",
    "text-body-bold font-medium",
    "whitespace-nowrap",
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
        small: "h-6 px-2 gap-1 text-caption-bold",
        medium: "h-8 px-3",
        large: "h-10 px-4 text-heading-3",
      },
    },
    defaultVariants: {
      variant: "brand-primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** If true, renders as a Slot for composition */
  asChild?: boolean;
  /** Optional icon displayed before the text */
  icon?: React.ReactNode;
  /** Optional icon displayed after the text */
  iconRight?: React.ReactNode;
  /** Shows a loading spinner and hides content */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      iconRight,
      loading = false,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    
    const iconSize = size === "small" ? "h-3 w-3" : size === "large" ? "h-5 w-5" : "h-4 w-4";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Spinner className={iconSize} />
        ) : (
          <>
            {icon && (
              <span className={cn("flex-shrink-0 [&>svg]:h-full [&>svg]:w-full", iconSize, loading && "hidden")}>
                {icon}
              </span>
            )}
            {children && <span className={loading ? "hidden" : undefined}>{children}</span>}
            {iconRight && (
              <span className={cn("flex-shrink-0 [&>svg]:h-full [&>svg]:w-full", iconSize, loading && "hidden")}>
                {iconRight}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

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

export { Button, buttonVariants };
