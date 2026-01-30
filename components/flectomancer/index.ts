/**
 * Flectomancer Design System Components
 * 
 * A comprehensive component library built with semantic design tokens.
 * All components automatically support light and dark themes.
 * 
 * @example
 * import { Badge, Button, IconButton } from "@/components/flectomancer";
 */

// Core UI Components
export { Badge, badgeVariants, type BadgeProps } from "./badge";
export { Button, buttonVariants, type ButtonProps } from "./button";
export { IconButton, iconButtonVariants, type IconButtonProps } from "./icon-button";

// Chat Components
export { ChatInput, type ChatInputProps } from "./chat-input";
export { ChatBubble, type ChatBubbleProps } from "./chat-bubble";
export { Avatar, type AvatarProps } from "./avatar";

// Navigation Components
export { Sidebar, type SidebarProps } from "./sidebar";
export { SidebarMenuItem, type SidebarMenuItemProps } from "./sidebar-menu-item";
export { PageHeader, type PageHeaderProps } from "./page-header";

// Card Components
export { MonitorCard, type MonitorCardProps } from "./monitor-card";
export { SourceCard, type SourceCardProps } from "./source-card";
export { PreviewCard, type PreviewCardProps } from "./preview-card";

// Feedback Components
export { ProgressBar, progressBarVariants, progressFillVariants, type ProgressBarProps } from "./progress-bar";
export { ModalOverlay, type ModalOverlayProps } from "./modal-overlay";

// Variant exports for advanced usage
export { sidebarMenuItemVariants } from "./sidebar-menu-item";
export { avatarVariants } from "./avatar";
export { chatBubbleVariants } from "./chat-bubble";
