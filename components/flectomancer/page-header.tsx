"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * PageHeader Component
 * 
 * A simple header row with a title and optional action slot.
 * Used at the top of main content areas.
 * 
 * Design tokens used:
 * - foreground: title text color
 */

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The page title */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Action element (typically a Button) displayed on the right */
  action?: React.ReactNode;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, subtitle, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between",
          "px-8 py-6",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-heading-1 font-semibold text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body text-foreground-muted">
              {subtitle}
            </p>
          )}
        </div>
        
        {action && (
          <div className="flex items-center gap-3">
            {action}
          </div>
        )}
        
        {children}
      </div>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
