"use client";

import * as React from "react";

/* ============================================================================
   THEME SYSTEM
   
   Provides a robust theming solution with:
   - System preference detection
   - User preference persistence
   - No flash of wrong theme on load
   - Smooth theme transitions
   ============================================================================ */

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

/**
 * Get the system's preferred color scheme
 */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Resolve a theme value to its actual light/dark value
 */
function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}

/**
 * Apply the theme to the document
 */
function applyTheme(theme: ResolvedTheme, disableTransitions = false) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  // Temporarily disable transitions to prevent flash
  if (disableTransitions) {
    root.classList.add("no-transitions");
  }

  // Apply theme class
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      theme === "dark" ? "#0d0d0d" : "#ffffff"
    );
  }

  // Re-enable transitions after a frame
  if (disableTransitions) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove("no-transitions");
      });
    });
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "flectomancer-theme",
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    // Check localStorage on initial render (client-side only)
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored && ["light", "dark", "system"].includes(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() =>
    resolveTheme(theme)
  );

  // Update resolved theme when theme changes
  React.useEffect(() => {
    const resolved = resolveTheme(theme);
    setResolvedTheme(resolved);
    applyTheme(resolved, disableTransitionOnChange);
  }, [theme, disableTransitionOnChange]);

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setResolvedTheme(newTheme);
      applyTheme(newTheme, disableTransitionOnChange);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, enableSystem, disableTransitionOnChange]);

  // Apply theme on mount (handles SSR hydration)
  React.useEffect(() => {
    applyTheme(resolvedTheme, true);
  }, []);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey]
  );

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * Script to inject in <head> to prevent flash of wrong theme
 * Use this in your root layout's <head> to apply theme before React hydrates
 */
export function ThemeScript({ storageKey = "flectomancer-theme" }: { storageKey?: string }) {
  const script = `
    (function() {
      const storageKey = "${storageKey}";
      const stored = localStorage.getItem(storageKey);
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      let theme = stored;
      if (!theme || theme === "system") {
        theme = systemDark ? "dark" : "light";
      }
      
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
      
      // Set theme-color meta
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.content = theme === "dark" ? "#0d0d0d" : "#ffffff";
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
