"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/51ef4e586a6b/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.LineChart>,
  LineChartRootProps
>(function LineChartRoot(
  { className, ...otherProps }: LineChartRootProps,
  ref
) {
  return (
    <SubframeCore.LineChart
      className={SubframeUtils.twClassNames("h-80 w-full", className)}
      ref={ref}
      colors={[
        "#ac99ff",
        "#e5e5e5",
        "#5833ff",
        "#dddbff",
        "#2f00ff",
        "#d5ccff",
      ]}
      {...otherProps}
    />
  );
});

export const LineChart = LineChartRoot;
