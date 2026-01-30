# Flectomancer Design System

A comprehensive, production-ready component library built with semantic design tokens, automatic dark/light theming, and pixel-perfect recreation of the Subframe design patterns.

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Theme System](#theme-system)
4. [Component-Page Mapping](#component-page-mapping)
5. [Components Reference](#components-reference)
6. [Animation System](#animation-system)
7. [Page Structure Guide](#page-structure-guide)
8. [Design Tokens](#design-tokens)

---

## Installation

### Option 1: Copy Components Directly

Copy the following directories into your Next.js project:

```bash
# Required files and directories
components/flectomancer/    # All component files
src/lib/theme-provider.tsx  # Theme context and hooks
src/app/globals.css         # Design tokens and animations
```

### Option 2: Manual Installation Steps

1. **Install dependencies:**

```bash
npm install class-variance-authority @radix-ui/react-slot tailwindcss-animate
# or
pnpm add class-variance-authority @radix-ui/react-slot tailwindcss-animate
```

2. **Copy the globals.css to your project:**

Replace or merge with your existing `globals.css`:

```bash
cp src/app/globals.css your-project/app/globals.css
```

3. **Copy the theme provider:**

```bash
mkdir -p your-project/lib
cp src/lib/theme-provider.tsx your-project/lib/theme-provider.tsx
```

4. **Copy all components:**

```bash
cp -r components/flectomancer your-project/components/flectomancer
```

5. **Update your root layout:**

```tsx
// app/layout.tsx
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider, ThemeScript } from "@/lib/theme-provider";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

6. **Ensure you have the `cn` utility:**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Project Structure

```
components/
└── flectomancer/
    ├── index.ts                 # All exports
    ├── badge.tsx                # Status indicators
    ├── button.tsx               # Interactive buttons
    ├── icon-button.tsx          # Icon-only buttons
    ├── avatar.tsx               # User/AI avatars
    ├── chat-bubble.tsx          # Chat message bubbles
    ├── chat-input.tsx           # Message input field
    ├── sidebar.tsx              # Navigation sidebar
    ├── sidebar-menu-item.tsx    # Sidebar nav items
    ├── page-header.tsx          # Page titles with actions
    ├── monitor-card.tsx         # Dashboard monitor cards
    ├── source-card.tsx          # Selectable source cards
    ├── preview-card.tsx         # Form preview cards
    ├── progress-bar.tsx         # Progress indicators
    ├── modal-overlay.tsx        # Full-screen modals
    └── pages/
        ├── dashboard-page.tsx   # Complete dashboard layout
        └── new-monitor-page.tsx # Monitor creation flow
```

---

## Theme System

### Architecture

The theme system uses three layers:

```
┌─────────────────────────────────────────────────────────────┐
│  PRIMITIVE COLORS (raw palette)                             │
│  --color-brand-600, --color-neutral-900, etc.               │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  SEMANTIC TOKENS (swap between light/dark)                  │
│  --background, --foreground, --card, --primary, etc.        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  TAILWIND UTILITIES                                         │
│  bg-background, text-foreground, border-border, etc.        │
└─────────────────────────────────────────────────────────────┘
```

### Using the Theme

```tsx
import { useTheme } from "@/lib/theme-provider";

function MyComponent() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Theme Values

| Value | Description |
|-------|-------------|
| `"light"` | Force light mode |
| `"dark"` | Force dark mode |
| `"system"` | Follow OS preference |

---

## Component-Page Mapping

### Dashboard Page Variants

All 3 dashboard variants use `DashboardPage`:

| Design Variant | Component Usage |
|----------------|-----------------|
| `active-dashboard-light` | `<DashboardPage />` with light theme |
| `active-dashboard-dark-mobile` | `<DashboardPage />` with dark theme on mobile |
| `active-dashboard-light-mobile` | `<DashboardPage />` with light theme on mobile |

**Components used:**
- `Sidebar` (desktop + mobile drawer)
- `MonitorCard` (for each monitor)
- `Button` (New Monitor button)
- `IconButton` (menu hamburger on mobile)

### New Monitor Page Variants

All 12 new monitor variants use `NewMonitorPage`:

| Design Variant | Component Configuration |
|----------------|------------------------|
| `new-monitor-start-light` | `progress={0}`, empty `previewFields` |
| `new-monitor-start-dark` | Same, dark theme |
| `new-monitor-start-light-mobile` | Same, mobile viewport, `mobileView="chat"` |
| `new-monitor-start-dark-mobile` | Same, dark theme |
| `new-monitor-start-light-mobile-preview` | `mobileView="preview"` |
| `new-monitor-start-dark-mobile-preview` | Same, dark theme |
| `new-monitor-progress-light` | `progress={60}`, populated `previewFields` |
| `new-monitor-progress-dark` | Same, dark theme |
| `new-monitor-progress-light-mobile` | Same, mobile, `mobileView="chat"` |
| `new-monitor-progress-dark-mobile` | Same, dark theme |
| `new-monitor-progress-light-mobile-preview` | `mobileView="preview"` |
| `new-monitor-progress-dark-mobile-preview` | Same, dark theme |

**Components used:**
- `ModalOverlay` (full-screen container)
- `ChatBubble` (AI and user messages)
- `ChatInput` (message input)
- `Avatar` (AI avatar)
- `SourceCard` (inline source selection)
- `PreviewCard` (form field preview)
- `ProgressBar` (creation progress)
- `IconButton` (close, back, preview toggle)

---

## Components Reference

### Core UI Components

#### Badge

Status indicators with multiple variants.

```tsx
import { Badge } from "@/components/flectomancer";

<Badge variant="brand">Active</Badge>
<Badge variant="success" icon={<CheckIcon />}>Complete</Badge>
<Badge variant="error">3 Alerts</Badge>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"brand" \| "neutral" \| "success" \| "warning" \| "error"` | `"brand"` | Visual style |
| `icon` | `ReactNode` | - | Icon before text |
| `iconRight` | `ReactNode` | - | Icon after text |

---

#### Button

Full-featured button with 10 variants and 3 sizes.

```tsx
import { Button } from "@/components/flectomancer";

<Button variant="brand-primary" size="medium">Primary Action</Button>
<Button variant="neutral-secondary" icon={<PlusIcon />}>Add Item</Button>
<Button variant="destructive-primary" loading>Deleting...</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"brand-primary" \| "brand-secondary" \| "brand-tertiary" \| "neutral-primary" \| "neutral-secondary" \| "neutral-tertiary" \| "destructive-primary" \| "destructive-secondary" \| "destructive-tertiary" \| "inverse"` | `"brand-primary"` | Visual style |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Button size |
| `icon` | `ReactNode` | - | Icon before text |
| `iconRight` | `ReactNode` | - | Icon after text |
| `loading` | `boolean` | `false` | Show loading spinner |
| `asChild` | `boolean` | `false` | Render as Slot for composition |

---

#### IconButton

Icon-only buttons for toolbars and compact actions.

```tsx
import { IconButton } from "@/components/flectomancer";

<IconButton variant="brand-primary" icon={<PlusIcon />} />
<IconButton variant="neutral-tertiary" size="small" icon={<XIcon />} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | Same as Button | `"brand-primary"` | Visual style |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Button size |
| `icon` | `ReactNode` | **Required** | The icon to display |

---

### Chat Components

#### Avatar

Circular avatars for users and AI.

```tsx
import { Avatar } from "@/components/flectomancer";

<Avatar variant="ai" size="medium" />
<Avatar variant="user" size="small" imageUrl="/user.jpg" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"ai" \| "user"` | `"ai"` | Avatar type |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Avatar size |
| `imageUrl` | `string` | - | Custom image URL |
| `fallback` | `string` | - | Fallback text (initials) |

---

#### ChatBubble

Message bubbles for chat interfaces.

```tsx
import { ChatBubble } from "@/components/flectomancer";

<ChatBubble variant="ai">Hello! How can I help you?</ChatBubble>
<ChatBubble variant="user">Create a stock monitor</ChatBubble>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"ai" \| "user"` | `"ai"` | Message sender |
| `children` | `ReactNode` | - | Message content |

---

#### ChatInput

Message input with send button.

```tsx
import { ChatInput } from "@/components/flectomancer";

<ChatInput
  value={inputValue}
  onChange={setInputValue}
  onSend={handleSend}
  placeholder="Type a message..."
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Input value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `onSend` | `() => void` | - | Send handler |
| `placeholder` | `string` | `"Message"` | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |

---

### Navigation Components

#### Sidebar

Navigation sidebar with menu items and theme toggle.

```tsx
import { Sidebar } from "@/components/flectomancer";

<Sidebar
  logoUrl="/logo.png"
  activeItem="dashboard"
  onNavigate={(item) => router.push(`/${item}`)}
  onThemeChange={setTheme}
  currentTheme={resolvedTheme}
/>

// Mobile drawer variant
<Sidebar
  isMobileDrawer
  onClose={() => setSidebarOpen(false)}
  // ... other props
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoUrl` | `string` | - | Logo image URL |
| `activeItem` | `"dashboard" \| "archived"` | - | Active menu item |
| `onNavigate` | `(item: string) => void` | - | Navigation handler |
| `onThemeChange` | `(theme: "light" \| "dark") => void` | - | Theme change handler |
| `currentTheme` | `"light" \| "dark"` | - | Current theme |
| `isMobileDrawer` | `boolean` | `false` | Render as mobile drawer |
| `onClose` | `() => void` | - | Close handler (mobile) |

---

#### PageHeader

Page title with optional action button.

```tsx
import { PageHeader } from "@/components/flectomancer";

<PageHeader
  title="Dashboard"
  action={<Button icon={<PlusIcon />}>New Monitor</Button>}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Page title |
| `subtitle` | `string` | - | Optional subtitle |
| `action` | `ReactNode` | - | Action button/element |
| `backButton` | `boolean` | `false` | Show back button |
| `onBack` | `() => void` | - | Back button handler |

---

### Card Components

#### MonitorCard

Dashboard card displaying monitor status.

```tsx
import { MonitorCard } from "@/components/flectomancer";

<MonitorCard
  name="NVIDIA Stock"
  description="Track NVDA price movements"
  status="active"
  alertCount={3}
  lastUpdated="2 min ago"
  sources={<div className="flex gap-2">...</div>}
  onClick={() => router.push(`/monitors/${id}`)}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Monitor name |
| `description` | `string` | - | Monitor description |
| `status` | `"active" \| "paused" \| "error"` | `"active"` | Status badge |
| `alertCount` | `number` | `0` | Alert count badge |
| `lastUpdated` | `string` | - | Last update timestamp |
| `sources` | `ReactNode` | - | Source icons |
| `onClick` | `() => void` | - | Click handler |

---

#### SourceCard

Selectable card for data source selection.

```tsx
import { SourceCard } from "@/components/flectomancer";

<SourceCard
  icon={<NasdaqIcon />}
  label="NASDAQ"
  selected={selectedSources.includes("nasdaq")}
  onClick={() => toggleSource("nasdaq")}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Source icon |
| `label` | `string` | - | Source label |
| `selected` | `boolean` | `false` | Selection state |
| `onClick` | `() => void` | - | Click handler |

---

#### PreviewCard

Form field preview with completion state.

```tsx
import { PreviewCard } from "@/components/flectomancer";

<PreviewCard
  icon={<TargetIcon />}
  label="Focus"
  value="NVIDIA stock price"
  complete={true}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Field icon |
| `label` | `string` | - | Field label |
| `value` | `string` | - | Field value |
| `complete` | `boolean` | `false` | Completion state |

---

### Feedback Components

#### ProgressBar

Progress indicator with label.

```tsx
import { ProgressBar } from "@/components/flectomancer";

<ProgressBar value={60} showLabel />
<ProgressBar value={100} variant="success" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress 0-100 |
| `variant` | `"default" \| "success" \| "brand"` | `"default"` | Color variant |
| `showLabel` | `boolean` | `false` | Show percentage label |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Bar height |

---

#### ModalOverlay

Full-screen modal with animations.

```tsx
import { ModalOverlay } from "@/components/flectomancer";

<ModalOverlay
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Create Monitor"
>
  {/* Modal content */}
</ModalOverlay>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `true` | Visibility state |
| `onClose` | `() => void` | - | Close handler |
| `title` | `string` | - | Modal title |
| `useGradientBackground` | `boolean` | `true` | Use gradient bg |
| `animationDuration` | `number` | `300` | Animation ms |

---

### Page Components

#### DashboardPage

Complete dashboard layout with sidebar, header, and monitor cards.

```tsx
import { DashboardPage, type Monitor } from "@/components/flectomancer";

const monitors: Monitor[] = [
  {
    id: "1",
    name: "NVIDIA Stock",
    description: "Track NVDA price movements",
    status: "active",
    sources: ["nasdaq", "twitter"],
    alertCount: 3,
    lastUpdated: "2 min ago",
  },
];

<DashboardPage
  monitors={monitors}
  activeMenuItem="dashboard"
  onNewMonitor={() => setShowNewMonitor(true)}
  onMonitorClick={(monitor) => router.push(`/monitors/${monitor.id}`)}
  onNavigate={(item) => router.push(`/${item}`)}
/>
```

---

#### NewMonitorPage

Complete monitor creation flow with chat and preview panels.

```tsx
import { NewMonitorPage, type ChatMessage, type PreviewField } from "@/components/flectomancer";

const messages: ChatMessage[] = [
  { id: "1", role: "ai", content: "What would you like to monitor?" },
  { id: "2", role: "user", content: "NVIDIA stock price" },
];

const previewFields: PreviewField[] = [
  { id: "focus", icon: "target", label: "Focus", value: "NVIDIA", complete: true },
  { id: "sources", icon: "globe", label: "Sources", value: "", complete: false },
];

<NewMonitorPage
  isOpen={showNewMonitor}
  onClose={() => setShowNewMonitor(false)}
  messages={messages}
  inputValue={inputValue}
  onInputChange={setInputValue}
  onSendMessage={handleSend}
  onSourceSelect={(sourceId) => toggleSource(sourceId)}
  previewFields={previewFields}
  progress={30}
/>
```

---

## Animation System

### Available Animations

All animations are defined in `globals.css` and can be used via utility classes:

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-in fade-in` | Fade in from 0 to 1 opacity | 300ms |
| `animate-in slide-in-from-bottom` | Slide up 8px + fade | 300ms |
| `animate-in slide-in-from-bottom-2` | Slide up 4px + fade | 300ms |
| `animate-in slide-in-from-top` | Slide down 8px + fade | 300ms |
| `animate-in slide-in-from-left` | Slide right 8px + fade | 300ms |
| `animate-in slide-in-from-right` | Slide left 8px + fade | 300ms |
| `animate-in scale-in` | Scale from 95% + fade | 200ms |
| `animate-check` | Checkmark scale + rotate | 300ms |
| `animate-spin` | Continuous rotation | 1s loop |
| `animate-pulse` | Opacity pulse | 2s loop |

### Animation Duration Modifiers

```css
.duration-150 { animation-duration: 150ms; }
.duration-200 { animation-duration: 200ms; }
.duration-300 { animation-duration: 300ms; }
.duration-500 { animation-duration: 500ms; }
```

### Staggered Animations

For lists, use `animationDelay` with index:

```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-in fade-in slide-in-from-bottom-2"
    style={{
      animationDelay: `${index * 50}ms`,
      animationFillMode: "both",
    }}
  >
    {item.content}
  </div>
))}
```

### Built-in Component Animations

| Component | Animation | Trigger |
|-----------|-----------|---------|
| `ModalOverlay` | Backdrop fade + content scale/slide | Open/close |
| `NewMonitorPage` (mobile) | View cross-fade | Chat/preview toggle |
| `MonitorCard` | Lift + shadow | Hover |
| `SourceCard` | Scale pulse | Selection |
| `PreviewCard` | Staggered entrance | Mount |
| `ChatBubble` | Staggered fade/slide | Mount |
| `Sidebar` (mobile) | Slide left/right | Open/close |
| `ProgressBar` | Width transition | Value change |

---

## Page Structure Guide

### Dashboard Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌────────────────────────────────────────────┐ │
│ │          │ │ Header: Title + New Monitor Button         │ │
│ │          │ ├────────────────────────────────────────────┤ │
│ │ Sidebar  │ │                                            │ │
│ │          │ │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │ │
│ │ - Logo   │ │  │Monitor  │ │Monitor  │ │Monitor  │       │ │
│ │ - Nav    │ │  │Card     │ │Card     │ │Card     │       │ │
│ │ - Theme  │ │  └─────────┘ └─────────┘ └─────────┘       │ │
│ │          │ │                                            │ │
│ └──────────┘ └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
         Desktop Layout (Sidebar visible)

┌─────────────────────────────────────────────────────────────┐
│ ☰ Dashboard                                    [+]          │ <- Sticky header
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Monitor Card                                        │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Monitor Card                                        │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         Mobile Layout (Sidebar as drawer)
```

### New Monitor Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│ [X]                                                         │ <- Header
├──────────────────────────────┬──────────────────────────────┤
│                              │                              │
│  Chat Panel                  │  Preview Panel               │
│                              │                              │
│  ┌────────────────────────┐  │  Progress: ████░░░░ 60%      │
│  │ AI: What to monitor?   │  │                              │
│  └────────────────────────┘  │  ┌────────────────────────┐  │
│                              │  │ Focus: NVIDIA     ✓    │  │
│  ┌────────────────────────┐  │  └────────────────────────┘  │
│  │ User: NVIDIA stock     │  │  ┌────────────────────────┐  │
│  └────────────────────────┘  │  │ Sources: ...      ○    │  │
│                              │  └────────────────────────┘  │
│  Source selection cards:     │  ┌────────────────────────┐  │
│  [NASDAQ] [News] [Twitter]   │  │ Alerts: ...       ○    │  │
│                              │  └────────────────────────┘  │
│                              │                              │
│  ┌────────────────────────┐  │                              │
│  │ Type a message...  [➤] │  │                              │
│  └────────────────────────┘  │                              │
│                              │                              │
└──────────────────────────────┴──────────────────────────────┘
         Desktop Layout (Split pane)

┌─────────────────────────────────────────────────────────────┐
│ [X]                                               [👁]       │ <- Toggle
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Progress: ████░░░░ 60%                                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ AI: What would you like to monitor?                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ User: NVIDIA stock price                            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Type a message...                              [➤]  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         Mobile Chat View

┌─────────────────────────────────────────────────────────────┐
│ [←]                    MONITOR PREVIEW                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Progress: ████░░░░ 60%                                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ 🎯 Focus                                            │    │
│  │ NVIDIA stock price                              ✓   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ 🌐 Sources                                          │    │
│  │ Not configured                                  ○   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         Mobile Preview View
```

---

## Design Tokens

### Color Tokens

Use these Tailwind classes for theme-aware colors:

| Purpose | Background | Text | Border |
|---------|------------|------|--------|
| Page | `bg-background` | `text-foreground` | `border-border` |
| Card | `bg-card` | `text-card-foreground` | `border-border` |
| Primary | `bg-primary` | `text-primary-foreground` | `border-primary` |
| Secondary | `bg-secondary` | `text-secondary-foreground` | `border-secondary` |
| Muted | `bg-muted` | `text-muted-foreground` | `border-muted` |
| Success | `bg-success` | `text-success-foreground` | `border-success` |
| Warning | `bg-warning` | `text-warning-foreground` | `border-warning` |
| Error | `bg-error` | `text-error-foreground` | `border-error` |

### Typography Tokens

```tsx
// Headings
<h1 className="text-heading-1 font-heading-1">30px / 600</h1>
<h2 className="text-heading-2 font-heading-2">20px / 600</h2>
<h3 className="text-heading-3 font-heading-3">16px / 600</h3>

// Body
<p className="text-body font-body">14px / 400</p>
<p className="text-body-bold font-body-bold">14px / 500</p>

// Caption
<span className="text-caption font-caption">12px / 400</span>
<span className="text-caption-bold font-caption-bold">12px / 500</span>

// Monospace
<code className="text-monospace-body font-mono">14px / 400</code>
```

### Spacing

Use Tailwind's default spacing scale (0-96) plus these extensions:

| Class | Value |
|-------|-------|
| `w-112` / `h-112` | 28rem (448px) |
| `w-144` / `h-144` | 36rem (576px) |
| `w-192` / `h-192` | 48rem (768px) |

### Border Radius

| Class | Value |
|-------|-------|
| `rounded-sm` | 4px |
| `rounded-md` | 8px |
| `rounded-lg` | 12px |
| `rounded-xl` | 16px |
| `rounded-full` | 9999px |

### Shadows

| Class | Usage |
|-------|-------|
| `shadow-sm` | Subtle elevation |
| `shadow` | Default card elevation |
| `shadow-md` | Raised elements |
| `shadow-lg` | Popovers, dropdowns |
| `shadow-xl` | Modals |
| `shadow-brand-sm` | Subtle brand glow |
| `shadow-brand` | Medium brand glow |
| `shadow-brand-lg` | Strong brand glow |

---

## Examples

### Complete Dashboard Implementation

```tsx
"use client";

import { useState } from "react";
import { DashboardPage, NewMonitorPage, type Monitor, type ChatMessage } from "@/components/flectomancer";

export default function DashboardRoute() {
  const [showNewMonitor, setShowNewMonitor] = useState(false);
  const [monitors, setMonitors] = useState<Monitor[]>([
    {
      id: "1",
      name: "NVIDIA Stock",
      description: "Track NVDA price and sentiment",
      status: "active",
      sources: ["nasdaq", "twitter"],
      alertCount: 3,
      lastUpdated: "2 min ago",
    },
  ]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", role: "ai", content: "What would you like to monitor today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(0);

  return (
    <>
      <DashboardPage
        monitors={monitors}
        activeMenuItem="dashboard"
        onNewMonitor={() => setShowNewMonitor(true)}
        onMonitorClick={(monitor) => console.log("Clicked:", monitor)}
        onNavigate={(item) => console.log("Navigate:", item)}
      />
      
      <NewMonitorPage
        isOpen={showNewMonitor}
        onClose={() => setShowNewMonitor(false)}
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSendMessage={() => {
          if (!inputValue.trim()) return;
          setMessages([...messages, { id: Date.now().toString(), role: "user", content: inputValue }]);
          setInputValue("");
          setProgress((p) => Math.min(p + 20, 100));
        }}
        previewFields={[]}
        progress={progress}
      />
    </>
  );
}
```

---

## License

MIT License - Feel free to use in personal and commercial projects.
