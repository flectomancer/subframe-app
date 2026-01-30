"use client";

import { useTheme } from "@/lib/theme-provider";

/**
 * Inline SVG icons to avoid lucide-react dependency issues
 */
function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
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
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

/**
 * Theme Demo Page
 * Showcases all design tokens and allows testing the theme switcher
 */
export default function ThemeDemoPage() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-heading-1 font-heading-1">
            Flectomancer Design System
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                theme === "light"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
              }`}
            >
              <SunIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                theme === "dark"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
              }`}
            >
              <MoonIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                theme === "system"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
              }`}
            >
              <MonitorIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-body text-foreground-muted">
          Current theme: <strong>{theme}</strong> (resolved:{" "}
          <strong>{resolvedTheme}</strong>)
        </p>
      </header>

      <main className="p-6">
        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 className="text-heading-2 font-heading-2 mb-6">
            Semantic Color Tokens
          </h2>

          {/* Background Colors */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Backgrounds</h3>
            <div className="grid grid-cols-3 gap-4">
              <ColorSwatch
                name="background"
                className="bg-background border border-border"
              />
              <ColorSwatch
                name="background-subtle"
                className="bg-background-subtle border border-border"
              />
              <ColorSwatch
                name="background-muted"
                className="bg-background-muted border border-border"
              />
            </div>
          </div>

          {/* Foreground Colors */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Foreground</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <span className="text-foreground">foreground</span>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <span className="text-foreground-muted">foreground-muted</span>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <span className="text-foreground-subtle">foreground-subtle</span>
              </div>
              <div className="rounded-lg border border-border bg-primary p-4">
                <span className="text-foreground-inverse">foreground-inverse</span>
              </div>
            </div>
          </div>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Primary</h3>
            <div className="grid grid-cols-4 gap-4">
              <ColorSwatch
                name="primary"
                className="bg-primary text-primary-foreground"
                textClass="text-primary-foreground"
              />
              <ColorSwatch
                name="primary-hover"
                className="bg-primary-hover text-primary-foreground"
                textClass="text-primary-foreground"
              />
              <ColorSwatch
                name="primary-muted"
                className="bg-primary-muted border border-border"
              />
              <div className="flex items-center justify-center rounded-lg bg-primary-muted p-4 border border-border">
                <span className="text-primary-muted-foreground">
                  primary-muted-foreground
                </span>
              </div>
            </div>
          </div>

          {/* Secondary & Accent */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">
              Secondary & Accent
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <ColorSwatch
                name="secondary"
                className="bg-secondary border border-border"
              />
              <ColorSwatch
                name="secondary-hover"
                className="bg-secondary-hover border border-border"
              />
              <ColorSwatch
                name="accent"
                className="bg-accent text-accent-foreground"
                textClass="text-accent-foreground"
              />
              <ColorSwatch
                name="accent-muted"
                className="bg-accent-muted border border-border"
              />
            </div>
          </div>

          {/* Status Colors */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">
              Status Colors
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Success */}
              <div className="space-y-2">
                <ColorSwatch
                  name="success"
                  className="bg-success text-success-foreground"
                  textClass="text-success-foreground"
                />
                <ColorSwatch
                  name="success-muted"
                  className="bg-success-muted border border-border"
                />
              </div>
              {/* Warning */}
              <div className="space-y-2">
                <ColorSwatch
                  name="warning"
                  className="bg-warning text-warning-foreground"
                  textClass="text-warning-foreground"
                />
                <ColorSwatch
                  name="warning-muted"
                  className="bg-warning-muted border border-border"
                />
              </div>
              {/* Error */}
              <div className="space-y-2">
                <ColorSwatch
                  name="error"
                  className="bg-error text-error-foreground"
                  textClass="text-error-foreground"
                />
                <ColorSwatch
                  name="error-muted"
                  className="bg-error-muted border border-border"
                />
              </div>
            </div>
          </div>

          {/* Card & Surface */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">
              Cards & Surfaces
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-card-foreground text-heading-3 font-heading-3 mb-2">
                  Card
                </h4>
                <p className="text-foreground-muted text-body">
                  This is a card component using bg-card and text-card-foreground
                </p>
              </div>
              <div className="rounded-lg border border-border bg-popover p-6">
                <h4 className="text-popover-foreground text-heading-3 font-heading-3 mb-2">
                  Popover
                </h4>
                <p className="text-foreground-muted text-body">
                  This is a popover using bg-popover and text-popover-foreground
                </p>
              </div>
            </div>
          </div>

          {/* Borders */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Borders</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border-2 border-border bg-card p-4 text-center">
                <span className="text-body text-foreground-muted">border</span>
              </div>
              <div className="rounded-lg border-2 border-border-muted bg-card p-4 text-center">
                <span className="text-body text-foreground-muted">
                  border-muted
                </span>
              </div>
              <div className="rounded-lg border-2 border-border-strong bg-card p-4 text-center">
                <span className="text-body text-foreground-muted">
                  border-strong
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Component Tokens Section */}
        <section className="mb-12">
          <h2 className="text-heading-2 font-heading-2 mb-6">
            Component-Specific Tokens
          </h2>

          {/* Sidebar */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Sidebar</h3>
            <div className="flex gap-4">
              <div className="w-64 rounded-lg border border-sidebar-border bg-sidebar p-4">
                <div className="mb-4 text-sidebar-foreground">Sidebar Item</div>
                <div className="mb-4 text-sidebar-muted">Muted Text</div>
                <div className="rounded-md bg-sidebar-hover p-2 mb-2">
                  Hover State
                </div>
                <div className="rounded-md bg-sidebar-active p-2 text-sidebar-active-foreground">
                  Active State
                </div>
              </div>
            </div>
          </div>

          {/* Chat Bubbles */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Chat Bubbles</h3>
            <div className="max-w-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-300" />
                <div className="rounded-lg bg-chat-ai px-4 py-3">
                  <span className="text-chat-ai-foreground">
                    AI message using chat-ai tokens
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="rounded-lg bg-chat-user px-4 py-3">
                  <span className="text-chat-user-foreground">
                    User message using chat-user tokens
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Progress Bar</h3>
            <div className="max-w-md">
              <div className="h-2 w-full rounded-full bg-progress-track">
                <div className="h-2 w-2/5 rounded-full bg-progress-fill" />
              </div>
              <p className="mt-2 text-caption text-foreground-muted">
                40% complete
              </p>
            </div>
          </div>

          {/* Source Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Source Cards</h3>
            <div className="flex gap-4">
              <div className="w-32 rounded-lg border border-source-card-border bg-source-card p-4 text-center cursor-pointer hover:border-primary transition-colors">
                <span className="text-body">Default</span>
              </div>
              <div className="w-32 rounded-lg border-2 border-primary bg-source-card-selected p-4 text-center">
                <span className="text-body">Selected</span>
              </div>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 font-heading-3 mb-4">Preview Cards</h3>
            <div className="flex gap-4">
              <div className="w-64 rounded-lg border border-preview-card-border bg-preview-card p-4">
                <span className="text-caption-bold text-foreground-muted">
                  FIELD NAME
                </span>
                <p className="text-body text-foreground-subtle italic">
                  Waiting for input...
                </p>
              </div>
              <div className="w-64 rounded-lg border-2 border-success bg-preview-card-complete p-4">
                <span className="text-caption-bold text-success">
                  FIELD NAME
                </span>
                <p className="text-body text-foreground">Completed value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-12">
          <h2 className="text-heading-2 font-heading-2 mb-6">Typography</h2>
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <span className="text-caption text-foreground-muted">
                heading-1 (30px/36px, 600)
              </span>
              <p className="text-heading-1 font-heading-1">
                The quick brown fox jumps
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                heading-2 (20px/24px, 600)
              </span>
              <p className="text-heading-2 font-heading-2">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                heading-3 (16px/20px, 600)
              </span>
              <p className="text-heading-3 font-heading-3">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                body (14px/20px, 400)
              </span>
              <p className="text-body font-body">
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                body-bold (14px/20px, 500)
              </span>
              <p className="text-body-bold font-body-bold">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                caption (12px/16px, 400)
              </span>
              <p className="text-caption font-caption">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className="text-caption text-foreground-muted">
                caption-bold (12px/16px, 500)
              </span>
              <p className="text-caption-bold font-caption-bold">
                THE QUICK BROWN FOX JUMPS
              </p>
            </div>
          </div>
        </section>

        {/* Brand Gradient Background */}
        <section className="mb-12">
          <h2 className="text-heading-2 font-heading-2 mb-6">
            Page Gradient Background
          </h2>
          <div className="h-48 rounded-lg bg-page-gradient flex items-center justify-center">
            <div className="rounded-lg bg-card p-6 shadow-lg">
              <p className="text-card-foreground">
                Card on gradient background (light mode signature look)
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ColorSwatch({
  name,
  className,
  textClass = "text-foreground",
}: {
  name: string;
  className: string;
  textClass?: string;
}) {
  return (
    <div
      className={`flex h-20 items-center justify-center rounded-lg ${className}`}
    >
      <span className={`text-body ${textClass}`}>{name}</span>
    </div>
  );
}
