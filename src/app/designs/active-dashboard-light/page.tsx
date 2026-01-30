"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherRss } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherSun } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";

function ActiveDashboardLightCorrectSidebar() {
  return (
    <div className="flex h-full w-full items-start bg-gradient-to-br from-brand-100 via-brand-200 to-brand-300">
      <div className="flex w-64 flex-none flex-col items-start justify-between self-stretch border-r border-solid border-[#ffffffff] bg-[#ffffffff] shadow-[0px_-8px_20px_0px_#0000001a,0px_0px_16px_0px_#0000000d] backdrop-blur-2xl z-10">
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          <div className="flex w-full items-center gap-1">
            <img
              className="h-12 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png"
            />
            <FeatherChevronRight className="font-['Afacad_Flux'] text-[40px] font-[400] leading-[48px] text-brand-600" />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-caption-bold text-neutral-400">
              MENU
            </span>
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full items-center gap-3 rounded-md bg-brand-50 px-3 py-2 shadow-[0px_0px_20px_0px_#5833ff26] cursor-pointer">
                <FeatherHome className="text-body font-body text-brand-600" />
                <span className="text-body-bold font-body-bold text-brand-600">
                  Dashboard
                </span>
              </div>
              <div className="flex w-full items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-50">
                <FeatherClock className="text-body font-body text-neutral-400" />
                <span className="text-body font-body text-neutral-600">
                  Archived
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 px-6 py-6">
          <div className="flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-50">
            <FeatherSettings className="text-body font-body text-neutral-400" />
            <span className="text-body font-body text-neutral-600">
              Settings
            </span>
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-50">
            <FeatherSun className="text-body font-body text-neutral-600" />
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-50">
            <FeatherMoon className="text-body font-body text-neutral-600" />
          </div>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-y-auto">
        <div className="flex w-full items-center justify-between px-8 py-6">
          <span className="text-heading-1 font-heading-1 text-neutral-900">
            Dashboard
          </span>
          <Button
            className="hover:bg-brand-300 hover:shadow-[inset_0_0_24px_rgba(88,51,255,0.4)]"
            variant="neutral-secondary"
            icon={<FeatherPlus />}
            iconRight={null}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            New Monitor
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8">
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-200 bg-[#ffffffff] cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-neutral-900">
                AI Industry News
              </span>
              <Badge variant="success" icon={null} iconRight={null}>
                Active
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-neutral-500">
                Latest developments in artificial intelligence
              </span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-neutral-300" />
                <FeatherTwitter className="text-body font-body text-neutral-300" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-400">
                Updated 2 hours ago
              </span>
              <span className="text-caption-bold font-caption-bold text-brand-600">
                12 alerts
              </span>
            </div>
          </div>
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-200 bg-[#ffffffff] cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-neutral-900">
                Competitor Tracking
              </span>
              <Badge variant="success" icon={null} iconRight={null}>
                Active
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-neutral-500">
                OpenAI, Google DeepMind, Anthropic news
              </span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-neutral-300" />
                <FeatherGithub className="text-body font-body text-neutral-300" />
                <FeatherTwitter className="text-body font-body text-neutral-300" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-400">
                Updated 5 mins ago
              </span>
              <span className="text-caption-bold font-caption-bold text-brand-600">
                47 alerts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveDashboardLightCorrectSidebar;
