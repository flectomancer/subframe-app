"use client";

import React from "react";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherMenu } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherRss } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherSun } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";

function ActiveDashboardDarkMobile() {
  return (
    <div className="flex h-full w-full items-start bg-[#1a1a1aff]">
      <div className="flex w-64 flex-none flex-col items-start justify-between self-stretch border-r border-solid border-neutral-700 bg-[#1a1a1aff] shadow-[0px_-8px_20px_0px_#0000001a,0px_0px_16px_0px_#0000000d] backdrop-blur-2xl z-10 mobile:hidden">
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          <div className="flex w-full items-center gap-1">
            <img className="h-12 flex-none object-cover" src="https://res.cloudinary.com/subframe/image/upload/v1738102619/uploads/3210/jj0xqh1xyj7apfm5lssg.png" />
            <FeatherChevronRight className="font-['Afacad_Flux'] text-[40px] font-[400] leading-[48px] text-[#5833ffff]" />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-caption-bold text-neutral-400">MENU</span>
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full items-center gap-3 rounded-md bg-[#5833ffff] px-3 py-2 shadow-[0px_0px_20px_0px_#5833ff40] cursor-pointer">
                <FeatherHome className="text-body font-body text-[#e6e6e6ff]" />
                <span className="text-body-bold font-body-bold text-[#e6e6e6ff]">Dashboard</span>
              </div>
              <div className="flex w-full items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-800">
                <FeatherClock className="text-body font-body text-[#e6e6e6ff]" />
                <span className="text-body font-body text-[#e6e6e6ff]">Archived</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 px-6 py-6">
          <div className="flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer hover:bg-neutral-800">
            <FeatherSettings className="text-body font-body text-[#e6e6e6ff]" />
            <span className="text-body font-body text-[#e6e6e6ff]">Settings</span>
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800">
            <FeatherSun className="text-body font-body text-[#e6e6e6ff]" />
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800">
            <FeatherMoon className="text-body font-body text-[#e6e6e6ff]" />
          </div>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-y-auto">
        <div className="flex w-full items-center justify-between px-8 py-6 mobile:bg-[#1a1a1aff] mobile:px-4 mobile:py-4 mobile:sticky mobile:top-0 mobile:z-20">
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 flex-none items-center justify-center rounded-md cursor-pointer hover:bg-neutral-800 mobile:flex">
              <FeatherMenu className="text-body font-body text-[#e6e6e6ff]" />
            </div>
            <span className="text-heading-1 font-heading-1 text-[#e6e6e6ff] mobile:text-heading-2 mobile:font-heading-2">Dashboard</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-solid border-[#e6e6e6ff] px-4 py-2 cursor-pointer hover:bg-neutral-800 hover:shadow-[0px_0px_24px_4px_rgba(230,230,230,0.4)] hover:border-white transition-all duration-200 mobile:px-3 mobile:py-2">
            <FeatherPlus className="text-body font-body text-[#e6e6e6ff]" />
            <span className="text-body-bold font-body-bold text-[#e6e6e6ff] mobile:hidden">New Monitor</span>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start gap-6 px-8 py-8 mobile:px-4 mobile:py-4">
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-700 bg-neutral-800/30 cursor-pointer transition-all duration-200 hover:border-[#5833FF]/50 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-[#e6e6e6ff]">AI Industry News</span>
              <div className="flex items-center gap-2 rounded-full bg-[#35903bff] px-3 py-1">
                <span className="text-caption-bold font-caption-bold text-[#e6e6e6ff]">Active</span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-[#e6e6e6ff]">Latest developments in artificial intelligence</span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-[#e6e6e6ff]" />
                <FeatherTwitter className="text-body font-body text-[#e6e6e6ff]" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-200">Updated 2 hours ago</span>
              <div className="flex items-center gap-2 rounded-full bg-[#5833ffff] px-3 py-1 shadow-[0px_0px_20px_0px_#5833ff40] cursor-pointer">
                <span className="text-caption-bold font-caption-bold text-[#e6e6e6ff]">12 alerts</span>
              </div>
            </div>
          </div>
          <div className="flex min-w-[320px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-700 bg-neutral-800/30 cursor-pointer transition-all duration-200 hover:border-[#5833FF]/50 hover:shadow-md hover:-translate-y-0.5">
            <div className="flex w-full items-start justify-between px-6 pt-6">
              <span className="text-heading-3 font-heading-3 text-[#e6e6e6ff]">Competitor Tracking</span>
              <div className="flex items-center gap-2 rounded-full bg-[#35903bff] px-3 py-1">
                <span className="text-caption-bold font-caption-bold text-[#e6e6e6ff]">Active</span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-6 pb-6">
              <span className="text-body font-body text-[#e6e6e6ff]">OpenAI, Google DeepMind, Anthropic news</span>
              <div className="flex items-center gap-3">
                <FeatherRss className="text-body font-body text-[#e6e6e6ff]" />
                <FeatherGithub className="text-body font-body text-[#e6e6e6ff]" />
                <FeatherTwitter className="text-body font-body text-[#e6e6e6ff]" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-6 pb-6">
              <span className="text-caption font-caption text-neutral-200">Updated 5 mins ago</span>
              <div className="flex items-center gap-2 rounded-full bg-[#5833ffff] px-3 py-1 shadow-[0px_0px_20px_0px_#5833ff40] cursor-pointer">
                <span className="text-caption-bold font-caption-bold text-[#e6e6e6ff]">47 alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveDashboardDarkMobile;
