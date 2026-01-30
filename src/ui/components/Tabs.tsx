"use client";
/*
 * Documentation:
 * Tabs — https://app.subframe.com/51ef4e586a6b/library?component=Tabs_e1ad5091-8ad8-4319-b1f7-3e47f0256c20
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    active = false,
    disabled = false,
    icon = null,
    children,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/d5612535 flex h-10 cursor-pointer items-center justify-center gap-2 border-b border-solid border-neutral-50 px-2.5 py-0.5",
        {
          "border-b-2 border-solid border-brand-600 px-2.5 pt-0.5 pb-px":
            active,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-light-primary group-hover/d5612535:text-light-background",
            {
              "text-neutral-400 group-hover/d5612535:text-neutral-400":
                disabled,
              "text-brand-700 group-hover/d5612535:text-brand-700": active,
            }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-body-bold font-body-bold text-light-primary group-hover/d5612535:text-light-background",
            {
              "text-neutral-400 group-hover/d5612535:text-neutral-400":
                disabled,
              "text-brand-700 group-hover/d5612535:text-brand-700": active,
            }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  function TabsRoot(
    { children, className, ...otherProps }: TabsRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-end",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <div className="flex items-start self-stretch">{children}</div>
        ) : null}
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch border-b border-solid border-neutral-50" />
      </div>
    );
  }
);

export const Tabs = Object.assign(TabsRoot, {
  Item,
});
