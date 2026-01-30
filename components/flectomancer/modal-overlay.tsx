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
 * A full-screen modal overlay with smooth entrance/exit animations.
 * Used for the "New Monitor" creation flow and similar full-page modals.
 * 
 * Features:
 * - Smooth backdrop fade-in with blur
 * - Modal content scales and fades in from below
 * - Exit animations (reverse of entrance)
 * - Customizable animation duration
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
  /** Animation duration in milliseconds (default: 300) */
  animationDuration?: number;
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
      animationDuration = 300,
      ...props
    },
    ref
  ) => {
    // Track animation state for entrance/exit
    const [isVisible, setIsVisible] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(false);
    
    // Handle open state changes with animation
    React.useEffect(() => {
      if (open) {
        // Opening: render first, then animate in
        setShouldRender(true);
        setIsAnimating(true);
        // Use requestAnimationFrame to ensure the DOM has updated before animating
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
        // Clear animating state after animation completes
        const timer = setTimeout(() => setIsAnimating(false), animationDuration);
        return () => clearTimeout(timer);
      } else {
        // Closing: animate out, then stop rendering
        setIsVisible(false);
        setIsAnimating(true);
        const timer = setTimeout(() => {
          setShouldRender(false);
          setIsAnimating(false);
        }, animationDuration);
        return () => clearTimeout(timer);
      }
    }, [open, animationDuration]);
    
    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && onClose && !isAnimating) {
          onClose();
        }
      };
      
      if (shouldRender) {
        document.addEventListener("keydown", handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";
      }
      
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }, [shouldRender, onClose, isAnimating]);
    
    if (!shouldRender) return null;
    
    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50",
          "flex items-center justify-center",
          // Backdrop animation
          "transition-all ease-out",
          isVisible
            ? "bg-overlay backdrop-blur-sm"
            : "bg-transparent backdrop-blur-none",
          className
        )}
        style={{
          transitionDuration: `${animationDuration}ms`,
        }}
        onClick={(e) => {
          // Close when clicking the backdrop (only if not animating)
          if (e.target === e.currentTarget && onClose && !isAnimating) {
            onClose();
          }
        }}
        {...props}
      >
        {/* Modal container with animation */}
        <div
          className={cn(
            "flex flex-col",
            "h-full w-full",
            "overflow-hidden",
            // Background
            useGradientBackground
              ? "bg-gradient-to-br from-[var(--background-gradient-from)] via-[var(--background-gradient-via)] to-[var(--background-gradient-to)]"
              : "bg-card",
            // Animation properties
            "transition-all ease-out",
            isVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.98] translate-y-4"
          )}
          style={{
            transitionDuration: `${animationDuration}ms`,
            // Slightly stagger the content animation behind the backdrop
            transitionDelay: isVisible ? "50ms" : "0ms",
          }}
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
              disabled={isAnimating}
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
