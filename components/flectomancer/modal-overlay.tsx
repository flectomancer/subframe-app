"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";

/**
 * X (close) icon
 */
function XIcon({ className }: { className?: string }) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/**
 * ModalOverlay Component
 * 
 * A full-screen modal overlay with backdrop blur effect.
 * Used for the "New Monitor" creation flow and similar full-page modals.
 * 
 * Features:
 * - Backdrop blur with semi-transparent overlay
 * - Close button in header
 * - Customizable title
 * - Full content flexibility
 * 
 * Design tokens used:
 * - overlay: backdrop color
 * - background-gradient-*: modal background (follows page gradient in light mode)
 * - card: modal background in dark mode
 */

export interface ModalOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Modal title displayed in the header */
  title?: string;
  /** Modal content */
  children?: React.ReactNode;
  /** Whether to use gradient background (like the design) or solid */
  useGradientBackground?: boolean;
}

const ModalOverlay = React.forwardRef<HTMLDivElement, ModalOverlayProps>(
  (
    {
      className,
      open = true,
      onClose,
      title,
      children,
      useGradientBackground = true,
      ...props
    },
    ref
  ) => {
    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && onClose) {
          onClose();
        }
      };
      
      if (open) {
        document.addEventListener("keydown", handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";
      }
      
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }, [open, onClose]);
    
    if (!open) return null;
    
    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50",
          "flex items-center justify-center",
          "bg-overlay backdrop-blur-sm",
          className
        )}
        onClick={(e) => {
          // Close when clicking the backdrop
          if (e.target === e.currentTarget && onClose) {
            onClose();
          }
        }}
        {...props}
      >
        {/* Modal container */}
        <div
          className={cn(
            "flex flex-col",
            "h-full w-full",
            "overflow-hidden",
            useGradientBackground
              ? "bg-gradient-to-br from-[var(--background-gradient-from)] via-[var(--background-gradient-via)] to-[var(--background-gradient-to)]"
              : "bg-card"
          )}
        >
          {/* Header */}
          <div className="flex w-full items-center justify-between px-6 py-4">
            {/* Close button */}
            <IconButton
              variant="neutral-tertiary"
              size="medium"
              icon={<XIcon />}
              onClick={onClose}
              aria-label="Close modal"
              className="hover:bg-secondary"
            />
            
            {/* Title */}
            {title && (
              <h2 className="text-heading-3 font-semibold text-foreground">
                {title}
              </h2>
            )}
            
            {/* Spacer for centering title */}
            <div className="h-8 w-8" />
          </div>
          
          {/* Content */}
          <div className="flex w-full flex-1 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

ModalOverlay.displayName = "ModalOverlay";

export { ModalOverlay };
