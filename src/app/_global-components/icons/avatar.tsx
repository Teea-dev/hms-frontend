import * as React from "react";
import { IconTypes } from "./types";
function AvatarIcon({
  width = 77,
  height = 77,
  inheritColor = false,
  color,
}: IconTypes) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="77" height="77" rx="38.5" fill="#EBF0FB" />
        <path
          d="M38.5 38.0661C36.2598 38.0661 34.3521 37.2785 32.7769 35.7033C31.2018 34.1281 30.4142 32.2204 30.4142 29.9802C30.4142 27.7401 31.2018 25.8367 32.7769 24.27C34.3521 22.7033 36.2598 21.9199 38.5 21.9199C40.7402 21.9199 42.6479 22.7033 44.2231 24.27C45.7982 25.8367 46.5858 27.7401 46.5858 29.9802C46.5858 32.2204 45.7982 34.1281 44.2231 35.7033C42.6479 37.2785 40.7402 38.0661 38.5 38.0661ZM27.9779 54.2378C26.6453 54.2378 25.5151 53.7738 24.5872 52.846C23.6594 51.9181 23.1954 50.7879 23.1954 49.4553V48.2666C23.1954 47.0909 23.5011 46.0064 24.1125 45.0132C24.7239 44.02 25.5422 43.2638 26.5674 42.7446C28.4833 41.7951 30.4377 41.0788 32.4307 40.5956C34.4237 40.1124 36.4468 39.8708 38.5 39.8708C40.5871 39.8708 42.6272 40.1081 44.6202 40.5828C46.6132 41.0576 48.5507 41.7696 50.4325 42.719C51.4578 43.2382 52.2761 43.9902 52.8875 44.9749C53.4989 45.9597 53.8046 47.0569 53.8046 48.2666V49.4553C53.8046 50.7879 53.3406 51.9181 52.4128 52.846C51.4849 53.7738 50.3547 54.2378 49.0221 54.2378H27.9779Z"
          fill="#053970"
        />
      </svg>
    </>
  );
}

export default AvatarIcon;