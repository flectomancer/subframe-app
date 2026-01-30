"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { TextFieldUnstyled } from "@/ui/components/TextFieldUnstyled";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherEye } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { FeatherNewspaper } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherRss } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherSun } from "@subframe/core";
import { FeatherTrendingUp } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import { FeatherZap } from "@subframe/core";

function NewMonitorProgressDarkMobile() {
  return (
    <div className="flex h-full w-full items-start bg-neutral-950">
      <div className="flex w-64 flex-none flex-col items-start justify-between self-stretch bg-neutral-900 shadow-[0px_-8px_20px_0px_#0000001a,0px_0px_16px_0px_#0000000d] backdrop-blur-2xl z-10">
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          <div className="flex w-full items-center gap-1">
            <img
              className="h-12 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png"
            />
            <FeatherChevronRight className="font-['Afacad_Flux'] text-[40px] font-[400] leading-[48px] text-brand-500" />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-caption-bold text-neutral-400">
              MENU
            </span>
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full items-center gap-3 rounded-md bg-neutral-800 px-3 py-2 shadow-[0px_0px_20px_0px_#5833ff26] cursor-pointer">
                <FeatherHome className="text-body font-body text-brand-500" />
                <span className="text-body-bold font-body-bold text-neutral-0">
                  Dashboard
                </span>
              </div>
              <div className="flex w-full items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-800">
                <FeatherClock className="text-body font-body text-neutral-400" />
                <span className="text-body font-body text-neutral-200">
                  Archived
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 px-6 py-6">
          <div className="flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-800">
            <FeatherSettings className="text-body font-body text-neutral-400" />
            <span className="text-body font-body text-neutral-200">
              Settings
            </span>
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800">
            <FeatherSun className="text-body font-body text-neutral-200" />
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800">
            <FeatherMoon className="text-body font-body text-neutral-200" />
          </div>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-y-auto">
        <div className="flex w-full items-center justify-between px-8 py-6">
          <span className="text-heading-1 font-heading-1 text-neutral-0">
            Dashboard
          </span>
          <Button
            className="hover:bg-brand-700"
            variant="brand-primary"
            icon={<FeatherPlus />}
            iconRight={null}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            New Monitor
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8">
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-800 bg-neutral-900 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-neutral-0">
                AI Industry News
              </span>
              <Badge variant="success" icon={null} iconRight={null}>
                Active
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-neutral-300">
                Latest developments in artificial intelligence
              </span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-neutral-500" />
                <FeatherTwitter className="text-body font-body text-neutral-500" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-400">
                Updated 2 hours ago
              </span>
              <span className="text-caption-bold font-caption-bold text-brand-500">
                12 alerts
              </span>
            </div>
          </div>
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-800 bg-neutral-900 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-neutral-0">
                Competitor Tracking
              </span>
              <Badge variant="success" icon={null} iconRight={null}>
                Active
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-neutral-300">
                OpenAI, Google DeepMind, Anthropic news
              </span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-neutral-500" />
                <FeatherGithub className="text-body font-body text-neutral-500" />
                <FeatherTwitter className="text-body font-body text-neutral-500" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-400">
                Updated 5 mins ago
              </span>
              <span className="text-caption-bold font-caption-bold text-brand-500">
                47 alerts
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center absolute inset-0 bg-neutral-950/80 backdrop-blur-sm z-50">
        <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-hidden bg-neutral-950">
          <div className="flex w-full items-center justify-between px-4 py-4">
            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800 transition-colors border-transparent">
              <FeatherX className="text-body font-body text-neutral-200" />
            </div>
            <span className="text-body-bold font-body-bold text-neutral-0">
              New Monitor
            </span>
            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-neutral-800 bg-neutral-900 cursor-pointer hover:bg-neutral-800">
              <FeatherEye className="text-body font-body text-neutral-200" />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2 px-4 pb-4">
            <div className="flex w-full items-center gap-3">
              <div className="flex h-1 grow shrink-0 basis-0 flex-col items-start rounded-full bg-neutral-800">
                <div className="flex h-1 flex-none flex-col items-start rounded-full bg-success-600 w-2/5" />
              </div>
              <span className="text-caption font-caption text-neutral-0">
                40% complete
              </span>
            </div>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4 overflow-y-auto">
            <div className="flex w-full items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-start" />
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 px-4 py-3">
                <span className="text-body font-body text-neutral-100">
                  Hi! I&#39;m here to help you set up a new monitor. What would
                  you like to keep track of?
                </span>
              </div>
            </div>
            <div className="flex w-full items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-start" />
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-lg bg-brand-600 px-4 py-3">
                <span className="text-body font-body text-neutral-0">
                  Monitor the current Nvidia stocks price
                </span>
              </div>
            </div>
            <div className="flex w-full items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-600">
                <FeatherZap className="text-body font-body text-[#ffffffff]" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 px-4 py-3">
                <span className="text-body font-body text-neutral-100">
                  Great! Select all the sources you&#39;d like to monitor
                </span>
              </div>
            </div>
            <div className="flex w-full items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-start" />
              <div className="flex grow shrink-0 basis-0 items-center gap-3">
                <div className="flex grow shrink-0 basis-0 flex-col items-center gap-2 rounded-lg border border-solid border-neutral-800 bg-neutral-900 px-6 py-4 cursor-pointer hover:border-brand-600 hover:bg-neutral-800">
                  <FeatherTrendingUp className="text-heading-2 font-heading-2 text-brand-500" />
                  <span className="text-body-bold font-body-bold text-neutral-0">
                    NASDAQ
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-center gap-2 rounded-lg border border-solid border-neutral-800 bg-neutral-900 px-6 py-4 cursor-pointer hover:border-brand-600 hover:bg-neutral-800">
                  <FeatherNewspaper className="text-heading-2 font-heading-2 text-brand-500" />
                  <span className="text-body-bold font-body-bold text-neutral-0">
                    News
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start px-4 py-4">
            <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-800 bg-neutral-900 px-3 py-2">
              <TextFieldUnstyled className="h-auto grow shrink-0 basis-0">
                <TextFieldUnstyled.Input
                  placeholder="Describe what you want to monitor..."
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextFieldUnstyled>
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-brand-600 cursor-pointer hover:bg-brand-700">
                <FeatherSend className="text-body font-body text-[#ffffffff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMonitorProgressDarkMobile;
