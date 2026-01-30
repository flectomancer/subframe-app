#!/usr/bin/env node

/**
 * Flectomancer Design System Installer
 * 
 * Usage:
 *   npx github:flectomancer/subframe-app/scripts/install-flectomancer.mjs
 *   
 * Or after cloning:
 *   node scripts/install-flectomancer.mjs
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync, cpSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// Colors for terminal output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  console.log(`${colors.cyan}[${step}]${colors.reset} ${message}`);
}

function logSuccess(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

function logError(message) {
  console.log(`${colors.red}✗${colors.reset} ${message}`);
}

// Get target directory (current working directory or specified)
const targetDir = process.cwd();

log("\n╔════════════════════════════════════════════════════════════╗", "cyan");
log("║         FLECTOMANCER DESIGN SYSTEM INSTALLER               ║", "cyan");
log("╚════════════════════════════════════════════════════════════╝\n", "cyan");

log(`Installing to: ${targetDir}\n`, "yellow");

// Check if this is a Next.js project
if (!existsSync(join(targetDir, "package.json"))) {
  logError("No package.json found. Please run this in a Next.js project root.");
  process.exit(1);
}

const packageJson = JSON.parse(readFileSync(join(targetDir, "package.json"), "utf-8"));
if (!packageJson.dependencies?.next && !packageJson.devDependencies?.next) {
  logError("This doesn't appear to be a Next.js project. Please install in a Next.js project.");
  process.exit(1);
}

// Step 1: Install dependencies
logStep("1/6", "Installing dependencies...");
const dependencies = [
  "class-variance-authority",
  "clsx", 
  "tailwind-merge",
  "tailwindcss-animate"
];

try {
  // Detect package manager
  let pm = "npm";
  if (existsSync(join(targetDir, "pnpm-lock.yaml"))) pm = "pnpm";
  else if (existsSync(join(targetDir, "yarn.lock"))) pm = "yarn";
  else if (existsSync(join(targetDir, "bun.lockb"))) pm = "bun";

  const installCmd = pm === "npm" ? "npm install" : `${pm} add`;
  execSync(`${installCmd} ${dependencies.join(" ")}`, { 
    cwd: targetDir, 
    stdio: "inherit" 
  });
  logSuccess("Dependencies installed");
} catch (error) {
  logError(`Failed to install dependencies: ${error.message}`);
  process.exit(1);
}

// Step 2: Create directories
logStep("2/6", "Creating directories...");
const dirs = [
  "components/flectomancer",
  "components/flectomancer/pages",
  "src/lib",
  "src/app",
];

dirs.forEach((dir) => {
  const fullPath = join(targetDir, dir);
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath, { recursive: true });
    logSuccess(`Created ${dir}`);
  }
});

// Step 3: Copy components
logStep("3/6", "Copying components...");
const componentsSource = join(ROOT, "components/flectomancer");
const componentsTarget = join(targetDir, "components/flectomancer");

try {
  cpSync(componentsSource, componentsTarget, { recursive: true });
  logSuccess("Components copied");
} catch (error) {
  logError(`Failed to copy components: ${error.message}`);
  process.exit(1);
}

// Step 4: Copy theme provider
logStep("4/6", "Setting up theme provider...");
const themeProviderSource = join(ROOT, "src/lib/theme-provider.tsx");
const themeProviderTarget = join(targetDir, "src/lib/theme-provider.tsx");

try {
  // Check if lib/utils.ts exists, if not create it
  const utilsPath = join(targetDir, "src/lib/utils.ts");
  if (!existsSync(utilsPath)) {
    writeFileSync(utilsPath, `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`);
    logSuccess("Created lib/utils.ts");
  }

  cpSync(themeProviderSource, themeProviderTarget);
  logSuccess("Theme provider copied");
} catch (error) {
  logError(`Failed to copy theme provider: ${error.message}`);
  process.exit(1);
}

// Step 5: Copy/merge globals.css
logStep("5/6", "Setting up globals.css...");
const globalsSource = join(ROOT, "src/app/globals.css");
const globalsTarget = join(targetDir, "src/app/globals.css");

try {
  if (existsSync(globalsTarget)) {
    // Backup existing
    const backup = join(targetDir, "src/app/globals.css.backup");
    cpSync(globalsTarget, backup);
    log(`  Backed up existing globals.css to globals.css.backup`, "yellow");
  }
  cpSync(globalsSource, globalsTarget);
  logSuccess("globals.css installed");
} catch (error) {
  logError(`Failed to copy globals.css: ${error.message}`);
  process.exit(1);
}

// Step 6: Update layout.tsx
logStep("6/6", "Checking layout.tsx...");
const layoutPath = join(targetDir, "src/app/layout.tsx");

if (existsSync(layoutPath)) {
  const layoutContent = readFileSync(layoutPath, "utf-8");
  
  if (!layoutContent.includes("ThemeProvider")) {
    log(`
  ${colors.yellow}ACTION REQUIRED:${colors.reset} Update your layout.tsx to include the ThemeProvider:

  ${colors.cyan}// Add imports:${colors.reset}
  import { ThemeProvider, ThemeScript } from "@/lib/theme-provider";
  import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

  ${colors.cyan}// Add fonts:${colors.reset}
  const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex-sans",
  });

  const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-ibm-plex-mono",
  });

  ${colors.cyan}// Update html tag:${colors.reset}
  <html lang="en" className={\`\${ibmPlexSans.variable} \${ibmPlexMono.variable}\`} suppressHydrationWarning>
    <head>
      <ThemeScript />
    </head>
    <body className="font-sans antialiased">
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
`, "reset");
  } else {
    logSuccess("layout.tsx already configured");
  }
} else {
  log(`  ${colors.yellow}Note:${colors.reset} No layout.tsx found at src/app/layout.tsx`, "yellow");
}

// Done!
log("\n╔════════════════════════════════════════════════════════════╗", "green");
log("║            INSTALLATION COMPLETE!                          ║", "green");
log("╚════════════════════════════════════════════════════════════╝\n", "green");

log("Installed:", "bright");
log("  • 14 Flectomancer components", "reset");
log("  • 2 Page containers (DashboardPage, NewMonitorPage)", "reset");
log("  • Theme system with light/dark mode", "reset");
log("  • Animation utilities", "reset");
log("  • Design tokens", "reset");

log("\nUsage:", "bright");
log(`  import { Button, Badge, DashboardPage } from "@/components/flectomancer";`, "cyan");

log("\nDocumentation:", "bright");
log("  See FLECTOMANCER-DESIGN-SYSTEM.md for full documentation\n", "reset");
