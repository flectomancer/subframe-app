"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * ProgressBar Component
 * 
 * A horizontal progress indicator showing completion percentage.
 * Used in multi-step forms and loading states.
 * 
 * Design tokens used:
 * - progress-track: background track color
 * - progress-fill: fill color (success by default)
 */

const progressBarVariants = cva(
  [
    "flex h-1 w-full flex-col items-start",
    "overflow-hidden rounded-full",
    "bg-progress-track",
  ],
  {
    variants: {
      size: {
        small: "h-0.5",
        medium: "h-1",
        large: "h-2",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const progressFillVariants = cva(
  [
    "h-full",
    "rounded-full",
    "transition-all duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: "bg-progress-fill",
        brand: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants>,
    VariantProps<typeof progressFillVariants> {
  /** Progress value (0-100) */
  value: number;
  /** Whether to show the percentage label */
  showLabel?: boolean;
  /** Custom label format function */
  formatLabel?: (value: number) => string;
  /** Additional class for the container wrapper */
  wrapperClassName?: string;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      wrapperClassName,
      value,
      size,
      variant,
      showLabel = false,
      formatLabel,
      ...props
    },
    ref
  ) => {
    // Clamp value between 0 and 100
    const clampedValue = Math.min(100, Math.max(0, value));
    
    const defaultFormat = (v: number) => `${Math.round(v)}% complete`;
    const labelFormatter = formatLabel || defaultFormat;
    
    if (showLabel) {
      return (
        <div className={cn("flex w-full items-center gap-3", wrapperClassName)}>
          <div
            ref={ref}
            className={cn(progressBarVariants({ size }), "grow shrink-0 basis-0", className)}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            {...props}
          >
            <div
              className={cn(progressFillVariants({ variant }))}
              style={{ width: `${clampedValue}%` }}
            />
          </div>
          <span className="text-caption text-foreground flex-shrink-0">
            {labelFormatter(clampedValue)}
          </span>
        </div>
      );
    }
    
    return (
      <div
        ref={ref}
        className={cn(progressBarVariants({ size }), className)}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <div
          className={cn(progressFillVariants({ variant }))}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar, progressBarVariants, progressFillVariants };
