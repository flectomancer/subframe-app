"use client";
/*
 * Documentation:
 * Avatar — https://app.subframe.com/51ef4e586a6b/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/51ef4e586a6b/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Dropdown Menu — https://app.subframe.com/51ef4e586a6b/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/51ef4e586a6b/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Sidebar with nested sections and search — https://app.subframe.com/51ef4e586a6b/library?component=Sidebar+with+nested+sections+and+search_39907738-bfbe-42db-8142-9d16a0821551
 * Text Field — https://app.subframe.com/51ef4e586a6b/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import { FeatherBell } from "@subframe/core";
import { FeatherCalendarDays } from "@subframe/core";
import { FeatherCheckSquare } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherKanbanSquare } from "@subframe/core";
import { FeatherRocket } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "../components/Avatar";
import { DropdownMenu } from "../components/DropdownMenu";
import { IconButton } from "../components/IconButton";
import { SidebarWithNestedSectionsAndSearch } from "../components/SidebarWithNestedSectionsAndSearch";
import { TextField } from "../components/TextField";
import * as SubframeUtils from "../utils";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-center",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <SidebarWithNestedSectionsAndSearch
        className="mobile:hidden"
        header={
          <>
            <div className="flex w-full items-center justify-between pl-1 py-1">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    <Avatar
                      size="small"
                      image="https://res.cloudinary.com/subframe/image/upload/v1722026954/uploads/302/h43io2d8lqzqdkcahj9x.png"
                    >
                      A
                    </Avatar>
                    <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-light-background">
                      Subframe
                    </span>
                  </div>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon={null}>
                        Invite team members
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={null}>
                        Settings
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={null}>
                        Sign out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
              <IconButton size="small" icon={<FeatherBell />} />
            </div>
            <TextField
              className="h-auto w-full flex-none"
              variant="filled"
              label=""
              helpText=""
              icon={<FeatherSearch />}
            >
              <TextField.Input placeholder="Search" />
            </TextField>
          </>
        }
        footer={
          <div className="flex w-full flex-col items-center gap-1">
            <SidebarWithNestedSectionsAndSearch.NavItem icon={<FeatherUser />}>
              Profile
            </SidebarWithNestedSectionsAndSearch.NavItem>
            <SidebarWithNestedSectionsAndSearch.NavItem icon={<FeatherBell />}>
              Notifications
            </SidebarWithNestedSectionsAndSearch.NavItem>
            <SidebarWithNestedSectionsAndSearch.NavItem
              icon={<FeatherSettings />}
            >
              Settings
            </SidebarWithNestedSectionsAndSearch.NavItem>
          </div>
        }
      >
        <SidebarWithNestedSectionsAndSearch.NavSection
          label="Subframe HQ"
          rightSlot={<IconButton size="small" />}
        >
          <SidebarWithNestedSectionsAndSearch.NavItem
            selected={true}
            icon={<FeatherHome />}
          >
            Home
          </SidebarWithNestedSectionsAndSearch.NavItem>
          <SidebarWithNestedSectionsAndSearch.NavItem
            icon={<FeatherCheckSquare />}
          >
            Tasks
          </SidebarWithNestedSectionsAndSearch.NavItem>
          <SidebarWithNestedSectionsAndSearch.NavItem
            icon={<FeatherCalendarDays />}
          >
            Calendar
          </SidebarWithNestedSectionsAndSearch.NavItem>
        </SidebarWithNestedSectionsAndSearch.NavSection>
        <SidebarWithNestedSectionsAndSearch.NavSection
          label="Project Docs"
          rightSlot={<IconButton size="small" />}
        >
          <SidebarWithNestedSectionsAndSearch.NavItem icon={<FeatherRocket />}>
            Launch Plan
          </SidebarWithNestedSectionsAndSearch.NavItem>
          <SidebarWithNestedSectionsAndSearch.NavItem
            icon={<FeatherKanbanSquare />}
          >
            Sprint Board
          </SidebarWithNestedSectionsAndSearch.NavItem>
          <SidebarWithNestedSectionsAndSearch.NavItem
            icon={<FeatherFileText />}
          >
            Project Brief
          </SidebarWithNestedSectionsAndSearch.NavItem>
          <SidebarWithNestedSectionsAndSearch.NavSection
            label="Research"
            rightSlot={<IconButton size="small" />}
          >
            <SidebarWithNestedSectionsAndSearch.NavItem
              icon={<FeatherFileText />}
            >
              User Interviews
            </SidebarWithNestedSectionsAndSearch.NavItem>
            <SidebarWithNestedSectionsAndSearch.NavItem
              icon={<FeatherFileText />}
            >
              Market Landscape
            </SidebarWithNestedSectionsAndSearch.NavItem>
            <SidebarWithNestedSectionsAndSearch.NavItem
              icon={<FeatherFileText />}
            >
              Prototypes
            </SidebarWithNestedSectionsAndSearch.NavItem>
          </SidebarWithNestedSectionsAndSearch.NavSection>
        </SidebarWithNestedSectionsAndSearch.NavSection>
      </SidebarWithNestedSectionsAndSearch>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch overflow-y-auto bg-dark-text">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
