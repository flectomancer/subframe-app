"use client";
/*
 * Documentation:
 * Accordion — https://app.subframe.com/51ef4e586a6b/library?component=Accordion_d2e81e20-863a-4027-826a-991d8910efd9
 * Sidebar with nested sections and search — https://app.subframe.com/51ef4e586a6b/library?component=Sidebar+with+nested+sections+and+search_39907738-bfbe-42db-8142-9d16a0821551
 */

import React from "react";
import { FeatherCircleDashed } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";
import { Accordion } from "./Accordion";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  {
    selected = false,
    children,
    icon = <FeatherCircleDashed />,
    rightSlot,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/24343c20 flex h-8 w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1 hover:bg-neutral-50 active:bg-neutral-100",
        {
          "bg-neutral-100 hover:bg-neutral-100 active:bg-neutral-200": selected,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-light-primary",
            { "text-light-background": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-caption-bold font-caption-bold text-light-primary",
            {
              "text-caption-bold font-caption-bold text-light-background":
                selected,
            }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? <div className="flex items-center">{rightSlot}</div> : null}
    </div>
  );
});

interface NavSectionProps extends React.ComponentProps<typeof Accordion> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const NavSection = React.forwardRef<
  React.ElementRef<typeof Accordion>,
  NavSectionProps
>(function NavSection(
  {
    children,
    label,
    icon = null,
    rightSlot,
    className,
    ...otherProps
  }: NavSectionProps,
  ref
) {
  return (
    <Accordion
      className={SubframeUtils.twClassNames(
        "group/19b3e897 cursor-pointer",
        className
      )}
      trigger={
        <div className="flex h-8 w-full flex-none items-center gap-2 rounded-md pl-3 pr-2 py-1 group-hover/19b3e897:bg-neutral-50">
          <Accordion.Chevron />
          {label ? (
            <span className="line-clamp-1 grow shrink-0 basis-0 text-caption-bold font-caption-bold text-light-background">
              {label}
            </span>
          ) : null}
          {rightSlot ? (
            <div className="flex items-center">{rightSlot}</div>
          ) : null}
        </div>
      }
      defaultOpen={true}
      ref={ref}
      {...otherProps}
    >
      {children ? (
        <div className="flex w-full flex-col items-start pl-6">{children}</div>
      ) : null}
    </Accordion>
  );
});

interface SidebarWithNestedSectionsAndSearchRootProps
  extends React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const SidebarWithNestedSectionsAndSearchRoot = React.forwardRef<
  HTMLElement,
  SidebarWithNestedSectionsAndSearchRootProps
>(function SidebarWithNestedSectionsAndSearchRoot(
  {
    header,
    footer,
    children,
    className,
    ...otherProps
  }: SidebarWithNestedSectionsAndSearchRootProps,
  ref
) {
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex h-full w-60 flex-col items-start border-r border-solid border-neutral-50 bg-dark-text",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {header ? (
        <div className="flex w-full flex-col items-center gap-4 px-4 py-4">
          {header}
        </div>
      ) : null}
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start px-2 py-2 overflow-auto">
          {children}
        </div>
      ) : null}
      {footer ? (
        <div className="flex w-full flex-col items-center px-4 py-4">
          {footer}
        </div>
      ) : null}
    </nav>
  );
});

export const SidebarWithNestedSectionsAndSearch = Object.assign(
  SidebarWithNestedSectionsAndSearchRoot,
  {
    NavItem,
    NavSection,
  }
);
