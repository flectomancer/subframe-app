"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

/**
 * MonitorCard Component
 * 
 * A card displaying monitor information on the dashboard.
 * Shows name, description, data sources, status, and alert count.
 * Features a subtle hover animation with lift effect.
 * 
 * Design tokens used:
 * - monitor-card: background color
 * - monitor-card-border: border color
 * - foreground: title text
 * - foreground-muted: description text
 * - foreground-subtle: metadata text
 * - accent: alert count text
 */

export interface MonitorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Monitor name/title */
  name: string;
  /** Brief description of what's being monitored */
  description: string;
  /** Array of source icons to display */
  sources?: React.ReactNode[];
  /** Monitor status */
  status?: "active" | "paused" | "error";
  /** Number of alerts */
  alertCount?: number;
  /** Last updated timestamp */
  lastUpdated?: string;
  /** Click handler */
  onClick?: () => void;
}

const MonitorCard = React.forwardRef<HTMLDivElement, MonitorCardProps>(
  (
    {
      className,
      name,
      description,
      sources = [],
      status = "active",
      alertCount = 0,
      lastUpdated,
      onClick,
      ...props
    },
    ref
  ) => {
    const statusVariant = {
      active: "success",
      paused: "neutral",
      error: "error",
    } as const;
    
    const statusLabel = {
      active: "Active",
      paused: "Paused",
      error: "Error",
    };
    
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          "flex flex-col items-start gap-4",
          "min-w-[320px] max-w-[384px]",
          "grow shrink-0 basis-0",
          "rounded-lg",
          "border border-monitor-card-border",
          "bg-monitor-card",
          "cursor-pointer",
          "transition-all duration-200",
          "hover:shadow-md hover:-translate-y-0.5",
          "hover:border-[var(--monitor-card-hover-border)]",
          className
        )}
        {...props}
      >
        {/* Header: Title + Status */}
        <div className="flex w-full items-start justify-between px-6 pt-6">
          <h3 className="text-heading-3 font-semibold text-foreground">
            {name}
          </h3>
          <Badge variant={statusVariant[status]}>
            {statusLabel[status]}
          </Badge>
        </div>
        
        {/* Body: Description + Sources */}
        <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
          <p className="text-body text-foreground-muted">
            {description}
          </p>
          
          {sources.length > 0 && (
            <div className="flex items-center gap-3">
              {sources.map((source, index) => (
                <span
                  key={index}
                  className="text-foreground-subtle [&>svg]:h-4 [&>svg]:w-4"
                >
                  {source}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer: Metadata + Alert Count */}
        <div className="flex w-full items-center justify-between px-6 pb-6">
          {lastUpdated && (
            <span className="text-caption text-foreground-subtle">
              {lastUpdated}
            </span>
          )}
          {alertCount > 0 && (
            <span className="text-caption-bold font-medium text-accent">
              {alertCount} alert{alertCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
    );
  }
);

MonitorCard.displayName = "MonitorCard";

export { MonitorCard };
