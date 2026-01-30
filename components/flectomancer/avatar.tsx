"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Avatar Component
 * 
 * A circular container for user/AI profile indicators.
 * Features a gradient background matching the brand identity.
 * Used primarily in chat interfaces for AI assistant representation.
 * 
 * Design tokens used:
 * - avatar-gradient-from: brand-600
 * - avatar-gradient-to: brand-300 (light) / brand-500 (dark)
 */

const avatarVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "flex-shrink-0",
  ],
  {
    variants: {
      variant: {
        gradient: [
          "bg-gradient-to-br",
          "from-[var(--avatar-gradient-from)]",
          "to-[var(--avatar-gradient-to)]",
        ],
        muted: [
          "bg-muted",
        ],
        primary: [
          "bg-primary",
        ],
      },
      size: {
        small: "h-8 w-8",
        medium: "h-10 w-10",
        large: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "medium",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /** Icon or content to display inside the avatar */
  icon?: React.ReactNode;
  /** Image source for avatar image */
  src?: string;
  /** Alt text for avatar image */
  alt?: string;
  /** Fallback content when image fails to load */
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      src,
      alt,
      fallback,
      children,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);
    
    const iconSize = size === "small" ? "h-4 w-4" : size === "large" ? "h-6 w-6" : "h-5 w-5";
    
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ variant, size }), className)}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            className="h-full w-full rounded-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : icon ? (
          <span className={cn("text-primary-foreground [&>svg]:h-full [&>svg]:w-full", iconSize)}>
            {icon}
          </span>
        ) : fallback ? (
          <span className="text-primary-foreground text-caption-bold font-medium">
            {fallback}
          </span>
        ) : (
          children
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
